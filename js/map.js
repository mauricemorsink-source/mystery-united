/**
 * Leaflet-integratie voor de stadionkaart.
 * Verwacht dat data/stadiums.js (const STADIUMS) vóór dit bestand is geladen.
 */
(function () {
  const mapEl = document.getElementById("stadium-map");
  if (!mapEl || typeof L === "undefined" || typeof STADIUMS === "undefined") return;

  const map = L.map(mapEl, {
    scrollWheelZoom: false,
    minZoom: 3,
    maxZoom: 19
  }).setView([49.5, 8], 4);

  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution: "&copy; OpenStreetMap-bijdragers &copy; CARTO",
    maxZoom: 19
  }).addTo(map);

  // Scrollen op de pagina moet blijven werken, dus zoomen met het scrollwiel staat pas aan
  // zodra je op de kaart klikt (en gaat weer uit zodra je de kaart verlaat).
  map.on("click", () => map.scrollWheelZoom.enable());
  mapEl.addEventListener("mouseleave", () => map.scrollWheelZoom.disable());

  function pinIcon(isHome) {
    return L.divIcon({
      className: "",
      html: `<div class="marker-pin${isHome ? " marker-home" : ""}"></div>`,
      iconSize: isHome ? [22, 22] : [16, 16],
      iconAnchor: isHome ? [11, 22] : [8, 16]
    });
  }

  function popupHtml(s) {
    const photoNum = (s.foto.match(/foto-(\d+)/) || [, "??"])[1];
    const bezoekLabel = s.bezoeken > 1
      ? `${s.bezoeken}× · sinds ${s.eersteBezoek}${s.laatsteBezoek ? " – " + s.laatsteBezoek : ""}`
      : `${s.eersteBezoek}`;

    const rows = [
      { label: "Stad", value: `${s.stad}, ${s.land}` },
      ...(s.wedstrijden.length === 1
        ? [
            { label: "Wedstrijd", value: `${s.wedstrijden[0].wedstrijd} (${s.wedstrijden[0].stand})` },
            { label: "Competitie", value: s.wedstrijden[0].competitie }
          ]
        : []),
      { label: "Bezocht", value: bezoekLabel }
    ];

    const rowsHtml = rows
      .map((r) => `<div class="map-popup-row"><dt>${r.label}</dt><dd>${r.value}</dd></div>`)
      .join("");

    const matchListHtml = s.wedstrijden.length > 1
      ? `<ul class="map-popup-matches">${s.wedstrijden
          .map((m) => `<li><strong>${m.jaar}</strong> ${m.wedstrijd} (${m.stand})<span class="map-popup-comp">${m.competitie}</span></li>`)
          .join("")}</ul>`
      : "";

    return `
      <div class="map-popup">
        ${s.thuisbasis ? '<span class="home-badge">Thuisbasis</span>' : ""}
        <div class="photo" data-num="${photoNum}">
          <img src="${s.foto}" alt="${s.club} · ${s.stad}" onerror="this.parentElement.classList.add('missing')">
        </div>
        <h4>${s.club}</h4>
        <dl class="map-popup-info">${rowsHtml}</dl>
        ${matchListHtml}
      </div>
    `;
  }

  const markersByCountry = {};

  STADIUMS.forEach((s) => {
    const marker = L.marker([s.lat, s.lng], { icon: pinIcon(s.thuisbasis) })
      .addTo(map)
      .bindPopup(popupHtml(s), { closeButton: true });

    if (!markersByCountry[s.land]) markersByCountry[s.land] = [];
    markersByCountry[s.land].push(marker);
  });

  // Tellers vullen (afgeleid van de data, blijft dus altijd kloppen)
  const countEl = document.getElementById("map-count-stadiums");
  const countriesEl = document.getElementById("map-count-countries");
  const matchesEl = document.getElementById("map-count-matches");
  const sinceEl = document.getElementById("map-count-since");
  if (countEl) countEl.textContent = STADIUMS.length;
  if (countriesEl) countriesEl.textContent = new Set(STADIUMS.map((s) => s.land)).size;
  if (matchesEl) matchesEl.textContent = STADIUMS.reduce((sum, s) => sum + s.bezoeken, 0);
  if (sinceEl) sinceEl.textContent = Math.min(...STADIUMS.map((s) => s.eersteBezoek));

  // Landfilter
  const filterWrap = document.getElementById("map-filters");
  if (filterWrap) {
    const countries = Object.keys(markersByCountry).sort();
    const makeBtn = (label, land) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "map-filter-btn" + (land === "all" ? " is-active" : "");
      btn.textContent = label;
      btn.dataset.land = land;
      return btn;
    };

    filterWrap.appendChild(makeBtn("Alle landen", "all"));
    countries.forEach((land) => filterWrap.appendChild(makeBtn(land, land)));

    filterWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".map-filter-btn");
      if (!btn) return;

      filterWrap.querySelectorAll(".map-filter-btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      const land = btn.dataset.land;
      Object.entries(markersByCountry).forEach(([country, markers]) => {
        const show = land === "all" || land === country;
        markers.forEach((m) => {
          if (show) {
            if (!map.hasLayer(m)) m.addTo(map);
          } else {
            map.removeLayer(m);
          }
        });
      });
    });
  }
})();
