/**
 * Alessandro & Claudia - Post-Wedding Party Web Application
 * Features:
 * - Multi-language support (German, English, Italian)
 * - Live Countdown timer to September 19, 2026, 18:30
 * - Interactive Floor Plan Modal Viewer with Ebene 15, 14, 13 tabs
 * - Interactive RSVP Form with localStorage & mailto generator
 * - Mobile Navigation & Smooth Scroll
 * - Calendar export (.ics & Google Calendar)
 */

// Translation dictionaries
const translations = {
  de: {
    // Navigation
    nav_brand: "Alessandro & Claudia",
    nav_story: "Die Location",
    nav_schedule: "Ablauf",
    nav_spaces: "Die Ebenen",
    nav_kuppel: "Kuppelraum",
    nav_bar: "Bar",
    nav_lounge: "Lounge",
    nav_culinary: "Kulinarisches",
    nav_rsvp: "Zusagen",
    nav_faq: "FAQ & Anfahrt",
    btn_rsvp_quick: "Zusagen",

    // Hero
    hero_location: "Frankfurter Tor 9 · 10243 Berlin",
    hero_title_prefix: "Alessandro & Claudia",
    hero_title_sub: "Post-Wedding Party",
    hero_desc: "Wir haben Ja gesagt! Jetzt wollen wir das Leben, die Liebe und unsere wunderbaren Freunde hoch über den Dächern Berlins im höchsten Salon des Frankfurter Tors feiern.",
    hero_btn_rsvp: "Jetzt zusagen (RSVP)",
    hero_btn_calendar: "Zum Kalender hinzufügen",
    hero_btn_details: "Ablauf & Details",

    // Key facts
    fact_date_label: "Datum",
    fact_date_val: "Samstag, 19. September 2026",
    fact_time_label: "Uhrzeit",
    fact_time_val: "18:30 Uhr · Open End",
    fact_venue_label: "Location",
    fact_venue_val: "Lounge im Turm · Ebene 13–15",
    fact_dress_label: "Dresscode",
    fact_dress_val: "Festlich & Elegant · Cocktail Chic",

    // Countdown
    cd_days: "Tage",
    cd_hours: "Stunden",
    cd_minutes: "Minuten",
    cd_seconds: "Sekunden",

    // Story / History section
    story_badge: "Feiern im Baudenkmal",
    story_title: "Liebe Freunde & Wegbegleiter",
    story_p1: "Nach unserer standesamtlichen Trauung im intimen Kreis gibt es für uns nur noch eines: mit euch allen die Gläser zu erheben, zu lachen, zu tanzen und eine unvergessliche Nacht zu verbringen.",
    story_p2: "Dafür haben wir uns einen der geschichtsträchtigsten und spektakulärsten Orte Berlins ausgesucht: Die monumentalen Henselmann-Türme am Frankfurter Tor — das längste geschlossene Baudenkmal Europas. Der südliche Turm steht an diesem Abend exklusiv für unsere Party offen.",
    story_p3: "Über drei Etagen — von der intimen Lounge auf Ebene 13 über die edle Bar auf Ebene 14 bis zum Kuppelraum mit 360°-Außenring auf Ebene 15 — feiern wir zusammen über den glitzernden Lichtern der Stadt.",

    // Schedule / Timeline
    sched_badge: "Wie der Abend wird",
    sched_title: "Ablauf des Abends",
    sched_desc: "Ein Abend zum Genießen, Anstoßen und Feiern ohne starre Sitzordnung — fließend, lebendig und mit bester Aussicht.",
    sched_1_time: "18:30 Uhr",
    sched_1_title: "Aperitivo & Sunset auf Ebene 14",
    sched_1_desc: "Ankunft hoch über Berlin. Wir empfangen euch auf der Barebene und dem umlaufenden Balkon mit Prosecco, Signature Drinks und feinem Fingerfood zur Golden Hour.",
    sched_2_time: "19:45 Uhr",
    sched_2_title: "Flying Dinner im Kuppelraum",
    sched_2_desc: "Italienisch inspirierte Gaumenfreuden, sommerliche Kreationen und frische Köstlichkeiten — locker als Flying Buffet serviert, damit ihr euch frei unterhalten könnt.",
    sched_3_time: "21:00 Uhr",
    sched_3_title: "Hochzeits-Toast & Tortenanschnitt",
    sched_3_desc: "Ein gemeinsamer Moment für Toasts, Liebe und das Anschneiden unserer Hochzeitstorte, begleitet von italienischem Espresso und süßen Desserts.",
    sched_4_time: "21:30 Uhr",
    sched_4_title: "Party & Open Bar unter der Kuppel",
    sched_4_desc: "Der Dancefloor unter der Kuppel erwacht! Unser DJ legt auf, die Bar ist eröffnet und wir tanzen bis in die frühen Morgenstunden über den Dächern Berlins.",
    sched_5_time: "01:00 Uhr",
    sched_5_title: "Midnight Bites & Chillout",
    sched_5_desc: "Mitternachtssnack für Nachtschwärmer, gemütliche Gespräche in den Ledersesseln der Loungeetage und Weiterfeiern bis zum Morgengrauen.",

    // Spaces
    kuppel_sub: "Ebene 15 · Der höchste Salon",
    kuppel_title: "Der Kuppelraum",
    kuppel_desc: "Vom Inneren des Kuppelraumes und dem 360°-Außenring genießen wir die unvergleichliche Rundumaussicht über ganz Berlin — vom Fernsehturm bis zum Teufelsberg. Der Raum dient uns zuerst als stilvoller Speisesalon und verwandelt sich später in unseren Tanzpalast unter der Kuppel.",
    kuppel_b1: "360° Rundumblick über die Skyline Berlins",
    kuppel_b2: "Begehbarer Außenring für frische Luft & Sonnenuntergang",
    kuppel_b3: "Stilvolles Flying Dinner & spätere Tanzfläche",
    kuppel_b4: "Beeindruckende historische Kuppelarchitektur",
    btn_floorplans: "Grundrisse & Details ansehen",

    bar_sub: "Ebene 14 · Signature Drinks & DJ",
    bar_title: "Die Bar & Cocktail Lounge",
    bar_desc: "Auf dieser Ebene ist eine komplett ausgestattete, moderne Bar eingerichtet — der perfekte Rahmen für erstklassige Drinks und lockere Begegnungen. Hier mixen unsere Barkeeper eure Drinks und unser DJ sorgt für den perfekten Soundtrack.",
    bar_b1: "Full Open Bar mit Signature Cocktails (u.a. Claudias Spritz & Alessandros Negroni)",
    bar_b2: "Ausgewählte italienische Weine, Champagner & Berliner Craft Beer",
    bar_b3: "DJ Pult und exzellente Soundanlage",
    bar_b4: "Direkter Zugang zur Wendeltreppe in den Kuppelraum",

    lounge_sub: "Ebene 13 · Intimer Rückzugsort",
    lounge_title: "Die Loungeetage",
    lounge_desc: "Auf dem Weg in den Turm betretet ihr als erste Ebene die Loungeetage — ein intimer Rückzugsort mit elegantem Ambiente, warmem Licht und stilvollen Chesterfield-Sitzgruppen für entspannte Gespräche abseits des Trubels.",
    lounge_b1: "Bequeme Ledersessel & gemütliche Atmosphäre",
    lounge_b2: "Polaroid-Fotoecke & unser Hochzeits-Gästebuch",
    lounge_b3: "Garderobe & Welcome-Area",
    lounge_b4: "Idealer Rückzugsort für persönliche Gespräche",

    // Culinary
    culinary_sub: "Himmlisch genießen",
    culinary_title: "Kulinarisches & Bar",
    culinary_desc: "Liebe geht durch den Magen — und Freundschaft erst recht. Für unseren Abend haben wir ein exquisites Flying Catering kreiert, das italienische Wurzeln mit moderner Berliner Frische vereint.",
    culinary_b1: "Aperitivo & Flying Antipasti: Feinste Burrata, Trüffelcrostini, Arancini & Carpaccio",
    culinary_b2: "Hauptgänge im Flying Style: Hausgemachte Pasta, mediterraner Fisch & Fleisch, reichhaltige vegetarische & vegane Optionen",
    culinary_b3: "Dolci & Torte: Handgemachte Pâtisserie, Tiramisù-Spezialität & fruchtige Desserts",
    culinary_b4: "Late-Night Snack: Berliner Kult-Klassiker & herzhafte Mitternachtsstärkung",

    // RSVP Section
    rsvp_badge: "Eure Rückmeldung",
    rsvp_title: "Feiert ihr mit uns?",
    rsvp_desc: "Damit wir Essen, Drinks und Plätze bestmöglich vorbereiten können, gebt uns bitte bis zum 15. August 2026 Bescheid, ob ihr dabei seid.",
    rsvp_lbl_name: "Dein vollständiger Name *",
    rsvp_lbl_email: "Deine E-Mail-Adresse *",
    rsvp_lbl_status: "Bist du dabei? *",
    rsvp_opt_yes: "Ja, ich bin dabei! 🎉",
    rsvp_opt_yes_two: "Ja, wir kommen zu zweit! 🥂",
    rsvp_opt_no: "Leider nein, aber im Herzen bei euch ❤️",
    rsvp_lbl_plusone: "Name der Begleitperson",
    rsvp_lbl_diet: "Ernährung / Menü-Wunsch",
    rsvp_diet_omni: "Allesesser (Fleisch / Fisch)",
    rsvp_diet_veg: "Vegetarisch",
    rsvp_diet_vegan: "Vegan",
    rsvp_lbl_allergies: "Allergien oder Unverträglichkeiten",
    rsvp_lbl_song: "Dein Songwunsch für den DJ 🎶",
    rsvp_lbl_msg: "Persönliche Nachricht an Alessandro & Claudia",
    rsvp_btn_submit: "Zusage abschicken",
    rsvp_btn_email: "Alternativ per E-Mail antworten",

    // FAQ Section
    faq_badge: "Wissenswertes",
    faq_title: "Häufige Fragen & Infos",
    faq_q1: "Gibt es einen Dresscode?",
    faq_a1: "Festlich & Elegant / Cocktail Chic. Bringt gerne etwas mit, worin ihr euch wohlfühlt und tanzen könnt — für später empfehlen wir flache Wechselschuhe!",
    faq_q2: "Wie steht es mit Geschenken?",
    faq_a2: "Das allerschönste Geschenk ist eure Anwesenheit und eine unvergessliche Party mit euch! Wer uns dennoch eine Freude machen möchte: Wir freuen uns riesig über einen Beitrag zu unseren Flitterwochen.",
    faq_q3: "Dürfen Kinder mitkommen?",
    faq_a3: "Wir lieben eure Kids sehr! Allerdings möchten wir diesen Abend hoch oben im Turm als ausgelassene Party unter Freunden feiern und empfehlen euch daher, die Nacht als entspannte Eltern-Auszeit zu genießen.",
    faq_q4: "Was passiert bei schlechtem Wetter?",
    faq_a4: "Der Turm ist auf allen Ebenen wetterfest, vollklimatisiert und bietet bei jedem Wetter ein atemberaubendes Panorama. Der Außenring auf Ebene 15 ist auch überdacht zugänglich.",
    faq_q5: "Gibt es Übernachtungsmöglichkeiten in der Nähe?",
    faq_a5: "Ja! Direkt in Friedrichshain gibt es wunderbare Hotels in Gehweite, z.B. das Michelberger Hotel (Warschauer Str.), das nhow Berlin an der Spree oder das Hotel Indigo an der East Side Gallery.",

    // Location / Contact
    loc_badge: "Veranstaltungsort",
    loc_title: "Anfahrt & Lage",
    loc_addr_title: "Lounge im Turm",
    loc_addr_sub: "Frankfurter Tor 9 · 10243 Berlin (Südturm)",
    loc_pt_title: "Öffentliche Verkehrsmittel",
    loc_pt_desc: "U-Bahn U5 (Station 'Frankfurter Tor' — direkter Ausgang am Südturm). Tram M10. S-Bahn Warschauer Straße ca. 10 Minuten zu Fuß.",
    loc_car_title: "Anfahrt mit dem Auto & Parken",
    loc_car_desc: "Tiefgarage im Kino Kosmos (Karl-Marx-Allee 131a, 10243 Berlin — ca. 250m zu Fuß).",
    loc_btn_maps: "Route in Google Maps öffnen →",

    // Footer
    footer_copy: "Alessandro & Claudia · Hochzeitsparty 2026",
    footer_loc: "Lounge im Turm · Frankfurter Tor 9 · 10243 Berlin",
    footer_imprint: "Impressum & Datenschutz"
  },

  en: {
    // Navigation
    nav_brand: "Alessandro & Claudia",
    nav_story: "The Venue",
    nav_schedule: "Schedule",
    nav_spaces: "The Levels",
    nav_kuppel: "Dome Room",
    nav_bar: "Bar",
    nav_lounge: "Lounge",
    nav_culinary: "Culinary & Drinks",
    nav_rsvp: "RSVP",
    nav_faq: "FAQ & Directions",
    btn_rsvp_quick: "RSVP Now",

    // Hero
    hero_location: "Frankfurter Tor 9 · 10243 Berlin",
    hero_title_prefix: "Alessandro & Claudia",
    hero_title_sub: "Post-Wedding Party",
    hero_desc: "We said YES! Now we want to celebrate life, love, and our wonderful friends high above the rooftops of Berlin in the iconic tower at Frankfurter Tor.",
    hero_btn_rsvp: "RSVP Now",
    hero_btn_calendar: "Add to Calendar",
    hero_btn_details: "Schedule & Details",

    // Key facts
    fact_date_label: "Date",
    fact_date_val: "Saturday, September 19, 2026",
    fact_time_label: "Time",
    fact_time_val: "6:30 PM · Until Late",
    fact_venue_label: "Venue",
    fact_venue_val: "Lounge im Turm · Levels 13–15",
    fact_dress_label: "Dress Code",
    fact_dress_val: "Festive & Elegant · Cocktail Chic",

    // Countdown
    cd_days: "Days",
    cd_hours: "Hours",
    cd_minutes: "Minutes",
    cd_seconds: "Seconds",

    // Story / History section
    story_badge: "Celebrating in an Architectural Landmark",
    story_title: "Dear Friends & Loved Ones",
    story_p1: "After tying the knot in an intimate ceremony, there's only one thing left to do: raise our glasses, laugh, dance, and celebrate a magical night together with all of you!",
    story_p2: "For this special evening, we have reserved one of Berlin's most iconic historic landmarks: The monumental Henselmann towers at Frankfurter Tor — Germany's longest protected monument boulevard. The entire southern tower is exclusively ours for the night.",
    story_p3: "Across three levels — from the cozy Lounge on Level 13 to the chic Bar on Level 14 and the spectacular Dome Room with a 360° balcony on Level 15 — we will celebrate together above the glowing lights of Berlin.",

    // Schedule / Timeline
    sched_badge: "How the Night Unfolds",
    sched_title: "Evening Schedule",
    sched_desc: "An evening designed for enjoying, toasting, and dancing without rigid seating — flowing, vibrant, and with unforgettable views.",
    sched_1_time: "6:30 PM",
    sched_1_title: "Aperitivo & Sunset on Level 14",
    sched_1_desc: "Arrival high above Berlin. We welcome you at the bar floor and the panoramic balcony with prosecco, signature cocktails, and gourmet finger food during golden hour.",
    sched_2_time: "7:45 PM",
    sched_2_title: "Flying Dinner in the Dome Room",
    sched_2_desc: "Italian-inspired culinary treats, summer flavors, and seasonal highlights served as an elegant flying buffet so you can mingle freely.",
    sched_3_time: "9:00 PM",
    sched_3_title: "Wedding Toast & Cake Cutting",
    sched_3_desc: "A brief toast to love and friendship, cutting of our wedding cake, accompanied by fine espresso and sweet desserts.",
    sched_4_time: "9:30 PM",
    sched_4_title: "Party & Open Bar under the Dome",
    sched_4_desc: "The dance floor under the cupola opens! Our DJ spins tunes, the open bar is in full swing, and we dance into the night high above the Berlin skyline.",
    sched_5_time: "1:00 AM",
    sched_5_title: "Midnight Bites & Chillout",
    sched_5_desc: "Berlin late-night bites for night owls, cozy conversations in the leather armchairs of Level 13, and continuing the party until dawn.",

    // Spaces
    kuppel_sub: "Level 15 · The Highest Salon",
    kuppel_title: "The Dome Room (Kuppelraum)",
    kuppel_desc: "From inside the circular dome room and its 360° exterior balcony, take in sweeping panoramic views over Berlin — from the TV Tower to the entire skyline. It serves as our dining salon first and transforms into our dance floor under the cupola later.",
    kuppel_b1: "360° panoramic views across the Berlin skyline",
    kuppel_b2: "Accessible open-air ring balcony for sunset & fresh air",
    kuppel_b3: "Stylish flying dinner followed by an energetic dance floor",
    kuppel_b4: "Remarkable 1950s modernist cupola architecture",
    btn_floorplans: "View Floor Plans & Details",

    bar_sub: "Level 14 · Signature Drinks & DJ",
    bar_title: "The Bar & Cocktail Lounge",
    bar_desc: "Equipped with a full professional bar and top mixologists — the perfect hub for signature drinks and lively conversations. Here you'll find craft cocktails, fine Italian wines, and the DJ booth setting the groove.",
    bar_b1: "Full Open Bar with custom signature drinks (including Claudia's Spritz & Alessandro's Negroni)",
    bar_b2: "Selected Italian wines, champagne & Berlin craft beer",
    bar_b3: "DJ booth and premium sound system",
    bar_b4: "Spiral staircase connection directly to the Dome Room",

    lounge_sub: "Level 13 · Intimate Retreat",
    lounge_title: "The Lounge Floor",
    lounge_desc: "As you arrive on the tower floors, Level 13 is your first stop: An intimate retreat with elegant ambiance, warm amber lighting, and plush Chesterfield leather seating groups to relax and talk.",
    lounge_b1: "Comfortable leather armchairs & warm ambiance",
    lounge_b2: "Polaroid photo booth & our wedding guestbook",
    lounge_b3: "Cloakroom & welcome reception area",
    lounge_b4: "Perfect quiet haven for deeper chats away from the music",

    // Culinary
    culinary_sub: "Heavenly Dining",
    culinary_title: "Culinary & Drinks",
    culinary_desc: "Great food and drinks are at the heart of any great celebration. We've curated a delicious flying catering menu blending authentic Italian cuisine with vibrant Berlin flavors.",
    culinary_b1: "Aperitivo & Flying Antipasti: Fresh burrata, truffle crostini, arancini & carpaccio",
    culinary_b2: "Flying Dinner: Homemade pasta dishes, Mediterranean fish & meats, rich vegetarian & vegan options",
    culinary_b3: "Dolci & Cake: Artisan pâtisserie, tiramisù variations & fresh summer desserts",
    culinary_b4: "Late-Night Snacks: Berlin midnight bites & savory comfort food",

    // RSVP Section
    rsvp_badge: "Your Attendance",
    rsvp_title: "Will You Celebrate With Us?",
    rsvp_desc: "To help us plan food, drinks, and spaces perfectly, please let us know by August 15, 2026 if you will be joining us.",
    rsvp_lbl_name: "Full Name *",
    rsvp_lbl_email: "Email Address *",
    rsvp_lbl_status: "Will you attend? *",
    rsvp_opt_yes: "Yes, I'm coming! 🎉",
    rsvp_opt_yes_two: "Yes, we are coming as a pair! 🥂",
    rsvp_opt_no: "Regretfully declining, but cheering with you in spirit ❤️",
    rsvp_lbl_plusone: "Name of Plus-One",
    rsvp_lbl_diet: "Dietary Preferences",
    rsvp_diet_omni: "Omnivore (Meat / Fish)",
    rsvp_diet_veg: "Vegetarian",
    rsvp_diet_vegan: "Vegan",
    rsvp_lbl_allergies: "Allergies or Intolerances",
    rsvp_lbl_song: "Song Request for the DJ 🎶",
    rsvp_lbl_msg: "Personal Note to Alessandro & Claudia",
    rsvp_btn_submit: "Send RSVP Confirmation",
    rsvp_btn_email: "Or Reply via Email",

    // FAQ Section
    faq_badge: "Good to Know",
    faq_title: "Frequently Asked Questions",
    faq_q1: "What is the dress code?",
    faq_a1: "Festive & Elegant / Cocktail Chic. Wear something you feel wonderful and ready to dance in — comfortable shoes for later are warmly encouraged!",
    faq_q2: "What about wedding gifts?",
    faq_a2: "Your presence and dancing with us is the greatest gift of all! If you would still like to give something, a contribution towards our honeymoon adventures would make us very happy.",
    faq_q3: "Can kids join?",
    faq_a3: "We love your children dearly! However, we envision this night high up in the tower as an adult party among friends — treat yourself to a fun parents' night out!",
    faq_q4: "What if it rains?",
    faq_a4: "All tower levels are fully enclosed, weather-proof, and climate-controlled with floor-to-ceiling panoramic windows. The outer balcony is also sheltered and accessible.",
    faq_q5: "Are there hotels nearby?",
    faq_a5: "Yes! There are fantastic hotels within walking distance in Friedrichshain, such as the Michelberger Hotel, nhow Berlin by the Spree, or Hotel Indigo East Side Gallery.",

    // Location / Contact
    loc_badge: "Venue Location",
    loc_title: "Directions & Access",
    loc_addr_title: "Lounge im Turm",
    loc_addr_sub: "Frankfurter Tor 9 · 10243 Berlin (South Tower)",
    loc_pt_title: "Public Transit",
    loc_pt_desc: "Subway U5 (Station 'Frankfurter Tor' — exits right at the tower entrance). Tram M10. S-Bahn Warschauer Straße approx. 10 minutes on foot.",
    loc_car_title: "By Car & Parking",
    loc_car_desc: "Underground parking garage at Kino Kosmos (Karl-Marx-Allee 131a, 10243 Berlin — approx. 250m walking distance).",
    loc_btn_maps: "Open Route in Google Maps →",

    // Footer
    footer_copy: "Alessandro & Claudia · Wedding Celebration 2026",
    footer_loc: "Lounge im Turm · Frankfurter Tor 9 · 10243 Berlin",
    footer_imprint: "Legal Notice & Privacy"
  },

  it: {
    // Navigation
    nav_brand: "Alessandro & Claudia",
    nav_story: "La Location",
    nav_schedule: "Programma",
    nav_spaces: "I Livelli",
    nav_kuppel: "Cupola",
    nav_bar: "Bar",
    nav_lounge: "Lounge",
    nav_culinary: "Cibo & Drink",
    nav_rsvp: "Conferma",
    nav_faq: "FAQ & Arrivo",
    btn_rsvp_quick: "Conferma",

    // Hero
    hero_location: "Frankfurter Tor 9 · 10243 Berlino",
    hero_title_prefix: "Alessandro & Claudia",
    hero_title_sub: "Festa di Matrimonio",
    hero_desc: "Ci siamo detti SÌ! Ora vogliamo festeggiare la vita, l'amore e i nostri splendidi amici sopra i tetti di Berlino nella suggestiva torre di Frankfurter Tor.",
    hero_btn_rsvp: "Conferma presenza (RSVP)",
    hero_btn_calendar: "Aggiungi al calendario",
    hero_btn_details: "Programma e dettagli",

    // Key facts
    fact_date_label: "Data",
    fact_date_val: "Sabato 19 Settembre 2026",
    fact_time_label: "Orario",
    fact_time_val: "Dalle 18:30 · Fino a tardi",
    fact_venue_label: "Location",
    fact_venue_val: "Lounge im Turm · Piani 13–15",
    fact_dress_label: "Dress Code",
    fact_dress_val: "Elegante e Festoso · Cocktail Chic",

    // Countdown
    cd_days: "Giorni",
    cd_hours: "Ore",
    cd_minutes: "Minuti",
    cd_seconds: "Secondi",

    // Story / History section
    story_badge: "Un monumento storico per la nostra festa",
    story_title: "Cari Amici e Famiglia",
    story_p1: "Dopo esserci sposati con rito civile nell'intimità familiare, ora c'è solo una cosa da fare: brindare, ridere, ballare e vivere una serata indimenticabile tutti insieme!",
    story_p2: "Abbiamo riservato uno dei luoghi più iconici e affascinanti di Berlino: le storiche torri di Frankfurter Tor, progettate dall'architetto Hermann Henselmann negli anni '50. L'intera torre sud sarà aperta in esclusiva per la nostra festa.",
    story_p3: "Su tre livelli — dal raffinato salotto al piano 13, all'elegante bar al piano 14, fino alla spettacolare cupola panoramica a 360° con terrazza al piano 15 — brinderemo insieme sopra le luci della città.",

    // Schedule / Timeline
    sched_badge: "Come si svolgerà la serata",
    sched_title: "Programma dell'Evento",
    sched_desc: "Una festa dinamica e rilassata per godersi cibo, drink e musica senza posti fissi a tavola — con una vista spettacolare.",
    sched_1_time: "18:30",
    sched_1_title: "Aperitivo & Tramonto al Piano 14",
    sched_1_desc: "Arrivo in torre. Vi accogliamo al bar e sulla balconata panoramica con Prosecco, cocktail della casa e finger food durante l'ora d'oro.",
    sched_2_time: "19:45",
    sched_2_title: "Flying Dinner nella Cupola",
    sched_2_desc: "Delizie di ispirazione italiana e creazioni moderne servite a passaggio, per mangiare benissimo muovendosi in totale libertà.",
    sched_3_time: "21:00",
    sched_3_title: "Brindisi & Taglio della Torta",
    sched_3_desc: "Un momento speciale per i brindisi, il taglio della torta nuziale, caffè espresso e dolci della pasticceria.",
    sched_4_time: "21:30",
    sched_4_title: "Festa & Open Bar sotto la Cupola",
    sched_4_desc: "Si accende la pista sotto la cupola! Il nostro DJ alla console, open bar attivo e balli fino a notte fonda sui tetti di Berlino.",
    sched_5_time: "01:00",
    sched_5_title: "Spuntino di Mezzanotte & Relax",
    sched_5_desc: "Snack notturni per i nottambuli, chiacchiere intime nelle poltrone in pelle al piano 13 e festa a oltranza fino all'alba.",

    // Spaces
    kuppel_sub: "Piano 15 · Il Salone Panoramico",
    kuppel_title: "La Cupola (Kuppelraum)",
    kuppel_desc: "Dall'interno della cupola e dal camminamento esterno a 360°, si gode di una vista mozzafiato su tutta Berlino. È il salone del nostro flying dinner e successivamente la nostra pista da ballo sotto le stelle.",
    kuppel_b1: "Vista panoramica a 360° sullo skyline di Berlino",
    kuppel_b2: "Balconata esterna accessibile per godersi il tramonto e l'aria fresca",
    kuppel_b3: "Cena a buffet dinamica e poi dancefloor",
    kuppel_b4: "Straordinaria architettura storica sotto la cupola",
    btn_floorplans: "Vedi Planimetrie e Dettagli",

    bar_sub: "Piano 14 · Signature Drinks & DJ",
    bar_title: "Il Bar & Cocktail Lounge",
    bar_desc: "Un vero American bar attrezzato con barman dedicati. Qui serviremo i vostri cocktail preferiti, ottimi vini italiani e birre artigianali, accompagnati dalla selezione musicale del nostro DJ.",
    bar_b1: "Open Bar completo con signature cocktail (tra cui lo Spritz di Claudia e il Negroni di Alessandro)",
    bar_b2: "Selezione di vini italiani, spumante e birre berlinesi",
    bar_b3: "Postazione DJ con impianto audio professionale",
    bar_b4: "Collegamento diretto con la scala a chiocciola verso la Cupola",

    lounge_sub: "Piano 13 · Salotto Intimo",
    lounge_title: "La Lounge",
    lounge_desc: "Salendo sulla torre, il primo piano che incontrerete è la Lounge: un rifugio accogliente con poltrone Chesterfield in pelle, luci calde e atmosfera rilassata per conversare lontano dalla musica alta.",
    lounge_b1: "Poltrone in pelle vintage e atmosfera raffinata",
    lounge_b2: "Angolo foto Polaroid e il nostro Guestbook",
    lounge_b3: "Guardaroba e reception di benvenuto",
    lounge_b4: "Luogo ideale per rilassarsi e chiacchierare",

    // Culinary
    culinary_sub: "Gusto d'eccellenza",
    culinary_title: "Cibo & Bar",
    culinary_desc: "Il cibo buono e i cocktail sono l'anima della festa. Per questo evento abbiamo ideato un percorso gastronomico che unisce le tradizioni italiane e la creatività berlinese.",
    culinary_b1: "Aperitivo & Antipasti volanti: Burrata fresca, crostini al tartufo, arancini e carpacci",
    culinary_b2: "Flying Dinner: Primi di pasta fresca, assaggi di carne e pesce, ampie opzioni vegetariane e vegane",
    culinary_b3: "Dolci & Torta: Pasticceria artigianale, tiramisù della tradizione e dolci estivi",
    culinary_b4: "Spuntino di Mezzanotte: Snack notturni e sfiziosità berlinesi",

    // RSVP Section
    rsvp_badge: "La tua presenza",
    rsvp_title: "Festeggerai con noi?",
    rsvp_desc: "Per consentirci di organizzare cibo, bevande e spazi al meglio, ti preghiamo di confermare la tua presenza entro il 15 Agosto 2026.",
    rsvp_lbl_name: "Nome e Cognome *",
    rsvp_lbl_email: "Indirizzo Email *",
    rsvp_lbl_status: "Ci sarai? *",
    rsvp_opt_yes: "Sì, ci sarò con gioia! 🎉",
    rsvp_opt_yes_two: "Sì, saremo in due! 🥂",
    rsvp_opt_no: "Purtroppo non potrò, ma sono con voi col cuore ❤️",
    rsvp_lbl_plusone: "Nome dell'accompagnatore/trice",
    rsvp_lbl_diet: "Preferenze alimentari",
    rsvp_diet_omni: "Onnivoro (Carne / Pesce)",
    rsvp_diet_veg: "Vegetariano",
    rsvp_diet_vegan: "Vegano",
    rsvp_lbl_allergies: "Allergie o intolleranze",
    rsvp_lbl_song: "Canzone che vorresti sentire dal DJ 🎶",
    rsvp_lbl_msg: "Un messaggio personale per Alessandro & Claudia",
    rsvp_btn_submit: "Invia Conferma",
    rsvp_btn_email: "Oppure rispondi via Email",

    // FAQ Section
    faq_badge: "Informazioni Utili",
    faq_title: "Domande Frequenti",
    faq_q1: "Qual è il dress code?",
    faq_a1: "Elegante e Festoso / Cocktail Chic. Indossate ciò che vi fa sentire bene e pronti a festeggiare — per dopo consigliamo scarpe comode per ballare!",
    faq_q2: "Per quanto riguarda i regali?",
    faq_a2: "La vostra presenza e il vostro affetto sono il regalo più grande in assoluto! Per chi volesse comunque farci un pensiero, un contributo al nostro viaggio di nozze ci renderà felicissimi.",
    faq_q3: "I bambini possono partecipare?",
    faq_a3: "Vogliamo un gran bene ai vostri bimbi! Tuttavia abbiamo pensato a questa serata in cima alla torre come una festa notturna tra amici — approfittatene per una serata libera da genitori!",
    faq_q4: "E se dovesse piovere?",
    faq_a4: "Tutti i piani della torre sono completamente al coperto, climatizzati e offrono una vista panoramica spettacolare con qualsiasi meteo. Anche il camminamento esterno è coperto.",
    faq_q5: "Ci sono hotel nelle vicinanze?",
    faq_a5: "Certamente! A Friedrichshain ci sono ottimi hotel a pochi minuti a piedi, come il Michelberger Hotel, l'nhow Berlin sul fiume Sprea o l'Hotel Indigo.",

    // Location / Contact
    loc_badge: "Luogo dell'Evento",
    loc_title: "Come Raggiungerci",
    loc_addr_title: "Lounge im Turm",
    loc_addr_sub: "Frankfurter Tor 9 · 10243 Berlino (Torre Sud)",
    loc_pt_title: "Mezzi Pubblici",
    loc_pt_desc: "Metropolitana U5 (Fermata 'Frankfurter Tor' — uscita direttamente sotto la torre). Tram M10. S-Bahn Warschauer Straße a circa 10 minuti a piedi.",
    loc_car_title: "In Auto e Parcheggio",
    loc_car_desc: "Parcheggio sotterraneo presso il cinema Kino Kosmos (Karl-Marx-Allee 131a, 10243 Berlino — circa 250m a piedi).",
    loc_btn_maps: "Apri itinerario su Google Maps →",

    // Footer
    footer_copy: "Alessandro & Claudia · Festa di Nozze 2026",
    footer_loc: "Lounge im Turm · Frankfurter Tor 9 · 10243 Berlino",
    footer_imprint: "Note Legali & Privacy"
  }
};

// Floor Plans Configuration
const floorPlansData = {
  kuppelraum: {
    title: {
      de: "Der Kuppelraum (Ebene 15)",
      en: "The Dome Room (Level 15)",
      it: "La Cupola (Piano 15)"
    },
    desc: {
      de: "Spektakulärer 360°-Rundumblick über Berlin mit Außenring. Hier finden das Flying Dinner und die spätere Party statt.",
      en: "Spectacular 360° panoramic view of Berlin with wrap-around balcony. Home to our flying dinner and later dance floor.",
      it: "Spettacolare vista panoramica a 360° su Berlino con terrazza esterna. Sede del flying dinner e della festa."
    },
    hero: "assets/kuppelraum-DVxYrUW8.jpg",
    plans: [
      {
        img: "assets/plan-ebene15-DLRkEzdt.jpg",
        label: {
          de: "Festlicher Anlass — bis max. 36 Personen",
          en: "Festive Dining — up to 36 persons",
          it: "Allestimento Festivo — fino a 36 persone"
        }
      },
      {
        img: "assets/plan-ebene15-2-B1QLCcPo.jpg",
        label: {
          de: "Stehempfang & Dancefloor — bis 80 Personen",
          en: "Cocktail Reception & Dance Floor — up to 80 persons",
          it: "Cocktail in piedi & Dancefloor — fino a 80 persone"
        }
      },
      {
        img: "assets/plan-ebene15-1-BbSPH4mG.jpg",
        label: {
          de: "Konferenz / Lounge Bestuhlung",
          en: "Lounge Seating Setup",
          it: "Sedute Lounge"
        }
      },
      {
        img: "assets/plan-ebene15-3-CKXTy8Hu.jpg",
        label: {
          de: "Auditorium & Toast Setup",
          en: "Auditorium & Toast Setup",
          it: "Allestimento per brindisi"
        }
      }
    ]
  },
  bar: {
    title: {
      de: "Die Bar (Ebene 14)",
      en: "The Bar (Level 14)",
      it: "Il Bar (Piano 14)"
    },
    desc: {
      de: "Voll ausgestattete Designer-Bar für Signature Cocktails, DJ-Pult und Sundowner Drinks auf halber Höhe.",
      en: "Fully equipped designer bar for signature cocktails, DJ setup, and sundowner drinks.",
      it: "Bar di design completamente attrezzato per signature cocktail, console DJ e aperitivo al tramonto."
    },
    hero: "assets/bar-DrBA-e4p.jpg",
    plans: [
      {
        img: "assets/plan-ebene-14-DoLgWM0O.jpg",
        label: {
          de: "Grundriss — Bar Ebene 14 mit DJ-Bereich & Theke",
          en: "Floor Plan — Bar Level 14 with DJ area & counter",
          it: "Planimetria — Bar Piano 14 con bancone e DJ"
        }
      }
    ]
  },
  lounge: {
    title: {
      de: "Die Loungeetage (Ebene 13)",
      en: "The Lounge Floor (Level 13)",
      it: "La Lounge (Piano 13)"
    },
    desc: {
      de: "Intimer Rückzugsort mit Ledersesseln, Fotobox & Gästebuch für vertraute Momente und Gespräche.",
      en: "Intimate retreat with vintage leather chairs, photobooth & guestbook for relaxed conversations.",
      it: "Salotto intimo con poltrone in pelle, angolo foto e libro degli ospiti per chiacchierare in relax."
    },
    hero: "assets/raucherzimmer-9tY4Frmt.jpg",
    plans: [
      {
        img: "assets/plan-ebene-13-D53GTTE9.jpg",
        label: {
          de: "Grundriss — Loungeetage Ebene 13 mit Sitzgruppen",
          en: "Floor Plan — Lounge Level 13 with seating groups",
          it: "Planimetria — Lounge Piano 13 con salottini"
        }
      }
    ]
  }
};

let currentLang = 'de';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // 1. Language Init
  const savedLang = localStorage.getItem('party_lang') || 'de';
  setLanguage(savedLang);

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
    });
  });

  // 2. Countdown Init
  initCountdown();

  // 3. Mobile Navigation
  initMobileNav();

  // 4. RSVP Form
  initRSVPForm();

  // 5. Floorplan Modal
  initFloorplanModal();

  // 6. Calendar links
  initCalendarButtons();

  // 7. Navbar scroll styling
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-navbar');
    if (window.scrollY > 40) {
      nav.classList.add('bg-background/95', 'shadow-lg');
      nav.classList.remove('bg-background/80');
    } else {
      nav.classList.add('bg-background/80');
      nav.classList.remove('bg-background/95', 'shadow-lg');
    }
  });
});

// Set Language function
function setLanguage(lang) {
  if (!translations[lang]) lang = 'de';
  currentLang = lang;
  localStorage.setItem('party_lang', lang);

  // Update button states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const dict = translations[lang];

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update all elements with data-i18n-html
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Refresh active modal if open
  updateModalContent();
}

// Countdown Timer to September 19, 2026, 18:30 CEST
function initCountdown() {
  const targetDate = new Date('2026-09-19T18:30:00+02:00').getTime();

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const daysEl = document.getElementById('cd-days-val');
    const hoursEl = document.getElementById('cd-hours-val');
    const minsEl = document.getElementById('cd-mins-val');
    const secsEl = document.getElementById('cd-secs-val');

    if (distance < 0) {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minsEl) minsEl.textContent = '00';
      if (secsEl) secsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// Mobile Nav Menu
function initMobileNav() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menuDropdown = document.getElementById('mobile-menu-dropdown');
  if (!menuBtn || !menuDropdown) return;

  menuBtn.addEventListener('click', () => {
    const isHidden = menuDropdown.classList.contains('hidden');
    if (isHidden) {
      menuDropdown.classList.remove('hidden');
      menuBtn.setAttribute('aria-expanded', 'true');
    } else {
      menuDropdown.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu when clicking link
  menuDropdown.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuDropdown.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// RSVP Form Handling
function initRSVPForm() {
  const form = document.getElementById('rsvp-form');
  const statusSelect = document.getElementById('rsvp-status');
  const plusOneContainer = document.getElementById('plus-one-container');
  const dietContainer = document.getElementById('diet-container');
  const songContainer = document.getElementById('song-container');
  const emailBtn = document.getElementById('rsvp-email-btn');

  if (statusSelect && plusOneContainer) {
    statusSelect.addEventListener('change', () => {
      const val = statusSelect.value;
      if (val === 'yes_two') {
        plusOneContainer.classList.remove('hidden');
        if (dietContainer) dietContainer.classList.remove('hidden');
        if (songContainer) songContainer.classList.remove('hidden');
      } else if (val === 'yes_one') {
        plusOneContainer.classList.add('hidden');
        if (dietContainer) dietContainer.classList.remove('hidden');
        if (songContainer) songContainer.classList.remove('hidden');
      } else {
        // no
        plusOneContainer.classList.add('hidden');
        if (dietContainer) dietContainer.classList.add('hidden');
        if (songContainer) songContainer.classList.add('hidden');
      }
    });
  }

  // Pre-fill from localStorage if previously submitted
  try {
    const saved = localStorage.getItem('party_rsvp_data');
    if (saved) {
      const data = JSON.parse(saved);
      if (data.name) document.getElementById('rsvp-name').value = data.name;
      if (data.email) document.getElementById('rsvp-email').value = data.email;
      if (data.status) {
        statusSelect.value = data.status;
        statusSelect.dispatchEvent(new Event('change'));
      }
      if (data.plusone && document.getElementById('rsvp-plusone')) {
        document.getElementById('rsvp-plusone').value = data.plusone;
      }
      if (data.diet && document.getElementById('rsvp-diet')) {
        document.getElementById('rsvp-diet').value = data.diet;
      }
      if (data.allergies && document.getElementById('rsvp-allergies')) {
        document.getElementById('rsvp-allergies').value = data.allergies;
      }
      if (data.song && document.getElementById('rsvp-song')) {
        document.getElementById('rsvp-song').value = data.song;
      }
      if (data.msg && document.getElementById('rsvp-msg')) {
        document.getElementById('rsvp-msg').value = data.msg;
      }
    }
  } catch (e) {}

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('rsvp-name').value.trim();
      const email = document.getElementById('rsvp-email').value.trim();
      const status = statusSelect ? statusSelect.value : 'yes_one';
      const plusone = document.getElementById('rsvp-plusone') ? document.getElementById('rsvp-plusone').value.trim() : '';
      const diet = document.getElementById('rsvp-diet') ? document.getElementById('rsvp-diet').value : '';
      const allergies = document.getElementById('rsvp-allergies') ? document.getElementById('rsvp-allergies').value.trim() : '';
      const song = document.getElementById('rsvp-song') ? document.getElementById('rsvp-song').value.trim() : '';
      const msg = document.getElementById('rsvp-msg') ? document.getElementById('rsvp-msg').value.trim() : '';

      if (!name || !email) {
        alert(currentLang === 'de' ? 'Bitte fülle Name und E-Mail aus.' : currentLang === 'it' ? 'Inserisci nome ed email.' : 'Please enter your name and email.');
        return;
      }

      const rsvpData = { name, email, status, plusone, diet, allergies, song, msg, date: new Date().toISOString() };
      localStorage.setItem('party_rsvp_data', JSON.stringify(rsvpData));

      // Display Toast
      showToast(
        currentLang === 'de' 
          ? `Vielen Dank, ${name}! Deine Zusage wurde erfasst.` 
          : currentLang === 'it'
          ? `Grazie mille, ${name}! La tua risposta è stata registrata.`
          : `Thank you, ${name}! Your RSVP has been recorded.`
      );

      // Also generate mailto link option
      updateMailtoLink(rsvpData);
    });
  }

  if (emailBtn) {
    emailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = document.getElementById('rsvp-name').value.trim() || 'Gast';
      const status = statusSelect ? statusSelect.options[statusSelect.selectedIndex].text : 'Zusage';
      const plusone = document.getElementById('rsvp-plusone') ? document.getElementById('rsvp-plusone').value.trim() : '';
      const diet = document.getElementById('rsvp-diet') ? document.getElementById('rsvp-diet').value : '';
      const allergies = document.getElementById('rsvp-allergies') ? document.getElementById('rsvp-allergies').value.trim() : '';
      const song = document.getElementById('rsvp-song') ? document.getElementById('rsvp-song').value.trim() : '';
      const msg = document.getElementById('rsvp-msg') ? document.getElementById('rsvp-msg').value.trim() : '';

      const subject = `RSVP Wedding Party Alessandro & Claudia - ${name}`;
      const body = `Hallo Alessandro & Claudia,\n\nhier ist meine Rückmeldung zu eurer Hochzeitsparty:\n\nName: ${name}\nRückmeldung: ${status}\nBegleitperson: ${plusone || '-'}\nErnährung: ${diet}\nAllergien: ${allergies || '-'}\nSongwunsch: ${song || '-'}\nNachricht: ${msg || '-'}\n\nLiebe Grüße,\n${name}`;

      window.location.href = `mailto:alessandro.claudia.wedding@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
}

function updateMailtoLink(data) {
  const subject = `RSVP Wedding Party Alessandro & Claudia - ${data.name}`;
  const body = `Hallo Alessandro & Claudia,\n\nhier ist meine Rückmeldung zu eurer Hochzeitsparty:\n\nName: ${data.name}\nE-Mail: ${data.email}\nStatus: ${data.status}\nBegleitperson: ${data.plusone || '-'}\nErnährung: ${data.diet}\nAllergien: ${data.allergies || '-'}\nSongwunsch: ${data.song || '-'}\nNachricht: ${data.msg || '-'}\n\nLiebe Grüße,\n${data.name}`;

  const emailBtn = document.getElementById('rsvp-email-btn');
  if (emailBtn) {
    emailBtn.setAttribute('href', `mailto:alessandro.claudia.wedding@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  }
}

// Floor Plans Modal
let activeFloorKey = 'kuppelraum';

function initFloorplanModal() {
  const modal = document.getElementById('floorplan-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  if (!modal) return;

  // Buttons that trigger modal
  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const floor = btn.dataset.openModal || 'kuppelraum';
      openFloorModal(floor);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => closeFloorModal());
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeFloorModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeFloorModal();
    }
  });

  // Modal tab buttons
  document.querySelectorAll('.modal-tab-btn').forEach(tab => {
    tab.addEventListener('click', () => {
      const floor = tab.dataset.floor;
      if (floor) {
        activeFloorKey = floor;
        updateModalContent();
      }
    });
  });
}

function openFloorModal(floorKey) {
  const modal = document.getElementById('floorplan-modal');
  if (!modal) return;
  activeFloorKey = floorKey;
  updateModalContent();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeFloorModal() {
  const modal = document.getElementById('floorplan-modal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function updateModalContent() {
  const modal = document.getElementById('floorplan-modal');
  if (!modal || !modal.classList.contains('active')) return;

  const data = floorPlansData[activeFloorKey];
  if (!data) return;

  // Update tabs active state
  document.querySelectorAll('.modal-tab-btn').forEach(tab => {
    if (tab.dataset.floor === activeFloorKey) {
      tab.classList.add('active', 'border-gold', 'text-gold', 'bg-gold/10');
      tab.classList.remove('text-muted-foreground', 'border-transparent');
    } else {
      tab.classList.remove('active', 'border-gold', 'text-gold', 'bg-gold/10');
      tab.classList.add('text-muted-foreground', 'border-transparent');
    }
  });

  // Title & description
  const titleEl = document.getElementById('modal-title');
  const descEl = document.getElementById('modal-desc');
  const galleryEl = document.getElementById('modal-gallery');

  if (titleEl) titleEl.textContent = data.title[currentLang] || data.title.de;
  if (descEl) descEl.textContent = data.desc[currentLang] || data.desc.de;

  // Render gallery
  if (galleryEl) {
    galleryEl.innerHTML = data.plans.map(p => `
      <div class="bg-secondary/40 border border-border/80 p-5 rounded-md flex flex-col items-center text-center">
        <div class="overflow-hidden mb-4 bg-background/50 p-2 rounded w-full flex items-center justify-center">
          <img src="${p.img}" alt="${p.label[currentLang] || p.label.de}" class="max-h-64 max-w-full object-contain hover:scale-105 transition-transform duration-500" loading="lazy">
        </div>
        <p class="text-sm font-body text-cream tracking-wide font-medium">${p.label[currentLang] || p.label.de}</p>
      </div>
    `).join('');
  }
}

// Calendar Export (Google Calendar & .ics)
function initCalendarButtons() {
  const btn = document.getElementById('btn-add-calendar');
  if (!btn) return;

  btn.addEventListener('click', (e) => {
    // If command or ctrl click or option menu, let default .ics download happen
    // Also provide option for Google Calendar directly
    const title = encodeURIComponent("Alessandro & Claudia — Post-Wedding Party 🥂💍");
    const details = encodeURIComponent("Post-Wedding Party mit Freunden in der Lounge im Turm! Ebene 13–15 hoch über Berlin. Aperitivo ab 18:30 Uhr, Flying Dinner & Party.");
    const location = encodeURIComponent("Lounge im Turm, Frankfurter Tor 9, 10243 Berlin");
    // Start: 2026-09-19T16:30:00Z, End: 2026-09-20T03:00:00Z
    const dates = "20260919T163000Z/20260920T030000Z";
    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;

    // Prompt or download .ics
    const choice = confirm(currentLang === 'de' 
      ? 'Möchtest du den Termin direkt in Google Kalender öffnen? (Abbrechen für .ics-Download)'
      : currentLang === 'it'
      ? 'Vuoi aprire l\'evento direttamente su Google Calendar? (Annulla per scaricare il file .ics)'
      : 'Open in Google Calendar? (Cancel to download .ics file)');

    if (choice) {
      e.preventDefault();
      window.open(gcalUrl, '_blank');
    }
  });
}

// Toast notification helper
function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'fixed bottom-6 right-6 z-50 max-w-md bg-card/95 border border-gold/60 text-warm-white p-4 rounded-lg shadow-2xl backdrop-blur-md flex items-center gap-3 transition-transform duration-300';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <div class="w-8 h-8 rounded-full bg-gold/20 border border-gold flex items-center justify-center flex-shrink-0 text-gold">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <div class="text-sm font-body">
      <p class="font-medium text-gold">${currentLang === 'de' ? 'Erfolgreich!' : currentLang === 'it' ? 'Perfetto!' : 'Success!'}</p>
      <p class="text-muted-foreground">${message}</p>
    </div>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}
