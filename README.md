# Mystery United — sollicitatiesite Maurice Morsink

Statische onepager (geen build-stap) waarmee Maurice zich voorstelt aan Mystery United.

## Lokaal bekijken

Geen installatie nodig — de site is puur HTML/CSS/JS. Twee opties:

1. **Snelst**: open `index.html` direct in de browser (dubbelklikken).
2. **Met live-reload** (handig tijdens bewerken): installeer de VS Code-extensie *Live Server* en klik
   rechtsonder op "Go Live", of run `npx serve .` in deze map en open de getoonde URL.

## Structuur

```
index.html                 De onepager zelf
cases/                      Twee uitgebreide case-pagina's (Zomerfeesten Rietmolen, ESPN)
css/styles.css              Alle styling (kleuren, typografie, componenten)
js/main.js                  Lightbox, scroll-animaties, nav-gedrag
js/map.js                   Leaflet-integratie voor de stadionkaart
js/archive-carousel.js      Bouwt en autoscrollt de archiefcarrousel (Instagram-stories)
data/stadiums.js            Databron van de stadionkaart (club, stad, land, foto, ...)
data/archive-photos.js      Bestandsnamenlijst voor de archiefcarrousel
assets/photos/               Hier komen de genummerde foto's, zie manifest
assets/photos/Stories IG/    Losse Instagram-story-exports voor de archiefcarrousel
PHOTO_MANIFEST.md           Welk nummer hoort bij welke plek op de site
```

## Foto's toevoegen

Zie **`PHOTO_MANIFEST.md`** voor het complete overzicht. Kort samengevat: sla een foto op als
`assets/photos/foto-07.jpg` (bijvoorbeeld) en hij verschijnt automatisch op de bijbehorende plek.
Ontbreekt een bestand nog, dan toont de site een nette grijze placeholder met dat nummer erop —
niets staat er dus "kapot" bij terwijl je foto's verzamelt.

## Stadiondata aanvullen (ods-bestand)

`data/stadiums.js` bevat nu 6 voorbeeldstadions zodat de kaart al werkt. Zodra het ods-bestand met
alle 49 wedstrijden/20+ stadions/5 landen er is:

1. Open `data/stadiums.js` — bovenaan staat het schema (club, stad, land, coördinaten, jaar, detail, foto).
2. Voeg per stadion een nieuw object toe aan de `STADIUMS`-array, met een nieuw fotonummer
   (het volgende vrije nummer staat onderaan `PHOTO_MANIFEST.md`).
3. Coördinaten (lat/lng) zijn simpel op te zoeken door de stadionnaam te googelen + "coordinates",
   of via [latlong.net](https://www.latlong.net/).
4. Zet `thuisbasis: true` alleen bij FC Twente — die marker krijgt een eigen uitstraling op de kaart.

## Nog openstaande content (`[TODO]`)

Doorzoek de HTML-bestanden op `[TODO` (of de oranje `class="todo"`-teksten) voor alle plekken die nog
tekst nodig hebben: introtekst "Over mij", exacte periodes bij Grijsen Park en Straatdesign, uitwerking
van de twee cases, de "Waarom Mystery United"-tekst en de contactgegevens.

## Deployen naar Vercel

1. `npm i -g vercel` (eenmalig, als dat nog niet geïnstalleerd is).
2. In deze map: `vercel` uitvoeren en de prompts doorlopen (project aanmaken, geen framework nodig —
   "Other" kiezen bij de framework-vraag).
3. Voor een definitieve productie-deploy: `vercel --prod`.

Er is geen build-commando of output-directory nodig — Vercel serveert de bestanden direct.
