# Fluides Layout für große Bildschirme (2026-11-07)

Branch `fluid-layout-2026-11-07`, aufgebaut auf `port-au-2026-10-30` (der ungemergte Port mit den offenen TODOs). Nichts gemergt, nichts in Produktion. Geändert: nur `assets/css/styles.css` und eine Zeile in `assets/js/main.js`. Kein HTML, keine Texte, keine Rechtstexte, kein Formular, kein Worker.

## Problem
Der Inhalt hing auf allen Bildschirmen an einem festen 1240-px-Container. Bei 2560 px Breite war weniger als die Hälfte genutzt, Text und Hero-Grafik blieben klein.

## Was geändert wurde
- **Root-Schriftgröße wächst mit dem Bildschirm** (kein CSS-`zoom`, kein `transform: scale`; Browser-Zoom und Schrifteinstellungen der Nutzer funktionieren weiter):

  | Viewport | Root | px pro 1rem |
  |---|---|---|
  | < 1600 | 100 % | 16 |
  | ab 1600 | 112,5 % | 18 |
  | ab 1920 | 125 % | 20 |
  | ab 2560 | 137,5 % | 22 |
  | ab 3440 | 150 % | 24 |
  | ab 3840 | 162,5 % | 26 |

  Stufen wie vorgeschlagen, dazu eine für 4K (3840). Handys und Laptops (< 1600) bleiben unverändert: 1rem = 16 px.
- **Breiter Container**: `--shell: clamp(77.5rem, 90vw, 100rem)`. Untergrenze = alte 1240 px (Laptop bei 1280 sieht aus wie vorher), dazwischen 90 vw, Obergrenze wächst mit der Root-Größe (1800 px bei 1920, 2200 bei 2560, 2400 bei 3440, 2600 bei 3840). `.shell--wide` und `.shell--narrow` ebenfalls in rem.
- **Alles sichtbar in px Feste auf rem umgestellt**, damit es mitwächst: Logo, Burger, Menü-Drawer, Parallax- und Fächer-Abstände der Hero-Grafik, Raster, CTA-Platten, Icons, Spalten bei Schritten und Zeilen, Eyebrow-Zeichen, Checkbox, Radien. 1-px-Haarlinien bleiben bewusst 1 px.
- **Hero-Grafik**: skalierte schon mit ihrer Spalte; die Spalte ist jetzt breiter. Scroll-Strecke `min(165vh, 85rem)` statt `min(165vh, 1360px)`.
- **JS**: `main.js` hält die Grafik mindestens 96 px unter dem Seitenrand (wegen der Kopfzeile). Dieses Minimum wird jetzt mit dem Root-Faktor multipliziert. Der Rest misst echte Geometrie.
- Textbreiten bleiben in `ch` (46 bis 76 ch), die Zeilenlänge bleibt auf jeder Größe lesbar. Absätze in den Feature-Zeilen: Obergrenze 64ch.
- Markenzeile unter dem Logo (kleinster Text, 7,5 px bei 320 px) von 0,535rem auf 0,6rem (Handy 0,47 auf 0,56rem) angehoben.
- Karten, Preis-Kacheln und die Umbruchpunkte für Handy-Menü (1100 px), einspaltig (1080 px) und Handy (620 px) sind unverändert. Demo-Banner und Hinweis (aus dem Port) skalieren mit.

## Prüfungen (Playwright, Chrome)
Viewports 320x640, 360x740, 390x844, 768x1024, 1024x768, 1280x800, 1440x900, 1920x1080, 2560x1440, 3440x1440, 3840x2160 auf allen 9 Seiten inkl. 404, Impressum, Datenschutz: **0 horizontales Scrollen, 0 Konsolenfehler**. Kleinster Text bei 320 px jetzt 9 px (Markenzeile), bei 2560 px 13,2 px.

Screenshots (Vollseite je Seite und Breite) im Scratchpad dieser Sitzung:
`C:\Users\maand\AppData\Local\Temp\claude\12e4a68bd1731b5e\4e2451ff-195b-459e-b141-9e7fe1c91a30\scratchpad\fluid\de-b\<seite>-<breite>.png`, Messwerte `...\de-b\metrics.json`.
Kontaktbogen (alle Seiten x alle Größen): `fluid-contact-sheet.png` im Repo-Root, damit er auch in der Vorschau sichtbar ist. **Vor dem Merge löschen.**

## Vorschau
Siehe Ende dieser Datei (nach dem Deploy ergänzt).

## Nicht behoben / Hinweise
- Hero: Die angeheftete Grafik lässt bei sehr hohen Bildschirmen unter dem Text eine lange leere Strecke. Das ist das Scroll-Konzept (Grafik bleibt stehen, Text scrollt vorbei) und war schon so; nicht umgebaut.
- „So arbeite ich“ und die Zeilen lassen bei 2560+ rechts Platz. Text ist zur Lesbarkeit begrenzt; ein Füllen bräuchte ein neues Layout.
- Die Vorschau ist wie der Port-Stand `noindex` und enthält weiter die offenen TODOs (12-Monats-Rate). Dieser Branch ist nur die Layout-Änderung, kein Freigabestand.

## Vorschau (deployt 2026-11-07, nur Branch-Preview)
https://fluid-layout-2026-11-07-nuvejodeu.ma-andriani92.workers.dev (per `wrangler versions upload --preview-alias`; Produktion `nuvejo.de` unberührt).
Geprüft auf der Vorschau bei 390, 1440 und 2560 Breite (index, leistungen, 404): kein horizontales Scrollen, keine Konsolenfehler, Root 16 / 16 / 22 px, Container 390 / 1296 / 2200 px.
Kontaktbogen: https://fluid-layout-2026-11-07-nuvejodeu.ma-andriani92.workers.dev/fluid-contact-sheet.png
