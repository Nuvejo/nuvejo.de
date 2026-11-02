# Port nuvejo.com.au → nuvejo.de (2026-10-30)

Branch: `port-au-2026-10-30` · Quelle (nur gelesen): `nuvejo-au`, `main` @ `9b6098f`
Letzter Abgleich der .de: Commit `242b0c2` (9.10.) entspricht AU `ba50433`. Portiert wurde der AU-Diff `ba50433..9b6098f`.
Anrede auf der .de: **du** (beibehalten; ein „beraten Sie mich gern“ im Kontaktformular auf „berate mich gern“ korrigiert).

## Ergebnis in einem Satz

Alles Übertragbare ist portiert und lokal geprüft. **Kein Produktiv-Deploy**, weil die 12-Monats-Ratenzahlung EUR-Preise braucht, die die .de nicht hat (TODO, siehe unten).

## Portiert

| Bereich | Änderung auf .de | Quelle (AU) |
|---|---|---|
| Alle Seiten | Google Fonts nicht-blockierend (preload + noscript) | 37ce766 |
| Alle Seiten | Logo als WebP (`assets/img/nuvejo-mark.webp`, aus AU kopiert); PNG bleibt für JSON-LD | 37ce766 |
| Alle Seiten | Logo-Link `aria-label` enthält den sichtbaren Text („nuvejo Design.Growth.Trust. - Startseite“, WCAG 2.5.3) | 37ce766 |
| Alle Seiten | Footer-Überschriften `aria-level="3"` (Überschriften-Hierarchie) | 37ce766 |
| Alle Seiten | Menü-Drawer als Inline-Script direkt nach dem Header (deutsche Labels, Breakpoint 1100 px); Drawer-Code aus `main.js` entfernt | 93cfc77 |
| CSS | Kontrast `--paper-3` 0.46 → 0.56; „Projekt starten“-Button lesbar; Burger über dem Drawer; kein Blur im Drawer/Header auf Mobil (Drawer schrumpfte beim Scrollen); `nav-locked` mit `overflow: clip` | 37ce766, 0b40365, 93cfc77 |
| CSS | Vergleichstabelle auf Mobil ausgeblendet (`.cmp-only`), neue Klassen `.tier__plan`, `.fnotes`, `.star--alt`, `.reach__v a` | 0e7ccb1, 6b42d24 |
| Titel/Meta | Muster „Seite \| Webdesign \| Nuvejo“, Start: „Nuvejo \| Individuelles Webdesign für Betriebe, die auffallen“ (og:title der Unterseiten mit) | c64a1b5 |
| Start | Hero-Eyebrow und Stapel-Labels an das Logo angeglichen: Gestaltung · Wachstum · Vertrauen (deutsch, wie der Footer-Claim der .de) | 097fe08, 6603bdb |
| Start | JSON-LD: Plan heißt „Website-Partnerschaft Basis“ | 46e26fc |
| Preise | Plan „Website-Partnerschaft“ → „Website-Partnerschaft Basis“ (AU: Essential), Wachstum bleibt | 46e26fc |
| Preise | „Am häufigsten gewählt“ → „Empfohlen“ (keine unbelegte Behauptung) | 6b42d24 |
| Preise | Korrekturrunden je Paket: Starter 2, Business 3, Premium 5, mit Fußnote † (weitere Runden nach Aufwand) | 85089a8 |
| Preise | Business: bis zu fünf (statt sechs) Unterseiten, Social-Media-Links, Search-Console-Zeile ausformuliert | 46e26fc, 9e47e0e |
| Preise | Premium: News/Blog „ich veröffentliche deine Beiträge für dich“ | 46e26fc |
| Preise | Vergleichstabelle neu (16 Zeilen, wie AU, mit .de-Umfang) + Karten-Ansicht | 6b32e81, 1dce8b9 |
| Preise | Basis: „Jede Version wird gespeichert …“ statt „tägliche Backups“, monatlicher Statusbericht, Fußnote ‡ (weitere Änderungen nach Aufwand) | 46e26fc |
| Preise | Wachstum: „und zitieren“ und „Pflege Google-Unternehmensprofil“ entfernt (nicht mehr Teil von Wachstum) | 46e26fc |
| Preise | Satz „Die meisten Unternehmen entscheiden sich …“ entfernt (unbelegt) | 46e26fc |
| Preise | Kündigung „jeweils zum Monatsende“, FAQ Bezahlung (Rest 14 Tage nach Schlussrechnung, live nach Zahlung), FAQ „nach dem Launch“ ohne Gratis-Änderungen, FAQ Aufwand mit Runden | 658b21f, 9b6098f |
| Preise | 12-Monats-Ratenzahlung: Struktur + Fußnote portiert, **Beträge als TODO** | 6b42d24 |
| Über mich | „Handynummer“/„unter derselben Nummer“ entfernt, 10 → 20 Minuten | 79c5c1a, 6b42d24 |
| Kontakt | Partnerschafts-Optionen im Formular (Website-Partnerschaft / Basis / Wachstum), Vorauswahl per `?paket=` jetzt auch für Wachstum (vorher ging nur Starter/Business/Premium) | 020cd9c, 79c5c1a |
| Kontakt | Schritt-Überschriften `aria-level="2"` | 37ce766 |
| Kontakt | Turnstile-Platzhalter (leerer Site-Key → lädt nichts), Honeypot wird mitgeschickt | 020cd9c |
| main.js | Formular-Fehler per `invalid`-Event sichtbar (vorher wurde bei leerem Formular nichts angezeigt, die Checkbox hatte keine Fehlermeldung). Auf AU schon vor dem letzten Abgleich vorhanden, auf .de fehlte es | AU-Stand |
| Worker `src/index.js` | Härtung wie AU: Größenlimit, JSON-Prüfung, Honeypot, Rate-Limit pro IP, optionales Turnstile (`TURNSTILE_SECRET`), Feldvalidierung, HTML-Escaping, keine Fehlerdetails an den Browser. **Absender und Empfänger unverändert** | 020cd9c |
| `_headers` | Sicherheits-Header 1:1 (HSTS, CSP, X-Frame-Options, …). CSP gegen alle .de-Seiten geprüft: keine Fehler | c64a1b5 |
| `404.html` | Deutsche 404-Seite (noindex) | c64a1b5 |
| `sitemap.xml` | lastmod 2026-10-30 für die 6 geänderten Inhaltsseiten | — |
| `.assetsignore` | Bestehende Datei um `report-*.md` ergänzt, damit dieser Report nicht öffentlich unter nuvejo.de abrufbar ist (getestet: 404). Hinweis: Im ersten Commit hatte ich die Datei versehentlich überschrieben, ohne sie vorher anzusehen; im Folge-Commit ist der Originalinhalt wiederhergestellt, nur die Report-Zeile kommt dazu | eigene Entscheidung |

## Korrigiert statt kopiert (falsche Aussagen)

- **Start, Schritt 05**: „Ich kümmere mich um … Änderungen“ suggerierte Änderungen in jeder Partnerschaft. Neu: Basis = Hosting, Updates, Sicherheit; Wachstum = zusätzlich SEO-Arbeit und kleine Inhaltsänderungen.
- **SEO & Betreuung**: „in der Betreuung schreibst du mir kurz … und es ist erledigt“ → kleine Inhaltsänderungen nur in Wachstum inklusive, in Basis nach Aufwand mit vorheriger Kostenansage.
- Beide Aussagen standen auch schon auf der .de, nicht nur auf AU.

## Bewusst NICHT portiert

| Was | Warum |
|---|---|
| Preise in AUD, GST-Hinweis, ABN, Sunshine Coast/Australien, en-AU-Schreibweise | Australien-spezifisch |
| Datenschutz/Privacy-Policy-Text, Impressum | Rechtstexte, Vorgabe. Auf Impressum/Datenschutz wurde **nur** die Seiten-Hülle angepasst (Logo-Datei, Fonts, Menü-Script, `aria-level` der Footer-Überschriften, Logo-`aria-label`); kein Satz Rechtstext geändert (per `git diff` geprüft) |
| Starter: Google Maps + Google Analytics statt OpenStreetMap | In DE braucht beides eine Einwilligung (DSGVO/TDDDG); die .de wirbt bewusst mit OSM und datensparsamer Statistik. Ohne Datenschutz-Anpassung wäre das nicht haltbar |
| Banner „Einführungspreise für die ersten fünf Projekte, zwei laufen“ | Geschäftsstand des AU-Markts; für die .de nicht belegt |
| Stundensatz $75 | Kein EUR-Stundensatz auf der .de → Formulierung „nach Aufwand, vorher abgesprochen“ (wie die .de es schon sagte), kein erfundener Preis |
| Alec-Wells-Karte auf Arbeiten (+ CSS-Umkehr odd/even) | Australischer Kunde, Freigabe gilt für nuvejo.com.au; Freigabe für die .de unklar. Die CSS-Umkehr gehört zu dieser Karte und würde sonst nur das .de-Layout verschieben |
| WebP für Rossack/Blush/Black-Market-Mockups | .de nutzt für Blush/Black Market/Nordlicht schon WebP; Rossack hat auf der .de eigene JPGs |
| Kontakt: E-Mail-Adresse sichtbar statt „E-Mail folgt“ | Du hast am 9.10. die Mail aus dem Footer der .de entfernen lassen; das wäre eine Umkehr deiner Entscheidung |
| Turnstile-Keys, Brevo-Key, Formular-Empfänger | Vorgabe; der .de-Worker sendet weiter an seine bisherige Adresse |
| Domain-Links auf .com.au | Vorgabe (die bestehenden Demo-Links zu blushwine/blackmarket.nuvejo.com.au auf „Arbeiten“ waren schon da und sind unverändert) |
| „Gratis erster Monat“ entfernen | Gab es auf der .de nicht; die „2 Wochen kostenlose Kleinigkeiten“ im FAQ wurden aber wie auf AU entfernt |
| 404 aktiv schalten | Zunächst nicht gemacht (Worker-Konfiguration). **Nachtrag 2026-11-03: auf deinen Wunsch umgesetzt**, siehe unten |

## TODO (blockiert den Produktiv-Deploy)

1. **12-Monats-Ratenzahlung (leistungen.html)**: Monatsrate und Gesamtbetrag je Paket (Starter 499 €, Business 999 €, Premium 1.499 €), jeweils mit Basis (99 €/Monat) und Wachstum (299 €/Monat), plus die Ersparnis gegenüber getrennter Zahlung. Im HTML mit `TODO-PORT` und sichtbar als `[TODO: …]` markiert (3 Karten + Fußnote `#raten-hinweis`). Nicht berechnet, weil Preise weder erfunden noch umgerechnet werden sollen.
   - Alternative: Wenn du die Ratenzahlung auf der .de gar nicht anbieten willst, sag Bescheid. Dann entferne ich die vier Stellen und der Rest kann live.

## Weitere offene Punkte (nicht blockierend)

- ~~Hosting-Standort-Aussage im Basis-Plan~~ → erledigt am 2026-11-03, siehe Nachtrag.
- ~~404-Seite aktivieren~~ → erledigt am 2026-11-03, siehe Nachtrag.
- Turnstile: Site-Key in `kontakt.html` (`data-sitekey`) + Secret `TURNSTILE_SECRET` am Worker, falls gewünscht. **Vorher Datenschutzerklärung ergänzen**, siehe Nachtrag, Punkt 3.
- Impressum/Datenschutz haben keinen Canonical (schon früher gemeldet, unverändert).

## Nachtrag 2026-11-03

Auf deine Anweisung, weiter auf dem Branch `port-au-2026-10-30`. Kein Merge, kein Produktiv-Deploy.

### 1. 404-Seite aktiv

- `wrangler.jsonc`: `not_found_handling` von `"none"` auf `"404-page"`, Kommentar angepasst. `html_handling` und `run_worker_first` unverändert.
- Lokal mit `wrangler dev` geprüft:
  - `/gibtsnicht`, `/angebote`, `/foo/bar/baz`, `/assets/img/fehlt.png` → Status **404** mit der deutschen 404-Seite. Auch bei verschachtelten Pfaden lädt sie mit Styles, Logo und Menü (absolute Pfade), ohne horizontales Scrollen bei 390 und 1280 px.
  - Alle 8 Seiten → 200. `/leistungen.html` → 307 auf `/leistungen` (Clean URLs unverändert).
  - `src/index.js`, `wrangler.jsonc` und der Report → weiter 404, nicht öffentlich.
  - `_headers` (CSP usw.) gilt auch für die 404-Antwort.
  - `/api/contact` antwortet weiter wie vorher (Validierung 400). Unbekannte `/api/*`-Pfade laufen über den Asset-Fallback und bekommen jetzt ebenfalls die 404-Seite mit Status 404.
  - `/404` selbst liefert die Seite mit Status 200. Das ist das normale Verhalten von Cloudflare; die Seite ist `noindex` und steht nicht in der Sitemap.
- Build: `wrangler versions upload --dry-run` läuft fehlerfrei. Die Cloudflare-Branch-Builds habe ich nicht erneut untersucht; der Push dieses Commits löst wieder einen Branch-Build aus.

### 2. Hosting-Aussage

- `leistungen.html`, Basis-Plan: „Hosting auf Servern in Deutschland bzw. der EU“ → „Schnelles, sicheres Hosting“. Keine Aussage mehr zum Serverstandort.
- Per `grep` über alle `.html`, `.xml`, `.js`, `.json(c)` geprüft (Suchbegriffe u. a. „Deutschland bzw“, „der EU“, „Server(n) in“, „Serverstandort“, „Rechenzentr“). Das war die einzige Stelle; Meta-Tags, JSON-LD und Sitemap enthalten keine Standortangabe. Im Report stand die alte Formulierung nur als Zitat unter „offene Punkte“, dort jetzt als erledigt markiert.

### 3. Muss Turnstile in Impressum/Datenschutz erwähnt werden?

Kurzantwort:
- **Impressum: nein.** Das Impressum nach § 5 DDG dient der Anbieterkennzeichnung (wer betreibt die Seite), nicht der Aufzählung eingesetzter Dienste.
- **Datenschutzerklärung: aktuell nein, sobald Turnstile aktiviert wird: ja.**

Begründung:
- **Ist-Zustand:** In `kontakt.html` ist `data-sitekey=""` leer. Dann lädt `main.js` kein Turnstile-Script und es geht keine Anfrage an Cloudflare Challenges (im Playwright-Test geprüft: „turnstile loaded = false“). Es werden keine Daten über Turnstile verarbeitet, also gibt es auch nichts zu informieren.
- **Nach Aktivierung:** Turnstile verarbeitet laut Cloudflare „Signals“ wie Client-IP-Adresse, TLS-Fingerprint, User-Agent und Sitekey/Origin ([Turnstile Privacy Addendum](https://www.cloudflare.com/turnstile-privacy-policy/), Stand 18.06.2025).
  - Die IP-Adresse ist ein personenbezogenes Datum, die Informationspflicht nach Art. 13 DSGVO greift also.
  - Cloudflare ist dabei für die Bot-Erkennung Auftragsverarbeiter (der Website-Betreiber ist Verantwortlicher). Für die Verbesserung der Bot-Erkennung ist Cloudflare selbst Verantwortlicher ([Turnstile Privacy Addendum](https://www.cloudflare.com/turnstile-privacy-policy/)).
  - Cloudflare ist ein US-Anbieter. Laut Cloudflare stützt sich der Transfer auf die Zertifizierung nach dem EU-US Data Privacy Framework ([Cloudflare GDPR](https://www.cloudflare.com/de-de/gdpr/introduction/)). Den Eintrag in der offiziellen DPF-Liste konnte ich technisch nicht abrufen, bitte dort selbst prüfen: [dataprivacyframework.gov/list](https://www.dataprivacyframework.gov/list).
- **Was die Datenschutzerklärung dann nennen sollte** (so auch der Generator-Baustein von [eRecht24 zu Cloudflare Turnstile](https://www.e-recht24.de/dsg/13110-cloudflare-turnstile.html), Stand 10.02.2023, der dort Art. 6 Abs. 1 lit. f DSGVO verwendet):
  - Anbieter, Zweck (Spam-/Bot-Schutz des Kontaktformulars) und verarbeitete Daten
  - Rechtsgrundlage, Drittlandtransfer und Widerspruchsrecht
- **Cookies / § 25 TDDDG (nicht abschließend klärbar):**
  - Standardmäßig gibt Turnstile laut Cloudflare nur ein einmaliges Token aus. Das Cookie `cf_clearance` kommt nur bei aktivierter „Pre-Clearance“ dazu, und die ist standardmäßig aus ([Cloudflare Docs: Clearance](https://developers.cloudflare.com/cloudflare-challenges/concepts/clearance/)).
  - Turnstile liest aber per JavaScript Browser- und Geräteeigenschaften aus. Das kann ein „Zugriff auf Informationen in der Endeinrichtung“ nach [§ 25 Abs. 1 TDDDG](https://www.gesetze-im-internet.de/ttdsg/__25.html) sein (grundsätzlich einwilligungspflichtig), außer es ist nach Abs. 2 Nr. 2 „unbedingt erforderlich“.
  - Die Datenschutzkonferenz rechnet „Systeme zur nutzerorientierten Betrugsprävention und IT-Sicherheit“ grundsätzlich dem Basisdienst zu ([DSK, OH Digitale Dienste v1.2, Nov. 2024](https://datenschutzkonferenz-online.de/media/oh/OH_Digitale_Dienste.pdf), Rn. 74). Sie warnt aber, dass eine pauschale Einordnung als Sicherheitsmaßnahme nicht reicht und die Voraussetzungen im Einzelfall vorliegen müssen (Rn. 83).
  - Eine ausdrückliche Aussage der Aufsichtsbehörden zu CAPTCHA/Turnstile habe ich nicht gefunden. Ob Turnstile ohne Einwilligung eingesetzt werden darf, ist damit **nicht sicher geklärt**. Vor der Aktivierung von einem Anwalt oder einem gepflegten Datenschutz-Generator bestätigen lassen.

### 4. Beim Prüfen gefunden: Die Datenschutzerklärung stimmt schon heute nicht mit der Website überein

Ich habe nichts daran geändert (Vorgabe). Das ist aber dringender als Turnstile:

- **Abschnitt 6, Kontaktformular:** Dort steht, das Formular sei „derzeit nicht an einen Versanddienst angebunden“ und die Eingaben würden nur lokal zu einer E-Mail zusammengestellt. Tatsächlich sendet das Formular (auch jetzt live auf nuvejo.de) per `POST /api/contact` an den Cloudflare Worker, der die Anfrage über **Brevo** per E-Mail weiterleitet. Brevo und der Worker werden nicht genannt.
- **Abschnitt 4, Hosting:** Der Hosting-Anbieter ist ein `[PLATZHALTER]`. Tatsächlich läuft die Seite auf **Cloudflare** (Workers).
- Weitere Platzhalter (Verantwortlicher, Anschrift, Telefon, Stand) gibt es in Datenschutz und Impressum. Das ist schon bekannt.
- Empfehlung: Vor dem nächsten Produktiv-Deploy (oder sofort, weil es den Live-Stand betrifft) die Abschnitte 4 und 6 von dir bzw. anwaltlich anpassen lassen.

## Prüfungen

Lokal mit `wrangler dev` (echter Worker inkl. `_headers`), Playwright mit lokalem Chrome, 390×844 und 1280×800, alle 8 Seiten + 404:

- Horizontales Scrollen: 0 px auf allen Seiten/Größen
- Kaputte Bilder: 0; kaputte interne Links/Ressourcen: 0
- Konsolenfehler/CSP-Verstöße: 0
- Menü auf 390 px: öffnet, liegt im Viewport, Label „Menü schließen“
- Englische Reste: nur der Logo-Claim „Design.Growth.Trust.“ (gewollt, war schon so)
- Formular: Vorauswahl `?paket=Website-Partnerschaft Wachstum` ✓; leeres Absenden zeigt 4 markierte Felder + Hinweis ✓; Payload enthält Honeypot ✓; Turnstile lädt nicht (kein Key) ✓
- Worker-API: Honeypot 200 ohne Versand, fehlende Felder/ungültige Mail/kein JSON/zu lang/falscher Typ → 400. Gültige Anfrage lokal ohne Brevo-Key → Brevo 401 → 502 an den Browser, Details nur im Log. **Es wurde keine Mail verschickt.**
- Rechtsseiten: `git diff` zeigt nur Hüllen-Zeilen.

## Preview & Live

- Branch `port-au-2026-10-30` gepusht (Commits `11ff9af`, `060b989`).
- **Cloudflare Workers Builds für den Branch sind fehlgeschlagen** (Build-IDs `04ea1078-3689-4b5e-a88a-8119c3d843af` und `0ac47409-c12c-4f02-94cb-e38ed18dac6f`, der zweite nach 0 s). Die Logs konnte ich nicht lesen: Der Cloudflare-Connector ist hier nicht autorisiert, und das wrangler-Token hat keinen Zugriff auf die Builds-API. Derselbe Befehl lokal (`wrangler versions upload --dry-run`) läuft fehlerfrei, und `main`-Builds liefen am 9.10. erfolgreich. Vermutung, ungeprüft: Builds für Nicht-Produktiv-Branches sind im Dashboard nicht passend eingerichtet. Bitte im Dashboard unter den Build-IDs nachsehen; ich habe dort nichts geändert.
- Ersatzweise habe ich die Preview direkt hochgeladen: `wrangler versions upload --preview-alias port-au-2026-10-30` → Version `66fa55e2-aa96-4b28-aa61-338a718c727e`. Das ist eine **Nicht-Produktiv-Version**, der Produktions-Traffic ist unverändert (geprüft: nuvejo.de zeigt weiter „Am häufigsten gewählt“).
  - Preview: https://port-au-2026-10-30-nuvejodeu.ma-andriani92.workers.dev
- Prüfungen auf der Preview: dieselben wie lokal, alle bestanden (0 px horizontales Scrollen, 0 kaputte Bilder/Links, 0 Konsolen-/CSP-Fehler, Menü ok, `_headers` aktiv, Repo-Dateien und Report liefern 404). Formular: Vorauswahl, Fehleranzeige und API-Validierung (Honeypot 200 ohne Versand, fehlende Felder/ungültige Mail 400). Eine gültige Anfrage habe ich auf der Preview **nicht** abgeschickt, weil dort der echte Brevo-Key aktiv ist und dabei eine Mail rausginge.
- **Nicht nach `main` gemergt, kein Produktiv-Deploy**, wegen des offenen TODOs (12-Monats-Raten).

## Nächster Schritt für dich

1. Monatsraten für die .de festlegen oder sagen, dass die Ratenzahlung auf der .de entfällt.
2. Danach: TODO-Stellen füllen bzw. entfernen, Branch nach `main` mergen, pushen. Die Git-Integration deployt `main` wie bisher.

## Nachtrag 2026-11-03 (2): Demo-Hinweis (Formular bleibt aktiv)

nuvejo.de ist Demo/Vorbereitung, das Unternehmen ist in Deutschland noch nicht live. Gewollt war **nur der sichtbare Demo-Hinweis**. Ein erster Schritt (Commit `f8483d2`) ging weiter: Formular deaktiviert und Worker per `DEMO_MODE` auf 410 gestellt. **Das ist vollständig rückgängig gemacht.** Branch `port-au-2026-10-30`, nur Preview, kein Merge, kein Produktiv-Deploy.

### Aktueller Stand

| Bereich | Stand |
|---|---|
| Banner | Schmaler Streifen ganz oben auf allen 9 Seiten (8 + 404): „Demo-Version, noch nicht live.“ (`.demo-bar`). Bleibt |
| Hero (Startseite) | Hinweis-Box zwischen Eyebrow und Hauptüberschrift: „Hinweis: Dies ist eine Demo-Version. Das Unternehmen ist in Deutschland noch nicht live.“ (`.demo-note`). Der Halbsatz „es werden keine Anfragen bearbeitet“ ist entfernt, weil das Formular wieder geht |
| Kontaktformular | Wieder das Original (Partnerschaft-Auswahl, Honeypot, Turnstile-Platzhalter ohne Key, sichtbare Fehlermeldungen). Demo-Block und `<template>`-Wrapper sind entfernt. Gegen den Stand vor dem Demo-Modus (`4691734`) geprüft: `kontakt.html` ist bis auf Banner und robots-Meta identisch |
| Worker `src/index.js` | `DEMO_MODE` und die 410-Logik sind **komplett entfernt**. Die Datei ist identisch mit dem Stand vor dem Demo-Modus (`4691734`): Spam-Schutz, Honeypot, Rate-Limit, optionales Turnstile, Brevo-Versand unverändert |
| noindex / robots.txt | **Unverändert aktiv**: `noindex, nofollow` auf allen 9 Seiten, `robots.txt` mit `Disallow: /`. **Wartet auf Marcos Entscheidung**, ob die Seite für Suchmaschinen gesperrt bleiben soll |
| Sitemap | Nicht angefasst; vor dem echten Start prüfen |

Hinweis zu den Suchmaschinen: `Disallow: /` verhindert das Crawlen, dann kann Google das `noindex` auf den Seiten nicht lesen. Für eine neue Seite ist das unkritisch. Steht die .de schon im Index, kann der Eintrag als reine URL noch eine Weile sichtbar bleiben (dann Entfernungsantrag in der Search Console). Die `robots.txt` auf nuvejo.de enthält zusätzlich Zeilen, die nicht aus dem Repo stammen (vermutlich eine Cloudflare-Einstellung, nicht geprüft); nach einem echten Deploy die Datei ansehen.

### Start-Checkliste (was für den echten Start zurückzudrehen ist)

Die `DEMO_MODE`-Schritte entfallen, es gibt keinen Worker-Schalter mehr.

1. **Banner und Hero-Hinweis entfernen:** `<div class="demo-bar" …>` (direkt nach `<body>`) auf allen 9 Seiten und `<p class="demo-note …>` in `index.html`. Danach die CSS-Regeln `.demo-bar` / `.demo-note` am Ende von `assets/css/styles.css` löschen.
2. **noindex** (nach Marcos Entscheidung): in allen 9 Seiten `noindex, nofollow` zurück auf den Stand davor: `index, follow` für die 6 Inhaltsseiten, `noindex, follow` für Impressum und Datenschutz, `noindex` für die 404.
3. **robots.txt:** `Disallow: /` → `Allow: /` (Sitemap-Zeile bleibt).
4. **Sitemap:** `sitemap.xml` prüfen (URLs, `lastmod`) und bei der Search Console einreichen.
5. **Datenschutz/Impressum:** Platzhalter füllen, Abschnitte 4 (Hosting) und 6 (Kontaktformular/Brevo) korrigieren. Das Formular ist aktiv und sendet Daten über Brevo, die Erklärung beschreibt das bisher falsch.
6. Test-Anfrage senden und prüfen, dass die Mail ankommt.

### Prüfungen (nach dem Rückbau)

- Lokal (`wrangler dev`): Formular wird angezeigt; Vorauswahl `?paket=Website-Partnerschaft Wachstum` ✓; leeres Absenden zeigt 4 markierte Felder + Hinweis ✓; Turnstile lädt nicht (kein Key) ✓. API: Honeypot 200 ohne Versand, fehlende Felder 400, ungültige Mail 400, kein JSON 400. Es wurden nur Pfade getestet, die keine Mail auslösen.
- 390×844 und 1280×800, alle 9 Seiten: kein horizontales Scrollen, keine kaputten Bilder/Links, keine Konsolenfehler, Menü auf 390 px vollständig bedienbar.
- Preview-Ergebnisse: siehe Abschnitt „Preview“ unten.

### Mergebereit?

**Nein.** Offen sind (1) die EUR-Monatsraten der 12-Monats-Ratenzahlung (TODO in `leistungen.html`), (2) Marcos Entscheidung zu noindex/robots, (3) die Datenschutzerklärung, die zum aktiven Formular nicht passt, und (4) die fehlschlagenden Cloudflare-Branch-Builds (Logs nicht lesbar). Ein Merge nach `main` würde den Banner und die Sperre für Suchmaschinen live schalten und die TODO-Platzhalter sichtbar machen.
