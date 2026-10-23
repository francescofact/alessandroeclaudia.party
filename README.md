# Alessandro & Claudia — Post-Wedding Party über den Dächern Berlins

Eine elegante, maßgeschneiderte Klon-Adaption der Website von [Lounge im Turm](https://lounge-im-turm.de/), umgestaltet für die private Hochzeitsfeier mit Freunden von **Alessandro & Claudia**.

---

## 🏛️ Über das Event

- **Anlass:** Post-Wedding Party mit Freunden
- **Brautpaar:** Alessandro & Claudia
- **Datum:** Samstag, 19. September 2026
- **Uhrzeit:** Ab 18:30 Uhr (Sunset Drinks) bis Open End
- **Location:** Lounge im Turm · Frankfurter Tor 9, 10243 Berlin (Friedrichshain)
- **Die Ebenen:**
  - **Ebene 15 (Kuppelraum):** 360°-Panorama, Außenbalkon, Flying Dinner & Tanzfläche unter der Kuppel
  - **Ebene 14 (Die Bar):** Designer-Bar, DJ-Pult, Open Bar mit Signature Drinks (u.a. Claudias Spritz & Alessandros Negroni)
  - **Ebene 13 (Die Loungeetage):** Chesterfield-Ledersessel, Polaroid-Gästebuch, Fotoecke & entspannter Rückzugsort

---

## ✨ Features

- **1:1 Ästhetik des Originals:**
  - Authentische Farbpalette: Royal Blue Gradient (`#1d3463` bis `#0c1831`) und edle Gold-Akzente (`hsl(38 65% 55%)`)
  - Typografie: *Cormorant Garamond* (Headings) und *Outfit* (Body)
  - Alle Original-Fotografien und Henselmann-Turmillustrationen in hoher Auflösung integriert
- **Mehrsprachigkeit (DE / EN / IT):**
  - Integrierter 1-Klick-Sprachwechsler (Deutsch, Englisch, Italienisch) für alle Freunde und Familie
- **Live-Countdown:**
  - Echtzeit-Zähler bis zum 19. September 2026, 18:30 Uhr
- **Interaktiver Grundriss-Viewer (Modal):**
  - Schneller Wechsel zwischen Ebene 15, Ebene 14 und Ebene 13 inklusive Belegungsbeispielen direkt im Overlay
- **Separater Detailseiten-Modus:**
  - `kuppelraum.html`, `bar.html`, `raucherzimmer.html`, `impressum.html` spiegeln die Originalseitenstruktur wider
- **Interaktives RSVP-Formular:**
  - Erfassung von Zusage, Begleitperson (+1), Ernährungsformen (Omnivor, Vegetarisch, Vegan), Allergien, DJ-Songwunsch und persönlicher Nachricht
  - Automatische lokale Speicherung im Browser + Vorbereitung einer vorformatierten E-Mail
- **Kalender-Integration (.ics & Google Calendar):**
  - Download einer `.ics`-Datei oder direkter Import in den Google Kalender per Klick
- **Anfahrt & Lageplan:**
  - Integrierter interaktiver Google-Maps-Lageplan am Frankfurter Tor 9
  - Angaben zu ÖPNV (U5 Frankfurter Tor direkt vor der Tür, Tram M10, S-Bahn Warschauer Str.) und Parken (Kino Kosmos)

---

## 🚀 Schnellstart / Lokal ansehen

Die Website ist komplett statisch und benötigt keine Build-Tools.

### Option 1: Direkt im Browser öffnen
Doppelklicke einfach auf `index.html` oder führe im Terminal aus:
```bash
open index.html
```

### Option 2: Lokaler Webserver (Python)
```bash
python3 -m http.server 3000
```
Öffne anschließend [http://localhost:3000](http://localhost:3000) im Browser.

### Option 3: Node / npm
```bash
npm start
```

---

## 🌐 Deployment (z.B. GitHub Pages oder Vercel)

### GitHub Pages
1. Repository zu GitHub pushen
2. In den Repository-Einstellungen unter **Pages** den Branch `main` und Root `/` auswählen
3. Die Seite ist sofort online unter `https://<username>.github.io/<repo>/`

### Vercel / Netlify
Einfach das Repository verknüpfen. Da es sich um eine statische Seite handelt, wird sie ohne zusätzliche Konfiguration automatisch bereitgestellt.

---

## 📁 Projektstruktur

```
├── index.html                   # Haupt-Landingpage mit allen Sektionen & Interaktionen
├── kuppelraum.html              # Detailseite Kuppelraum (Ebene 15)
├── bar.html                     # Detailseite Bar (Ebene 14)
├── raucherzimmer.html           # Detailseite Loungeetage (Ebene 13)
├── impressum.html               # Impressum & Datenschutz
├── package.json                 # Lokale Dev-Skripte
├── assets/
│   ├── app.js                   # Interaktive Logik (Sprachumschalter, Countdown, RSVP, Modal)
│   ├── style.css                # Kompiliertes Tailwind & Design-Tokens der Originalseite
│   ├── custom.css               # Ergänzende Styles, Modals, Timeline & Toast
│   ├── party.ics                # Kalenderdatei (.ics)
│   ├── hero-frankfurter-tor-... # Original-Foto Frankfurter Tor bei Sonnenuntergang
│   ├── geschichte-...           # Original-Foto Karl-Marx-Allee & Henselmann-Türme
│   ├── kuppelraum-...           # Original-Foto Kuppelraum
│   ├── bar-...                  # Original-Foto Bar
│   ├── raucherzimmer-...        # Original-Foto Loungeetage
│   ├── kulinarisches-...        # Original-Foto Kulinarisches
│   ├── turm-illustration-...    # Original-Illustration Turm
│   └── plan-ebene...            # Grundrisse & Raumkonfigurationen
└── public/                      # Synchronisierte Kopie aller Assets
```
