// nuvejo.de — Worker entry point.
//
// wrangler.jsonc scopes run_worker_first to "/api/*" only, so this file only
// ever sees requests for that path — every other request (every page, every
// asset) is still served directly from the asset store exactly as it was
// before this script existed. Nothing here can change that behavior.
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact" && request.method === "POST") {
      return handleContact(request, env);
    }

    // Anything else that somehow reaches this file (e.g. GET /api/contact,
    // or a future /api/* route we haven't written yet) falls back to the
    // asset store rather than a blank 500.
    return env.ASSETS.fetch(request);
  },
};

// Ported from nuvejo-au's functions/api/contact.js (Pages Function,
// onRequestPost) to this Worker's fetch handler — same Brevo relay, same
// field contract, same response shape, so main.js's fetch() call needs no
// special-casing between the two sites.
async function handleContact(request, env) {
  try {
    const data = await request.json();

    const { name, email, message, business, interest } = data;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // JSON.stringify()/fetch() already round-trip ü/ä/ö correctly — verified
    // separately, byte for byte (JSON is UTF-8 by spec, and a string fetch()
    // body is always UTF-8-encoded on the wire regardless of headers). The
    // actual corruption source was that htmlContent below was a bare HTML
    // fragment with no charset declared anywhere in it. Brevo has to compose
    // that fragment into a real MIME email, and without an explicit <meta
    // charset>, its rendering can fall back to the wrong default — a known
    // gotcha with Brevo specifically. Wrapping it as a full document with
    // <meta charset="utf-8"> is the actual fix; the header below is a belt-
    // and-suspenders addition (RFC 8259 already mandates UTF-8 for
    // application/json, so this shouldn't be load-bearing, but it costs
    // nothing and rules the transport layer out explicitly).
    const htmlContent = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body>
  <p><strong>Name:</strong> ${name}</p>
  ${business ? `<p><strong>Unternehmen:</strong> ${business}</p>` : ""}
  <p><strong>E-Mail:</strong> ${email}</p>
  ${interest ? `<p><strong>Interesse:</strong> ${interest}</p>` : ""}
  <p><strong>Nachricht:</strong><br>${message}</p>
</body>
</html>`;

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "api-key": env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        // Using the Gmail address as sender for now — it's the one already
        // verified in Brevo. Swap this for a nuvejo.de address once one is
        // verified there too (Senders, Domains & Dedicated IPs -> Senders).
        sender: { name: "Nuvejo Kontaktformular", email: "ma.andriani92@gmail.com" },
        to: [{ email: "ma.andriani92@gmail.com", name: "Marco" }],
        replyTo: { email: email, name: name },
        subject: `Neue Anfrage von ${name}`,
        htmlContent: htmlContent,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      return new Response(JSON.stringify({ error: "Send failed", details: errText }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Server error", details: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
