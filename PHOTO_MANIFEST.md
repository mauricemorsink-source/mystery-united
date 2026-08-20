# Fotomanifest

Elke foto-plek op de site heeft een vast nummer en een vaste bestandsnaam: `assets/photos/foto-NN.jpg`.
Zet een foto met de juiste naam in die map en hij verschijnt automatisch — geen HTML-aanpassingen nodig.
Ontbreekt een bestand, dan toont de site een nette placeholder met het nummer erop.

> Gebruik `.jpg`. Wil je een ander formaat (`.png`, `.webp`)? Pas dan ook de `src=`/`foto:` in de betreffende
> HTML/JS aan naar dezelfde extensie.

> Alle ingevulde foto's (01, 07–14) zijn automatisch verkleind naar max. 2000px breed/hoog en gecomprimeerd
> als JPEG (kwaliteit 82) — van soms 15+ MB rechtstreeks van de fotograaf naar ~200–600 KB. De originelen
> staan ongewijzigd in `assets/photos/WVJL/` en `assets/photos/ZFR/`.

## Hero
| Nr / bestand | Sectie | Omschrijving |
|---|---|---|
| **01** ✅ | Hero — foto rechts naast de titel (landscape kader) | Ingevuld: de Arsenal/Emirates Stadium-foto. Vervang gerust door een andere foto met dezelfde bestandsnaam. |

`assets/maurice.png` wordt nergens meer gebruikt sinds foto-01 de hero-foto is geworden — laat 'm gerust staan, of verwijder 'm zelf als je wilt opruimen.

## index.html — Over mij (2. fotolayout)
Eén foto naast de tekst, meer is niet nodig voor deze sectie.
| Nr / bestand | Sectie | Omschrijving |
|---|---|---|
| **03** ✅ | Naast de tekst | Portret van Maurice (zwart shirt, geblokte jasje). |

`foto-02.webp` (Maurice op het terrein van Zomerfeesten Rietmolen) is niet meer in gebruik —
staat nog gewoon op schijf, mocht je 'm elders willen inzetten. `foto-04` (Maurice met vrienden
en de kampioensschaal) is verplaatst naar de sectie "Waarom Mystery United" — zie **51** verderop.
Nummers 05/06 zijn niet meer in gebruik.

## Werkervaring & studie
Geen foto's bij deze sectie — puur tekst, uitgelijnd op bedrijf/rol/periode.

## index.html — Mijn werk als contentmarketeer (4. case-kaarten)
| Nr | Sectie | Omschrijving |
|---|---|---|
| 07 ✅ | Case-kaart Zomerfeesten Rietmolen | Ingevuld: de ZFR-casecover (ook gebruikt als 09, de hero van de casepagina zelf). |
| 08 ✅ | Case-kaart ESPN Wedstrijd van je Leven | Ingevuld: de WVJL-casecover (`scdoyerphotography-35`, ook gebruikt als 12, de hero van de casepagina zelf). |

## cases/zomerfeesten-rietmolen.html
Volledig herschreven met de door jou aangeleverde teksten (rol, duur, bereik, groeiverhaal, huisstijl,
AI-werkwijze, teamwork). Bronmateriaal (13 foto's van Anouk Lentelink Fotografie) staat in `assets/photos/ZFR/`.
| Nr | Sectie | Omschrijving |
|---|---|---|
| 09 ✅ | Hero | Ingevuld — zelfde foto als casecover 07. |
| 10 ✅ | Na "Hoe marketing meer vorm kreeg" | Brede sfeerfoto van het hoofdpodium bij zonsondergang (`...AnoukLentelinkFotografie-2`). |
| 53 ✅ | Na "Waar we nu staan" | Confettimoment boven het publiek (`...AnoukLentelinkFotografie-92`). |
| 54 ✅ | Na "Een herkenbare identiteit" | Nachtshot met vuur en de volle huisstijl in beeld — logo, kleuren, windmolen-motief (`...AnoukLentelinkFotografie-58`). |
| 11 ✅ | Bij "Teamwork" | Close-up van bezoekers in de menigte (`...AnoukLentelinkFotografie-67`). |

**Nog open in deze case:** het voorbeeld AI-prompt en de link naar de Instagram-timeline staan nog als `[TODO]` in de tekst zelf.

## cases/espn-wedstrijd-van-je-leven.html
Volledig herschreven met de door jou aangeleverde teksten (rol, duur, bereik, het "boeren"-verhaal, de
pausvideo, resultaten, het evenement zelf). Bronmateriaal staat in `assets/photos/WVJL/`.
| Nr | Sectie | Omschrijving |
|---|---|---|
| 12 ✅ | Hero | Ingevuld — zelfde foto als casecover 08. |
| 55 ✅ | Na "Hoe het begon" | VV Rietmolen-teamfoto met vlaggen en publiek (`vvrietmolen groepsfoto`). |
| 57 ✅ | "Voorbeelden uit de campagne" (mini-gallery, 2×2) | Het team in trainingspakken in de veekar, geënsceneerd als vertrekhal (koffers, zonnebrillen). |
| 58 ✅ | "Voorbeelden uit de campagne" (mini-gallery, 2×2) | Maurice in vol pausornaat, met een VV Rietmolen-sjaal om — de "paus" uit de video. |
| 59 ✅ | "Voorbeelden uit de campagne" (mini-gallery, 2×2) | Het team in de schuur met "STEM NU"-posters — het boeren-thema in actie. |
| 61 ✅ | "Voorbeelden uit de campagne" (mini-gallery, 2×2) | Kardinalen en de paus voor de kerk, met een trekker op de achtergrond — vat het boeren/pausvideo-concept in één beeld samen. |

Bron: `assets/photos/Voorbereiding wVJL/`. Daar staan nog een paar leuke ongebruikte extra's:
een teamhuddle in de wei met koeien op de achtergrond, en een BTS-foto van iemand met een lamp
op zijn schouder.
Prima back-ups mocht je willen wisselen.
| 60 ✅ | Na "Van Rietmolen naar het hele land" | Luchtfoto van het sportpark met ESPN-uitzendwagens (`IMG_0446`). |
| 14 ✅ | Na "Van Rietmolen naar het hele land" | Commentator/broadcastopstelling (`scdoyerphotography-42`) — sluit aan bij het bereik-verhaal. |
| 56 ✅ | Bij "Van campagne tot evenement" | Spelers vieren feest, close-up (`Oui-16037`). |
| 13 ✅ | Bij "Van campagne tot evenement" | Teamfoto op het veld met volle tribune (`wedstrijd van je leven groepsfoto`). |

## data/stadiums.js — Stadionkaart popups (24 stadions, uit je wedstrijdenlijst)
Optioneel per stadion — ontbreekt een foto, dan blijft de popup gewoon netjes (kleine placeholder).
Deze nummers (15–38) grenzen direct aan de bentogrid (39+) — een nieuw stadion toevoegen betekent dus
alles vanaf 39 een plekje opschuiven (zelfde aanpak als eerder in dit document).

| Nr | Club | Stad | Bezoeken |
|---|---|---|---|
| 15 | FC Twente (thuisbasis) | Enschede | 20× sinds 2014 |
| 16 | Borussia Dortmund | Dortmund | 3× sinds 2023 |
| 17 | FC Utrecht | Utrecht | 1× (2026) |
| 18 | Fortuna Düsseldorf | Düsseldorf | 1× (2025) |
| 19 | Schalke 04 | Gelsenkirchen | 2× sinds 2023 |
| 20 | De Graafschap | Doetinchem | 3× sinds 2024 |
| 21 | Málaga CF | Málaga | 1× (2025) |
| 22 | VV Rietmolen | Rietmolen | 1× (2025) — ESPN-wedstrijd, zie case |
| 23 | Tottenham Hotspur | Londen | 1× (2025) |
| 24 | Leyton Orient | Londen | 1× (2025) |
| 25 | Arsenal FC | Londen | 1× (2025) |
| 26 | Millwall FC | Londen | 1× (2025) |
| 27 | VV Katwijk | Katwijk | 1× (2024) |
| 28 | VfL Osnabrück | Osnabrück | 1× (2024) |
| 29 | PSV Eindhoven | Eindhoven | 1× (2024) |
| 30 | AC Milan | Milaan | 1× (2023) |
| 31 | Como 1907 | Como | 1× (2023) |
| 32 | AFC Ajax | Amsterdam | 2× sinds 2022 |
| 33 | NAC Breda | Breda | 1× (2023) |
| 34 | Bon Boys | Haaksbergen | 1× (2022) |
| 35 | West Ham United | Londen | 1× (2018) |
| 36 | Charlton Athletic | Londen | 1× (jaar nog te corrigeren) |
| 37 | Vitesse | Arnhem | 1× (2015) |
| 38 | Roda JC | Kerkrade | 1× (2008) — je eerste wedstrijd |

**Let op — één entry in `data/stadiums.js` staat nog gemarkeerd met `// TODO`:** het jaartal bij
Charlton Athletic (36) klopte niet in de brontabel. Zet het juiste jaartal erin zodra je het weet.

## index.html — Archiefcarrousel (Voetbalpassie, "Een greep uit het archief")
Geen genummerde foto's — deze carrousel leest rechtstreeks alle bestanden op uit
`data/archive-photos.js`, die verwijzen naar `assets/photos/Stories IG/` (originele
Instagram-bestandsnamen). Nieuwe foto toevoegen: bestand in die map zetten, naam
toevoegen aan de lijst in `data/archive-photos.js`.

*(De oude fotomozaïek/bentogrid-sectie met nummers 39–50 is op verzoek verwijderd;
die nummers zijn niet meer in gebruik.)*

## index.html — Waarom Mystery United & Contact
| Nr | Sectie | Omschrijving |
|---|---|---|
| 51 ✅ | Waarom Mystery United | Maurice met vrienden en de kampioensschaal (was foto-04 bij Over mij). |
| 52 | Contact | Niet meer in gebruik — sectie heeft nu een plain (fotoloze) achtergrond, zelfde stijl als de hero. `foto-52.webp` staat nog gewoon op schijf. |

---

**Volgende vrije nummer voor nieuwe/extra foto's (buiten stadions): 62.**
