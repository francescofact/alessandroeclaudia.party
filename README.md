# Alessandro & Claudia — Post-Wedding Celebration

An elegant, bespoke website adaptation of [Lounge im Turm](https://lounge-im-turm.de/), customized for the post-wedding party with friends of **Alessandro & Claudia**.

---

## 🏛️ Event Details

- **Occasion:** Post-Wedding Celebration with Friends
- **Couple:** Alessandro & Claudia
- **Date:** Saturday, September 19, 2026
- **Time:** From 6:30 PM (Sunset Drinks) until Late
- **Venue:** Lounge im Turm · Frankfurter Tor 9, 10243 Berlin (Friedrichshain)
- **The Levels:**
  - **Level 15 (The Dome Room):** 360° panorama, outdoor terrace, flying dinner & dance floor under the historic cupola
  - **Level 14 (The Bar):** Designer cocktail bar, DJ booth, and open bar with custom signature cocktails
  - **Level 13 (The Lounge Floor):** Chesterfield leather armchairs, Polaroid photo corner, guestbook & relaxed retreat

---

## ✨ Features

- **1:1 Authentic Aesthetic:**
  - Original color palette: Royal Blue Gradient (`#1d3463` to `#0c1831`) paired with warm gold accents (`hsl(38 65% 55%)`)
  - Typography: *Cormorant Garamond* (Headings) and *Outfit* (Body)
  - High-resolution original photography of the tower, rooms, and historic Henselmann architecture
- **Clean Responsive Navbar:**
  - Full desktop menu with spacious link layout
  - Smooth mobile hamburger menu toggle
- **Interactive Floor Plans Modal:**
  - Seamless overlay to view seating and event configurations across Level 15, Level 14, and Level 13
- **Google Form RSVP Integration:**
  - Direct 1-click link to the Google RSVP form
- **Location & Travel Info:**
  - Embedded Google Map of Frankfurter Tor 9
  - Public transit (U-Bahn U5 directly in front of the tower, Tram M10, S-Bahn Warschauer Str.) and parking (Kino Kosmos garage)

---

## 🚀 View Locally

The website is 100% static and requires no build pipeline.

### Option 1: Open directly in your browser
Double-click `index.html` or run:
```bash
open index.html
```

### Option 2: Local Python web server
```bash
python3 -m http.server 3000
```
Then visit [http://localhost:3000](http://localhost:3000).

---

## 📁 Project Structure

```
├── index.html                   # Master single-page website
├── package.json                 # Dev runner script
├── README.md                    # Project documentation
├── .gitignore                   # Ignore .DS_Store, etc.
└── assets/
    ├── style.css                # Stylesheet & design tokens from Lounge im Turm
    ├── hero-frankfurter-tor-... # Tower at sunset hero image
    ├── geschichte-...           # Aerial view along Karl-Marx-Allee
    ├── kuppelraum-...           # Dome Room photo
    ├── bar-...                  # Bar floor photo
    ├── raucherzimmer-...        # Lounge floor photo
    ├── kulinarisches-...        # Dinner setting photo
    ├── turm-illustration-...    # Architectural watermark illustration
    └── plan-ebene...            # Level 15, 14, and 13 floor plans
```
