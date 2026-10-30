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
| 404 aktiv schalten | `wrangler.jsonc` hat `not_found_handling: "none"`. Damit `/404.html` bei unbekannten URLs ausgeliefert wird, müsste das auf `"404-page"` – das ist eine Änderung der Worker-Konfiguration (Cloudflare-Einstellung), daher nicht gemacht. Die Datei liegt bereit; eine Zeile in `wrangler.jsonc` aktiviert sie |

## TODO (blockiert den Produktiv-Deploy)

1. **12-Monats-Ratenzahlung (leistungen.html)**: Monatsrate und Gesamtbetrag je Paket (Starter 499 €, Business 999 €, Premium 1.499 €), jeweils mit Basis (99 €/Monat) und Wachstum (299 €/Monat), plus die Ersparnis gegenüber getrennter Zahlung. Im HTML mit `TODO-PORT` und sichtbar als `[TODO: …]` markiert (3 Karten + Fußnote `#raten-hinweis`). Nicht berechnet, weil Preise weder erfunden noch umgerechnet werden sollen.
   - Alternative: Wenn du die Ratenzahlung auf der .de gar nicht anbieten willst, sag Bescheid. Dann entferne ich die vier Stellen und der Rest kann live.

## Weitere offene Punkte (nicht blockierend)

- Basis-Plan sagt weiter „Hosting auf Servern in Deutschland bzw. der EU“. Die .de selbst läuft auf Cloudflare (weltweite Edge). Bitte prüfen, ob das für Kundenseiten stimmt (unverändert gelassen).
- 404-Seite aktivieren (siehe oben, eine Zeile in `wrangler.jsonc`).
- Turnstile: Site-Key in `kontakt.html` (`data-sitekey`) + Secret `TURNSTILE_SECRET` am Worker, falls gewünscht.
- Impressum/Datenschutz haben keinen Canonical (schon früher gemeldet, unverändert).

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
