/**
 * Stadiondata voor de interactieve Europakaart.
 *
 * Gebaseerd op de volledige wedstrijdenlijst (49 wedstrijden, sinds 2008), samengevoegd per stadion.
 * Osnabrück (Saarbrücken), NAC Breda (MVV Maastricht) en Bon Boys (Kolenbranderweg 11, Haaksbergen)
 * zijn door jou bevestigd. Charlton Athletic (2018 i.p.v. 2017) is gecorrigeerd en extern geverifieerd
 * (Charlton 1-0 Blackburn, 28 april 2018, The Valley) — alle overige opponent-namen zijn nagelopen en kloppen.
 *
 * Schema per record:
 *   club          — thuisclub van het stadion
 *   stad, land    — locatie
 *   lat, lng      — coördinaten
 *   bezoeken      — aantal keer dat je hier bent geweest
 *   eersteBezoek  — jaartal van je eerste bezoek
 *   laatsteBezoek — jaartal van je meest recente bezoek (alleen als dat afwijkt van eersteBezoek)
 *   wedstrijden   — array van { jaar, wedstrijd: "Team A – Team B", stand, competitie }, nieuwste eerst.
 *                   Leeg bij FC Twente (té veel bezoeken om individueel te tonen).
 *   foto          — pad naar de foto (nummer uit PHOTO_MANIFEST.md)
 *   thuisbasis    — true voor FC Twente / De Grolsch Veste
 */

const STADIUMS = [
  {
    club: "FC Twente",
    stad: "Enschede",
    land: "Nederland",
    lat: 52.2432,
    lng: 6.8783,
    bezoeken: 20,
    eersteBezoek: 2014,
    laatsteBezoek: 2026,
    wedstrijden: [],
    foto: "assets/photos/foto-15.jpg",
    thuisbasis: true
  },
  {
    club: "Borussia Dortmund",
    stad: "Dortmund",
    land: "Duitsland",
    lat: 51.4926,
    lng: 7.4519,
    bezoeken: 3,
    eersteBezoek: 2023,
    laatsteBezoek: 2026,
    wedstrijden: [
      { jaar: 2026, wedstrijd: "Borussia Dortmund – FC Internazionale Milano", stand: "0-2", competitie: "UEFA Champions League" },
      { jaar: 2025, wedstrijd: "Borussia Dortmund – Bodø/Glimt", stand: "2-2", competitie: "UEFA Champions League" },
      { jaar: 2023, wedstrijd: "Borussia Dortmund – RB Leipzig", stand: "2-3", competitie: "Bundesliga" }
    ],
    foto: "assets/photos/foto-16.jpg",
    thuisbasis: false
  },
  {
    club: "FC Utrecht",
    stad: "Utrecht",
    land: "Nederland",
    lat: 52.0793,
    lng: 5.1228,
    bezoeken: 1,
    eersteBezoek: 2026,
    wedstrijden: [
      { jaar: 2026, wedstrijd: "FC Utrecht – FC Twente", stand: "1-2", competitie: "KNVB Beker" }
    ],
    foto: "assets/photos/foto-17.jpg",
    thuisbasis: false
  },
  {
    club: "Fortuna Düsseldorf",
    stad: "Düsseldorf",
    land: "Duitsland",
    lat: 51.2609,
    lng: 6.7333,
    bezoeken: 1,
    eersteBezoek: 2025,
    wedstrijden: [
      { jaar: 2025, wedstrijd: "Fortuna Düsseldorf – SpVgg Greuther Fürth", stand: "2-1", competitie: "2. Bundesliga" }
    ],
    foto: "assets/photos/foto-18.jpg",
    thuisbasis: false
  },
  {
    club: "Schalke 04",
    stad: "Gelsenkirchen",
    land: "Duitsland",
    lat: 51.5550,
    lng: 7.0678,
    bezoeken: 2,
    eersteBezoek: 2023,
    laatsteBezoek: 2025,
    wedstrijden: [
      { jaar: 2025, wedstrijd: "Schalke 04 – SC Paderborn 07", stand: "2-1", competitie: "2. Bundesliga" },
      { jaar: 2023, wedstrijd: "Schalke 04 – FC Twente", stand: "2-2", competitie: "Oefenwedstrijd" }
    ],
    foto: "assets/photos/foto-19.jpg",
    thuisbasis: false
  },
  {
    club: "De Graafschap",
    stad: "Doetinchem",
    land: "Nederland",
    lat: 51.9646,
    lng: 6.2894,
    bezoeken: 3,
    eersteBezoek: 2024,
    laatsteBezoek: 2025,
    wedstrijden: [
      { jaar: 2025, wedstrijd: "De Graafschap – Jong PSV", stand: "3-2", competitie: "Eerste Divisie" },
      { jaar: 2025, wedstrijd: "De Graafschap – Roda JC Kerkrade", stand: "2-0", competitie: "Eerste Divisie" },
      { jaar: 2024, wedstrijd: "De Graafschap – Jong AZ", stand: "2-1", competitie: "Eerste Divisie" }
    ],
    foto: "assets/photos/foto-20.jpg",
    thuisbasis: false
  },
  {
    club: "Málaga CF",
    stad: "Málaga",
    land: "Spanje",
    lat: 36.7314,
    lng: -4.4236,
    bezoeken: 1,
    eersteBezoek: 2025,
    wedstrijden: [
      { jaar: 2025, wedstrijd: "Málaga CF – Deportivo La Coruña", stand: "3-0", competitie: "Segunda División" }
    ],
    foto: "assets/photos/foto-21.jpg",
    thuisbasis: false
  },
  {
    club: "VV Rietmolen",
    stad: "Rietmolen",
    land: "Nederland",
    lat: 52.0333,
    lng: 6.5975,
    bezoeken: 1,
    eersteBezoek: 2025,
    wedstrijden: [
      { jaar: 2025, wedstrijd: "VV Rietmolen – PSV Eindhoven", stand: "3-3", competitie: "ESPN Wedstrijd van je Leven" }
    ],
    foto: "assets/photos/foto-22.jpg",
    thuisbasis: false
  },
  {
    club: "Tottenham Hotspur",
    stad: "Londen",
    land: "Engeland",
    lat: 51.6043,
    lng: -0.0664,
    bezoeken: 1,
    eersteBezoek: 2025,
    wedstrijden: [
      { jaar: 2025, wedstrijd: "Tottenham Hotspur – Leicester City", stand: "1-2", competitie: "Premier League" }
    ],
    foto: "assets/photos/foto-23.jpg",
    thuisbasis: false
  },
  {
    club: "Leyton Orient",
    stad: "Londen",
    land: "Engeland",
    lat: 51.5588,
    lng: -0.0141,
    bezoeken: 1,
    eersteBezoek: 2025,
    wedstrijden: [
      { jaar: 2025, wedstrijd: "Leyton Orient – Reading FC", stand: "2-0", competitie: "League One" }
    ],
    foto: "assets/photos/foto-24.jpg",
    thuisbasis: false
  },
  {
    club: "Arsenal FC",
    stad: "Londen",
    land: "Engeland",
    lat: 51.5549,
    lng: -0.1084,
    bezoeken: 1,
    eersteBezoek: 2025,
    wedstrijden: [
      { jaar: 2025, wedstrijd: "Arsenal FC – Dinamo Zagreb", stand: "3-0", competitie: "UEFA Champions League" }
    ],
    foto: "assets/photos/foto-25.jpg",
    thuisbasis: false
  },
  {
    club: "Millwall FC",
    stad: "Londen",
    land: "Engeland",
    lat: 51.4860,
    lng: -0.0502,
    bezoeken: 1,
    eersteBezoek: 2025,
    wedstrijden: [
      { jaar: 2025, wedstrijd: "Millwall FC – Cardiff City", stand: "2-2", competitie: "Championship" }
    ],
    foto: "assets/photos/foto-26.jpg",
    thuisbasis: false
  },
  {
    club: "VV Katwijk",
    stad: "Katwijk",
    land: "Nederland",
    lat: 52.2010,
    lng: 4.3985,
    bezoeken: 1,
    eersteBezoek: 2024,
    wedstrijden: [
      { jaar: 2024, wedstrijd: "VV Katwijk – FC Twente", stand: "2-3", competitie: "KNVB Beker" }
    ],
    foto: "assets/photos/foto-27.jpg",
    thuisbasis: false
  },
  {
    club: "VfL Osnabrück",
    stad: "Osnabrück",
    land: "Duitsland",
    lat: 52.2871,
    lng: 8.0642,
    bezoeken: 1,
    eersteBezoek: 2024,
    wedstrijden: [
      { jaar: 2024, wedstrijd: "VfL Osnabrück – 1. FC Saarbrücken", stand: "1-1", competitie: "3. Liga" }
    ],
    foto: "assets/photos/foto-28.jpg",
    thuisbasis: false
  },
  {
    club: "PSV Eindhoven",
    stad: "Eindhoven",
    land: "Nederland",
    lat: 51.4416,
    lng: 5.4676,
    bezoeken: 1,
    eersteBezoek: 2024,
    wedstrijden: [
      { jaar: 2024, wedstrijd: "PSV Eindhoven – FC Twente", stand: "3-1", competitie: "KNVB Beker" }
    ],
    foto: "assets/photos/foto-29.jpg",
    thuisbasis: false
  },
  {
    club: "AC Milan",
    stad: "Milaan",
    land: "Italië",
    lat: 45.4781,
    lng: 9.1240,
    bezoeken: 1,
    eersteBezoek: 2023,
    wedstrijden: [
      { jaar: 2023, wedstrijd: "AC Milan – ACF Fiorentina", stand: "1-0", competitie: "Serie A" }
    ],
    foto: "assets/photos/foto-30.jpg",
    thuisbasis: false
  },
  {
    club: "Como 1907",
    stad: "Como",
    land: "Italië",
    lat: 45.8082,
    lng: 9.0851,
    bezoeken: 1,
    eersteBezoek: 2023,
    wedstrijden: [
      { jaar: 2023, wedstrijd: "Como 1907 – Feralpisalò", stand: "2-1", competitie: "Serie B" }
    ],
    foto: "assets/photos/foto-31.jpg",
    thuisbasis: false
  },
  {
    club: "AFC Ajax",
    stad: "Amsterdam",
    land: "Nederland",
    lat: 52.3143,
    lng: 4.9416,
    bezoeken: 2,
    eersteBezoek: 2022,
    laatsteBezoek: 2023,
    wedstrijden: [
      { jaar: 2023, wedstrijd: "AFC Ajax – AZ Alkmaar", stand: "1-2", competitie: "Eredivisie" },
      { jaar: 2022, wedstrijd: "AFC Ajax – FC Shakhtar Donetsk", stand: "3-1", competitie: "Oefenwedstrijd" }
    ],
    foto: "assets/photos/foto-32.jpg",
    thuisbasis: false
  },
  {
    club: "NAC Breda",
    stad: "Breda",
    land: "Nederland",
    lat: 51.5875,
    lng: 4.7696,
    bezoeken: 1,
    eersteBezoek: 2023,
    wedstrijden: [
      { jaar: 2023, wedstrijd: "NAC Breda – MVV Maastricht", stand: "4-1", competitie: "Eerste Divisie" }
    ],
    foto: "assets/photos/foto-33.jpg",
    thuisbasis: false
  },
  {
    club: "Bon Boys",
    stad: "Haaksbergen",
    land: "Nederland",
    lat: 52.169349,
    lng: 6.746734,
    bezoeken: 1,
    eersteBezoek: 2022,
    wedstrijden: [
      { jaar: 2022, wedstrijd: "Bon Boys – FC Twente", stand: "0-11", competitie: "Oefenwedstrijd" }
    ],
    foto: "assets/photos/foto-34.jpg",
    thuisbasis: false
  },
  {
    club: "West Ham United",
    stad: "Londen",
    land: "Engeland",
    lat: 51.5386,
    lng: -0.0166,
    bezoeken: 1,
    eersteBezoek: 2018,
    wedstrijden: [
      { jaar: 2018, wedstrijd: "West Ham United – Manchester City", stand: "1-4", competitie: "Premier League" }
    ],
    foto: "assets/photos/foto-35.jpg",
    thuisbasis: false
  },
  {
    club: "Charlton Athletic",
    stad: "Londen",
    land: "Engeland",
    lat: 51.4864,
    lng: 0.0365,
    bezoeken: 1,
    eersteBezoek: 2018,
    wedstrijden: [
      { jaar: 2018, wedstrijd: "Charlton Athletic – Blackburn Rovers", stand: "1-0", competitie: "League One" }
    ],
    foto: "assets/photos/foto-36.jpg",
    thuisbasis: false
  },
  {
    club: "Vitesse",
    stad: "Arnhem",
    land: "Nederland",
    lat: 51.9642,
    lng: 5.8998,
    bezoeken: 1,
    eersteBezoek: 2015,
    wedstrijden: [
      { jaar: 2015, wedstrijd: "Vitesse – FC Twente", stand: "5-1", competitie: "Eredivisie" }
    ],
    foto: "assets/photos/foto-37.jpg",
    thuisbasis: false
  },
  {
    club: "Roda JC",
    stad: "Kerkrade",
    land: "Nederland",
    lat: 50.8631,
    lng: 6.0726,
    bezoeken: 1,
    eersteBezoek: 2008,
    wedstrijden: [
      { jaar: 2008, wedstrijd: "Roda JC – FC Twente", stand: "1-1", competitie: "Eredivisie" }
    ],
    foto: "assets/photos/foto-38.jpg",
    thuisbasis: false
  }
];
