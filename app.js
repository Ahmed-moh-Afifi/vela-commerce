// ============================================================================
// VELA COMMERCE OS — Interactive Engine & Smooth 60fps Parallax Controller
// ============================================================================

const STUDIO_PRESETS = [
  {
    id: 'alabaster',
    name: 'Alabaster Daylight',
    tagline: 'Travertine plinth · Architectural morning sun',
    image: './images/product-studio-light.jpg',
    lighting: '5200K Window Key + Soft Fill',
    lens: '85mm · f/2.8',
    renderTime: '1.8s',
    palette: ['#FAF9F6', '#E5DDD0', '#D9532F'],
    conversionLift: '+34.8% CVR',
  },
  {
    id: 'obsidian',
    name: 'Obsidian Atelier',
    tagline: 'Honed basalt pedestal · Terracotta rim glow',
    image: './images/product-studio-dark.jpg',
    lighting: '3400K Sculpted Rim + Deep Fill',
    lens: '90mm Macro · f/4.0',
    renderTime: '2.1s',
    palette: ['#101014', '#2A2726', '#F26B43'],
    conversionLift: '+41.2% CVR',
  },
  {
    id: 'botanical',
    name: 'Botanical Plaster',
    tagline: 'Terracotta clay block · Dappled olive shadows',
    image: './images/product-studio-botanical.jpg',
    lighting: '4800K Gobo Foliage + Warm Bounce',
    lens: '70mm · f/3.2',
    renderTime: '1.9s',
    palette: ['#DCE2D8', '#C67D5B', '#1E6B52'],
    conversionLift: '+29.6% CVR',
  },
];

const STORE_PRESETS = [
  {
    id: 'kyoto',
    label: 'Kyoto Ceramics Gallery',
    shortLabel: 'Alabaster',
    prompt: 'Make it feel like a serene Kyoto ceramics gallery with generous whitespace.',
    brandName: 'KURO STUDIO',
    domain: 'https://kuro-ceramics.vela.shop',
    headline: 'Quiet rituals, thrown by hand.',
    subcopy: 'Small-batch stoneware vessels fired in Shigaraki clay.',
    previewClass: 'preview-kyoto',
    headlineClass: 'font-serif-display',
    heroImage: './images/product-studio-light.jpg',
    sec1: { img: './images/showcase-perfume.jpg', title: 'Amber Vetiver Extrait', price: '$165' },
    sec2: { img: './images/product-studio-botanical.jpg', title: 'Botanical Pour-Over Set', price: '$134' },
    aiNote:
      'AI Designer paired Instrument Serif headings, 1.8× editorial rhythm, and auto-relighted 24 catalog SKUs to 5200K alabaster stone.',
  },
  {
    id: 'noir',
    label: 'Obsidian Evening Luxury',
    shortLabel: 'Obsidian',
    prompt: 'Switch to moody evening luxury with architectural dark stone contrast.',
    brandName: 'MAISON SABLE',
    domain: 'https://sable-atelier.vela.shop',
    headline: 'Objects sculpted in shadow.',
    subcopy: 'Limited edition tableware, scent, and Italian saddle leather.',
    previewClass: 'preview-noir',
    headlineClass: '',
    heroImage: './images/product-studio-dark.jpg',
    sec1: { img: './images/showcase-perfume.jpg', title: 'Amber Vetiver Extrait', price: '$165' },
    sec2: { img: './images/showcase-bag.jpg', title: 'Saddle Atelier Carryall', price: '$340' },
    aiNote:
      'AI Designer shifted surface elevation to obsidian basalt, set contrast tokens to WCAG AAA ivory, and rendered warm rim-lit product assets.',
  },
  {
    id: 'drop',
    label: 'Botanical Launch Drop',
    shortLabel: 'Botanical',
    prompt: 'Optimize hero for a high-conversion seasonal collection drop.',
    brandName: 'SOLSTICE OBJECTS',
    domain: 'https://solstice.vela.shop',
    headline: 'Autumn Harvest — Capsule 04.',
    subcopy: 'Tactile homeware & botanical apothecary. Ships within 24h.',
    previewClass: 'preview-drop',
    headlineClass: '',
    heroImage: './images/product-studio-botanical.jpg',
    sec1: { img: './images/showcase-perfume.jpg', title: 'Amber Vetiver Extrait', price: '$165' },
    sec2: { img: './images/showcase-bag.jpg', title: 'Saddle Atelier Carryall', price: '$340' },
    aiNote:
      'AI Designer prioritized above-the-fold quick-add cards, urgency tags, and sunlit foliage studio renders across the entire capsule.',
  },
];

const ANALYTICS_DATA = {
  '7D': {
    kpis: [
      { label: 'Gross Merchandise Value', value: '$38,420', delta: '+22.4%', tone: 'emerald' },
      { label: 'AI Studio Visual Lift', value: '+31.8%', delta: 'vs raw photos', tone: 'accent' },
      { label: 'Predicted Demand', value: '490 units', delta: '96% conf.', tone: 'muted' },
      { label: 'Contribution Margin', value: '62.4%', delta: '+3.2 pts', tone: 'emerald' },
    ],
    points: [
      { label: 'Mon', actual: 4200, lift: 24, note: 'Raw catalog baseline' },
      { label: 'Tue', actual: 4850, lift: 28, note: '18 SKUs upgraded to AI Studio' },
      { label: 'Wed', actual: 5120, lift: 31, note: 'Editorial theme deployed' },
      { label: 'Thu', actual: 5680, lift: 34, note: 'Drop campaign w/ studio renders' },
      { label: 'Fri', actual: 6410, lift: 38, note: 'Peak mobile PDP conversion' },
      { label: 'Sat', actual: 6290, lift: 36, note: 'Strong botanical bundle AOV' },
      { label: 'Sun*', actual: 5870, forecast: 6680, lift: 39, note: 'AI projected Monday surge' },
    ],
  },
  '30D': {
    kpis: [
      { label: 'Gross Merchandise Value', value: '$148,920', delta: '+28.4%', tone: 'emerald' },
      { label: 'AI Studio Visual Lift', value: '+36.2%', delta: '2.1× add-to-cart', tone: 'accent' },
      { label: 'Predicted Demand', value: '1,840 units', delta: '94% conf.', tone: 'muted' },
      { label: 'Contribution Margin', value: '61.8%', delta: '+4.1 pts', tone: 'emerald' },
    ],
    points: [
      { label: 'W1', actual: 26400, lift: 19, note: 'Store launch week' },
      { label: 'W2', actual: 31800, lift: 27, note: 'AI Designer hero optimization' },
      { label: 'W3', actual: 38900, lift: 34, note: 'Full 64-SKU studio resync' },
      { label: 'W4', actual: 51820, forecast: 51820, lift: 41, note: 'Repeat buyer cohort +29%' },
      { label: 'W5*', actual: 51820, forecast: 59400, lift: 43, note: 'AI predicted demand wave' },
      { label: 'W6*', actual: 51820, forecast: 66200, lift: 45, note: 'Seasonal gifting ramp' },
    ],
  },
  '90D': {
    kpis: [
      { label: 'Gross Merchandise Value', value: '$412,680', delta: '+64.1%', tone: 'emerald' },
      { label: 'AI Studio Visual Lift', value: '+38.9%', delta: 'across 112 SKUs', tone: 'accent' },
      { label: 'Predicted Demand', value: '5,420 units', delta: '92% conf.', tone: 'muted' },
      { label: 'Contribution Margin', value: '63.1%', delta: '+5.4 pts', tone: 'emerald' },
    ],
    points: [
      { label: 'Sep', actual: 94200, lift: 21, note: 'Initial storefront migration' },
      { label: 'Oct', actual: 136400, lift: 33, note: 'AI Studio full-catalog shoot' },
      { label: 'Nov', actual: 182080, forecast: 182080, lift: 39, note: 'Obsidian Capsule launch' },
      { label: 'Dec*', actual: 182080, forecast: 228500, lift: 42, note: 'Forecasted holiday peak' },
    ],
  },
  FORECAST: {
    kpis: [
      { label: 'Projected 30d GMV', value: '$218,400', delta: '+46.6% est.', tone: 'emerald' },
      { label: 'Expected Visual Lift', value: '+42.0%', delta: 'w/ adaptive themes', tone: 'accent' },
      { label: 'Predicted Demand', value: '2,690 units', delta: '93% conf.', tone: 'muted' },
      { label: 'Projected Margin', value: '64.5%', delta: '+2.7 pts', tone: 'emerald' },
    ],
    points: [
      { label: 'Now', actual: 48200, forecast: 48200, lift: 36, note: 'Current weekly run-rate' },
      { label: '+7d*', actual: 48200, forecast: 53900, lift: 39, note: 'Evening dark-theme uplift' },
      { label: '+14d*', actual: 48200, forecast: 61400, lift: 41, note: 'Restock Ceramic Carafe #04' },
      { label: '+21d*', actual: 48200, forecast: 68800, lift: 43, note: 'Bundle AOV climbs to $142' },
      { label: '+30d*', actual: 48200, forecast: 74500, lift: 45, note: 'Projected monthly record' },
    ],
  },
};

const AI_ANALYST_PROMPTS = [
  {
    id: 'photos',
    question: 'Which studio lighting drives the highest AOV?',
    badge: 'Visual Attribution',
    metric: '$146.80 AOV (+24%)',
    summary:
      'Products rendered in Obsidian Atelier rim-lighting convert 19.4% higher between 7 PM – 11 PM local time, while Alabaster Daylight leads daytime discovery traffic by +14%.',
    action: 'Enable time-of-day adaptive visuals',
  },
  {
    id: 'inventory',
    question: 'Forecast inventory stockout risk for next 14 days',
    badge: 'Predictive Supply',
    metric: '2 SKUs at risk · 6d cover',
    summary:
      'Speckled Ceramic Carafe (#04) and Amber Vetiver EDP (#11) accelerated 2.3× after upgrading to AI Studio PDP renders. Reorder 320 units by Thursday to avoid $18.4k lost GMV.',
    action: 'Generate supplier reorder draft',
  },
  {
    id: 'margin',
    question: 'Where can we recover contribution margin?',
    badge: 'Margin Intelligence',
    metric: '+$9,420/mo opportunity',
    summary:
      'Bundling the Carafe + Ceramic Dripper with an 8% anchor discount cuts split-shipment fulfillment cost by 31% while preserving a 65.2% net contribution margin.',
    action: 'Publish smart bundle to storefront',
  },
];

// ============================================================================
// STATE
// ============================================================================
const state = {
  theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  studioPresetId: document.documentElement.classList.contains('dark') ? 'obsidian' : 'alabaster',
  sliderPos: 54,
  builderMode: 'ai',
  storeVibeId: 'kyoto',
  density: 'airy',
  timeframe: '30D',
  hoveredPointIdx: null,
  analystPromptId: 'photos',
  appliedActions: {},
  modalMode: 'ai',
};

// ============================================================================
// 1. LIGHT / DARK THEME CONTROLLER (WITH HERO & STUDIO LIGHTING SYNC)
// ============================================================================
function applyTheme(nextTheme, syncStudio = true) {
  state.theme = nextTheme;
  const isDark = nextTheme === 'dark';
  document.documentElement.classList.toggle('dark', isDark);

  try {
    localStorage.setItem('vela-theme', nextTheme);
  } catch {}

  document.getElementById('btnThemeLight')?.setAttribute('aria-pressed', String(!isDark));
  document.getElementById('btnThemeDark')?.setAttribute('aria-pressed', String(isDark));

  // Sync Hero storefront imagery & swatches
  const heroImg = document.getElementById('heroStudioImg');
  const heroThemeLabel = document.getElementById('heroThemeLabel');
  const heroExifSpec = document.getElementById('heroExifSpec');
  const sw1 = document.getElementById('heroSwatch1');
  const sw2 = document.getElementById('heroSwatch2');
  const narrativeStudio = document.getElementById('narrativeImgStudio');
  const narrativeNote = document.getElementById('narrativeLightingNote');
  const footerBtn = document.getElementById('footerThemeToggle');

  if (heroImg) {
    heroImg.src = isDark ? './images/product-studio-dark.jpg' : './images/product-studio-light.jpg';
  }
  if (heroThemeLabel) {
    heroThemeLabel.textContent = isDark ? 'Obsidian Atelier Theme' : 'Warm Alabaster Theme';
  }
  if (heroExifSpec) {
    heroExifSpec.textContent = isDark ? '3400K RIM · BASALT' : '5200K SUN · TRAVERTINE';
  }
  if (sw1) sw1.style.background = isDark ? '#101014' : '#FAF9F6';
  if (sw2) sw2.style.background = isDark ? '#2A2726' : '#E5DDD0';
  if (narrativeStudio) {
    narrativeStudio.src = isDark ? './images/product-studio-dark.jpg' : './images/product-studio-light.jpg';
  }
  if (narrativeNote) {
    narrativeNote.textContent = isDark
      ? 'Plinth & lighting matched to Obsidian Atelier'
      : 'Plinth & lighting matched to Warm Alabaster';
  }
  if (footerBtn) {
    footerBtn.textContent = isDark
      ? 'Theme: Obsidian Studio · Switch'
      : 'Theme: Warm Alabaster · Switch';
  }

  if (syncStudio && state.studioPresetId !== 'botanical') {
    selectStudioPreset(isDark ? 'obsidian' : 'alabaster', false);
  }
}

document.getElementById('btnThemeLight')?.addEventListener('click', () => applyTheme('light'));
document.getElementById('btnThemeDark')?.addEventListener('click', () => applyTheme('dark'));
document.getElementById('footerThemeToggle')?.addEventListener('click', () => {
  applyTheme(state.theme === 'dark' ? 'light' : 'dark');
});

// Mobile menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileDrawer = document.getElementById('mobileDrawer');
mobileMenuBtn?.addEventListener('click', () => {
  const open = mobileDrawer.classList.toggle('is-open');
  mobileMenuBtn.setAttribute('aria-expanded', String(open));
});
mobileDrawer?.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => {
    mobileDrawer.classList.remove('is-open');
    mobileMenuBtn?.setAttribute('aria-expanded', 'false');
  });
});

// ============================================================================
// 2. INTERACTIVE AI PRODUCT STUDIO COMPARATOR
// ============================================================================
const comparator = document.getElementById('studioComparator');
const beforeClip = document.getElementById('studioBeforeClip');
const divider = document.getElementById('studioDivider');
const relightOverlay = document.getElementById('relightOverlay');
const relightLabel = document.getElementById('relightLabel');

function setSliderPos(pct) {
  state.sliderPos = Math.max(6, Math.min(94, pct));
  if (beforeClip) {
    beforeClip.style.clipPath = `inset(0 ${100 - state.sliderPos}% 0 0)`;
  }
  if (divider) {
    divider.style.left = `${state.sliderPos}%`;
  }
  comparator?.setAttribute('aria-valuenow', String(Math.round(state.sliderPos)));
}

let isDraggingSlider = false;
function updateSliderFromClientX(clientX) {
  if (!comparator) return;
  const rect = comparator.getBoundingClientRect();
  const pct = ((clientX - rect.left) / rect.width) * 100;
  setSliderPos(pct);
}

comparator?.addEventListener('pointerdown', (e) => {
  isDraggingSlider = true;
  comparator.setPointerCapture(e.pointerId);
  updateSliderFromClientX(e.clientX);
});
comparator?.addEventListener('pointermove', (e) => {
  if (!isDraggingSlider) return;
  updateSliderFromClientX(e.clientX);
});
const endDrag = (e) => {
  if (!isDraggingSlider) return;
  isDraggingSlider = false;
  try {
    comparator.releasePointerCapture(e.pointerId);
  } catch {}
};
comparator?.addEventListener('pointerup', endDrag);
comparator?.addEventListener('pointercancel', endDrag);
comparator?.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') setSliderPos(state.sliderPos - 4);
  if (e.key === 'ArrowRight') setSliderPos(state.sliderPos + 4);
});

let relightTimer = null;
function selectStudioPreset(id, animate = true) {
  state.studioPresetId = id;
  const preset = STUDIO_PRESETS.find((p) => p.id === id) || STUDIO_PRESETS[0];

  const afterImg = document.getElementById('studioAfterImg');
  const afterBadge = document.getElementById('studioAfterBadge');
  const lightingSpec = document.getElementById('studioLightingSpec');
  const lensSpec = document.getElementById('studioLensSpec');
  const liftBadge = document.getElementById('studioLiftBadge');
  const renderTime = document.getElementById('studioRenderTime');
  const batchBtn = document.getElementById('batchApplyBtn');

  if (animate && relightOverlay) {
    if (relightLabel) relightLabel.textContent = `Relighting to ${preset.name}...`;
    relightOverlay.classList.add('is-active');
    clearTimeout(relightTimer);
    relightTimer = setTimeout(() => relightOverlay.classList.remove('is-active'), 420);
  }

  if (afterImg) afterImg.src = preset.image;
  if (afterBadge) afterBadge.textContent = `Vela Studio · ${preset.name}`;
  if (lightingSpec) lightingSpec.textContent = preset.lighting;
  if (lensSpec) lensSpec.textContent = preset.lens;
  if (liftBadge) liftBadge.textContent = preset.conversionLift;
  if (renderTime) renderTime.textContent = `Render: ${preset.renderTime}`;
  if (batchBtn) batchBtn.textContent = `Batch Apply "${preset.name}" to 48 SKUs`;

  renderStudioPresets();
}

function renderStudioPresets() {
  const list = document.getElementById('studioPresetList');
  if (!list) return;
  list.innerHTML = STUDIO_PRESETS.map((p) => {
    const selected = p.id === state.studioPresetId;
    const dots = p.palette
      .map(
        (hex) =>
          `<span class="swatch-dot" style="width:13px;height:13px;background:${hex};"></span>`
      )
      .join('');
    return `
      <button type="button" class="preset-btn ${selected ? 'is-selected' : ''}" data-preset="${p.id}">
        <div class="preset-thumb">
          <img src="${p.image}" alt="${p.name}" />
        </div>
        <div style="flex:1;min-width:0;">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
            <span style="font-size:0.84rem;font-weight:600;">${p.name}</span>
            <div style="display:flex;gap:4px;">${dots}</div>
          </div>
          <p style="margin:3px 0 0;font-size:0.74rem;color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
            ${p.tagline}
          </p>
        </div>
      </button>
    `;
  }).join('');

  list.querySelectorAll('.preset-btn').forEach((btn) => {
    btn.addEventListener('click', () => selectStudioPreset(btn.dataset.preset, true));
  });
}

document.querySelectorAll('.js-param-toggle').forEach((btn) => {
  btn.addEventListener('click', () => {
    const next = btn.getAttribute('aria-checked') !== 'true';
    btn.setAttribute('aria-checked', String(next));
  });
});

const batchApplyBtn = document.getElementById('batchApplyBtn');
batchApplyBtn?.addEventListener('click', () => {
  const preset = STUDIO_PRESETS.find((p) => p.id === state.studioPresetId) || STUDIO_PRESETS[0];
  batchApplyBtn.textContent = `✓ Queued 48 SKUs in ${preset.name} (~86s)`;
  setTimeout(() => {
    batchApplyBtn.textContent = `Batch Apply "${preset.name}" to 48 SKUs`;
  }, 2800);
});

// ============================================================================
// 3. STORE BUILDER & OPTIONAL AI DESIGNER
// ============================================================================
function renderStoreBuilder() {
  const isAi = state.builderMode === 'ai';
  const preset = STORE_PRESETS.find((p) => p.id === state.storeVibeId) || STORE_PRESETS[0];

  const btnManual = document.getElementById('btnModeManual');
  const btnAi = document.getElementById('btnModeAi');
  btnManual?.classList.toggle('is-active-manual', !isAi);
  btnAi?.classList.toggle('is-active-ai', isAi);

  const railLabel = document.getElementById('builderRailLabel');
  const modeBadge = document.getElementById('builderModeBadge');
  const aiPanel = document.getElementById('builderAiPanel');
  const manualPanel = document.getElementById('builderManualPanel');
  const previewModeTag = document.getElementById('previewModeTag');

  if (railLabel) railLabel.textContent = isAi ? 'AI Direction Prompts' : 'Manual Token Controls';
  if (modeBadge) {
    modeBadge.textContent = isAi ? 'Co-Pilot Active' : 'Direct Edit';
    modeBadge.className = isAi ? 'pill-accent' : 'pill-muted';
  }
  if (aiPanel) aiPanel.style.display = isAi ? 'block' : 'none';
  if (manualPanel) manualPanel.style.display = isAi ? 'none' : 'block';
  if (previewModeTag) previewModeTag.textContent = isAi ? 'AI Composed' : 'Manual Mode';

  // Render AI prompts
  const promptList = document.getElementById('storePromptList');
  if (promptList) {
    promptList.innerHTML = STORE_PRESETS.map((item) => {
      const active = item.id === state.storeVibeId;
      return `
        <button type="button" class="prompt-card ${active ? 'is-active' : ''}" data-vibe="${item.id}">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span style="font-size:0.79rem;font-weight:600;">${item.label}</span>
            <span style="color:${active ? 'var(--accent-primary)' : 'var(--text-muted)'};font-size:0.75rem;">✦</span>
          </div>
          <p style="margin:0.35rem 0 0;font-size:0.73rem;line-height:1.45;color:var(--text-secondary);">
            “${item.prompt}”
          </p>
        </button>
      `;
    }).join('');
    promptList.querySelectorAll('.prompt-card').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.storeVibeId = btn.dataset.vibe;
        renderStoreBuilder();
      });
    });
  }

  // Render Manual Surface buttons
  const manualBtns = document.getElementById('manualSurfaceBtns');
  if (manualBtns) {
    manualBtns.innerHTML = STORE_PRESETS.map((item) => {
      const active = item.id === state.storeVibeId;
      return `
        <button type="button" class="btn ${active ? 'btn--ink' : 'btn--outline'}" data-vibe="${item.id}" style="border-radius:12px;padding:0.5rem;font-size:0.74rem;">
          ${item.shortLabel}
        </button>
      `;
    }).join('');
    manualBtns.querySelectorAll('button').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.storeVibeId = btn.dataset.vibe;
        renderStoreBuilder();
      });
    });
  }

  // Density buttons
  document.querySelectorAll('.js-density-btn').forEach((btn) => {
    const active = btn.dataset.density === state.density;
    btn.classList.toggle('btn--ink', active);
    btn.classList.toggle('btn--outline', !active);
  });

  // Update Live Preview Canvas
  const canvas = document.getElementById('storePreviewCanvas');
  if (canvas) {
    canvas.className = `store-preview-canvas ${preset.previewClass} ${
      state.density === 'compact' ? 'is-compact' : ''
    }`;
  }
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };
  setText('previewDomain', preset.domain);
  setText('previewBrandName', preset.brandName);
  setText('previewHeadline', preset.headline);
  setText('previewSubcopy', preset.subcopy);
  setText('builderAiNote', preset.aiNote);

  const headlineEl = document.getElementById('previewHeadline');
  if (headlineEl) {
    headlineEl.className = preset.headlineClass;
    headlineEl.style.fontWeight = preset.headlineClass ? '400' : '600';
  }

  const hImg = document.getElementById('previewHeroImg');
  const s1 = document.getElementById('previewSecImg1');
  const s2 = document.getElementById('previewSecImg2');
  if (hImg) hImg.src = preset.heroImage;
  if (s1) {
    s1.src = preset.sec1.img;
    s1.alt = preset.sec1.title;
  }
  if (s2) {
    s2.src = preset.sec2.img;
    s2.alt = preset.sec2.title;
  }
  setText('previewSecTitle1', preset.sec1.title);
  setText('previewSecPrice1', `${preset.sec1.price} · Studio Synced`);
  setText('previewSecTitle2', preset.sec2.title);
  setText('previewSecPrice2', `${preset.sec2.price} · Studio Synced`);
}

document.getElementById('btnModeManual')?.addEventListener('click', () => {
  state.builderMode = 'manual';
  renderStoreBuilder();
});
document.getElementById('btnModeAi')?.addEventListener('click', () => {
  state.builderMode = 'ai';
  renderStoreBuilder();
});
document.querySelectorAll('.js-density-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    state.density = btn.dataset.density;
    renderStoreBuilder();
  });
});

// ============================================================================
// 4. AI COMMERCE ANALYTICS DASHBOARD
// ============================================================================
function renderAnalytics() {
  const dataset = ANALYTICS_DATA[state.timeframe];

  // Timeframe active pill
  document.querySelectorAll('#timeframeSwitcher button').forEach((b) => {
    b.classList.toggle('is-active', b.dataset.tf === state.timeframe);
  });

  // KPIs
  const kpiGrid = document.getElementById('kpiGrid');
  if (kpiGrid) {
    kpiGrid.innerHTML = dataset.kpis
      .map((k) => {
        const pillClass =
          k.tone === 'emerald'
            ? 'pill-emerald'
            : k.tone === 'accent'
              ? 'pill-accent'
              : 'pill-muted';
        return `
          <div class="kpi-card surface-card">
            <div style="font-size:0.76rem;font-weight:500;color:var(--text-secondary);">${k.label}</div>
            <div style="margin-top:0.7rem;display:flex;align-items:baseline;justify-content:space-between;gap:0.5rem;">
              <span class="kpi-value">${k.value}</span>
              <span class="${pillClass}">${k.delta}</span>
            </div>
          </div>
        `;
      })
      .join('');
  }

  // SVG Chart
  const width = 640;
  const height = 220;
  const padX = 32;
  const padTop = 24;
  const padBottom = 30;
  const usableW = width - padX * 2;
  const usableH = height - padTop - padBottom;

  const allVals = dataset.points.flatMap((p) => [p.actual, p.forecast ?? p.actual]);
  const maxVal = Math.max(...allVals) * 1.12;
  const minVal = Math.min(...allVals) * 0.72;
  const range = Math.max(1, maxVal - minVal);

  const pts = dataset.points.map((p, idx) => {
    const x =
      padX + (dataset.points.length === 1 ? usableW / 2 : (idx / (dataset.points.length - 1)) * usableW);
    const yActual = padTop + usableH - ((p.actual - minVal) / range) * usableH;
    const yForecast =
      p.forecast !== undefined
        ? padTop + usableH - ((p.forecast - minVal) / range) * usableH
        : undefined;
    return { ...p, idx, x, yActual, yForecast };
  });

  const actualPts = pts.filter((p) => !p.label.includes('*'));
  const forecastPts = pts.filter((p) => p.yForecast !== undefined);
  const toLine = (arr) =>
    arr.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`).join(' ');

  const actualPath = toLine(actualPts.map((p) => ({ x: p.x, y: p.yActual })));
  const actualArea =
    actualPts.length > 0
      ? `${actualPath} L ${actualPts[actualPts.length - 1].x.toFixed(1)} ${height - padBottom} L ${actualPts[0].x.toFixed(1)} ${height - padBottom} Z`
      : '';

  const forecastPath = toLine(forecastPts.map((p) => ({ x: p.x, y: p.yForecast })));
  const forecastArea =
    forecastPts.length > 1
      ? `${forecastPath} L ${forecastPts[forecastPts.length - 1].x.toFixed(1)} ${height - padBottom} L ${forecastPts[0].x.toFixed(1)} ${height - padBottom} Z`
      : '';

  const activeIdx =
    state.hoveredPointIdx !== null && state.hoveredPointIdx < pts.length
      ? state.hoveredPointIdx
      : pts.length - 1;
  const activePt = pts[activeIdx];

  const guides = [0.2, 0.5, 0.8]
    .map((r) => {
      const y = (padTop + usableH * r).toFixed(1);
      return `<line x1="24" y1="${y}" x2="${width - 24}" y2="${y}" stroke="var(--border-subtle)" stroke-dasharray="3 5" />`;
    })
    .join('');

  const nodes = pts
    .map((pt) => {
      const isForecastOnly = pt.label.includes('*');
      const cy = isForecastOnly ? pt.yForecast ?? pt.yActual : pt.yActual;
      const isActive = pt.idx === activeIdx;
      return `
        <g class="js-chart-node" data-idx="${pt.idx}" style="cursor:pointer;">
          <rect x="${(pt.x - 28).toFixed(1)}" y="10" width="56" height="${height - 20}" fill="transparent" />
          ${
            isActive
              ? `<line x1="${pt.x.toFixed(1)}" y1="20" x2="${pt.x.toFixed(1)}" y2="${height - padBottom}" stroke="var(--border-strong)" stroke-width="1" />`
              : ''
          }
          <circle
            cx="${pt.x.toFixed(1)}"
            cy="${cy.toFixed(1)}"
            r="${isActive ? 6 : 4}"
            fill="${isForecastOnly ? 'var(--accent-emerald)' : 'var(--accent-primary)'}"
            stroke="var(--bg-surface)"
            stroke-width="2"
          />
          <text
            x="${pt.x.toFixed(1)}"
            y="${height - 8}"
            text-anchor="middle"
            fill="var(--text-muted)"
            font-family="var(--font-mono)"
            font-size="10"
          >${pt.label}</text>
        </g>
      `;
    })
    .join('');

  const chartBox = document.getElementById('analyticsChartContainer');
  if (chartBox) {
    chartBox.innerHTML = `
      <svg viewBox="0 0 ${width} ${height}" class="chart-svg" role="img" aria-label="Revenue and AI forecast chart">
        <defs>
          <linearGradient id="gmvGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--accent-primary)" stop-opacity="0.25"></stop>
            <stop offset="100%" stop-color="var(--accent-primary)" stop-opacity="0"></stop>
          </linearGradient>
          <linearGradient id="fcGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--accent-emerald)" stop-opacity="0.2"></stop>
            <stop offset="100%" stop-color="var(--accent-emerald)" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
        ${guides}
        ${actualArea ? `<path d="${actualArea}" fill="url(#gmvGrad)" />` : ''}
        ${actualPath ? `<path d="${actualPath}" fill="none" stroke="var(--accent-primary)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />` : ''}
        ${forecastArea ? `<path d="${forecastArea}" fill="url(#fcGrad)" />` : ''}
        ${forecastPath ? `<path d="${forecastPath}" fill="none" stroke="var(--accent-emerald)" stroke-width="2.5" stroke-dasharray="6 6" stroke-linecap="round" />` : ''}
        ${nodes}
      </svg>
    `;

    chartBox.querySelectorAll('.js-chart-node').forEach((g) => {
      const updateHover = () => {
        state.hoveredPointIdx = Number(g.dataset.idx);
        renderAnalytics();
      };
      g.addEventListener('mouseenter', updateHover);
      g.addEventListener('click', updateHover);
    });
  }

  // Telemetry bar
  const tele = document.getElementById('chartTelemetryBar');
  if (tele && activePt) {
    const val = activePt.label.includes('*') ? activePt.forecast ?? activePt.actual : activePt.actual;
    tele.innerHTML = `
      <div style="display:flex;align-items:center;gap:0.75rem;">
        <span class="font-mono" style="padding:0.25rem 0.6rem;border-radius:8px;background:var(--bg-surface);font-size:0.74rem;font-weight:600;border:1px solid var(--border-subtle);">
          ${activePt.label}
        </span>
        <div>
          <div style="font-size:0.8rem;font-weight:600;">
            $${val.toLocaleString()}
            <span class="font-mono" style="margin-left:0.5rem;font-size:0.7rem;color:var(--accent-emerald);">
              +${activePt.lift}% AI visual lift
            </span>
          </div>
          <div style="font-size:0.72rem;color:var(--text-secondary);">${activePt.note}</div>
        </div>
      </div>
      <span class="font-mono" style="font-size:0.62rem;text-transform:uppercase;letter-spacing:0.12em;color:var(--text-muted);">
        Live Telemetry
      </span>
    `;
  }
}

function renderAnalyst() {
  const qList = document.getElementById('analystQuestionList');
  const ansBox = document.getElementById('analystAnswerBox');
  const active = AI_ANALYST_PROMPTS.find((p) => p.id === state.analystPromptId) || AI_ANALYST_PROMPTS[0];

  if (qList) {
    qList.innerHTML = AI_ANALYST_PROMPTS.map((item) => {
      const selected = item.id === active.id;
      return `
        <button type="button" class="analyst-q-btn ${selected ? 'is-active' : ''}" data-qid="${item.id}">
          <span>${item.question}</span>
          <span aria-hidden="true">↗</span>
        </button>
      `;
    }).join('');
    qList.querySelectorAll('.analyst-q-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.analystPromptId = btn.dataset.qid;
        renderAnalyst();
      });
    });
  }

  if (ansBox) {
    const applied = Boolean(state.appliedActions[active.id]);
    ansBox.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;">
        <span class="pill-emerald">${active.badge}</span>
        <span class="font-mono" style="font-size:0.72rem;font-weight:600;">${active.metric}</span>
      </div>
      <p style="margin:0.85rem 0 0;font-size:0.8rem;line-height:1.6;color:var(--text-secondary);">
        ${active.summary}
      </p>
      <button
        type="button"
        id="applyAnalystActionBtn"
        class="btn ${applied ? '' : 'btn--ink'}"
        style="margin-top:1rem;width:100%;padding:0.68rem 1rem;border-radius:12px;${
          applied ? 'background:var(--accent-emerald-soft);color:var(--accent-emerald);' : ''
        }"
      >
        ${applied ? '✓ Action applied to live storefront' : `✦ ${active.action}`}
      </button>
    `;
    document.getElementById('applyAnalystActionBtn')?.addEventListener('click', () => {
      state.appliedActions[active.id] = true;
      renderAnalyst();
    });
  }
}

document.querySelectorAll('#timeframeSwitcher button').forEach((btn) => {
  btn.addEventListener('click', () => {
    state.timeframe = btn.dataset.tf;
    state.hoveredPointIdx = null;
    renderAnalytics();
  });
});

// ============================================================================
// 5. PRICING TOGGLE & LAUNCH MODAL
// ============================================================================
document.querySelectorAll('#billingToggle button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const billing = btn.dataset.billing;
    document.querySelectorAll('#billingToggle button').forEach((b) => {
      b.classList.toggle('is-active', b.dataset.billing === billing);
    });
    document.querySelectorAll('.js-plan-price').forEach((el) => {
      const val = billing === 'annual' ? el.dataset.annual : el.dataset.monthly;
      el.textContent = `$${val}`;
    });
  });
});

const launchModal = document.getElementById('launchModal');
const launchForm = document.getElementById('launchForm');
const launchSuccess = document.getElementById('launchSuccess');
const modalStoreName = document.getElementById('modalStoreName');
const modalSlugPreview = document.getElementById('modalSlugPreview');

function openModal() {
  launchModal?.classList.add('is-open');
  if (launchForm) launchForm.style.display = 'block';
  if (launchSuccess) launchSuccess.style.display = 'none';
}

function closeModal() {
  launchModal?.classList.remove('is-open');
}

document.querySelectorAll('.js-open-launch').forEach((btn) => btn.addEventListener('click', openModal));
document.getElementById('closeModalBtn')?.addEventListener('click', closeModal);
document.getElementById('launchDoneBtn')?.addEventListener('click', closeModal);
launchModal?.addEventListener('click', (e) => {
  if (e.target === launchModal) closeModal();
});

const toSlug = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '') || 'your-store';

modalStoreName?.addEventListener('input', () => {
  if (modalSlugPreview) modalSlugPreview.textContent = `${toSlug(modalStoreName.value)}.vela.shop`;
});

document.querySelectorAll('.js-modal-mode').forEach((btn) => {
  btn.addEventListener('click', () => {
    state.modalMode = btn.dataset.mode;
    document.querySelectorAll('.js-modal-mode').forEach((b) => {
      b.classList.toggle('is-active', b.dataset.mode === state.modalMode);
    });
  });
});

launchForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = (modalStoreName?.value || 'Your Store').trim();
  const slug = toSlug(name);
  const titleEl = document.getElementById('launchSuccessTitle');
  const descEl = document.getElementById('launchSuccessDesc');
  if (titleEl) titleEl.textContent = `${name} is staged.`;
  if (descEl) {
    descEl.innerHTML = `Sandbox configured at <strong class="font-mono" style="color:var(--text-primary);">https://${slug}.vela.shop</strong> with <strong style="color:var(--text-primary);">${
      state.modalMode === 'ai' ? 'AI Designer Co-Pilot' : 'Manual Studio Canvas'
    }</strong> and theme-matched AI photography ready for your first upload.`;
  }
  launchForm.style.display = 'none';
  if (launchSuccess) launchSuccess.style.display = 'block';
});

// ============================================================================
// 6. STICKY NARRATIVE STEP CONTROLLER
// ============================================================================
const narrativeChapters = Array.from(document.querySelectorAll('.chapter-card'));
const narrativePills = Array.from(document.querySelectorAll('#narrativeStepPills button'));

function setNarrativeStep(step) {
  narrativeChapters.forEach((c, i) => c.classList.toggle('is-active', i === step));
  narrativePills.forEach((p, i) => p.classList.toggle('is-active', i === step));

  const imgRaw = document.getElementById('narrativeImgRaw');
  const imgStudio = document.getElementById('narrativeImgStudio');
  const ov0 = document.getElementById('narrativeOverlay0');
  const ov1 = document.getElementById('narrativeOverlay1');
  const ov2 = document.getElementById('narrativeOverlay2');
  const status = document.getElementById('narrativeStatus');

  imgRaw?.classList.toggle('is-visible', step === 0);
  imgStudio?.classList.toggle('is-visible', step >= 1);
  ov0?.classList.toggle('is-visible', step === 0);
  ov1?.classList.toggle('is-visible', step === 1);
  ov2?.classList.toggle('is-visible', step === 2);

  if (status) {
    status.textContent =
      step === 0
        ? 'SOURCE: CAMERA ROLL'
        : step === 1
          ? 'PIPELINE: AI ART DIRECTOR'
          : 'LIVE: STOREFRONT TELEMETRY';
  }
}

narrativeChapters.forEach((el) => {
  el.addEventListener('click', () => setNarrativeStep(Number(el.dataset.step)));
});
narrativePills.forEach((btn) => {
  btn.addEventListener('click', () => setNarrativeStep(Number(btn.dataset.step)));
});

// ============================================================================
// 7. SMOOTH 60FPS DAMPED-LERP ADVANCED PARALLAX & SCROLL ENGINE
// ============================================================================
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const siteHeader = document.getElementById('siteHeader');
const scrollProgressBar = document.getElementById('scrollProgress');
const heroSection = document.getElementById('heroSection');
const heroBgLayer = document.getElementById('heroBgLayer');
const heroCenterPlane = document.getElementById('heroCenterPlane');
const heroLeftPlane = document.getElementById('heroLeftPlane');
const heroRightPlane = document.getElementById('heroRightPlane');
const heroTipPill = document.getElementById('heroTipPill');
const workflowSection = document.getElementById('workflow');
const narrativeViewport = document.getElementById('narrativeViewport');
const gallerySection = document.getElementById('parallaxGallery');
const galleryCols = Array.from(document.querySelectorAll('[data-parallax-col]'));
const ctaBanner = document.getElementById('ctaBanner');
const ctaBgParallax = document.getElementById('ctaBgParallax');

let targetScrollY = window.scrollY;
let currentScrollY = window.scrollY;
let lastNarrativeScrollY = window.scrollY;
let targetMouseX = 0;
let targetMouseY = 0;
let currentMouseX = 0;
let currentMouseY = 0;

window.addEventListener(
  'scroll',
  () => {
    targetScrollY = window.scrollY;
    siteHeader?.classList.toggle('is-scrolled', targetScrollY > 24);
  },
  { passive: true }
);

heroSection?.addEventListener('mousemove', (e) => {
  if (prefersReduced) return;
  const rect = heroSection.getBoundingClientRect();
  targetMouseX = (e.clientX - rect.left) / rect.width - 0.5;
  targetMouseY = (e.clientY - rect.top) / rect.height - 0.5;
});
heroSection?.addEventListener('mouseleave', () => {
  targetMouseX = 0;
  targetMouseY = 0;
});

function clamp01(v) {
  return Math.max(0, Math.min(1, v));
}

function tickParallax() {
  // Smooth spring-like damping
  currentScrollY += (targetScrollY - currentScrollY) * 0.12;
  currentMouseX += (targetMouseX - currentMouseX) * 0.08;
  currentMouseY += (targetMouseY - currentMouseY) * 0.08;

  const docH = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  const pageProgress = clamp01(currentScrollY / docH);
  if (scrollProgressBar) {
    scrollProgressBar.style.transform = `scaleX(${pageProgress.toFixed(4)})`;
  }

  if (!prefersReduced) {
    const vh = window.innerHeight;
    const isDesktop = window.innerWidth >= 1024;

    // 1. Hero Multi-Plane Scroll + 3D Mouse Tilt Parallax
    if (heroSection) {
      const heroRect = heroSection.getBoundingClientRect();
      const heroProg = clamp01(-heroRect.top / Math.max(1, heroRect.height));

      if (heroBgLayer) {
        heroBgLayer.style.transform = `translate3d(0, ${(heroProg * 110).toFixed(1)}px, 0)`;
      }
      if (heroCenterPlane) {
        const y = heroProg * -38;
        const sc = 1 + Math.min(heroProg, 0.65) * 0.04;
        const rx = isDesktop ? (-currentMouseY * 5.5).toFixed(2) : 0;
        const ry = isDesktop ? (currentMouseX * 6.5).toFixed(2) : 0;
        heroCenterPlane.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0) scale(${sc.toFixed(4)}) rotateX(${rx}deg) rotateY(${ry}deg)`;
      }
      if (heroLeftPlane && isDesktop) {
        const y = 12 - heroProg * 145 + currentMouseY * 14;
        const x = -heroProg * 28 + currentMouseX * 18;
        heroLeftPlane.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      }
      if (heroRightPlane && isDesktop) {
        const y = 26 - heroProg * 175 - currentMouseY * 12;
        const x = heroProg * 30 - currentMouseX * 16;
        heroRightPlane.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      }
      if (heroTipPill) {
        heroTipPill.style.transform = `translate3d(0, ${(heroProg * -48).toFixed(1)}px, 0)`;
      }
    }

    // 2. Sticky Scroll Narrative Chapter Progression (only when user actually scrolls so manual clicks stick)
    if (workflowSection) {
      const wfRect = workflowSection.getBoundingClientRect();
      const wfProg = clamp01((vh * 0.5 - wfRect.top) / Math.max(1, wfRect.height * 0.72));
      if (Math.abs(targetScrollY - lastNarrativeScrollY) > 10) {
        lastNarrativeScrollY = targetScrollY;
        if (wfRect.top < vh * 0.75 && wfRect.bottom > vh * 0.25) {
          const step = wfProg < 0.34 ? 0 : wfProg < 0.68 ? 1 : 2;
          setNarrativeStep(step);
        }
      }
      if (narrativeViewport && isDesktop) {
        const ny = (0.5 - wfProg) * 32;
        narrativeViewport.style.transform = `translate3d(0, ${ny.toFixed(1)}px, 0)`;
      }
    }

    // 3. Opposing 3-Column Parallax Gallery
    if (gallerySection && window.innerWidth >= 768) {
      const gRect = gallerySection.getBoundingClientRect();
      const gProg = clamp01((vh - gRect.top) / (vh + gRect.height));
      const centered = gProg - 0.5;
      galleryCols.forEach((col) => {
        const speed = Number(col.dataset.parallaxCol || 0);
        col.style.transform = `translate3d(0, ${(centered * speed * 2).toFixed(1)}px, 0)`;
      });
    } else {
      galleryCols.forEach((col) => {
        col.style.transform = 'none';
      });
    }

    // 4. Final CTA Backdrop Parallax
    if (ctaBanner && ctaBgParallax) {
      const cRect = ctaBanner.getBoundingClientRect();
      const cProg = clamp01((vh - cRect.top) / (vh + cRect.height));
      const cy = (cProg - 0.5) * 64;
      ctaBgParallax.style.transform = `translate3d(0, ${cy.toFixed(1)}px, 0)`;
    }
  }

  requestAnimationFrame(tickParallax);
}

// IntersectionObserver for crisp section reveals
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-inview');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ============================================================================
// INIT
// ============================================================================
applyTheme(state.theme, false);
renderStudioPresets();
selectStudioPreset(state.studioPresetId, false);
setSliderPos(54);
renderStoreBuilder();
renderAnalytics();
renderAnalyst();
requestAnimationFrame(tickParallax);
