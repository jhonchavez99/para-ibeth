/**
 * Stellar Moment — Narrative Journey & Interactive Star Chart Studio
 */

import { getVisibleSkyData } from './services/astronomyService.js';
import { searchLocation } from './services/geocodingService.js';
import { exportPosterAsPDF, exportPosterAsPNG, exportPosterAsSVG } from './services/pdfExportService.js';
import { formatLatLon } from './data/presetLocations.js';

// Application State
const state = {
  view: 'narrative', // 'narrative' | 'editor'
  narrativeStep: 0,
  isAutoPlaying: false,
  autoPlayTimer: null,
  narrativeAudio: new Audio(),
  playlistAudio: new Audio(),

  
  // Custom Studio State
  date: { day: 26, month: 7, year: 2000 }, // Month is 0-indexed (7 = August)
  time: { hour: 21, minute: 9, format: '24' },
  location: {
    name: 'Quito, Ecuador',
    lat: 0.0000,
    lon: -78.4678,
    formattedCoords: '0.00° N, 78.47° W'
  },
  theme: 'midnight',
  typography: 'serif',
  borderStyle: 'border-double',
  text: {
    title: 'THE SKY ABOVE QUITO',
    subtitle: '26 August 2000',
    locationName: 'QUITO, ECUADOR',
    quote: '“A moment written in the stars.”'
  },
  toggles: {
    constellations: true,
    constellationNames: false, // Default hidden, togglable in secret modal
    allStarNames: false,       // Default false (show text when requested, hide when checked)
    planets: true,
    coordinates: true,
    cardinal: true
  },
  chart: {
    zoom: 1.0,
    rotation: 0
  }
};

// =========================================================================
// 🌟 CONFIGURACIÓN DE HISTORIA Y AUDIOS DE VOCAROO PARA IBETH
// =========================================================================
// =========================================================================
// 🌟 CONFIGURACIÓN DE HISTORIA Y AUDIOS DE VOCAROO PARA IBETH
// =========================================================================
const NARRATIVE_SCENES = [
  {
    step: 0,
    counter: "00 / 09",
    progress: 0,
    title: "El centro del mundo",
    subtitle: "Quito, Ecuador · Latitud 00°00'00'' · 26 de Agosto de 2000 · 21:09",
    text: "Comienza a anochecer en el centro del planeta, en la ciudad de Quito a las <span class=\"gold-num-glow\">9</span> de la noche con <span class=\"gold-num-glow\">9</span> minutos, latitud 00°00'00'', el día 26 de agosto del 2000.",
    btnNextText: "Comenzar Viaje →",
    starsLevel: 0,
    highlightConstellations: [],
    showLines: false,
    showNames: false,
    showBrightNames: false,
    showPlanets: false,
    highlightCompass: true,
    showGrid: false,
    audioUrl: "https://media.vocaroo.com/mp3/1gJbicOCwqVc"
  },
  {
    step: 1,
    counter: "01 / 09",
    progress: 11,
    title: "El universo",
    subtitle: "Una princesa por aparecer",
    text: "El espacio se encuentra en un silencio oscuro, el cosmos aguarda paciente la víspera de presenciar la luz más hermosa de todo el firmamento. Una bebé, una princesa estaba a punto de poner el cielo patas arriba.",
    btnNextText: "Continuar →",
    starsLevel: 1,
    highlightConstellations: [],
    showLines: false,
    showNames: false,
    showBrightNames: false,
    showPlanets: false,
    highlightCompass: false,
    showGrid: false,
    audioUrl: ""
  },
  {
    step: 2,
    counter: "02 / 09",
    progress: 22,
    title: "Las primeras estrellas",
    subtitle: "El nacimiento de una nueva estrella",
    text: "Los astros que vemos como estrellas y polvo cósmico se alinean uno detrás de otro, pues están dejando espacio para un brillo único proveniente de la Tierra: el nacimiento de una nueva estrella.",
    btnNextText: "Continuar →",
    starsLevel: 1.5,
    highlightConstellations: [],
    showLines: false,
    showNames: false,
    showBrightNames: false,
    showPlanets: false,
    highlightCompass: true,
    showGrid: true,
    audioUrl: ""
  },
  {
    step: 3,
    counter: "03 / 09",
    progress: 33,
    title: "Orientación",
    subtitle: "En el paralelo cero",
    text: "En el paralelo cero, el cielo comienza a mostrar cada vez más su brillo, las coordenadas del mundo giran para encontrar el verdadero norte.",
    btnNextText: "Continuar →",
    starsLevel: 2,
    highlightConstellations: ["Ori"],
    animateLines: true,
    showLines: true,
    showNames: false,
    showBrightNames: false,
    showPlanets: false,
    highlightCompass: false,
    showGrid: false,
    audioUrl: ""
  },
  {
    step: 4,
    counter: "04 / 09",
    progress: 44,
    title: "Las primeras lunas",
    subtitle: "Ansiosos por verte nacer",
    text: "Junto a las estrellas vemos las primeras lunas. Todos están ansiosos por verte nacer; tus padres llenos de orgullo, y yo, con apenas algunos meses de vida en este mundo, siento que mi corazón palpita cada vez más fuerte intuyendo tu llegada.",
    btnNextText: "Continuar →",
    starsLevel: 2.5,
    highlightConstellations: ["Ori"],
    showLines: true,
    showNames: false,
    showBrightNames: false,
    showPlanets: false,
    highlightCompass: false,
    showGrid: false,
    audioUrl: ""
  },
  {
    step: 5,
    counter: "05 / 09",
    progress: 55,
    title: "La estrella que más brilla",
    subtitle: "Eres el universo entero",
    text: "El cielo de repente se pone a tus pies al verte nacer. En este momento no eres solo la estrella que más brilla; más que cualquier estrella, eres el universo entero, mi Ibeth preciosa.",
    btnNextText: "Continuar →",
    starsLevel: 2.8,
    highlightConstellations: ["Ori", "Sco", "Cyg", "Sgr"],
    animateLines: true,
    showLines: true,
    showNames: false,
    showBrightNames: false,
    showPlanets: false,
    highlightCompass: false,
    showGrid: false,
    audioUrl: ""
  },
  {
    step: 6,
    counter: "06 / 09",
    progress: 66,
    title: "Tu rostro",
    subtitle: "El mapa de tus pecas",
    text: "Los astros siguen tu brillo, ya que sin él perderían su camino. En este momento, ellos forman tu rostro; ahora tú las llamas pecas, pero fueron el universo mismo dejando su huella sobre ti.",
    btnNextText: "Continuar →",
    starsLevel: 3,
    highlightConstellations: ["Ori", "Sco", "Cyg", "Sgr"],
    showLines: true,
    showNames: false,
    showBrightNames: false,
    showPlanets: false,
    highlightCompass: false,
    showGrid: false,
    audioUrl: ""
  },
  {
    step: 7,
    counter: "07 / 09",
    progress: 77,
    title: "Las estrellas más luminosas",
    subtitle: "Los lunares de tu sonrisa",
    text: "<span class=\"star-name-gold\">Antares</span>, la estrella de Escorpio, es ahora el lunar por encima de tu labio derecho. <span class=\"star-name-gold\">Altair</span>, la estrella de Aquila, se convirtió en el lunar a la izquierda de tu nariz. Las estrellas <span class=\"star-name-gold\">Spica</span> (de Virgo) y <span class=\"star-name-gold\">Arcturus</span> (de Boötes), las más majestuosas del cosmos, formaron los lunares a la derecha de tu mejilla. ¿Sabías que la mayoría de tus lunares están en la parte derecha de tu cara? Todos ellos brillan nuevamente cuando ven que tú sonríes.",
    btnNextText: "Continuar →",
    starsLevel: 3,
    highlightConstellations: ["*"],
    showLines: true,
    showNames: false,
    showBrightNames: false,
    showPlanets: false,
    highlightCompass: false,
    showGrid: true,
    audioUrl: ""
  },
  {
    step: 8,
    counter: "08 / 09",
    progress: 88,
    title: "Constelaciones",
    subtitle: "Esculpidas en el cielo",
    text: "Tu rostro es formado por millones de estrellas: <span class=\"constellation-name-blue\">Pegasus</span> y <span class=\"constellation-name-blue\">Boötes</span> son tus ojos, <span class=\"constellation-name-blue\">Aquila</span> tu nariz, <span class=\"constellation-name-blue\">Cygnus</span> y <span class=\"constellation-name-blue\">Hércules</span> tus cejas, y <span class=\"constellation-name-blue\">Escorpio</span> son los labios que me gustan besar.",
    btnNextText: "Continuar →",
    starsLevel: 3,
    highlightConstellations: ["*"],
    showLines: true,
    showNames: false,
    showBrightNames: false,
    showPlanets: true,
    highlightCompass: false,
    showGrid: true,
    audioUrl: ""
  },
  {
    step: 9,
    counter: "09 / 09",
    progress: 100,
    title: "Feliz Cumpleaños",
    subtitle: "26 de Agosto · Para mi Ibeth",
    text: "Feliz cumpleaños, mi universo favorito. Permíteme seguir explorando el universo de tus ojos y el infinito de tu mirada.",
    btnNextText: "Descubrir Playlist & Galaxia ✨",
    starsLevel: 3,
    highlightConstellations: ["*"],
    showLines: true,
    showNames: false,
    showBrightNames: false,
    showPlanets: true,
    highlightCompass: false,
    showGrid: true,
    isFinal: true,
    hasEmojiPop: true,
    audioUrl: ""
  }
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Initialize App on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initEventListeners();
  initGalaxyPageListeners();
  updateUIFromState();
  renderNarrativeScene(0);
  if (window.lucide) window.lucide.createIcons();
});

function initEventListeners() {
  // Triple Click Handler on Narrative Poster Card to Save Map
  let clickCount = 0;
  let clickTimer = null;
  const posterCard = document.getElementById('narrative-poster-card');

  posterCard?.addEventListener('click', () => {
    clickCount++;
    if (clickTimer) clearTimeout(clickTimer);

    if (clickCount >= 3) {
      clickCount = 0;
      showSecretToast();
      openExportModal();
    } else {
      clickTimer = setTimeout(() => {
        clickCount = 0;
      }, 1000);
    }
  });

  // Narrative Journey Controls
  document.getElementById('narrative-btn-next')?.addEventListener('click', handleNarrativeNext);
  document.getElementById('narrative-btn-back')?.addEventListener('click', handleNarrativeBack);
  document.getElementById('narrative-btn-audio')?.addEventListener('click', toggleNarrativeAudio);


  // Studio Inputs
  document.getElementById('input-month')?.addEventListener('change', (e) => {
    state.date.month = parseInt(e.target.value, 10);
    autoUpdateSubtitle();
    renderAllStarMaps();
  });

  document.getElementById('input-day')?.addEventListener('input', (e) => {
    state.date.day = parseInt(e.target.value, 10) || 1;
    autoUpdateSubtitle();
    renderAllStarMaps();
  });

  document.getElementById('input-year')?.addEventListener('input', (e) => {
    state.date.year = parseInt(e.target.value, 10) || 2000;
    autoUpdateSubtitle();
    renderAllStarMaps();
  });

  document.getElementById('input-hour')?.addEventListener('input', (e) => {
    state.time.hour = parseInt(e.target.value, 10) || 0;
    updateTimeCoordsText();
    renderAllStarMaps();
  });

  document.getElementById('input-minute')?.addEventListener('input', (e) => {
    state.time.minute = parseInt(e.target.value, 10) || 0;
    updateTimeCoordsText();
    renderAllStarMaps();
  });

  document.getElementById('input-time-format')?.addEventListener('change', (e) => {
    state.time.format = e.target.value;
    updateTimeCoordsText();
    renderAllStarMaps();
  });

  // Location Search & Presets
  const locInput = document.getElementById('input-location-search');
  const suggestionsBox = document.getElementById('location-suggestions');

  locInput?.addEventListener('input', (e) => {
    const val = e.target.value;
    searchLocation(val, (results) => renderLocationSuggestions(results));
  });

  document.addEventListener('click', (e) => {
    if (!locInput?.contains(e.target) && !suggestionsBox?.contains(e.target)) {
      if (suggestionsBox) suggestionsBox.style.display = 'none';
    }
  });

  document.getElementById('input-lat')?.addEventListener('input', (e) => {
    state.location.lat = parseFloat(e.target.value) || 0;
    state.location.formattedCoords = formatLatLon(state.location.lat, state.location.lon);
    updateTimeCoordsText();
    renderAllStarMaps();
  });

  document.getElementById('input-lon')?.addEventListener('input', (e) => {
    state.location.lon = parseFloat(e.target.value) || 0;
    state.location.formattedCoords = formatLatLon(state.location.lat, state.location.lon);
    updateTimeCoordsText();
    renderAllStarMaps();
  });

  document.querySelectorAll('.preset-loc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectLocation(btn.dataset.city, btn.dataset.country, parseFloat(btn.dataset.lat), parseFloat(btn.dataset.lon));
    });
  });

  // Theme & Style Controls
  document.querySelectorAll('.theme-card-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.theme-card-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.theme = btn.dataset.theme;
      applyPosterTheme();
      renderAllStarMaps();
    });
  });

  document.getElementById('select-font-family')?.addEventListener('change', (e) => {
    state.typography = e.target.value;
    applyPosterTypography();
  });

  document.getElementById('select-border-style')?.addEventListener('change', (e) => {
    state.borderStyle = e.target.value;
    applyPosterBorder();
  });

  // Text Customization
  document.getElementById('input-title')?.addEventListener('input', (e) => {
    state.text.title = e.target.value.toUpperCase();
    document.getElementById('poster-render-title').textContent = state.text.title;
  });

  document.getElementById('input-subtitle')?.addEventListener('input', (e) => {
    state.text.subtitle = e.target.value;
    document.getElementById('poster-render-subtitle').textContent = state.text.subtitle;
  });

  document.getElementById('input-location-name')?.addEventListener('input', (e) => {
    state.text.locationName = e.target.value.toUpperCase();
    document.getElementById('poster-render-location').textContent = state.text.locationName;
  });

  document.getElementById('input-quote')?.addEventListener('input', (e) => {
    state.text.quote = e.target.value;
    document.getElementById('poster-render-quote').textContent = state.text.quote;
  });

  // Toggles
  document.getElementById('toggle-constellations')?.addEventListener('change', (e) => {
    state.toggles.constellations = e.target.checked;
    renderAllStarMaps();
  });

  document.getElementById('toggle-constellation-names')?.addEventListener('change', (e) => {
    state.toggles.constellationNames = e.target.checked;
    renderAllStarMaps();
  });

  document.getElementById('toggle-planets')?.addEventListener('change', (e) => {
    state.toggles.planets = e.target.checked;
    renderAllStarMaps();
  });

  document.getElementById('toggle-coordinates')?.addEventListener('change', (e) => {
    state.toggles.coordinates = e.target.checked;
    updateTimeCoordsText();
  });

  document.getElementById('toggle-cardinal')?.addEventListener('change', (e) => {
    state.toggles.cardinal = e.target.checked;
    renderAllStarMaps();
  });

  // Interactive Map Controls
  document.getElementById('btn-map-zoom-in')?.addEventListener('click', () => {
    state.chart.zoom = Math.min(2.0, state.chart.zoom + 0.15);
    renderAllStarMaps();
  });

  document.getElementById('btn-map-zoom-out')?.addEventListener('click', () => {
    state.chart.zoom = Math.max(0.7, state.chart.zoom - 0.15);
    renderAllStarMaps();
  });

  document.getElementById('btn-map-rotate-cw')?.addEventListener('click', () => {
    state.chart.rotation = (state.chart.rotation + 45) % 360;
    renderAllStarMaps();
  });

  document.getElementById('btn-map-reset')?.addEventListener('click', () => {
    state.chart.zoom = 1.0;
    state.chart.rotation = 0;
    renderAllStarMaps();
  });

  // Export Buttons
  document.getElementById('btn-export-pdf')?.addEventListener('click', openExportModal);
  document.getElementById('header-btn-export')?.addEventListener('click', openExportModal);
  document.getElementById('btn-export-png')?.addEventListener('click', () => {
    const poster = document.getElementById('narrative-poster-card') || document.getElementById('live-poster-element');
    exportPosterAsPNG(poster, `Stellar-Moment-${state.location.name.replace(/\s+/g, '-')}.png`);
  });

  document.getElementById('btn-export-svg')?.addEventListener('click', () => {
    const svg = document.querySelector('#narrative-sky-container svg') || document.querySelector('#poster-sky-circle svg');
    exportPosterAsSVG(svg, `Stellar-Moment-Sky.svg`);
  });

  // Modals
  document.getElementById('btn-show-astro-modal')?.addEventListener('click', openAstroModal);
  document.getElementById('close-astro-modal')?.addEventListener('click', () => {
    document.getElementById('astro-modal').style.display = 'none';
  });

  document.getElementById('close-export-modal')?.addEventListener('click', () => {
    document.getElementById('export-modal').style.display = 'none';
  });

  // Secret Modal Customization Toggles
  document.getElementById('secret-toggle-frame')?.addEventListener('change', (e) => {
    const poster = document.getElementById('narrative-poster-card');
    if (poster) {
      if (e.target.checked) {
        poster.classList.remove('border-double', 'border-simple', 'border-ornate');
        poster.classList.add('border-flush');
      } else {
        poster.classList.remove('border-flush');
        poster.classList.add('border-double');
      }
    }
  });

  document.getElementById('secret-toggle-all-star-names')?.addEventListener('change', (e) => {
    state.toggles.allStarNames = e.target.checked;
    renderNarrativeScene(state.narrativeStep);
  });

  document.getElementById('secret-toggle-names')?.addEventListener('change', (e) => {
    state.toggles.constellationNames = e.target.checked;
    renderNarrativeScene(state.narrativeStep);
  });

  document.getElementById('secret-toggle-lines')?.addEventListener('change', (e) => {
    state.toggles.constellations = e.target.checked;
    renderNarrativeScene(state.narrativeStep);
  });

  document.getElementById('secret-toggle-planets')?.addEventListener('change', (e) => {
    state.toggles.planets = e.target.checked;
    renderNarrativeScene(state.narrativeStep);
  });

  // Secret Modal Text Editing Inputs
  document.getElementById('secret-input-title')?.addEventListener('input', (e) => {
    const val = e.target.value;
    state.text.title = val;
    const titleEl = document.getElementById('narrative-poster-title');
    if (titleEl) titleEl.textContent = val;
  });

  document.getElementById('secret-input-subtitle')?.addEventListener('input', (e) => {
    const val = e.target.value;
    state.text.subtitle = val;
    const subEl = document.getElementById('narrative-poster-subtitle');
    if (subEl) subEl.textContent = val;
  });

  document.getElementById('secret-input-location')?.addEventListener('input', (e) => {
    const val = e.target.value;
    state.text.locationName = val;
    const locEl = document.getElementById('narrative-poster-location');
    if (locEl) locEl.textContent = val;
  });

  document.getElementById('secret-input-quote')?.addEventListener('input', (e) => {
    const val = e.target.value;
    state.text.quote = val;
    const quoteEl = document.getElementById('narrative-poster-quote');
    if (quoteEl) quoteEl.textContent = val;
  });

  document.getElementById('secret-export-svg')?.addEventListener('click', () => {
    const svg = document.querySelector('#narrative-sky-container svg') || document.querySelector('#poster-sky-circle svg');
    exportPosterAsSVG(svg, `Stellar-Moment-VectorSky.svg`);
  });

  document.getElementById('secret-export-png')?.addEventListener('click', () => {
    const poster = document.getElementById('narrative-poster-card') || document.getElementById('live-poster-element');
    exportPosterAsPNG(poster, `Stellar-Moment-${state.location.name.replace(/\s+/g, '-')}.png`);
  });

  document.getElementById('confirm-export-pdf')?.addEventListener('click', () => {
    const paperSize = document.getElementById('export-paper-size').value;
    const orientation = document.getElementById('export-orientation').value;
    const poster = document.getElementById('narrative-poster-card') || document.getElementById('live-poster-element');
    exportPosterAsPDF(poster, {
      paperSize,
      orientation,
      filename: `Stellar-Moment-${state.location.name.replace(/\s+/g, '-')}.pdf`
    });
    document.getElementById('export-modal').style.display = 'none';
  });
}

function showSecretToast() {
  const toast = document.getElementById('secret-toast');
  if (toast) {
    toast.style.transform = 'translateX(-50%) translateY(0px)';
    setTimeout(() => {
      toast.style.transform = 'translateX(-50%) translateY(100px)';
    }, 3200);
  }
}

function handleNarrativeNext() {
  if (state.narrativeStep >= NARRATIVE_SCENES.length - 1) {
    // Transition to Galaxy Surprise Page!
    const narrativeView = document.getElementById('narrative-view');
    const surprisePage = document.getElementById('galaxy-surprise-page');
    if (narrativeView && surprisePage) {
      narrativeView.style.display = 'none';
      surprisePage.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  } else {
    state.narrativeStep += 1;
    renderNarrativeScene(state.narrativeStep);
  }
}

function handleNarrativeBack() {
  if (state.narrativeStep > 0) {
    state.narrativeStep -= 1;
    renderNarrativeScene(state.narrativeStep);
  }
}

function toggleAutoPlay() {
  state.isAutoPlaying = !state.isAutoPlaying;
  const btn = document.getElementById('narrative-btn-pause');
  if (state.isAutoPlaying) {
    if (btn) btn.innerHTML = `<i data-lucide="pause" style="width: 16px; height: 16px;"></i>`;
    state.autoPlayTimer = setInterval(() => {
      if (state.narrativeStep < NARRATIVE_SCENES.length - 1) {
        state.narrativeStep += 1;
        renderNarrativeScene(state.narrativeStep);
      } else {
        toggleAutoPlay();
      }
    }, 5500);
  } else {
    if (btn) btn.innerHTML = `<i data-lucide="play" style="width: 16px; height: 16px;"></i>`;
    if (state.autoPlayTimer) clearInterval(state.autoPlayTimer);
  }
  if (window.lucide) window.lucide.createIcons();
}

function renderNarrativeScene(stepIndex) {
  state.narrativeStep = stepIndex;
  const scene = NARRATIVE_SCENES[stepIndex];

  // Update Progress & Text Cards
  document.getElementById('narrative-step-counter').textContent = scene.counter;
  document.getElementById('narrative-progress-bar').style.width = `${scene.progress}%`;

  const titleEl = document.getElementById('narrative-scene-title');
  if (titleEl) {
    titleEl.textContent = scene.title;
    titleEl.classList.remove('glow-title-flash');
    if (stepIndex === 9) {
      void titleEl.offsetWidth; // Trigger reflow
      titleEl.classList.add('glow-title-flash');
    }
  }

  document.getElementById('narrative-scene-subtitle').textContent = scene.subtitle;

  const textEl = document.getElementById('narrative-scene-text');
  if (textEl) {
    textEl.innerHTML = scene.text;
    textEl.classList.remove('narrative-fade-enter');
    void textEl.offsetWidth; // Trigger reflow for re-animation
    textEl.classList.add('narrative-fade-enter');
  }

  // Birthday Emoji Pop Burst for Scene 09
  if (scene.hasEmojiPop || stepIndex === 9) {
    triggerBirthdayEmojiPop();
  }

  // Update Next Button Label
  const nextBtnText = document.getElementById('narrative-btn-next-text');
  if (nextBtnText) nextBtnText.textContent = scene.btnNextText;

  // Back button state
  const backBtn = document.getElementById('narrative-btn-back');
  if (backBtn) backBtn.disabled = (stepIndex === 0);

  // Render Sky Chart for 26 August 2000 at 21:09 Quito Local Time (UTC: 2000-08-27T02:09:00Z)
  const quitoUtcDate = new Date(Date.UTC(2000, 7, 27, 2, 9, 0));
  const skyData = getVisibleSkyData(quitoUtcDate, 0.0000, -78.4678, {
    cx: 250,
    cy: 250,
    radius: 220 * state.chart.zoom,
    rotationDeg: state.chart.rotation
  });

  const container = document.getElementById('narrative-sky-container');
  if (container) {
    let svgHtml = generateNarrativeSVGString(skyData, 440, 440, scene);
    if (stepIndex === 9) {
      svgHtml += `
        <div class="meteor-container">
          <div class="meteor-line" style="top: 15%; left: 10%; animation-delay: 0s;"></div>
          <div class="meteor-line" style="top: 40%; left: 25%; animation-delay: 0.8s;"></div>
          <div class="meteor-line" style="top: 25%; left: 60%; animation-delay: 1.5s;"></div>
          <div class="meteor-line" style="top: 60%; left: 35%; animation-delay: 2.2s;"></div>
        </div>`;
    }
    container.innerHTML = svgHtml;
  }

  // Update Poster Coords Text
  const coordsEl = document.getElementById('narrative-poster-coords');
  if (coordsEl) coordsEl.textContent = `21:09 · 0.00° N, 78.47° W`;

  // Always keep Next & Back buttons enabled for manual user control!
  const nextBtn = document.getElementById('narrative-btn-next');
  if (nextBtn) {
    nextBtn.disabled = false;
    nextBtn.classList.remove('pulse-gold-btn');
  }

  // Manage Audio for Current Scene
  const audioBtn = document.getElementById('narrative-btn-audio');
  const audioBtnText = document.getElementById('narrative-btn-audio-text');

  if (state.narrativeAudio) {
    state.narrativeAudio.pause();
    state.narrativeAudio.currentTime = 0;
    state.narrativeAudio.onended = null;
  }

  if (scene.audioUrl) {
    if (audioBtn) audioBtn.style.display = 'inline-flex';
    state.narrativeAudio.src = scene.audioUrl;
    
    state.narrativeAudio.onended = () => {
      if (audioBtnText) audioBtnText.textContent = "Escuchar Voz";
      if (audioBtn) audioBtn.classList.remove('pulse-gold-btn');
    };
    
    if (audioBtnText) audioBtnText.textContent = "Escuchar Voz";
    if (audioBtn) audioBtn.classList.remove('pulse-gold-btn');
  } else {
    // No audio for this scene
    if (audioBtn) audioBtn.style.display = 'none';
    if (audioBtnText) audioBtnText.textContent = "Escuchar Voz";
    if (audioBtn) audioBtn.classList.remove('pulse-gold-btn');
  }
}

function toggleNarrativeAudio() {
  const scene = NARRATIVE_SCENES[state.narrativeStep];
  const audioBtnText = document.getElementById('narrative-btn-audio-text');
  const audioBtn = document.getElementById('narrative-btn-audio');

  if (!state.narrativeAudio.src && scene.audioUrl) {
    state.narrativeAudio.src = scene.audioUrl;
  }

  if (state.narrativeAudio.paused) {
    state.narrativeAudio.play().then(() => {
      if (audioBtnText) audioBtnText.textContent = "Pausar Voz";
      if (audioBtn) audioBtn.classList.add('pulse-gold-btn');
    }).catch(console.error);
  } else {
    state.narrativeAudio.pause();
    if (audioBtnText) audioBtnText.textContent = "Escuchar Voz";
    if (audioBtn) audioBtn.classList.remove('pulse-gold-btn');
  }
}

function generateNarrativeSVGString(skyData, width, height, scene) {
  const cx = width / 2;
  const cy = height / 2;
  const maxRadius = (width / 2) * 0.96;
  const zoom = state.chart.zoom;

  const skyR = maxRadius * 0.74 * zoom;
  const rulerOuterR = skyR + 12 * zoom;
  const compassInnerR = skyR + 22 * zoom;
  const compassOuterR = skyR + 32 * zoom;

  let svg = `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" class="star-map-svg">`;
  
  // Sky circle background
  svg += `<circle cx="${cx}" cy="${cy}" r="${skyR}" fill="var(--poster-bg)" />`;

  // 1. CELESTIAL COORDINATE GRID (ALTITUDE CIRCLES & AZIMUTH MERIDIANS)
  if (scene.showGrid || scene.isFinal) {
    [15, 30, 45, 60, 75].forEach(alt => {
      const altR = skyR * (90 - alt) / 90;
      svg += `<circle cx="${cx}" cy="${cy}" r="${altR}" fill="none" stroke="var(--poster-line)" stroke-width="0.75" stroke-opacity="0.3" stroke-dasharray="3,3" />`;
    });

    for (let az = 0; az < 360; az += 15) {
      const rad = (az * Math.PI) / 180;
      const x2 = cx + skyR * Math.sin(rad);
      const y2 = cy - skyR * Math.cos(rad);
      svg += `<line x1="${cx}" y1="${cy}" x2="${x2}" y2="${y2}" stroke="var(--poster-line)" stroke-width="0.75" stroke-opacity="0.25" stroke-dasharray="2,4" />`;
    }
  }

  // 2. CONSTELLATION LINES (Cumulative & Animated)
  if (state.toggles.constellations && scene.showLines && skyData.lines && scene.highlightConstellations) {
    const isAll = scene.highlightConstellations.includes('*');
    skyData.lines.forEach(l => {
      if (isAll || scene.highlightConstellations.includes(l.constellationId)) {
        const x1 = cx + (l.x1 - 250) * (skyR / 220);
        const y1 = cy + (l.y1 - 250) * (skyR / 220);
        const x2 = cx + (l.x2 - 250) * (skyR / 220);
        const y2 = cy + (l.y2 - 250) * (skyR / 220);
        
        const dist1 = Math.hypot(x1 - cx, y1 - cy);
        const dist2 = Math.hypot(x2 - cx, y2 - cy);
        if (dist1 <= skyR && dist2 <= skyR) {
          const animClass = scene.animateLines ? 'draw-constellation-line' : '';
          svg += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--poster-line)" stroke-width="1.3" opacity="0.9" class="${animClass}" />`;
        }
      }
    });
  }

  // Constellation Names (Togglable via secret modal)
  if (state.toggles.constellationNames && scene.showNames && skyData.names && scene.highlightConstellations) {
    const isAll = scene.highlightConstellations.includes('*');
    skyData.names.forEach(n => {
      if (isAll || scene.highlightConstellations.includes(n.id)) {
        const x = cx + (n.x - 250) * (skyR / 220);
        const y = cy + (n.y - 250) * (skyR / 220);
        const dist = Math.hypot(x - cx, y - cy);
        if (dist <= skyR - 10) {
          svg += `<text x="${x}" y="${y}" fill="var(--poster-subtext)" font-size="8" font-family="var(--font-sans)" font-weight="600" letter-spacing="1.2" text-anchor="middle" opacity="0.9">${n.name.toUpperCase()}</text>`;
        }
      }
    });
  }

  // 3. STARS FIELD (Cumulative based on starsLevel)
  if (scene.starsLevel > 0) {
    let filteredStars = skyData.stars;
    if (scene.starsLevel === 1) filteredStars = skyData.stars.filter(s => s.mag <= 2.2);
    else if (scene.starsLevel === 1.5) filteredStars = skyData.stars.filter(s => s.mag <= 3.2);
    else if (scene.starsLevel === 2) filteredStars = skyData.stars.filter(s => s.mag <= 4.0);
    else if (scene.starsLevel === 2.5) filteredStars = skyData.stars.filter(s => s.mag <= 4.8);

    filteredStars.forEach(s => {
      const x = cx + (s.x - 250) * (skyR / 220);
      const y = cy + (s.y - 250) * (skyR / 220);
      const dist = Math.hypot(x - cx, y - cy);

      if (dist <= skyR) {
        const r = Math.max(0.5, (s.starRadius * (width / 500)) * (skyR / 220));

        if (s.mag < 0.8) {
          svg += `<circle cx="${x}" cy="${y}" r="${r * 2.5}" fill="var(--poster-star)" opacity="0.3" />`;
        }

        svg += `<circle cx="${x}" cy="${y}" r="${r}" fill="var(--poster-star)" opacity="${s.mag < 2.5 ? 0.95 : 0.8}" class="star-node star-appear-anim" />`;

        // Highlight Bright Star Names on Scene 6+ (if not hidden by toggle)
        if (!state.toggles.allStarNames && scene.showBrightNames && s.name && s.mag <= 1.2) {
          svg += `<text x="${x}" y="${y + r + 7}" fill="var(--poster-text)" font-size="6.5" font-family="var(--font-sans)" font-weight="600" text-anchor="middle">${s.name}</text>`;
        }
      }
    });
  }

  // 4. PLANETS & MOON
  if (state.toggles.planets && scene.showPlanets && skyData.planets) {
    skyData.planets.forEach(p => {
      const x = cx + (p.x - 250) * (skyR / 220);
      const y = cy + (p.y - 250) * (skyR / 220);
      const dist = Math.hypot(x - cx, y - cy);
      if (dist <= skyR) {
        svg += `<circle cx="${x}" cy="${y}" r="${p.radius * 1.6}" fill="${p.color}" opacity="0.4" />`;
        svg += `<circle cx="${x}" cy="${y}" r="${p.radius}" fill="${p.color}" />`;
        if (!state.toggles.allStarNames) {
          svg += `<text x="${x}" y="${y + p.radius + 8}" fill="var(--poster-text)" font-size="7" font-family="var(--font-sans)" font-weight="600" text-anchor="middle">${p.name}</text>`;
        }
      }
    });
  }

  // 5. RULER RING & DEGREE TICKS
  svg += `<circle cx="${cx}" cy="${cy}" r="${skyR}" fill="none" stroke="var(--poster-border)" stroke-width="1.5" />`;
  svg += `<circle cx="${cx}" cy="${cy}" r="${rulerOuterR}" fill="none" stroke="var(--poster-border)" stroke-width="1.2" />`;

  for (let deg = 0; deg < 360; deg += 1) {
    const rad = (deg * Math.PI) / 180;
    let tickLen = 3;
    if (deg % 10 === 0) tickLen = 9;
    else if (deg % 5 === 0) tickLen = 6;

    const x1 = cx + rulerOuterR * Math.sin(rad);
    const y1 = cy - rulerOuterR * Math.cos(rad);
    const x2 = cx + (rulerOuterR - tickLen) * Math.sin(rad);
    const y2 = cy - (rulerOuterR - tickLen) * Math.cos(rad);

    const opacity = deg % 10 === 0 ? 0.9 : (deg % 5 === 0 ? 0.6 : 0.35);
    svg += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--poster-text)" stroke-width="${deg % 10 === 0 ? 1.2 : 0.8}" opacity="${opacity}" />`;

    if (deg % 10 === 0) {
      const numR = rulerOuterR - 11;
      const nx = cx + numR * Math.sin(rad);
      const ny = cy - numR * Math.cos(rad) + 1.8;
      svg += `<text x="${nx}" y="${ny}" fill="var(--poster-subtext)" font-size="3.8" font-family="var(--font-sans)" font-weight="600" text-anchor="middle" opacity="0.65">${deg}</text>`;
    }
  }

  // 6. OUTER COMPASS RING WITH 16 DIRECTION LABELS (Small & Compact for clean fit)
  const compassStrokeClass = scene.highlightCompass ? 'compass-highlight' : '';
  svg += `<circle cx="${cx}" cy="${cy}" r="${compassInnerR}" fill="none" stroke="var(--poster-border)" stroke-width="1" stroke-dasharray="2,3" />`;
  svg += `<circle cx="${cx}" cy="${cy}" r="${compassOuterR}" fill="none" stroke="${scene.highlightCompass ? '#D4AF37' : 'var(--poster-border)'}" stroke-width="1.8" class="${compassStrokeClass}" />`;

  const directions = [
    { label: "N", angle: 0 },
    { label: "NNE", angle: 22.5 },
    { label: "NE", angle: 45 },
    { label: "ENE", angle: 67.5 },
    { label: "E", angle: 90 },
    { label: "ESE", angle: 112.5 },
    { label: "SE", angle: 135 },
    { label: "SSE", angle: 157.5 },
    { label: "S", angle: 180 },
    { label: "SSW", angle: 202.5 },
    { label: "SW", angle: 225 },
    { label: "WSW", angle: 247.5 },
    { label: "W", angle: 270 },
    { label: "WNW", angle: 292.5 },
    { label: "NW", angle: 315 },
    { label: "NNW", angle: 337.5 }
  ];

  directions.forEach(d => {
    const rad = (d.angle * Math.PI) / 180;
    const labelR = compassOuterR + 9;
    const lx = cx + labelR * Math.sin(rad);
    const ly = cy - labelR * Math.cos(rad) + 2.5;

    const isMain = d.angle % 90 === 0;
    const fontSize = isMain ? 6.5 : 4.5;
    const fontWeight = isMain ? "700" : "500";
    const labelColor = (scene.highlightCompass && isMain) ? "#D4AF37" : "var(--poster-text)";

    const tx1 = cx + compassOuterR * Math.sin(rad);
    const ty1 = cy - compassOuterR * Math.cos(rad);
    const tx2 = cx + (compassOuterR + 3) * Math.sin(rad);
    const ty2 = cy - (compassOuterR + 3) * Math.cos(rad);
    svg += `<line x1="${tx1}" y1="${ty1}" x2="${tx2}" y2="${ty2}" stroke="${labelColor}" stroke-width="${isMain ? 1.5 : 0.8}" />`;

    svg += `<text x="${lx}" y="${ly}" fill="${labelColor}" font-size="${fontSize}" font-family="var(--font-sans)" font-weight="${fontWeight}" letter-spacing="0.5" text-anchor="middle" opacity="0.9">${d.label}</text>`;
  });

  svg += `</svg>`;
  return svg;
}

function autoUpdateSubtitle() {
  const formatted = `${MONTH_NAMES[state.date.month]} ${state.date.day}, ${state.date.year}`;
  state.text.subtitle = formatted;
  document.getElementById('input-subtitle').value = formatted;
  document.getElementById('poster-render-subtitle').textContent = formatted;
}

function updateTimeCoordsText() {
  const formattedTime = state.time.format === '12'
    ? `${(state.time.hour % 12) || 12}:${state.time.minute.toString().padStart(2, '0')} ${state.time.hour >= 12 ? 'PM' : 'AM'}`
    : `${state.time.hour.toString().padStart(2, '0')}:${state.time.minute.toString().padStart(2, '0')}`;

  const coordsText = state.toggles.coordinates ? ` · ${state.location.formattedCoords}` : '';
  const fullText = `${formattedTime}${coordsText}`;
  document.getElementById('poster-render-time-coords').textContent = fullText;
}

function selectLocation(city, country, lat, lon) {
  const locName = `${city}, ${country}`;
  state.location.name = locName;
  state.location.lat = lat;
  state.location.lon = lon;
  state.location.formattedCoords = formatLatLon(lat, lon);

  document.getElementById('input-location-search').value = locName;
  document.getElementById('input-lat').value = lat;
  document.getElementById('input-lon').value = lon;

  state.text.locationName = locName.toUpperCase();
  document.getElementById('input-location-name').value = state.text.locationName;
  document.getElementById('poster-render-location').textContent = state.text.locationName;

  updateTimeCoordsText();
  renderAllStarMaps();

  const suggBox = document.getElementById('location-suggestions');
  if (suggBox) suggBox.style.display = 'none';
}

function renderLocationSuggestions(results) {
  const box = document.getElementById('location-suggestions');
  if (!box) return;
  box.innerHTML = '';
  if (!results || results.length === 0) {
    box.style.display = 'none';
    return;
  }

  results.forEach(loc => {
    const item = document.createElement('div');
    item.style.padding = '0.6rem 0.9rem';
    item.style.cursor = 'pointer';
    item.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
    item.style.fontSize = '0.85rem';
    item.innerHTML = `<strong style="color: #FFF;">${loc.city}</strong> <span style="color: #9CA3AF;">${loc.country} (${loc.formattedCoords})</span>`;
    item.addEventListener('click', () => {
      selectLocation(loc.city, loc.country, loc.lat, loc.lon);
    });
    box.appendChild(item);
  });
  box.style.display = 'block';
}

function applyPosterTheme() {
  const poster = document.getElementById('live-poster-element');
  const narrativePoster = document.getElementById('narrative-poster-card');

  const themeClass = `theme-${state.theme}`;
  const themes = ['theme-midnight', 'theme-cosmic', 'theme-vintage', 'theme-minimal', 'theme-golden', 'theme-rose'];

  [poster, narrativePoster].forEach(el => {
    if (!el) return;
    themes.forEach(t => el.classList.remove(t));
    el.classList.add(themeClass);
  });
}

function applyPosterTypography() {
  const poster = document.getElementById('live-poster-element');
  const narrativePoster = document.getElementById('narrative-poster-card');
  const fonts = ['font-choice-serif', 'font-choice-sans', 'font-choice-display'];

  [poster, narrativePoster].forEach(el => {
    if (!el) return;
    fonts.forEach(f => el.classList.remove(f));
    el.classList.add(`font-choice-${state.typography}`);
  });
}

function applyPosterBorder() {
  const poster = document.getElementById('live-poster-element');
  const narrativePoster = document.getElementById('narrative-poster-card');
  const borders = ['border-double', 'border-simple', 'border-ornate', 'border-flush'];

  [poster, narrativePoster].forEach(el => {
    if (!el) return;
    borders.forEach(b => el.classList.remove(b));
    el.classList.add(state.borderStyle);
  });
}

function updateUIFromState() {
  applyPosterTheme();
  applyPosterTypography();
  applyPosterBorder();
  autoUpdateSubtitle();
  updateTimeCoordsText();
}

function renderAllStarMaps() {
  const dateObj = new Date(Date.UTC(
    state.date.year,
    state.date.month,
    state.date.day,
    state.time.hour,
    state.time.minute
  ));

  const skyData = getVisibleSkyData(dateObj, state.location.lat, state.location.lon, {
    cx: 250,
    cy: 250,
    radius: 220 * state.chart.zoom,
    rotationDeg: state.chart.rotation
  });

  const container = document.getElementById('poster-sky-circle');
  if (container) {
    container.innerHTML = generateStudioSVGString(skyData, 500, 500);
    attachStarTooltipListeners(container);
  }
}

function generateStudioSVGString(skyData, width, height) {
  const scene = {
    starsLevel: 3,
    highlightConstellations: ['*'],
    showLines: state.toggles.constellations,
    showNames: state.toggles.constellationNames,
    showBrightNames: true,
    showPlanets: state.toggles.planets,
    highlightCompass: false,
    showGrid: true,
    isFinal: true
  };
  return generateNarrativeSVGString(skyData, width, height, scene);
}

function attachStarTooltipListeners(container) {
  const tooltip = document.getElementById('star-hover-tooltip');
  if (!tooltip) return;

  container.querySelectorAll('.star-node').forEach(node => {
    node.addEventListener('mouseenter', (e) => {
      const name = node.dataset.starName;
      const mag = node.dataset.starMag;
      const bayer = node.dataset.starBayer;

      if (name || bayer) {
        tooltip.innerHTML = `<strong>${name || bayer}</strong><br><span style="opacity:0.8;">Magnitude: ${mag}</span>`;
        tooltip.style.display = 'block';
      }
    });

    node.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      tooltip.style.left = `${e.clientX - rect.left}px`;
      tooltip.style.top = `${e.clientY - rect.top}px`;
    });

    node.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });
  });
}

function openAstroModal() {
  const modal = document.getElementById('astro-modal');
  if (!modal) return;

  const quitoUtcDate = new Date(Date.UTC(2000, 7, 27, 2, 9, 0));
  const skyData = getVisibleSkyData(quitoUtcDate, -0.1807, -78.4678);

  document.getElementById('astro-moon-phase').textContent = `${skyData.moonPhase.name} (${skyData.moonPhase.illumination}%)`;
  document.getElementById('astro-lst').textContent = `${(skyData.lst / 15).toFixed(2)} hours (${skyData.lst.toFixed(1)}°)`;

  const planetNames = skyData.planets.map(p => p.name).join(', ') || 'None visible';
  document.getElementById('astro-planets').textContent = planetNames;

  const constNames = skyData.names.map(n => n.name).slice(0, 6).join(', ') || 'Orion, Ursa Major, Scorpius';
  document.getElementById('astro-constellations-list').textContent = constNames;

  modal.style.display = 'flex';
}

function openExportModal() {
  const modal = document.getElementById('export-modal');
  if (modal) {
    // Sync current poster card texts into input fields
    const titleEl = document.getElementById('narrative-poster-title');
    const subEl = document.getElementById('narrative-poster-subtitle');
    const locEl = document.getElementById('narrative-poster-location');
    const quoteEl = document.getElementById('narrative-poster-quote');

    const inTitle = document.getElementById('secret-input-title');
    const inSub = document.getElementById('secret-input-subtitle');
    const inLoc = document.getElementById('secret-input-location');
    const inQuote = document.getElementById('secret-input-quote');

    if (inTitle && titleEl) inTitle.value = titleEl.textContent;
    if (inSub && subEl) inSub.value = subEl.textContent;
    if (inLoc && locEl) inLoc.value = locEl.textContent;
    if (inQuote && quoteEl) inQuote.value = quoteEl.textContent;

    modal.style.display = 'flex';
  }
}

function initGalaxyPageListeners() {
  // Back to Sky Map
  document.getElementById('btn-back-to-sky')?.addEventListener('click', () => {
    const narrativeView = document.getElementById('narrative-view');
    const surprisePage = document.getElementById('galaxy-surprise-page');
    if (narrativeView && surprisePage) {
      surprisePage.style.display = 'none';
      narrativeView.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  // Cosmic Playlist Audio Controller
  const playlistItems = document.querySelectorAll('.playlist-item');
  const vinylDisc = document.querySelector('.vinyl-disc');

  if (!state.playlistAudio) {
    state.playlistAudio = new Audio();
  }

  playlistItems.forEach(item => {
    const playBtn = item.querySelector('.play-btn-cosmic');
    const songSrc = item.dataset.songSrc;

    const togglePlaySong = (e) => {
      e?.preventDefault();
      const isPlayingCurrent = item.classList.contains('playing');

      // Reset all items UI
      playlistItems.forEach(i => {
        i.classList.remove('playing');
        const pBtn = i.querySelector('.play-btn-cosmic');
        if (pBtn) {
          const iconPlay = pBtn.querySelector('.icon-play');
          const iconPause = pBtn.querySelector('.icon-pause');
          if (iconPlay) iconPlay.style.display = 'inline-block';
          if (iconPause) iconPause.style.display = 'none';
        }
      });

      if (isPlayingCurrent) {
        state.playlistAudio.pause();
        if (vinylDisc) vinylDisc.classList.remove('spinning');
      } else {
        state.playlistAudio.src = songSrc;
        state.playlistAudio.load();
        const playPromise = state.playlistAudio.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            item.classList.add('playing');
            if (playBtn) {
              const iconPlay = playBtn.querySelector('.icon-play');
              const iconPause = playBtn.querySelector('.icon-pause');
              if (iconPlay) iconPlay.style.display = 'none';
              if (iconPause) iconPause.style.display = 'inline-block';
            }
            if (vinylDisc) vinylDisc.classList.add('spinning');
          }).catch(err => {
            console.error("Audio playback error:", err);
          });
        }
      }
    };

    item.addEventListener('click', togglePlaySong);
  });

  state.playlistAudio.onended = () => {
    playlistItems.forEach(i => i.classList.remove('playing'));
    if (vinylDisc) vinylDisc.classList.remove('spinning');
  };

  // Dynamic Pixel Alignment Engine for Constellation Lines
  const connections = [
    { id: 'virgo-line-1', from: 'dani', to: 'kelly' },
    { id: 'virgo-line-2', from: 'kelly', to: 'josue' },
    { id: 'virgo-line-3', from: 'josue', to: 'jacqui' },
    { id: 'virgo-line-4', from: 'josue', to: 'star5' },
    { id: 'virgo-line-5', from: 'star5', to: 'star7' },
    { id: 'virgo-line-6', from: 'josue', to: 'star6' },
    { id: 'virgo-line-7', from: 'josue', to: 'final' }
  ];

  const DRIVE_LINKS = {
    'dani': 'https://drive.google.com/file/d/1D1kGcHRu2_7YwlKvrMa-GtVzMbJNcLTO/view?usp=sharing',
    'kelly': 'https://drive.google.com/file/d/1ik5e240qFXZZQ8GVM1GuznsAHGJMJR2B/view?usp=sharing',
    'josue': 'https://drive.google.com/file/d/17uTMv51_V9nBcR_eagSRra-UwxGLuymt/view?usp=sharing',
    'jacqui': 'https://drive.google.com/file/d/1isNk7Ls-WJx3Q0z1Zmhr9A40A-ZuO3r1/view?usp=sharing',
    'final': 'https://drive.google.com/file/d/1Zk3UEirsdhFQwqHHu3TW41ElKeLB2mcj/view?usp=sharing'
  };

  const updateVirgoLineCoordinates = () => {
    const mapContainer = document.getElementById('galaxy-constellation-map');
    if (!mapContainer) return;
    const mapRect = mapContainer.getBoundingClientRect();
    if (mapRect.width === 0 || mapRect.height === 0) return;

    connections.forEach(conn => {
      const lineEl = document.getElementById(conn.id);
      const fromStar = document.querySelector(`[data-star-id="${conn.from}"]`);
      const toStar = document.querySelector(`[data-star-id="${conn.to}"]`);

      if (lineEl && fromStar) {
        const fromRect = fromStar.getBoundingClientRect();
        const x1 = ((fromRect.left + fromRect.width / 2 - mapRect.left) / mapRect.width) * 100;
        const y1 = ((fromRect.top + fromRect.height / 2 - mapRect.top) / mapRect.height) * 100;

        let x2 = 48;
        let y2 = 52;

        if (toStar && toStar.offsetWidth > 0) {
          const toRect = toStar.getBoundingClientRect();
          x2 = ((toRect.left + toRect.width / 2 - mapRect.left) / mapRect.width) * 100;
          y2 = ((toRect.top + toRect.height / 2 - mapRect.top) / mapRect.height) * 100;
        } else if (conn.to === 'star5') {
          x2 = 70; y2 = 64;
        } else if (conn.to === 'star6') {
          x2 = 34; y2 = 80;
        } else if (conn.to === 'star7') {
          x2 = 62; y2 = 82;
        }

        lineEl.setAttribute('x1', `${x1.toFixed(2)}%`);
        lineEl.setAttribute('y1', `${y1.toFixed(2)}%`);
        lineEl.setAttribute('x2', `${x2.toFixed(2)}%`);
        lineEl.setAttribute('y2', `${y2.toFixed(2)}%`);
      }
    });
  };

  // Recalculate line coordinates on load, resize, and scroll
  setTimeout(updateVirgoLineCoordinates, 150);
  window.addEventListener('resize', updateVirgoLineCoordinates);
  window.addEventListener('orientationchange', () => setTimeout(updateVirgoLineCoordinates, 200));

  // Virgo Memory Star Nodes & Constellation Connection Engine
  const starNodes = document.querySelectorAll('.virgo-star-node, .galaxy-star-node');
  const photoModal = document.getElementById('photo-memory-modal');
  const closePhotoModal = document.getElementById('close-photo-modal');
  const videoPlayer = document.getElementById('modal-video-player');
  const videoIframe = document.getElementById('modal-video-iframe');
  const photoImg = document.getElementById('modal-photo-img');
  const driveBtn = document.getElementById('modal-drive-btn');

  if (!state.viewedVirgoStars) {
    state.viewedVirgoStars = new Set();
  }

  const regularStars = Array.from(starNodes).filter(node => node.id !== 'final-master-star');
  const totalRegularCount = regularStars.length;

  starNodes.forEach((node, index) => {
    node.addEventListener('click', () => {
      const starId = node.dataset.starId || `star-${index}`;
      const title = node.dataset.title;
      const date = node.dataset.date;
      const img = node.dataset.img;
      const videoSrc = node.dataset.videoSrc;
      const videoEmbed = node.dataset.videoEmbed;
      const note = node.dataset.note;
      const starLabel = node.querySelector('.star-label')?.textContent || 'Estrella';

      // Update Modal Header Text
      document.getElementById('modal-photo-badge').textContent = starLabel;
      document.getElementById('modal-photo-title').textContent = title;
      document.getElementById('modal-photo-date').textContent = date;
      document.getElementById('modal-photo-note').textContent = `“${note}”`;

      // Setup Google Drive Direct Link Button
      const directDriveUrl = DRIVE_LINKS[starId];
      if (directDriveUrl && driveBtn) {
        driveBtn.href = directDriveUrl;
        driveBtn.style.display = 'inline-flex';
      } else if (driveBtn) {
        driveBtn.style.display = 'none';
      }

      // Handle Master Final Star specifically (Play Google Drive Embed & direct stream)
      if (node.id === 'final-master-star') {
        if (videoIframe) {
          videoIframe.src = videoEmbed || 'https://drive.google.com/file/d/1Zk3UEirsdhFQwqHHu3TW41ElKeLB2mcj/preview';
          videoIframe.style.display = 'block';
        }
        if (videoPlayer) {
          videoPlayer.pause();
          videoPlayer.src = '';
          videoPlayer.style.display = 'none';
        }
        if (photoImg) photoImg.style.display = 'none';
      }
      // Priority 1: Native HTML5 Video Player
      else if (videoSrc) {
        if (videoPlayer) {
          videoPlayer.src = videoSrc;
          videoPlayer.style.display = 'block';
          videoPlayer.play().catch(() => {});
          
          videoPlayer.onerror = () => {
            // Fallback to Google Drive embed iframe if local video fails
            if (videoEmbed && videoIframe) {
              videoPlayer.style.display = 'none';
              videoIframe.src = videoEmbed;
              videoIframe.style.display = 'block';
            }
          };
        }
        if (videoIframe) {
          videoIframe.src = '';
          videoIframe.style.display = 'none';
        }
        if (photoImg) photoImg.style.display = 'none';
      }
      // Priority 2: Google Drive Embed Iframe Fallback
      else if (videoEmbed) {
        if (videoIframe) {
          videoIframe.src = videoEmbed;
          videoIframe.style.display = 'block';
        }
        if (videoPlayer) {
          videoPlayer.pause();
          videoPlayer.src = '';
          videoPlayer.style.display = 'none';
        }
        if (photoImg) photoImg.style.display = 'none';
      }
      // Priority 3: Photo Image
      else if (img) {
        if (photoImg) {
          photoImg.src = img;
          photoImg.style.display = 'block';
        }
        if (videoPlayer) {
          videoPlayer.pause();
          videoPlayer.src = '';
          videoPlayer.style.display = 'none';
        }
        if (videoIframe) {
          videoIframe.src = '';
          videoIframe.style.display = 'none';
        }
      } else {
        if (videoPlayer) {
          videoPlayer.pause();
          videoPlayer.src = '';
          videoPlayer.style.display = 'none';
        }
        if (videoIframe) {
          videoIframe.src = '';
          videoIframe.style.display = 'none';
        }
        if (photoImg) photoImg.style.display = 'none';
      }

      // Show Modal
      if (photoModal) photoModal.style.display = 'flex';
      if (window.lucide) window.lucide.createIcons();

      // Mark Star as Viewed & Activate Constellation Lines
      if (node.id !== 'final-master-star') {
        node.classList.add('star-viewed');
        state.viewedVirgoStars.add(starId);

        // Recalculate precise star center coordinates
        updateVirgoLineCoordinates();

        // STRICT LINE ACTIVATION: ONLY light up lines between stars where BOTH have been viewed!
        connections.forEach(conn => {
          if (conn.to !== 'final') {
            if (state.viewedVirgoStars.has(conn.from) && state.viewedVirgoStars.has(conn.to)) {
              const lineEl = document.getElementById(conn.id);
              if (lineEl) lineEl.classList.add('virgo-line-active');
            }
          }
        });

        // Check if all regular stars have been discovered!
        if (state.viewedVirgoStars.size >= totalRegularCount) {
          triggerVirgoCompletionCeremony();
        }
      }
    });
  });

  // Modal Closing & Stopping Media Playback
  const closeModalFunc = () => {
    if (photoModal) photoModal.style.display = 'none';
    if (videoPlayer) {
      videoPlayer.pause();
      videoPlayer.src = '';
    }
    if (videoIframe) videoIframe.src = '';
  };

  closePhotoModal?.addEventListener('click', closeModalFunc);

  photoModal?.addEventListener('click', (e) => {
    if (e.target === photoModal) {
      closeModalFunc();
    }
  });
}

function triggerVirgoCompletionCeremony() {
  // 1. Light up ALL constellation lines in glowing gold
  document.querySelectorAll('.virgo-line').forEach(line => {
    line.classList.add('virgo-line-active');
  });

  // 2. Dim all surrounding regular stars
  document.querySelectorAll('.virgo-star-node:not(#final-master-star)').forEach(node => {
    node.classList.add('dimmed-star');
  });

  // 3. Reveal and pulse the Central Master Final Star
  const masterStar = document.getElementById('final-master-star');
  if (masterStar) {
    masterStar.classList.add('master-star-glowing');
    masterStar.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function triggerBirthdayEmojiPop() {
  const container = document.querySelector('#narrative-view .narrative-card') || document.body;
  let burstEl = document.getElementById('birthday-emoji-burst');
  if (burstEl) burstEl.remove();

  burstEl = document.createElement('div');
  burstEl.id = 'birthday-emoji-burst';
  burstEl.className = 'birthday-emoji-container';

  const emojis = ['🎂', '🥳', '✨', '🎉', '💖', '👑', '🎂', '🎉'];
  emojis.forEach((emoji, idx) => {
    const span = document.createElement('span');
    span.className = 'emoji-pop';
    span.textContent = emoji;
    span.style.animationDelay = `${idx * 0.18}s`;
    burstEl.appendChild(span);
  });

  container.appendChild(burstEl);

  setTimeout(() => {
    if (burstEl) burstEl.remove();
  }, 4000);
}

