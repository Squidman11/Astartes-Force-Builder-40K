const chapters = {
  codex: "Codex: Space Marines",
  ultramarines: "Ultramarines",
  imperial_fists: "Imperial Fists",
  salamanders: "Salamanders",
  raven_guard: "Raven Guard",
  iron_hands: "Iron Hands",
  white_scars: "White Scars",
  dark_angels: "Dark Angels",
  blood_angels: "Blood Angels",
  space_wolves: "Space Wolves",
  black_templars: "Black Templars",
  deathwatch: "Deathwatch"
};

const chapterThemes = {
  codex: { primary: "#2563eb", primaryHover: "#1d4ed8", accent: "#eab308", accentHover: "#ca8a04", background: "#0b0f19", panel: "#1e293b", inner: "#0f172a", hover: "#131d35", selected: "#14223a", border: "#334155", borderMuted: "#475569", heading: "#cbd5e1" },
  ultramarines: { primary: "#1675c1", primaryHover: "#105d9c", accent: "#d4b35e", accentHover: "#b8943d", background: "#091522", panel: "#132b40", inner: "#0b1d2d", hover: "#10263a", selected: "#173653", border: "#29465d", borderMuted: "#3b5c73", heading: "#d7e6f0" },
  imperial_fists: { primary: "#d69e16", primaryHover: "#ad7e0e", accent: "#f1cc55", accentHover: "#d2a92d", background: "#171307", panel: "#302812", inner: "#1d190d", hover: "#3a3014", selected: "#423416", border: "#534520", borderMuted: "#67572b", heading: "#f2e8c8" },
  salamanders: { primary: "#16854a", primaryHover: "#116838", accent: "#e26d36", accentHover: "#bd5125", background: "#09150e", panel: "#153324", inner: "#0c2116", hover: "#123421", selected: "#18432b", border: "#28543a", borderMuted: "#3b684e", heading: "#d4eadb" },
  raven_guard: { primary: "#4b5563", primaryHover: "#374151", accent: "#8fb7d8", accentHover: "#6b99bd", background: "#0b0e12", panel: "#202833", inner: "#121922", hover: "#242f3c", selected: "#293746", border: "#374453", borderMuted: "#4a5a69", heading: "#dbe4ec" },
  iron_hands: { primary: "#687684", primaryHover: "#515f6b", accent: "#d2753e", accentHover: "#ae5728", background: "#0d1114", panel: "#252b30", inner: "#161c20", hover: "#2a343a", selected: "#303c43", border: "#3b454c", borderMuted: "#515d65", heading: "#dce2e6" },
  white_scars: { primary: "#a8b5c0", primaryHover: "#8796a2", accent: "#c94b4b", accentHover: "#a93434", background: "#101316", panel: "#292f33", inner: "#191f23", hover: "#333b40", selected: "#3c464c", border: "#424c52", borderMuted: "#59666e", heading: "#edf0f2" },
  dark_angels: { primary: "#276449", primaryHover: "#1d4d37", accent: "#b6a15c", accentHover: "#938044", background: "#09120e", panel: "#17271f", inner: "#0e1b15", hover: "#1b3025", selected: "#203a2c", border: "#2b4838", borderMuted: "#3f5d4c", heading: "#d9e6dc" },
  blood_angels: { primary: "#a92332", primaryHover: "#841b27", accent: "#d4b35e", accentHover: "#b8943d", background: "#180b0e", panel: "#35171d", inner: "#211014", hover: "#401a22", selected: "#4b2029", border: "#572a32", borderMuted: "#70404a", heading: "#f0dfe1" },
  space_wolves: { primary: "#66849a", primaryHover: "#4e6b80", accent: "#c8ab70", accentHover: "#a88b54", background: "#0c1217", panel: "#202c35", inner: "#131e26", hover: "#293946", selected: "#304352", border: "#3b4e5b", borderMuted: "#526775", heading: "#dbe5eb" },
  black_templars: { primary: "#9b3035", primaryHover: "#772329", accent: "#d8d8d2", accentHover: "#b8bab7", background: "#101011", panel: "#262627", inner: "#181819", hover: "#303032", selected: "#38383a", border: "#414144", borderMuted: "#5b5b5f", heading: "#e5e5e2" },
  deathwatch: { primary: "#6b7280", primaryHover: "#525966", accent: "#bd4545", accentHover: "#963434", background: "#0b0c0f", panel: "#202226", inner: "#131519", hover: "#292c31", selected: "#32363d", border: "#3b3f46", borderMuted: "#555a63", heading: "#dfe1e5" }
};

function applyChapterTheme(chapterId) {
  const theme = chapterThemes[chapterId] || chapterThemes.codex;
  const root = document.documentElement;
  root.dataset.chapter = chapterId;
  root.style.setProperty("--primary", theme.primary);
  root.style.setProperty("--primary-hover", theme.primaryHover);
  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--accent-hover", theme.accentHover);
  root.style.setProperty("--bg-color", theme.background);
  root.style.setProperty("--panel-bg", theme.panel);
  root.style.setProperty("--inner-bg", theme.inner);
  root.style.setProperty("--card-hover", theme.hover);
  root.style.setProperty("--selected-bg", theme.selected);
  root.style.setProperty("--border-color", theme.border);
  root.style.setProperty("--border-muted", theme.borderMuted);
  root.style.setProperty("--panel-heading", theme.heading);
}

const chapterExclusiveUnits = {
  ultramarines: ["guilliman", "calgar", "captain_titus", "tigris", "cato_sicarius", "victrix_guard"],
  imperial_fists: ["lysander", "tor_garadon"],
  salamanders: ["adrax_agatone"],
  raven_guard: ["aethon_shaan", "kayvaan_shrike"],
  iron_hands: ["iron_father_feirros"],
  white_scars: ["suboden_khan"],
  blood_angels: masterUnits.filter(unit => unit.chapter === "blood_angels").map(unit => unit.id),
  dark_angels: masterUnits.filter(unit => unit.chapter === "dark_angels").map(unit => unit.id),
  black_templars: masterUnits.filter(unit => unit.chapter === "black_templars").map(unit => unit.id),
  space_wolves: masterUnits.filter(unit => unit.chapter === "space_wolves").map(unit => unit.id)
};

const unitInfo = {
  guilliman: "A named Ultramarines commander. His datasheet represents a powerful close-range combatant and army-support leader.",
  calgar: "An Ultramarines Chapter Master accompanied by Victrix Honour Guard; his roster entry includes his bodyguard models.",
  int_sq: "Battleline infantry for holding objectives.",
  ass_int: "Close-combat Battleline infantry suited to taking objectives.",
  hv_int: "Durable Gravis Battleline infantry.",
  aggressors: "Gravis assault infantry suited to close-range engagements.",
  eliminators: "Phobos marksmen suited to precision fire support.",
  eradicators: "Gravis infantry suited to engaging heavily armoured targets.",
  hellblasters: "Elite infantry that provides specialised fire support.",
  infiltrators: "Phobos screening infantry suited to forward deployment and denying enemy reinforcements near their position.",
  infil_sq: "Phobos screening infantry suited to forward deployment and denying enemy reinforcements near their position.",
  incursors: "Phobos reconnaissance infantry suited to forward operations and target marking.",
  scout_sq: "Light infantry that can screen, scout, and hold forward positions.",
  incept_sq: "Mobile jump-pack infantry suited to rapid deployment.",
  term_sq: "Heavily armoured infantry suited to holding key positions.",
  ball_dr: "Long-range fire-support Dreadnought.",
  red_dr: "A versatile Dreadnought that can support a range of battlefield roles.",
  land_raider: "A heavily armoured transport."
};

const detachments = {
  assault_brethren: {
    name: "Assault Brethren",
    enhancements: [
      { name: "Furious Assault (Upgrade)", points: 10 },
      { name: "Imperium's Sword", points: 20 }
    ]
  },
  angelic_inheritors: {
    name: "Angelic Inheritors",
    chapter: "blood_angels",
    enhancements: [
      { name: "Blazing Icon", points: 20 },
      { name: "Ordained Sacrifice", points: 25 },
      { name: "Prescient Flash", points: 25 },
      { name: "Unto Death", points: 15 }
    ]
  },
  encarmine_speartip: {
    name: "Encarmine Speartip",
    chapter: "blood_angels",
    enhancements: [
      { name: "Angelic Executioner", points: 20 },
      { name: "Shadow of Abomination", points: 15 }
    ]
  },
  blade_of_ultramar: {
    name: "Blade of Ultramar",
    chapter: "ultramarines",
    enhancements: [
      { name: "Armour of Antoninus", points: 15 },
      { name: "Oath of Macragge", points: 20 },
      { name: "Student of the Codex", points: 20 },
      { name: "Veteran of Behemoth", points: 20 }
    ]
  },
  ceramite_sentinels: {
    name: "Ceramite Sentinels",
    chapter: "ultramarines",
    enhancements: [
      { name: "Castellum Omnivox", points: 10 },
      { name: "Defensive Mastery", points: 10 },
      { name: "Honour Indefatigable", points: 10 },
      { name: "Spy-skull Data Link", points: 10 }
    ]
  },
  champions_of_fenris: {
    name: "Champions of Fenris",
    chapter: "space_wolves",
    enhancements: [
      { name: "A Giant Amongst Giants", points: 15 },
      { name: "Preyslayer", points: 15 }
    ]
  },
  deathwatch_support: {
    name: "Deathwatch Support",
    enhancements: [{ name: "Beacon Angelis", points: 25 }]
  },
  darkflight_pursuit: {
    name: "Darkflight Pursuit",
    chapter: "dark_angels",
    enhancements: [
      { name: "Nightforged Battery (Upgrade)", points: 10 },
      { name: "Thundercowl Turbines (Upgrade)", points: 15 }
    ]
  },
  devastator_brethren: {
    name: "Devastator Brethren",
    enhancements: [
      { name: "Honour of Vigilance", points: 20 },
      { name: "Master-forged Firearms", points: 15 }
    ]
  },
  forgefathers_seekers: {
    name: "Forgefathers' Seekers",
    chapter: "salamanders",
    enhancements: [
      { name: "Adamantine Mantle", points: 20 },
      { name: "Forged in Battle", points: 25 },
      { name: "Immolator", points: 20 },
      { name: "War-tempered Artifice", points: 25 }
    ]
  },
  gauntlet_task_force: {
    name: "Gauntlet Task Force",
    enhancements: [
      { name: "Damocles-class Uplink", points: 15 },
      { name: "Linebreaker Onslaught", points: 20 }
    ]
  },
  gladius_task_force: {
    name: "Gladius Task Force",
    enhancements: [
      { name: "Adept of the Codex", points: 20 },
      { name: "Artificer Armour", points: 15 },
      { name: "Fire Discipline", points: 30 },
      { name: "Laurels of Triumph", points: 20 },
      { name: "Standard of the Emperor Ascendant", points: 25 }
    ]
  },
  gravis_linebreaker_force: {
    name: "Gravis Linebreaker Force",
    enhancements: [
      { name: "Indefatigable Fortitude", points: 20 },
      { name: "Relentless Advance", points: 20 }
    ]
  },
  gravis_siege_force: {
    name: "Gravis Siege Force",
    enhancements: [
      { name: "Immovable Conquerors (Upgrade)", points: 15 },
      { name: "Narthecis Gauntlet", points: 20 }
    ]
  },
  ironclad_champions: {
    name: "Ironclad Champions",
    enhancements: [
      { name: "Artificer Sarcophagus (Upgrade)", points: 40 },
      { name: "Venerable Champion (Aura) (Upgrade)", points: 30 }
    ]
  },
  ironstorm_spearhead: {
    name: "Ironstorm Spearhead",
    chapter: "iron_hands",
    enhancements: [
      { name: "Gunnery Honours (Upgrade)", points: 15 },
      { name: "Redoubtable Machine Spirit (Upgrade)", points: 25 }
    ]
  },
  inner_circle_task_force: {
    name: "Inner Circle Task Force",
    chapter: "dark_angels",
    enhancements: [
      { name: "Champion of the Deathwing", points: 20 },
      { name: "Singular Will", points: 20 }
    ]
  },
  medusas_wrath: {
    name: "Medusa's Wrath",
    chapter: "iron_hands",
    enhancements: [
      { name: "Adept of the Omnissiah", points: 25 },
      { name: "Master of the Machine War", points: 25 },
      { name: "Target Augury Web", points: 30 },
      { name: "The Flesh is Weak", points: 15 }
    ]
  },
  fist_of_the_god_emperor: {
    name: "Fist of the God-Emperor",
    chapter: "black_templars",
    enhancements: [
      { name: "Oathbound Exemplar", points: 10 },
      { name: "Righteous Fervour (Upgrade)", points: 15 }
    ]
  },
  marshals_household: {
    name: "Marshal's Household",
    chapter: "black_templars",
    enhancements: [
      { name: "Fervent Exemplars (Upgrade)", points: 10 },
      { name: "Inheritors of Sigismund (Upgrade)", points: 15 }
    ]
  },
  phobos_shadow_force: {
    name: "Phobos Shadow Force",
    enhancements: [
      { name: "Execute and Redeploy", points: 25 },
      { name: "Venator Omni-auspex", points: 15 }
    ]
  },
  phobos_shock_force: {
    name: "Phobos Shock Force",
    enhancements: [
      { name: "Seal of Shrouding", points: 15 },
      { name: "Venator Omni-auspex", points: 15 }
    ]
  },
  shadowmark_talon: {
    name: "Shadowmark Talon",
    chapter: "raven_guard",
    enhancements: [
      { name: "Blackwing Shroud", points: 25 },
      { name: "Coronal Susurrant", points: 30 },
      { name: "Hunter's Instincts", points: 25 },
      { name: "Umbral Raptor", points: 15 }
    ]
  },
  spearpoint_task_force: {
    name: "Spearpoint Task Force",
    chapter: "white_scars",
    enhancements: [
      { name: "Chogorian Huntmaster (Upgrade)", points: 20 },
      { name: "Hunter's Eye", points: 25 },
      { name: "Spearpoint Paragon", points: 25 },
      { name: "Stormseers' Wisdom", points: 15 }
    ]
  },
  stormlance_task_force: {
    name: "Stormlance Task Force",
    enhancements: [
      { name: "Auspex Triangulation Shrines (Upgrade)", points: 10 },
      { name: "Supercharged Engines (Upgrade)", points: 10 }
    ]
  },
  tactical_brethren: {
    name: "Tactical Brethren",
    enhancements: [
      { name: "Laurels of Vigilance", points: 10 },
      { name: "Tactical Insight", points: 15 }
    ]
  },
  tacticus_attack_force: {
    name: "Tacticus Attack Force",
    enhancements: [
      { name: "Martial Paragon", points: 10 },
      { name: "Spearpoint War Leader", points: 15 }
    ]
  },
  tacticus_firestorm_force: {
    name: "Tacticus Firestorm Force",
    enhancements: [
      { name: "Cyber-familiar", points: 15 },
      { name: "Tempered in Battle (Aura)", points: 10 }
    ]
  },
  terminator_storm_force: {
    name: "Terminator Storm Force",
    enhancements: [
      { name: "Champion of the First Company", points: 20 },
      { name: "Corporeum Reliquary", points: 25 }
    ]
  },
  vow_sworn_crusaders: {
    name: "Vow-sworn Crusaders",
    chapter: "black_templars",
    enhancements: [
      { name: "Augury Servo-host", points: 20 },
      { name: "Consecrating Aura", points: 20 },
      { name: "Incendiary Animus", points: 25 },
      { name: "Zealous Vanguard", points: 25 }
    ]
  },
  wrath_of_the_rock: {
    name: "Wrath of the Rock",
    chapter: "dark_angels",
    enhancements: [
      { name: "Ancient Weapons", points: 20 },
      { name: "Deathwing Assault", points: 15 },
      { name: "Lord of the Ravenwing", points: 15 },
      { name: "Tempered in Battle (Aura)", points: 10 }
    ]
  }
};

const detachmentDescriptions = {
  assault_brethren: "An aggressive close-combat force built to seize objectives through assault units and battlefield momentum.",
  angelic_inheritors: "A Blood Angels force focused on elite warriors, heroic characters, and decisive assaults.",
  encarmine_speartip: "A rapid Blood Angels strike force themed around Sanguinary Guard and concentrated jump-pack attacks.",
  blade_of_ultramar: "An adaptable Ultramarines force that rewards coordinated units and flexible tactical responses.",
  ceramite_sentinels: "An Ultramarines defensive force focused on holding ground and protecting key positions.",
  champions_of_fenris: "A Space Wolves force centered on mighty champions and the elite warriors of the Wolf Guard.",
  deathwatch_support: "A Deathwatch-themed force that brings specialist xenos-hunting support to the wider Space Marine army.",
  darkflight_pursuit: "A Dark Angels fast-strike force built around the Ravenwing's speed, pursuit, and mobile firepower.",
  devastator_brethren: "A ranged fire-support force focused on heavy weapons and methodical destruction of priority targets.",
  forgefathers_seekers: "A Salamanders force themed around resilient warriors, flame weapons, and close-range firepower.",
  gauntlet_task_force: "A forward-operating force suited to reconnaissance, screening, and taking control of exposed objectives.",
  gladius_task_force: "A balanced all-round force with tactical flexibility for changing battlefield situations.",
  gravis_linebreaker_force: "A durable Gravis-armoured force designed to advance steadily and break through enemy lines.",
  gravis_siege_force: "A Gravis-heavy force focused on close-range firepower and grinding attacks against fortified positions.",
  ironclad_champions: "A force built around venerable champions and heavily armoured war engines.",
  ironstorm_spearhead: "An Iron Hands-style mechanised force focused on vehicles, durable fire support, and machine-led assaults.",
  inner_circle_task_force: "A Dark Angels force centered on the Inner Circle and elite Deathwing warriors.",
  medusas_wrath: "An Iron Hands force emphasizing relentless mechanised warfare and the strength of armoured units.",
  fist_of_the_god_emperor: "A Black Templars force that brings zealous close-combat pressure and objective-taking assaults.",
  marshals_household: "A Black Templars force led by its senior warriors, emphasizing disciplined crusader formations.",
  phobos_shadow_force: "A stealth-oriented force using Phobos units for infiltration, disruption, and precision strikes.",
  phobos_shock_force: "A Phobos force that turns forward deployment into sudden, close-range attacks.",
  shadowmark_talon: "A Raven Guard force built around stealth, misdirection, and strikes from unexpected angles.",
  spearpoint_task_force: "A White Scars force focused on speed, mounted warriors, and rapid attacks across the battlefield.",
  stormlance_task_force: "A fast-moving force that rewards mobile units and aggressive assaults.",
  tactical_brethren: "A flexible battleline force built around coordinated infantry and adaptable battlefield roles.",
  tacticus_attack_force: "A Tacticus-armoured force geared toward direct assaults and mobile mid-board fighting.",
  tacticus_firestorm_force: "A Tacticus force centered on close-range volleys and aggressive flame-heavy attacks.",
  terminator_storm_force: "An elite Terminator force built to deploy into the heart of the battle and dominate key positions.",
  vow_sworn_crusaders: "A Black Templars crusade force focused on unwavering vows, dedicated melee units, and relentless pressure.",
  wrath_of_the_rock: "A Dark Angels force combining the chapter's elite traditions, especially its Terminator-armoured warriors."
};

let currentRoster = [];
let currentRosterNotes = "";
let selectedInstanceId = null;
let draftRestoreFailed = false;
let undoHistory = [];
let redoHistory = [];
let pendingTextEdit = null;
let savedRosters = [];
let appDialogOnConfirm = null;
let appDialogOnCancel = null;
let appDialogReturnFocus = null;
let activeRoleFilter = "all";
let currentDetachment = "gladius_task_force";
let currentChapter = "codex";
let currentPointsLimit = 2000;

// DOM Elements
const catalogListEl = document.getElementById("catalogList");
const rosterListEl = document.getElementById("rosterList");
const configuratorWorkspaceEl = document.getElementById("configuratorWorkspace");
const searchBarEl = document.getElementById("searchBar");
const ptsTotalEl = document.getElementById("ptsTotal");
const unitTotalEl = document.getElementById("unitTotal");
const importFileEl = document.getElementById("importFile");
const detachmentSelectEl = document.getElementById("detachmentSelect");
const detachmentInfoTitleEl = document.getElementById("detachmentInfoTitle");
const detachmentInfoDescriptionEl = document.getElementById("detachmentInfoDescription");
const chapterSelectEl = document.getElementById("chapterSelect");
const customPointsLimitEl = document.getElementById("customPointsLimit");
const customLimitControlsEl = document.getElementById("customLimitControls");
const pointsLimitEl = document.getElementById("ptsLimit");
const relativeInfoContentEl = document.getElementById("relativeInfoContent");
const rosterRequirementsEl = document.getElementById("rosterRequirements");
const currentArmySummaryEl = document.getElementById("currentArmySummary");
const catalogSortEl = document.getElementById("catalogSort");
const hideAddedUnitsEl = document.getElementById("hideAddedUnits");
const rosterNotesEl = document.getElementById("rosterNotes");
const printRosterNotesEl = document.getElementById("printRosterNotes");
const draftStatusEl = document.getElementById("draftStatus");
const printRosterMetaEl = document.getElementById("printRosterMeta");
const savedRosterSelectEl = document.getElementById("savedRosterSelect");
const undoButtonEl = document.getElementById("btnUndo");
const redoButtonEl = document.getElementById("btnRedo");
const appDialogEl = document.getElementById("appDialog");
const appDialogMessageEl = document.getElementById("appDialogMessage");
const appDialogInputLabelEl = document.getElementById("appDialogInputLabel");
const appDialogInputLabelTextEl = document.getElementById("appDialogInputLabelText");
const appDialogInputEl = document.getElementById("appDialogInput");
const appDialogErrorEl = document.getElementById("appDialogError");
const appDialogConfirmButtonEl = document.getElementById("appDialogConfirm");
const appDialogCancelButtonEl = document.getElementById("appDialogCancel");

const DRAFT_STORAGE_KEY = "whDataArmyBuilderDraft";
const ROSTER_LIBRARY_KEY = "whDataSavedRosters";
const HISTORY_LIMIT = 50;

function init() {
  loadDraft();
  loadRosterLibrary();
  applyChapterTheme(currentChapter);
  Object.entries(chapters).forEach(([id, name]) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = name;
    chapterSelectEl.appendChild(option);
  });
  chapterSelectEl.value = currentChapter;

  populateDetachmentOptions();
  syncGameModeControls();
  pointsLimitEl.textContent = currentPointsLimit;
  updateDetachmentInfo();
  renderRoster();
  renderConfigurator();
  
  // Event Listeners
  searchBarEl.addEventListener("input", filterUnits);
  catalogSortEl.addEventListener("change", filterUnits);
  hideAddedUnitsEl.addEventListener("change", filterUnits);
  rosterNotesEl.value = currentRosterNotes;
  rosterNotesEl.addEventListener("focus", beginTextEdit);
  rosterNotesEl.addEventListener("blur", finishTextEdit);
  rosterNotesEl.addEventListener("keydown", event => {
    if (event.key === "Escape") rosterNotesEl.blur();
  });
  rosterNotesEl.addEventListener("input", () => {
    currentRosterNotes = rosterNotesEl.value;
    saveDraft();
  });
  document.getElementById("btnSaveRoster").addEventListener("click", saveCurrentToLibrary);
  document.getElementById("btnLoadRoster").addEventListener("click", loadSelectedRoster);
  document.getElementById("btnDuplicateRoster").addEventListener("click", duplicateSelectedRoster);
  document.getElementById("btnDeleteRoster").addEventListener("click", deleteSelectedRoster);
  savedRosterSelectEl.addEventListener("change", updateRosterLibraryButtons);
  appDialogConfirmButtonEl.addEventListener("click", confirmAppDialog);
  appDialogCancelButtonEl.addEventListener("click", cancelAppDialog);
  appDialogEl.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      event.preventDefault();
      cancelAppDialog();
    } else if (event.key === "Enter" && event.target === appDialogInputEl) {
      event.preventDefault();
      confirmAppDialog();
    }
  });
  undoButtonEl.addEventListener("click", undoRosterChange);
  redoButtonEl.addEventListener("click", redoRosterChange);
  document.getElementById("btnExportJson").addEventListener("click", () => exportData('json'));
  document.getElementById("btnExportText").addEventListener("click", () => exportData('text'));
  document.getElementById("btnImportJson").addEventListener("click", () => importFileEl.click());
  document.getElementById("btnClearRoster").addEventListener("click", startNewRoster);
  document.getElementById("btnPrintRoster").addEventListener("click", () => window.print());
  importFileEl.addEventListener("change", importData);
  detachmentSelectEl.addEventListener("change", changeDetachment);
  chapterSelectEl.addEventListener("change", changeChapter);
  document.querySelectorAll(".game-mode-btn").forEach(button => {
    button.addEventListener("click", () => selectGameMode(button.dataset.limit));
  });
  document.getElementById("applyCustomLimit").addEventListener("click", applyCustomLimit);

  // Setup Filtering Tab click handlers
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", function() {
      filterBtns.forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      activeRoleFilter = this.getAttribute("data-role");
      filterUnits();
    });
  });

  document.querySelectorAll(".mobile-nav-btn").forEach(button => {
    button.addEventListener("click", () => activateMobilePanel(button.dataset.panel));
  });
  activateMobilePanel("panel-roster");
}

function captureBuilderState() {
  return {
    chapter: currentChapter,
    detachment: currentDetachment,
    pointsLimit: currentPointsLimit,
    rosterNotes: currentRosterNotes,
    selectedInstanceId,
    units: currentRoster.map(item => ({
      ...item,
      enhancement: item.enhancement ? { ...item.enhancement } : null
    }))
  };
}

function getLeaderKeywordTypes(unitId) {
  return Object.entries(leaderKeywordTypes)
    .filter(([, unitIds]) => unitIds.includes(unitId))
    .map(([type]) => type);
}

function canJoinAnotherLeader(firstUnitId, secondUnitId) {
  const firstRules = leaderEligibility[firstUnitId];
  const secondRules = leaderEligibility[secondUnitId];
  const firstTypes = getLeaderKeywordTypes(firstUnitId);
  const secondTypes = getLeaderKeywordTypes(secondUnitId);
  const firstAllowsPairing = firstRules && firstRules.canJoinWith &&
    firstRules.canJoinWith.some(type => secondTypes.includes(type));
  const secondAllowsPairing = secondRules && secondRules.canJoinWith &&
    secondRules.canJoinWith.some(type => firstTypes.includes(type));
  return Boolean(firstAllowsPairing || secondAllowsPairing);
}

function canAttachLeaderToBodyguard(leader, bodyguard, alreadyAttachedLeaders = []) {
  const rules = leaderEligibility[leader.unitId];
  if (!rules || !rules.bodyguardUnitIds.includes(bodyguard.unitId) || leader === bodyguard) {
    return false;
  }
  if (alreadyAttachedLeaders.length === 0) return true;
  return alreadyAttachedLeaders.length === 1 &&
    canJoinAnotherLeader(leader.unitId, alreadyAttachedLeaders[0].unitId);
}

function sanitizeLeaderAttachments(roster) {
  const acceptedLeaders = new Map();
  roster.forEach(leader => {
    if (!leader.attachedToInstanceId) return;
    const bodyguard = roster.find(item => item.instanceId === leader.attachedToInstanceId);
    const alreadyAttached = bodyguard
      ? acceptedLeaders.get(bodyguard.instanceId) || []
      : [];
    if (!bodyguard || !canAttachLeaderToBodyguard(leader, bodyguard, alreadyAttached)) {
      leader.attachedToInstanceId = null;
      return;
    }
    alreadyAttached.push(leader);
    acceptedLeaders.set(bodyguard.instanceId, alreadyAttached);
  });
}

function updateHistoryButtons() {
  undoButtonEl.disabled = undoHistory.length === 0;
  redoButtonEl.disabled = redoHistory.length === 0;
  undoButtonEl.title = undoButtonEl.disabled ? "Make a roster change to enable Undo." : "Undo the last roster change.";
  redoButtonEl.title = redoButtonEl.disabled ? "Undo a change to enable Redo." : "Redo the undone roster change.";
}

function openAppDialog(message, options) {
  const settings = options || {};
  appDialogReturnFocus = document.activeElement;
  appDialogMessageEl.textContent = message;
  appDialogInputLabelEl.hidden = !settings.inputLabel;
  appDialogInputLabelTextEl.textContent = settings.inputLabel || "";
  appDialogInputEl.value = settings.initialValue || "";
  appDialogErrorEl.textContent = "";
  appDialogErrorEl.hidden = true;
  appDialogConfirmButtonEl.textContent = settings.confirmLabel || "Continue";
  appDialogCancelButtonEl.hidden = settings.showCancel === false;
  appDialogOnConfirm = settings.onConfirm;
  appDialogOnCancel = settings.onCancel || null;
  appDialogEl.hidden = false;
  if (settings.inputLabel) {
    appDialogInputEl.focus();
    appDialogInputEl.select();
  } else {
    appDialogConfirmButtonEl.focus();
  }
}

function closeAppDialog() {
  appDialogEl.hidden = true;
  appDialogOnConfirm = null;
  appDialogOnCancel = null;
  if (appDialogReturnFocus && appDialogReturnFocus.isConnected) {
    appDialogReturnFocus.focus();
  }
}

function confirmAppDialog() {
  const value = appDialogInputLabelEl.hidden ? null : appDialogInputEl.value.trim();
  if (appDialogInputLabelEl.hidden === false && !value) {
    appDialogErrorEl.textContent = "Enter a name to continue.";
    appDialogErrorEl.hidden = false;
    appDialogInputEl.focus();
    return;
  }
  const onConfirm = appDialogOnConfirm;
  closeAppDialog();
  if (onConfirm) onConfirm(value);
}

function cancelAppDialog() {
  const onCancel = appDialogOnCancel;
  closeAppDialog();
  if (onCancel) onCancel();
}

function requestAppConfirmation(message, confirmLabel, onConfirm, onCancel) {
  openAppDialog(message, { confirmLabel, onConfirm, onCancel });
}

function showAppMessage(message) {
  openAppDialog(message, { confirmLabel: "OK", showCancel: false });
}

function pushUndoSnapshot(snapshot = captureBuilderState()) {
  undoHistory.push(snapshot);
  if (undoHistory.length > HISTORY_LIMIT) undoHistory.shift();
  redoHistory = [];
  updateHistoryButtons();
}

function beginTextEdit() {
  pendingTextEdit = captureBuilderState();
}

function finishTextEdit() {
  if (!pendingTextEdit) return;
  const previous = pendingTextEdit;
  pendingTextEdit = null;
  if (JSON.stringify(previous) !== JSON.stringify(captureBuilderState())) {
    pushUndoSnapshot(previous);
  }
}

function restoreBuilderState(state) {
  currentChapter = state.chapter;
  currentDetachment = state.detachment;
  currentPointsLimit = state.pointsLimit;
  currentRosterNotes = state.rosterNotes;
  currentRoster = state.units.map(item => ({
    ...item,
    enhancement: item.enhancement ? { ...item.enhancement } : null
  }));
  sanitizeLeaderAttachments(currentRoster);
  selectedInstanceId = currentRoster.some(item => item.instanceId === state.selectedInstanceId)
    ? state.selectedInstanceId
    : currentRoster.length ? currentRoster[0].instanceId : null;
  chapterSelectEl.value = currentChapter;
  applyChapterTheme(currentChapter);
  populateDetachmentOptions();
  detachmentSelectEl.value = currentDetachment;
  customPointsLimitEl.value = String(currentPointsLimit);
  syncGameModeControls();
  pointsLimitEl.textContent = currentPointsLimit;
  rosterNotesEl.value = currentRosterNotes;
  updateDetachmentInfo();
  renderRoster();
  renderConfigurator();
}

function undoRosterChange() {
  if (undoHistory.length === 0) return;
  redoHistory.push(captureBuilderState());
  restoreBuilderState(undoHistory.pop());
  updateHistoryButtons();
}

function redoRosterChange() {
  if (redoHistory.length === 0) return;
  undoHistory.push(captureBuilderState());
  restoreBuilderState(redoHistory.pop());
  updateHistoryButtons();
}

function activateMobilePanel(panelId) {
  document.querySelectorAll(".mobile-nav-btn").forEach(button => {
    const active = button.dataset.panel === panelId;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  document.querySelectorAll(".main-layout > .panel").forEach(panel => {
    panel.classList.toggle("mobile-panel-active", panel.id === panelId);
  });
}

function getRosterLibraryState() {
  return captureBuilderState();
}

function saveRosterLibrary() {
  try {
    localStorage.setItem(ROSTER_LIBRARY_KEY, JSON.stringify(savedRosters));
    showDraftStatus("Saved roster library updated.");
    return true;
  } catch (error) {
    showDraftStatus("Could not save roster library: " + error.message, true);
    return false;
  }
}

function loadRosterLibrary() {
  try {
    const stored = localStorage.getItem(ROSTER_LIBRARY_KEY);
    if (!stored) {
      renderRosterLibraryOptions();
      return;
    }
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) throw new Error("The saved roster library is malformed.");
    savedRosters = parsed.filter(item =>
      item && typeof item.id === "string" && typeof item.name === "string" &&
      item.state && Array.isArray(item.state.units)
    );
    renderRosterLibraryOptions();
  } catch (error) {
    showDraftStatus("Could not load saved rosters: " + error.message, true);
    renderRosterLibraryOptions();
  }
}

function renderRosterLibraryOptions(selectedId = savedRosterSelectEl.value) {
  savedRosterSelectEl.innerHTML = "";
  if (savedRosters.length === 0) {
    savedRosterSelectEl.add(new Option("No saved rosters", ""));
    savedRosterSelectEl.disabled = true;
  } else {
    savedRosterSelectEl.disabled = false;
    savedRosters.forEach(roster => {
      savedRosterSelectEl.add(new Option(roster.name, roster.id));
    });
    if (savedRosters.some(roster => roster.id === selectedId)) {
      savedRosterSelectEl.value = selectedId;
    }
  }
  updateRosterLibraryButtons();
}

function updateRosterLibraryButtons() {
  const hasSavedRoster = savedRosters.some(roster => roster.id === savedRosterSelectEl.value);
  ["btnLoadRoster", "btnDuplicateRoster", "btnDeleteRoster"].forEach(id => {
    const button = document.getElementById(id);
    button.disabled = !hasSavedRoster;
    button.title = hasSavedRoster ? "" : "Save a roster first.";
  });
  document.getElementById("rosterLibraryHint").textContent = hasSavedRoster
    ? "Save Current stores a named copy. Loading replaces the active draft; use Undo to restore it."
    : "Save Current asks for a roster name. Save a roster to enable Load, Duplicate, and Delete.";
}

function saveCurrentToLibrary() {
  const suggestedName = savedRosterSelectEl.selectedOptions[0] &&
    savedRosterSelectEl.selectedOptions[0].value
    ? savedRosterSelectEl.selectedOptions[0].textContent + " copy"
    : "My Space Marine Roster";
  openAppDialog("Name this saved roster:", {
    inputLabel: "Roster name",
    initialValue: suggestedName,
    confirmLabel: "Save roster",
    onConfirm: name => addRosterToLibrary(name)
  });
}

function addRosterToLibrary(name) {
  const id = "roster_" + Date.now() + "_" + Math.floor(Math.random() * 10000);
  savedRosters.push({ id, name, state: getRosterLibraryState() });
  if (saveRosterLibrary()) renderRosterLibraryOptions(id);
  else savedRosters.pop();
}

function loadSelectedRoster() {
  const saved = savedRosters.find(roster => roster.id === savedRosterSelectEl.value);
  if (!saved) {
    showDraftStatus("Select a saved roster to load.", true);
    return;
  }
  requestAppConfirmation(
    "Load \"" + saved.name + "\"? This replaces the active draft. You can use Undo to restore it.",
    "Load roster",
    () => {
      pushUndoSnapshot();
      draftRestoreFailed = false;
      restoreBuilderState(saved.state);
      showDraftStatus("Loaded saved roster: " + saved.name + ".");
    }
  );
}

function duplicateSelectedRoster() {
  const saved = savedRosters.find(roster => roster.id === savedRosterSelectEl.value);
  if (!saved) {
    showDraftStatus("Select a saved roster to duplicate.", true);
    return;
  }
  openAppDialog("Name the duplicate roster:", {
    inputLabel: "Roster name",
    initialValue: saved.name + " copy",
    confirmLabel: "Create duplicate",
    onConfirm: name => addRosterDuplicate(saved, name)
  });
}

function addRosterDuplicate(saved, name) {
  const id = "roster_" + Date.now() + "_" + Math.floor(Math.random() * 10000);
  const instanceIds = new Map(saved.state.units.map((item, index) => [
    item.instanceId,
    id + "_unit_" + index
  ]));
  const state = {
    ...saved.state,
    units: saved.state.units.map(item => ({
      ...item,
      instanceId: instanceIds.get(item.instanceId),
      attachedToInstanceId: instanceIds.get(item.attachedToInstanceId) || null
    }))
  };
  savedRosters.push({ id, name, state });
  if (saveRosterLibrary()) renderRosterLibraryOptions(id);
  else savedRosters.pop();
}

function deleteSelectedRoster() {
  const saved = savedRosters.find(roster => roster.id === savedRosterSelectEl.value);
  if (!saved) {
    showDraftStatus("Select a saved roster to delete.", true);
    return;
  }
  requestAppConfirmation(
    "Delete the saved roster \"" + saved.name + "\"? This cannot be undone.",
    "Delete roster",
    () => {
      const index = savedRosters.findIndex(roster => roster.id === saved.id);
      if (index < 0) return;
      const [removed] = savedRosters.splice(index, 1);
      if (saveRosterLibrary()) {
        renderRosterLibraryOptions();
      } else {
        savedRosters.splice(index, 0, removed);
        renderRosterLibraryOptions(removed.id);
      }
    }
  );
}

function showDraftStatus(message, isError = false) {
  draftStatusEl.textContent = message;
  draftStatusEl.classList.toggle("has-error", isError);
}

function loadDraft() {
  try {
    const savedDraft = localStorage.getItem(DRAFT_STORAGE_KEY);
    if (!savedDraft) return;

    const draft = JSON.parse(savedDraft);
    if (draft.version !== 1 || !Array.isArray(draft.units)) {
      throw new Error("The saved draft has an unsupported format.");
    }

    currentChapter = Object.prototype.hasOwnProperty.call(chapters, draft.chapter)
      ? draft.chapter
      : "codex";
    currentDetachment = Object.prototype.hasOwnProperty.call(detachments, draft.detachment) &&
      isDetachmentAvailableForChapter(draft.detachment, currentChapter)
      ? draft.detachment
      : getDefaultDetachmentForChapter(currentChapter);
    currentPointsLimit = Number.isSafeInteger(draft.pointsLimit) && draft.pointsLimit > 0
      ? draft.pointsLimit
      : 2000;
    customPointsLimitEl.value = String(currentPointsLimit);
    currentRosterNotes = typeof draft.rosterNotes === "string" ? draft.rosterNotes : "";

    const assignedEnhancements = new Set();
    currentRoster = draft.units.reduce((restored, savedItem, index) => {
      const unit = masterUnits.find(option => option.id === savedItem.unitId);
      if (!unit || !isUnitAvailableForChapter(unit.id, currentChapter)) return restored;

      const canBeWarlord = unit.role === "HQ" || unit.canBeWarlord === true;
      const canTakeEnhancement = unit.role === "HQ" && !unit.isEpicHero;
      const enhancement = canTakeEnhancement && savedItem.enhancement
        ? detachments[currentDetachment].enhancements.find(option =>
          option.name === savedItem.enhancement.name && !assignedEnhancements.has(option.name)
        )
        : null;
      if (enhancement) assignedEnhancements.add(enhancement.name);

      restored.push({
        instanceId: typeof savedItem.instanceId === "string" && savedItem.instanceId
          ? savedItem.instanceId
          : "draft_" + Date.now() + "_" + index,
        unitId: unit.id,
        name: unit.name,
        role: unit.role,
        points: unit.points,
        canBeWarlord,
        canTakeEnhancement,
        chapter: unit.chapter || null,
        isWarlord: canBeWarlord && savedItem.isWarlord === true,
        enhancement: enhancement ? { ...enhancement } : null,
        notes: typeof savedItem.notes === "string" ? savedItem.notes : "",
        attachedToInstanceId: typeof savedItem.attachedToInstanceId === "string"
          ? savedItem.attachedToInstanceId
          : null
      });
      return restored;
    }, []);

    const firstWarlord = currentRoster.findIndex(item => item.isWarlord);
    currentRoster.forEach((item, index) => {
      item.isWarlord = item.canBeWarlord && index === firstWarlord;
    });
    sanitizeLeaderAttachments(currentRoster);
    selectedInstanceId = currentRoster.some(item => item.instanceId === draft.selectedInstanceId)
      ? draft.selectedInstanceId
      : currentRoster.length > 0 ? currentRoster[0].instanceId : null;
    showDraftStatus("Saved draft restored.");
  } catch (error) {
    currentRoster = [];
    currentRosterNotes = "";
    selectedInstanceId = null;
    draftRestoreFailed = true;
    showDraftStatus("Could not restore the saved draft: " + error.message, true);
  }
}

function saveDraft() {
  if (draftRestoreFailed) {
    showDraftStatus("Saved draft could not be read. Use New Roster or import a roster to replace it.", true);
    return;
  }

  try {
    localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify({
      version: 1,
      chapter: currentChapter,
      detachment: currentDetachment,
      pointsLimit: currentPointsLimit,
      rosterNotes: currentRosterNotes,
      selectedInstanceId,
      units: currentRoster.map(item => ({
        instanceId: item.instanceId,
        unitId: item.unitId,
        isWarlord: item.isWarlord,
        enhancement: item.enhancement,
        notes: item.notes || "",
        attachedToInstanceId: item.attachedToInstanceId || null
      }))
    }));
    showDraftStatus("Draft saved in this browser.");
  } catch (error) {
    showDraftStatus("Could not save this draft: " + error.message, true);
  }
}

function renderCatalog(unitArray) {
  catalogListEl.innerHTML = "";
  const addedUnitIds = new Set(currentRoster.map(item => item.unitId));
  const visibleUnits = unitArray
    .filter(unit => !hideAddedUnitsEl.checked || !addedUnitIds.has(unit.id))
    .sort((a, b) => {
      if (catalogSortEl.value === "points-asc") {
        return a.points - b.points || a.name.localeCompare(b.name);
      }
      if (catalogSortEl.value === "points-desc") {
        return b.points - a.points || a.name.localeCompare(b.name);
      }
      return a.name.localeCompare(b.name);
    });

  if (visibleUnits.length === 0) {
    catalogListEl.innerHTML = '<p class="placeholder-text">No units match these filters.</p>';
    return;
  }

  visibleUnits.forEach(unit => {
    const div = document.createElement("div");
    div.className = "unit-card";
    div.addEventListener("click", () => addToRoster(unit));
    
    // Determine the raw label text first
    let rawLabel = unit.role;
    if (unit.isEpicHero) {
      rawLabel = "Epic Hero";
    } else if (unit.role === "HQ") {
      rawLabel = "Command";
    }

    // .toUpperCase() forces uniform, crisp uppercase styling across all tags
    const cleanLabel = rawLabel.toUpperCase();

    div.innerHTML = 
      '<h3>' + unit.name + '</h3>' +
      '<div class="meta">' +
        '<span>[' + cleanLabel + ']</span>' +
        '<strong>' + unit.points + ' pts</strong>' +
      '</div>';
    if (addedUnitIds.has(unit.id)) {
      const addedLabel = document.createElement("span");
      addedLabel.className = "catalog-added-label";
      addedLabel.textContent = "In roster";
      div.appendChild(addedLabel);
    }
    catalogListEl.appendChild(div);
  });
}

function filterUnits() {
  const term = searchBarEl.value.toLowerCase();
  
  const filtered = getAvailableUnits().filter(u => {
    // 1. Text Search Filter
    const matchesText = u.name.toLowerCase().includes(term);
    
    // 2. Role Category Filter
    let matchesRole = false;
    if (activeRoleFilter === "all") {
      matchesRole = true;
    } else if (activeRoleFilter === "Infantry") {
      matchesRole = ["Elite", "Infiltrator", "Fast Attack", "Infantry"].includes(u.role);
    } else if (activeRoleFilter === "EpicHero") {
      matchesRole = u.isEpicHero === true;
    } else if (activeRoleFilter.includes("/")) {
      // Handles bundled "Infiltrator/Elite/Fast Attack" category
      matchesRole = activeRoleFilter.split("/").includes(u.role);
    } else {
      matchesRole = (u.role === activeRoleFilter);
    }

    return matchesText && matchesRole;
  });

  renderCatalog(filtered);
}

function getAvailableUnits() {
  const allChapterUnitIds = Object.values(chapterExclusiveUnits).flat();
  return masterUnits.filter(unit => {
    if (currentChapter === "codex") {
      return !unit.chapter && !allChapterUnitIds.includes(unit.id);
    }
    const selectedChapterUnits = chapterExclusiveUnits[currentChapter] || [];
    return !unit.chapter && !allChapterUnitIds.includes(unit.id) ||
      unit.chapter === currentChapter ||
      selectedChapterUnits.includes(unit.id);
  });
}

function isDetachmentAvailableForChapter(detachmentId, chapterId) {
  const detachment = detachments[detachmentId];
  return Boolean(detachment && (!detachment.chapter || detachment.chapter === chapterId));
}

function getDefaultDetachmentForChapter(chapterId) {
  if (isDetachmentAvailableForChapter("gladius_task_force", chapterId)) {
    return "gladius_task_force";
  }
  const availableDetachment = Object.keys(detachments).find(id => isDetachmentAvailableForChapter(id, chapterId));
  return availableDetachment || "";
}

function populateDetachmentOptions() {
  detachmentSelectEl.innerHTML = "";
  const availableDetachments = Object.entries(detachments)
    .filter(([id]) => isDetachmentAvailableForChapter(id, currentChapter));
  availableDetachments.forEach(([id, detachment]) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = detachment.name;
    detachmentSelectEl.appendChild(option);
  });
  if (!isDetachmentAvailableForChapter(currentDetachment, currentChapter)) {
    currentDetachment = availableDetachments.length > 0 ? availableDetachments[0][0] : "";
  }
  detachmentSelectEl.value = currentDetachment;
  updateDetachmentInfo();
}

function updateDetachmentInfo() {
  const detachment = detachments[currentDetachment];
  detachmentInfoTitleEl.textContent = detachment ? detachment.name : "No detachment available";
  detachmentInfoDescriptionEl.textContent = detachment
    ? detachmentDescriptions[currentDetachment]
    : "Select a chapter with an available detachment.";
}

function isUnitAvailableForChapter(unitId, chapterId) {
  const unit = masterUnits.find(option => option.id === unitId);
  if (!unit) return false;
  const exclusiveIds = Object.values(chapterExclusiveUnits).flat();
  if (chapterId === "codex") return !unit.chapter && !exclusiveIds.includes(unit.id);
  return (!unit.chapter && !exclusiveIds.includes(unit.id)) ||
    unit.chapter === chapterId ||
    (chapterExclusiveUnits[chapterId] || []).includes(unit.id);
}

function changeChapter(event) {
  const nextChapter = event.target.value;
  const removedUnits = currentRoster.filter(item => !isUnitAvailableForChapter(item.unitId, nextChapter));
  const nextDetachment = isDetachmentAvailableForChapter(currentDetachment, nextChapter)
    ? currentDetachment
    : getDefaultDetachmentForChapter(nextChapter);
  const detachmentWillChange = nextDetachment !== currentDetachment;
  const changeDetails = [];
  if (removedUnits.length > 0) {
    changeDetails.push("remove " + removedUnits.length + " chapter-specific unit(s) unavailable in " + chapters[nextChapter]);
  }
  if (detachmentWillChange && currentRoster.some(item => item.enhancement)) {
    changeDetails.push("remove assigned enhancements because the current detachment is not available");
  }
  if (changeDetails.length > 0) {
    requestAppConfirmation(
      "Switching chapters will " + changeDetails.join(" and ") + ". Continue?",
      "Switch chapter",
      () => applyChapterChange(nextChapter, nextDetachment, detachmentWillChange),
      () => { chapterSelectEl.value = currentChapter; }
    );
    return;
  }

  applyChapterChange(nextChapter, nextDetachment, detachmentWillChange);
}

function applyChapterChange(nextChapter, nextDetachment, detachmentWillChange) {
  pushUndoSnapshot();
  currentChapter = nextChapter;
  applyChapterTheme(currentChapter);
  if (detachmentWillChange) {
    currentDetachment = nextDetachment;
    updateDetachmentInfo();
    currentRoster.forEach(item => {
      item.enhancement = null;
    });
  }
  currentRoster = currentRoster.filter(item => isUnitAvailableForChapter(item.unitId, currentChapter));
  sanitizeLeaderAttachments(currentRoster);
  populateDetachmentOptions();
  if (!currentRoster.some(item => item.instanceId === selectedInstanceId)) {
    selectedInstanceId = currentRoster.length > 0 ? currentRoster[0].instanceId : null;
    pointsLimitEl.textContent = currentPointsLimit;
  }
  filterUnits();
  renderRoster();
  renderConfigurator();
}

function selectGameMode(limit) {
  if (limit === "custom") {
    customLimitControlsEl.hidden = false;
    document.querySelectorAll(".game-mode-btn").forEach(button => {
      button.classList.toggle("active", button.dataset.limit === "custom");
    });
    customPointsLimitEl.focus();
    return;
  }

  pushUndoSnapshot();
  currentPointsLimit = Number(limit);
  syncGameModeControls();
  updatePointsDisplay();
}

function applyCustomLimit() {
  const customLimit = Number(customPointsLimitEl.value);
  if (!Number.isSafeInteger(customLimit) || customLimit < 1) {
    showInlineError("Enter a whole-number points limit greater than zero.");
    customPointsLimitEl.focus();
    return;
  }

  if (customLimit === currentPointsLimit) return;
  pushUndoSnapshot();
  currentPointsLimit = customLimit;
  syncGameModeControls();
  updatePointsDisplay();
}

function syncGameModeControls() {
  const limitValue = String(currentPointsLimit);
  const isCustom = !["1000", "2000"].includes(limitValue);
  customLimitControlsEl.hidden = !isCustom;
  document.querySelectorAll(".game-mode-btn").forEach(button => {
    button.classList.toggle("active", isCustom
      ? button.dataset.limit === "custom"
      : button.dataset.limit === limitValue);
  });
}

function updatePointsDisplay() {
  pointsLimitEl.textContent = currentPointsLimit;
  renderRoster();
}

function showInlineError(message) {
  let errorEl = document.getElementById("rosterStatusMonitor");
  if (!errorEl) {
    errorEl = document.createElement("div");
    errorEl.id = "rosterStatusMonitor";
    errorEl.style.backgroundColor = "rgba(239, 68, 68, 0.15)";
    errorEl.style.border = "1px solid var(--danger)";
    errorEl.style.color = "var(--danger)";
    errorEl.style.padding = "10px";
    errorEl.style.borderRadius = "4px";
    errorEl.style.marginBottom = "12px";
    errorEl.style.fontSize = "0.85rem";
    errorEl.style.fontWeight = "bold";
    errorEl.style.textAlign = "center";
    
    const statsBar = document.getElementById("statsBar");
    statsBar.parentNode.insertBefore(errorEl, statsBar);
  }
  
  errorEl.textContent = "⚠️ " + message;
  errorEl.style.display = "block";
  
  if (window.errorTimer) clearTimeout(window.errorTimer);
  window.errorTimer = setTimeout(() => {
    errorEl.style.display = "none";
  }, 4000);
}

function addToRoster(unit) {
  const existingError = document.getElementById("rosterStatusMonitor");
  if (existingError) existingError.style.display = "none";

  // Check 1: Selected game mode points limit
  let currentTotalPoints = currentRoster.reduce((sum, item) => sum + item.points + getEnhancementPoints(item), 0);
  if (currentTotalPoints + unit.points > currentPointsLimit) {
    showInlineError("Adding " + unit.name + " (" + unit.points + " pts) would exceed the " + currentPointsLimit + " points limit.");
    return;
  }

  // Check 2: Epic Hero Single Limit vs Standard Rule of 3 / 6
  let duplicateCount = currentRoster.filter(item => item.unitId === unit.id).length;
  
  if (unit.isEpicHero) {
    if (duplicateCount >= 1) {
      showInlineError("Command Error: You can only include a maximum of 1 instance of the Epic Hero " + unit.name + ".");
      return;
    }
  } else {
    let maxAllowed = (unit.role === "Battleline") ? 6 : 3;
    if (duplicateCount >= maxAllowed) {
      showInlineError("Deployment Error: You cannot field more than " + maxAllowed + " instances of " + unit.name + " in Matched Play.");
      return;
    }
  }

  pushUndoSnapshot();
  // Process Add Unit
  const newInstance = {
    instanceId: "inst_" + Date.now() + Math.floor(Math.random() * 1000),
    unitId: unit.id,
    name: unit.name,
    role: unit.role,
    points: unit.points,
    canBeWarlord: unit.role === "HQ" || unit.canBeWarlord === true,
    canTakeEnhancement: unit.role === "HQ" && !unit.isEpicHero,
    chapter: unit.chapter || null,
    isWarlord: false,
    notes: "",
    attachedToInstanceId: null
  };

  currentRoster.push(newInstance);
  selectedInstanceId = newInstance.instanceId;
  renderRoster();
  renderConfigurator();
}

function removeFromRoster(e, instanceId) {
  e.stopPropagation();
  pushUndoSnapshot();
  currentRoster = currentRoster.filter(item => item.instanceId !== instanceId);
  currentRoster.forEach(item => {
    if (item.attachedToInstanceId === instanceId) item.attachedToInstanceId = null;
  });
  if (selectedInstanceId === instanceId) {
    selectedInstanceId = null;
  }
  renderRoster();
  renderConfigurator();
}

function selectRosterItem(instanceId) {
  selectedInstanceId = instanceId;
  renderRoster();
  renderConfigurator();
}

function updateWarlord(instanceId, isWarlord) {
  const selectedItem = currentRoster.find(item => item.instanceId === instanceId);
  if (!selectedItem || !selectedItem.canBeWarlord) return;

  if (selectedItem.isWarlord === isWarlord) return;
  pushUndoSnapshot();
  currentRoster.forEach(item => {
    if (item.instanceId === instanceId) {
      item.isWarlord = isWarlord;
    } else if (isWarlord) {
      item.isWarlord = false;
    }
  });
  renderRoster();
  renderRelativeInfo(selectedItem);
}

function changeDetachment(event) {
  const nextDetachment = event.target.value;
  if (!isDetachmentAvailableForChapter(nextDetachment, currentChapter)) {
    detachmentSelectEl.value = currentDetachment;
    return;
  }
  if (currentRoster.some(item => item.enhancement)) {
    requestAppConfirmation(
      "Changing detachments will remove assigned enhancements. Continue?",
      "Change detachment",
      () => applyDetachmentChange(nextDetachment),
      () => { detachmentSelectEl.value = currentDetachment; }
    );
    return;
  }

  applyDetachmentChange(nextDetachment);
}

function applyDetachmentChange(nextDetachment) {
  pushUndoSnapshot();
  currentDetachment = nextDetachment;
  updateDetachmentInfo();
  currentRoster.forEach(item => {
    item.enhancement = null;
  });
  renderRoster();
  renderConfigurator();
}

function updateEnhancement(instanceId, enhancementName) {
  const item = currentRoster.find(rosterItem => rosterItem.instanceId === instanceId);
  if (!item || !item.canTakeEnhancement) return;

  const enhancement = detachments[currentDetachment].enhancements.find(option => option.name === enhancementName);
  if (!enhancementName) {
    if (!item.enhancement) return;
    pushUndoSnapshot();
    item.enhancement = null;
  } else if (!enhancement) {
    showInlineError("That enhancement is not available for the selected detachment.");
    renderConfigurator();
    return;
  } else if (currentRoster.filter(rosterItem => rosterItem.enhancement).length >= 3 && !item.enhancement) {
    showInlineError("You can include a maximum of 3 enhancements in your army.");
    renderConfigurator();
    return;
  } else if (currentRoster.some(rosterItem => rosterItem !== item && rosterItem.enhancement && rosterItem.enhancement.name === enhancement.name)) {
    showInlineError("You cannot include the same enhancement more than once.");
    renderConfigurator();
    return;
  } else if (currentRoster.reduce((sum, rosterItem) => sum + rosterItem.points + getEnhancementPoints(rosterItem), 0) +
      enhancement.points - getEnhancementPoints(item) > currentPointsLimit) {
    showInlineError("Adding " + enhancement.name + " would exceed the " + currentPointsLimit + " points deployment limit.");
    renderConfigurator();
    return;
  } else {
    pushUndoSnapshot();
    item.enhancement = { ...enhancement };
  }

  renderRoster();
  renderConfigurator();
}

function getEnhancementPoints(item) {
  return item.enhancement ? item.enhancement.points : 0;
}

function renderRoster() {
  rosterListEl.innerHTML = "";
  let totalPts = 0;

  if (currentRoster.length === 0) {
    rosterListEl.innerHTML = '<p class="placeholder-text">Click units on the left panel to construct your Strike Force.</p>';
  } else {
    currentRoster.forEach(item => {
      const enhancementPoints = getEnhancementPoints(item);
      const itemTotal = item.points + enhancementPoints;
      totalPts += itemTotal;
      const isSelected = item.instanceId === selectedInstanceId;
      const div = document.createElement("div");
      div.className = "roster-item" + (isSelected ? " selected" : "");
      div.dataset.instanceId = item.instanceId;
      div.addEventListener("click", () => selectRosterItem(item.instanceId));

      div.innerHTML = 
        '<h3>' + item.name + '</h3>' +
        (item.isWarlord ? '<span class="warlord-badge">WARLORD</span>' : '') +
        (item.enhancement ? '<div class="enhancement-summary">' + item.enhancement.name + ' (+' + enhancementPoints + ' pts)</div>' : '') +
        '<div class="actions">' +
          '<span style="font-size: 0.8rem; font-weight:bold; align-self:center; color: var(--accent); margin-right:auto;">' + itemTotal + ' pts</span>' +
          (item.canBeWarlord ? '<label class="warlord-toggle"><input type="checkbox" class="warlord-checkbox"' + (item.isWarlord ? ' checked' : '') + '> Warlord</label>' : '') +
          '<button class="btn-danger remove-btn">Delete</button>' +
        '</div>';
      if (item.notes) {
        const notePreview = document.createElement("p");
        notePreview.className = "roster-item-note";
        notePreview.textContent = item.notes;
        div.appendChild(notePreview);
      }
        const attachments = currentRoster.filter(rosterItem =>
          rosterItem.attachedToInstanceId === item.instanceId
        );
        if (item.attachedToInstanceId) {
          const bodyguard = currentRoster.find(rosterItem =>
            rosterItem.instanceId === item.attachedToInstanceId
          );
          if (bodyguard) {
            const summary = document.createElement("p");
            summary.className = "attachment-summary";
            summary.textContent = "Attached to: " + bodyguard.name;
            div.appendChild(summary);
          }
        } else if (attachments.length > 0) {
          const summary = document.createElement("p");
          summary.className = "attachment-summary";
          summary.textContent = "Led by: " + attachments.map(leader => leader.name).join(", ");
          div.appendChild(summary);
        }
      
      const warlordCheckbox = div.querySelector(".warlord-checkbox");
      if (warlordCheckbox) {
        warlordCheckbox.addEventListener("click", e => e.stopPropagation());
        warlordCheckbox.addEventListener("change", e => updateWarlord(item.instanceId, e.target.checked));
      }
      div.querySelector(".remove-btn").addEventListener("click", (e) => removeFromRoster(e, item.instanceId));
      const printedNote = document.createElement("p");
      printedNote.className = "print-only";
      printedNote.textContent = item.notes ? "Note: " + item.notes : "";
      div.appendChild(printedNote);
      rosterListEl.appendChild(div);
    });
  }

  ptsTotalEl.textContent = totalPts;
  ptsTotalEl.className = totalPts > currentPointsLimit ? "points-alert" : "points-good";
  unitTotalEl.textContent = currentRoster.length;
  currentArmySummaryEl.textContent = currentRoster.length + " units | " +
    totalPts + " / " + currentPointsLimit + " pts";
  updateRosterRequirements(totalPts);
  printRosterMetaEl.textContent = chapters[currentChapter] + " | " +
    detachments[currentDetachment].name + " | " + totalPts + " / " +
    currentPointsLimit + " points | " + currentRoster.length + " units";
  rosterNotesEl.value = currentRosterNotes;
  printRosterNotesEl.textContent = currentRosterNotes ? "Roster notes: " + currentRosterNotes : "";
  filterUnits();
  saveDraft();
}

function validateRoster(totalPoints = currentRoster.reduce(
  (sum, item) => sum + item.points + getEnhancementPoints(item),
  0
)) {
  const errors = [];
  const warlordCount = currentRoster.filter(item => item.isWarlord && item.canBeWarlord).length;
  if (warlordCount !== 1) {
    errors.push(warlordCount === 0
      ? "Select an eligible unit as your Warlord."
      : "A roster must have exactly one Warlord.");
  }
  if (totalPoints > currentPointsLimit) {
    errors.push("Army total exceeds the " + currentPointsLimit + " point limit.");
  }
  return errors;
}

function getRosterWarnings() {
  const warnings = [];
  const counts = new Map();
  currentRoster.forEach(item => counts.set(item.unitId, (counts.get(item.unitId) || 0) + 1));

  counts.forEach((count, unitId) => {
    const unit = masterUnits.find(option => option.id === unitId);
    if (!unit) return;
    const maximum = unit.isEpicHero ? 1 : unit.role === "Battleline" ? 6 : 3;
    if (count > maximum) {
      warnings.push(unit.name + " appears " + count + " times (listed limit: " + maximum + ").");
    } else if (count > 1) {
      warnings.push(unit.name + " is repeated; repeated-unit points tiers are not modeled.");
    }
  });

  currentRoster.forEach(item => {
    if (!isUnitAvailableForChapter(item.unitId, currentChapter)) {
      warnings.push(item.name + " is not available for " + chapters[currentChapter] + ".");
    }
  });

  const enhancements = currentRoster.filter(item => item.enhancement);
  if (enhancements.length > 3) {
    warnings.push("The roster has more than 3 enhancements.");
  }
  const enhancementCounts = new Map();
  enhancements.forEach(item => {
    enhancementCounts.set(item.enhancement.name, (enhancementCounts.get(item.enhancement.name) || 0) + 1);
  });
  enhancementCounts.forEach((count, name) => {
    if (count > 1) warnings.push(name + " is assigned more than once.");
  });

  return [...new Set(warnings)];
}

function updateRosterRequirements(totalPoints) {
  const errors = validateRoster(totalPoints);
  const warnings = getRosterWarnings();
  rosterRequirementsEl.classList.toggle("has-errors", errors.length > 0);
  rosterRequirementsEl.classList.toggle("has-warnings", errors.length === 0 && warnings.length > 0);
  rosterRequirementsEl.innerHTML = "";
  const heading = document.createElement("strong");
  heading.textContent = "Roster checks:";
  const list = document.createElement("ul");
  list.className = "check-list";
  const addCheck = (text, status) => {
    const item = document.createElement("li");
    item.textContent = text;
    item.className = status;
    list.appendChild(item);
  };
  const warlordCount = currentRoster.filter(item => item.isWarlord && item.canBeWarlord).length;
  const chapterWarnings = warnings.filter(warning => warning.includes(" is not available for "));
  const duplicateWarnings = warnings.filter(warning =>
    warning.includes(" appears ") || warning.includes(" is repeated;")
  );
  const otherWarnings = warnings.filter(warning =>
    !chapterWarnings.includes(warning) && !duplicateWarnings.includes(warning)
  );

  addCheck(
    warlordCount === 1 ? "Warlord: exactly one selected." : errors[0] || "Warlord: select one eligible unit.",
    warlordCount === 1 ? "check-pass" : "check-error"
  );
  addCheck(
    totalPoints <= currentPointsLimit
      ? "Points: " + totalPoints + " / " + currentPointsLimit + "."
      : "Points: " + totalPoints + " exceeds the " + currentPointsLimit + " limit.",
    totalPoints <= currentPointsLimit ? "check-pass" : "check-error"
  );
  addCheck(
    chapterWarnings.length === 0
      ? "Chapter: all selected units are available."
      : "Chapter: " + chapterWarnings.join(" "),
    chapterWarnings.length === 0 ? "check-pass" : "check-warning"
  );
  addCheck(
    duplicateWarnings.length === 0
      ? "Duplicates: within listed limits."
      : "Duplicates: " + duplicateWarnings.join(" "),
    duplicateWarnings.length === 0 ? "check-pass" : "check-warning"
  );
  otherWarnings.forEach(warning => addCheck(warning, "check-warning"));
  rosterRequirementsEl.append(heading, list);

  const disclaimer = document.createElement("small");
  disclaimer.className = "check-disclaimer";
  disclaimer.textContent = "Helpful checks only; this does not confirm full rules legality.";
  rosterRequirementsEl.appendChild(disclaimer);
}

function addInfoText(parent, tagName, text, className) {
  const element = document.createElement(tagName);
  element.textContent = text;
  if (className) element.className = className;
  parent.appendChild(element);
}

function renderRelativeInfo(item) {
  relativeInfoContentEl.innerHTML = "";
  if (!item) {
    addInfoText(relativeInfoContentEl, "p", "Select a unit to see its role and available rules notes.", "placeholder-text");
    return;
  }

  addInfoText(relativeInfoContentEl, "h3", item.name);
  addInfoText(relativeInfoContentEl, "p", "Role: " + item.role + " | Base cost: " + item.points + " pts.");
  const unitDescription = unitInfo[item.unitId];
  addInfoText(
    relativeInfoContentEl,
    "p",
    unitDescription || "This unit's special rules are not reproduced here. Check its current datasheet for abilities and rules."
  );

  const notesField = document.createElement("div");
  notesField.className = "unit-notes-field";
  const notesLabel = document.createElement("label");
  notesLabel.textContent = "Unit notes";
  const notesInput = document.createElement("textarea");
  notesInput.rows = 2;
  notesInput.placeholder = "Add a note for this unit...";
  notesInput.value = item.notes || "";
  notesInput.addEventListener("focus", beginTextEdit);
  notesInput.addEventListener("blur", finishTextEdit);
  notesInput.addEventListener("input", () => {
    item.notes = notesInput.value;
    const printedNote = rosterListEl.querySelector(
      '[data-instance-id="' + item.instanceId + '"] .print-only'
    );
    if (printedNote) printedNote.textContent = item.notes ? "Note: " + item.notes : "";
    let notePreview = rosterListEl.querySelector(
      '[data-instance-id="' + item.instanceId + '"] .roster-item-note'
    );
    if (item.notes && !notePreview) {
      notePreview = document.createElement("p");
      notePreview.className = "roster-item-note";
      rosterListEl.querySelector('[data-instance-id="' + item.instanceId + '"]').appendChild(notePreview);
    }
    if (notePreview) {
      notePreview.textContent = item.notes;
      notePreview.hidden = !item.notes;
    }
    saveDraft();
  });
  notesLabel.appendChild(notesInput);
  notesField.appendChild(notesLabel);
  const printedNote = document.createElement("p");
  printedNote.className = "print-only";
  printedNote.textContent = item.notes ? "Unit note: " + item.notes : "";
  notesField.appendChild(printedNote);
  relativeInfoContentEl.appendChild(notesField);

  if (item.enhancement) {
    addInfoText(relativeInfoContentEl, "h3", "Enhancement: " + item.enhancement.name);
    addInfoText(
      relativeInfoContentEl,
      "p",
      item.enhancement.points + " pts in " + detachments[currentDetachment].name +
        ". This is a character upgrade; consult the current detachment rules for its exact ability."
    );
  }
}

function renderConfigurator() {
  configuratorWorkspaceEl.innerHTML = "";

  const activeItem = currentRoster.find(i => i.instanceId === selectedInstanceId);
  if (!activeItem) {
    configuratorWorkspaceEl.innerHTML = '<p class="placeholder-text">Select an active unit to assign an enhancement.</p>';
    renderRelativeInfo(null);
    return;
  }

  const title = document.createElement("h3");
  title.style.fontSize = "1rem";
  title.style.marginBottom = "15px";
  title.style.color = "var(--text)";
  title.innerText = "Modifying: " + activeItem.name;
  configuratorWorkspaceEl.appendChild(title);
  renderRelativeInfo(activeItem);

  if (activeItem.canTakeEnhancement) {
    const enhancementDiv = document.createElement("div");
    enhancementDiv.className = "enhancement-option";

    const enhancementLabel = document.createElement("label");
    enhancementLabel.innerText = "ENHANCEMENT (" + detachments[currentDetachment].name.toUpperCase() + ")";

    const enhancementSelect = document.createElement("select");
    enhancementSelect.setAttribute("aria-label", "Enhancement");
    enhancementSelect.add(new Option("No enhancement", ""));
    detachments[currentDetachment].enhancements.forEach(enhancement => {
      const option = new Option(enhancement.name + " (+" + enhancement.points + " pts)", enhancement.name);
      option.selected = activeItem.enhancement && activeItem.enhancement.name === enhancement.name;
      enhancementSelect.add(option);
    });
    enhancementSelect.addEventListener("change", event => updateEnhancement(activeItem.instanceId, event.target.value));

    enhancementDiv.appendChild(enhancementLabel);
    enhancementDiv.appendChild(enhancementSelect);
    configuratorWorkspaceEl.appendChild(enhancementDiv);
  }

  renderLeaderAttachment(activeItem);
}

function renderLeaderAttachment(leader) {
  if (!leader.canBeWarlord || leader.role !== "HQ") return;

  const eligibility = leaderEligibility[leader.unitId];
  if (!eligibility) return;

  const section = document.createElement("div");
  section.className = "leader-attachment";
  const label = document.createElement("label");
  label.textContent = "Leader attachment";
  section.appendChild(label);

  const select = document.createElement("select");
  select.setAttribute("aria-label", "Attach leader to unit");
  select.add(new Option("No attached unit", ""));
  const eligibleUnits = currentRoster.filter(item =>
    item.instanceId !== leader.instanceId &&
    canAttachLeaderToBodyguard(
      leader,
      item,
      currentRoster.filter(other =>
        other !== leader && other.attachedToInstanceId === item.instanceId
      )
    )
  );
  eligibleUnits.forEach(item => {
    select.add(new Option(item.name, item.instanceId));
  });
  select.value = leader.attachedToInstanceId || "";
  select.addEventListener("change", event => updateLeaderAttachment(leader.instanceId, event.target.value));
  section.appendChild(select);
  const note = document.createElement("small");
  note.textContent = "Eligibility is based on the community-maintained 10th-edition datasheet index and may not reflect every current datasheet or FAQ. Verify the official rules before play. A second Leader is offered only for listed exceptions; Captain pairings requiring untracked wargear are omitted.";
  const indexLink = document.createElement("a");
  indexLink.href = "https://wahapedia.ru/wh40k10ed/factions/space-marines/";
  indexLink.target = "_blank";
  indexLink.rel = "noopener noreferrer";
  indexLink.textContent = "Datasheet index";
  note.appendChild(document.createTextNode(" "));
  note.appendChild(indexLink);
  const sourceLink = document.createElement("a");
  sourceLink.href = "https://www.warhammer-community.com/en-gb/downloads/warhammer-40000/";
  sourceLink.target = "_blank";
  sourceLink.rel = "noopener noreferrer";
  sourceLink.textContent = "Official rules and updates";
  note.appendChild(document.createTextNode(" "));
  note.appendChild(sourceLink);
  section.appendChild(note);
  configuratorWorkspaceEl.appendChild(section);
}

function updateLeaderAttachment(leaderInstanceId, bodyguardInstanceId) {
  const leader = currentRoster.find(item => item.instanceId === leaderInstanceId);
  if (!leader || !leaderEligibility[leader.unitId]) return;

  const bodyguard = bodyguardInstanceId
    ? currentRoster.find(item => item.instanceId === bodyguardInstanceId)
    : null;
  const alreadyAttached = bodyguard
    ? currentRoster.filter(item =>
      item !== leader && item.attachedToInstanceId === bodyguard.instanceId
    )
    : [];
  if (bodyguard && !canAttachLeaderToBodyguard(leader, bodyguard, alreadyAttached)) {
    showInlineError("That unit is not available for this leader attachment.");
    renderConfigurator();
    return;
  }

  if ((leader.attachedToInstanceId || "") === (bodyguardInstanceId || "")) return;
  pushUndoSnapshot();
  leader.attachedToInstanceId = bodyguard ? bodyguard.instanceId : null;
  renderRoster();
  renderConfigurator();
}

function startNewRoster() {
  const hasRosterState = currentRoster.length > 0 || currentRosterNotes || currentChapter !== "codex" ||
    currentDetachment !== getDefaultDetachmentForChapter("codex") || currentPointsLimit !== 2000;
  if (hasRosterState) {
    requestAppConfirmation(
      "Start a new roster? This will replace the current saved draft.",
      "Start new roster",
      () => resetRoster(hasRosterState)
    );
    return;
  }

  resetRoster(false);
}

function resetRoster(hasRosterState) {
  if (hasRosterState) pushUndoSnapshot();
  currentRoster = [];
  currentRosterNotes = "";
  selectedInstanceId = null;
  draftRestoreFailed = false;
  currentChapter = "codex";
  currentDetachment = getDefaultDetachmentForChapter(currentChapter);
  currentPointsLimit = 2000;
  searchBarEl.value = "";
  activeRoleFilter = "all";
  document.querySelectorAll(".filter-btn").forEach(button => {
    button.classList.toggle("active", button.dataset.role === "all");
  });
  catalogSortEl.value = "name";
  hideAddedUnitsEl.checked = false;
  chapterSelectEl.value = currentChapter;
  applyChapterTheme(currentChapter);
  populateDetachmentOptions();
  updateDetachmentInfo();
  customPointsLimitEl.value = "1500";
  syncGameModeControls();
  pointsLimitEl.textContent = currentPointsLimit;
  rosterNotesEl.value = "";
  renderRoster();
  renderConfigurator();
}

function exportData(type) {
  if (currentRoster.length === 0) {
    showAppMessage("Roster is completely empty.");
    return;
  }
  const validationErrors = validateRoster();
  if (validationErrors.length > 0) {
    showAppMessage("Cannot export this roster:\n\n" + validationErrors.join("\n"));
    return;
  }

  if (type === 'json') {
    const exportRoster = {
      detachment: currentDetachment,
      chapter: currentChapter,
      pointsLimit: currentPointsLimit,
      rosterNotes: currentRosterNotes,
      units: currentRoster.map(item => ({
        instanceId: item.instanceId,
        unitId: item.unitId,
        name: item.name,
        role: item.role,
        points: item.points,
        canBeWarlord: item.canBeWarlord,
        canTakeEnhancement: item.canTakeEnhancement,
        chapter: item.chapter,
        isWarlord: item.isWarlord,
        enhancement: item.enhancement,
        notes: item.notes || "",
        attachedToInstanceId: item.attachedToInstanceId || null
      }))
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportRoster, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "space_marine_roster.json");
    dlAnchorElem.click();
  } else {
    let textOutput = "=== ADEPTUS ASTARTES ROSTER ===\n";
    textOutput += "Detachment: " + detachments[currentDetachment].name + "\n\n";
    textOutput += "Chapter: " + chapters[currentChapter] + "\n";
    textOutput += "Points limit: " + currentPointsLimit + "\n\n";
    let total = 0;
    currentRoster.forEach((u, i) => {
      const enhancementPoints = getEnhancementPoints(u);
      total += u.points + enhancementPoints;
      textOutput += (i+1) + ". " + u.name + (u.isWarlord ? " (Warlord)" : "") + " [" + (u.points + enhancementPoints) + " pts]\n";
      if (u.enhancement) {
        textOutput += "   - Enhancement: " + u.enhancement.name + " (" + enhancementPoints + " pts)\n";
      }
      if (u.attachedToInstanceId) {
        const bodyguard = currentRoster.find(item => item.instanceId === u.attachedToInstanceId);
        if (bodyguard) textOutput += "   - Attached to: " + bodyguard.name + "\n";
      }
      if (u.notes) textOutput += "   - Note: " + u.notes + "\n";
      textOutput += "\n";
    });
    textOutput += "Total Army Cost: " + total + " points\n";
    if (currentRosterNotes) textOutput += "\nRoster notes: " + currentRosterNotes + "\n";

    const dataStr = "data:text/plain;charset=utf-8," + encodeURIComponent(textOutput);
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "space_marine_roster.txt");
    dlAnchorElem.click();
  }
}

function importData(event) {
  const file = event.target.files;
  if (!file || file.length === 0) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const parsed = JSON.parse(e.target.result);
      const importedRoster = Array.isArray(parsed) ? parsed : parsed.units;
      if (Array.isArray(importedRoster)) {
        pushUndoSnapshot();
        draftRestoreFailed = false;
        currentChapter = Object.prototype.hasOwnProperty.call(chapters, parsed.chapter) ? parsed.chapter : currentChapter;
        chapterSelectEl.value = currentChapter;
        applyChapterTheme(currentChapter);
        currentDetachment = Object.prototype.hasOwnProperty.call(detachments, parsed.detachment) &&
          isDetachmentAvailableForChapter(parsed.detachment, currentChapter)
          ? parsed.detachment
          : isDetachmentAvailableForChapter(currentDetachment, currentChapter)
            ? currentDetachment
            : getDefaultDetachmentForChapter(currentChapter);
        populateDetachmentOptions();
        if (!Array.isArray(parsed) && Number.isSafeInteger(parsed.pointsLimit) && parsed.pointsLimit > 0) {
          currentPointsLimit = parsed.pointsLimit;
          customPointsLimitEl.value = String(parsed.pointsLimit);
          syncGameModeControls();
          updatePointsDisplay();
        }
        currentRosterNotes = !Array.isArray(parsed) && typeof parsed.rosterNotes === "string"
          ? parsed.rosterNotes
          : "";
        let enhancementCount = 0;
        const assignedEnhancements = new Set();
        currentRoster = importedRoster.map(item => {
          const unit = masterUnits.find(unitOption => unitOption.id === item.unitId);
          const canBeWarlord = unit ? unit.role === "HQ" || unit.canBeWarlord === true : false;
          const canTakeEnhancement = Boolean(unit && unit.role === "HQ" && !unit.isEpicHero);
          let enhancement = canTakeEnhancement && item.enhancement
            ? detachments[currentDetachment].enhancements.find(option => option.name === item.enhancement.name) || null
            : null;
          if (enhancement && (enhancementCount >= 3 || assignedEnhancements.has(enhancement.name))) {
            enhancement = null;
          }
          if (enhancement) {
            enhancementCount++;
            assignedEnhancements.add(enhancement.name);
          }
          return {
            instanceId: item.instanceId,
            unitId: item.unitId,
            name: item.name,
            role: item.role,
            points: item.points,
            canBeWarlord,
            canTakeEnhancement,
            chapter: unit && unit.chapter || null,
            enhancement,
            isWarlord: canBeWarlord && item.isWarlord === true,
            notes: typeof item.notes === "string" ? item.notes : "",
            attachedToInstanceId: typeof item.attachedToInstanceId === "string"
              ? item.attachedToInstanceId
              : null
          };
        });
        currentRoster = currentRoster.filter(item => isUnitAvailableForChapter(item.unitId, currentChapter));
        sanitizeLeaderAttachments(currentRoster);
        const firstWarlord = currentRoster.findIndex(item => item.isWarlord);
        currentRoster.forEach((item, index) => {
          item.isWarlord = item.canBeWarlord && index === firstWarlord;
        });
        selectedInstanceId = currentRoster.length > 0 ? currentRoster[0].instanceId : null;
        renderRoster();
        renderConfigurator();
      } else {
        showAppMessage("Malformed roster structure.");
      }
    } catch (err) {
      showAppMessage("Failed to parse JSON file template.");
    } finally {
      importFileEl.value = "";
    }
  };
  reader.readAsText(file[0]);
}

document.addEventListener("DOMContentLoaded", init);
