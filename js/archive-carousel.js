/**
 * Bouwt de horizontale carrousel met Instagram-story-foto's ("een greep uit het archief").
 * Moet vóór js/main.js geladen worden, zodat de lightbox-koppeling in main.js
 * ook deze dynamisch toegevoegde kaarten meepakt.
 *
 * Scrollt vanzelf door (rustig tempo), pauzeert zodra je erover hovert/tapt of
 * de pijltjes gebruikt, en loopt naadloos rond dankzij een verdubbelde fotoset.
 */
(function () {
  const track = document.getElementById("archive-track");
  if (!track || typeof ARCHIVE_PHOTOS === "undefined" || !ARCHIVE_PHOTOS.length) return;

  const folder = "assets/photos/Stories IG/";
  const cardHtml = (file) => `
    <figure class="archive-card" data-lightbox>
      <img src="${encodeURI(folder + file)}" alt="Wedstrijdbezoek uit het archief" loading="lazy">
    </figure>
  `;
  // Set dubbel zodat het einde naadloos overloopt in het begin.
  track.innerHTML = ARCHIVE_PHOTOS.map(cardHtml).join("") + ARCHIVE_PHOTOS.map(cardHtml).join("");

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const SPEED = 0.5; // pixels per frame
  let autoScroll = !prefersReducedMotion;
  let resumeTimer;

  function pause(resumeAfterMs) {
    autoScroll = false;
    clearTimeout(resumeTimer);
    if (resumeAfterMs) resumeTimer = setTimeout(() => { autoScroll = true; }, resumeAfterMs);
  }

  function tick() {
    if (autoScroll) {
      track.scrollLeft += SPEED;
      const half = track.scrollWidth / 2;
      if (track.scrollLeft >= half) track.scrollLeft -= half;
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  track.addEventListener("mouseenter", () => pause());
  track.addEventListener("mouseleave", () => { autoScroll = !prefersReducedMotion; });
  track.addEventListener("touchstart", () => pause(), { passive: true });
  track.addEventListener("touchend", () => pause(2500), { passive: true });

  function scrollByCards(direction) {
    pause(2500);
    const card = track.querySelector(".archive-card");
    const cardWidth = card ? card.getBoundingClientRect().width : 200;
    const gap = 16;
    track.scrollBy({ left: direction * (cardWidth + gap) * 2, behavior: "smooth" });
  }

  const prevBtn = document.getElementById("archive-prev");
  const nextBtn = document.getElementById("archive-next");
  if (prevBtn) prevBtn.addEventListener("click", () => scrollByCards(-1));
  if (nextBtn) nextBtn.addEventListener("click", () => scrollByCards(1));
})();
