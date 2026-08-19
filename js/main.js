import {
  PERSON, PROOF_POINTS, ROLE_PROFILES, DEFAULT_ROLE, CAREER_PROGRESSION,
  WHY_PRODUCT_COPY, CASE_STUDIES, PRODUCT_DECISIONS, TOOLKIT, CAREER,
  HIRE_ME_IF, LOOKING_FOR, STILL_LEARNING, PROBLEM_SCENARIOS, PERSONAL,
  RESUME_MODES,
} from "./data.js";

/* ============================================================
   ANALYTICS — lightweight event log. Swap track() internals for
   a real provider later; every call site stays the same.
   ============================================================ */
const Analytics = (() => {
  const KEY = "pm_analytics";
  const read = () => {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; }
  };
  const write = (events) => {
    try { localStorage.setItem(KEY, JSON.stringify(events.slice(-200))); } catch {}
  };
  function track(event, payload = {}) {
    const events = read();
    events.push({ event, payload, t: Date.now() });
    write(events);
    console.debug("[analytics]", event, payload);
  }
  track("visit", { path: location.pathname + location.search });
  const start = Date.now();
  window.addEventListener("beforeunload", () => {
    track("time_on_page", { seconds: Math.round((Date.now() - start) / 1000) });
  });
  return { track };
})();

/* ============================================================
   STATE
   ============================================================ */
const params = new URLSearchParams(location.search);
const urlRole = params.get("role");
let currentRole = ROLE_PROFILES[urlRole] ? urlRole : DEFAULT_ROLE;
let resumeMode = "onepage";
const scenarioState = { activeId: null, revealed: 0 };

/* ============================================================
   HELPERS
   ============================================================ */
const $ = (sel) => document.querySelector(sel);
const el = (tag, className, html) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
};
function setRoleInUrl(role) {
  const url = new URL(location.href);
  url.searchParams.set("role", role);
  history.replaceState(null, "", url);
}
function matchesEmphasis(skill, emphasis) {
  const s = skill.toLowerCase();
  return emphasis.some((term) => s.includes(term.toLowerCase()) || term.toLowerCase().includes(s));
}

/* ============================================================
   RENDER: HERO + PROOF POINTS
   ============================================================ */
function renderHero(role) {
  const profile = ROLE_PROFILES[role];
  $("#hero-role").textContent = profile.headline;
}

function renderProofPoints(role) {
  const list = $("#proof-points");
  list.innerHTML = "";
  const relevant = PROOF_POINTS.filter((p) => p.roles.includes(role));
  const points = (relevant.length ? relevant : PROOF_POINTS).slice(0, 4);
  points.forEach((p) => {
    const li = el("li", null, p.text);
    list.appendChild(li);
  });
}

/* ============================================================
   RENDER: ROLE SELECTOR
   ============================================================ */
function renderRoleGrid(activeRole) {
  const grid = $("#role-grid");
  grid.innerHTML = "";
  Object.values(ROLE_PROFILES).forEach((profile) => {
    const btn = el("button", "role-btn" + (profile.id === activeRole ? " active" : ""));
    btn.setAttribute("data-role", profile.id);
    btn.setAttribute("aria-pressed", profile.id === activeRole ? "true" : "false");
    btn.innerHTML = `<span class="role-btn-label">${profile.label}</span><span class="role-btn-sub">${profile.headline}</span>`;
    btn.addEventListener("click", () => selectRole(profile.id));
    grid.appendChild(btn);
  });
}

function renderRoleSummary(role) {
  const profile = ROLE_PROFILES[role];
  const container = $("#role-summary");
  const tags = profile.emphasis.slice(0, 8).map((t) => `<span class="tag">${t}</span>`).join("");
  container.innerHTML = `
    <h3>${profile.headline}</h3>
    <p>${profile.summary}</p>
    <div class="emphasis-tags">${tags}</div>
  `;
}

function selectRole(role) {
  if (!ROLE_PROFILES[role]) return;
  currentRole = role;
  setRoleInUrl(role);
  Analytics.track("role_selected", { role });
  renderHero(role);
  renderProofPoints(role);
  renderRoleGrid(role);
  renderRoleSummary(role);
  renderCaseStudies(role);
  renderDecisions(role);
  renderToolkit(role);
  renderCareer(role);
  $("#footer-role").textContent = `Currently viewing: ${ROLE_PROFILES[role].label}`;
}

/* ============================================================
   RENDER: WHY PRODUCT
   ============================================================ */
function renderWhyProduct() {
  $("#why-product-headline").textContent = WHY_PRODUCT_COPY.headline;
  $("#why-product-body").textContent = WHY_PRODUCT_COPY.body;
  const track = $("#career-progression");
  track.innerHTML = "";
  CAREER_PROGRESSION.forEach((step, i) => {
    if (i > 0) track.appendChild(el("span", "arrow", "→"));
    track.appendChild(el("span", "step", step));
  });
}

/* ============================================================
   RENDER: CASE STUDIES
   ============================================================ */
function caseStudyMarkup(cs) {
  const wrap = el("article", "case-study");
  wrap.setAttribute("data-id", cs.id);

  const head = el("div", "cs-head");
  head.innerHTML = `
    <p class="cs-kicker">${cs.kicker}</p>
    <h3 class="cs-title">${cs.logo ? `<img class="logo-mark" src="${cs.logo}" alt="${cs.title} logo">` : cs.title}</h3>
    <p class="cs-subtitle">${cs.subtitle}</p>
  `;
  wrap.appendChild(head);

  const body = el("div", "cs-body-wrap");
  let html = `<p class="cs-body">${cs.description}</p>`;

  const block = (label, inner) => `<div class="cs-block"><h4>${label}</h4>${inner}</div>`;

  if (cs.problem) html += block(cs.problem.label, `<p>${cs.problem.body}</p>`);
  if (cs.product) {
    const src = cs.product.sources ? `<div class="cs-chip-row">${cs.product.sources.map((s) => `<span class="cs-chip">${s}</span>`).join("")}</div><p style="margin-top:10px">${cs.product.body}</p>` : (cs.product.items ? `<ul>${cs.product.items.map((i) => `<li>${i}</li>`).join("")}</ul>` : `<p>${cs.product.body || ""}</p>`);
    html += block(cs.product.label, src);
  }
  if (cs.methodology) html += block(cs.methodology.label, `<ul>${cs.methodology.items.map((i) => `<li>${i}</li>`).join("")}</ul>`);
  if (cs.validation) html += block(cs.validation.label, `<p>${cs.validation.body}</p><p class="caveat">${cs.validation.caveat}</p>`);
  if (cs.strategy) html += block(cs.strategy.label, `<div class="cs-chip-row">${cs.strategy.items.map((i) => `<span class="cs-chip">${i}</span>`).join("")}</div>`);
  if (cs.discovery) html += block(cs.discovery.label, `<p>${cs.discovery.body}</p>`);
  if (cs.competitive) html += block(cs.competitive.label, `<p>${cs.competitive.body}</p>`);
  if (cs.productDevelopment) html += block(cs.productDevelopment.label, `<ul>${cs.productDevelopment.items.map((i) => `<li>${i}</li>`).join("")}</ul>`);
  if (cs.growth) html += block(cs.growth.label, `<ul>${cs.growth.items.map((i) => `<li>${i}</li>`).join("")}</ul>`);
  if (cs.commercialization) html += block(cs.commercialization.label, `<ul>${cs.commercialization.items.map((i) => `<li>${i}</li>`).join("")}</ul>`);
  if (cs.companyBuilding) html += block(cs.companyBuilding.label, `<ul>${cs.companyBuilding.items.map((i) => `<li>${i}</li>`).join("")}</ul>`);
  if (cs.data) html += block(cs.data.label, `<div class="cs-chip-row">${cs.data.items.map((i) => `<span class="cs-chip">${i}</span>`).join("")}</div>`);
  if (cs.role) html += block(cs.role.label, `<p>${cs.role.body}</p>`);
  if (cs.liveUrl) html += `<div class="cs-block"><a class="cs-live-link" href="${cs.liveUrl}" target="_blank" rel="noopener" data-track="live_product_click" data-id="${cs.id}">View the live product →</a></div>`;

  if (cs.artifacts && cs.artifacts.length) {
    html += `<div class="cs-block"><h4>Artifacts</h4><div class="cs-artifacts">${cs.artifacts.map((a) => `<div class="cs-artifact-slot">${a.label}<br><span style="opacity:.6">(coming soon)</span></div>`).join("")}</div></div>`;
  }

  html += `<p class="cs-takeaway">${cs.takeaway}</p>`;
  body.innerHTML = html;
  wrap.appendChild(body);
  return wrap;
}

function renderCaseStudies(role) {
  const container = $("#case-studies");
  container.innerHTML = "";
  const order = ROLE_PROFILES[role].projectOrder.filter((id) => CASE_STUDIES[id]);
  order.forEach((id) => container.appendChild(caseStudyMarkup(CASE_STUDIES[id])));

  document.querySelectorAll('[data-track="live_product_click"]').forEach((a) => {
    a.addEventListener("click", () => Analytics.track("live_product_click", { id: a.getAttribute("data-id") }));
  });

  observeCaseStudies();
}

let csObserver = null;
function observeCaseStudies() {
  if (csObserver) csObserver.disconnect();
  csObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        Analytics.track("case_study_viewed", { id: entry.target.getAttribute("data-id") });
        csObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll(".case-study").forEach((n) => csObserver.observe(n));
}

/* ============================================================
   RENDER: HOW I THINK (product decisions)
   ============================================================ */
function renderDecisions(role) {
  const container = $("#decisions");
  container.innerHTML = "";
  const order = ROLE_PROFILES[role].projectOrder;
  const scored = [...PRODUCT_DECISIONS].sort((a, b) => {
    const aIdx = order.indexOf(idForSource(a.source));
    const bIdx = order.indexOf(idForSource(b.source));
    return (aIdx === -1 ? 99 : aIdx) - (bIdx === -1 ? 99 : bIdx);
  });
  scored.forEach((d, i) => {
    const details = el("details", "decision");
    if (i === 0) details.setAttribute("open", "");
    details.innerHTML = `
      <summary>
        <span><span class="decision-source">${d.source}</span><span class="decision-title">${d.title}</span></span>
        <span class="decision-toggle">Problem → Learning</span>
      </summary>
      <div class="decision-body">
        <div class="decision-row"><h5>Problem</h5><p>${d.problem}</p></div>
        <div class="decision-row"><h5>Evidence</h5><p>${d.evidence}</p></div>
        <div class="decision-row"><h5>Hypothesis</h5><p>${d.hypothesis}</p></div>
        <div class="decision-row"><h5>Options</h5><ul>${d.options.map((o) => `<li>${o}</li>`).join("")}</ul></div>
        <div class="decision-row"><h5>Decision</h5><p>${d.decision}</p></div>
        <div class="decision-row"><h5>Result</h5><p>${d.result}</p></div>
        <div class="decision-row"><h5>Learning</h5><p>${d.learning}</p></div>
      </div>
    `;
    container.appendChild(details);
  });
}
function idForSource(source) {
  if (source === "Culture To Cart") return "cultureToCart";
  if (source === "All For") return "allFor";
  if (source === "Circana") return "circana";
  if (source === "American Consumer Clock") return "americanConsumerClock";
  return null;
}

/* ============================================================
   RENDER: GIVE ME A PROBLEM
   ============================================================ */
function renderScenarioGrid() {
  const grid = $("#scenario-grid");
  grid.innerHTML = "";
  PROBLEM_SCENARIOS.forEach((s) => {
    const btn = el("button", "scenario-btn", s.prompt);
    btn.setAttribute("data-id", s.id);
    btn.addEventListener("click", () => selectScenario(s.id));
    grid.appendChild(btn);
  });
}

function selectScenario(id) {
  scenarioState.activeId = id;
  scenarioState.revealed = 0;
  Analytics.track("give_me_a_problem_scenario_selected", { id });

  document.querySelectorAll(".scenario-btn").forEach((b) => {
    b.classList.toggle("active", b.getAttribute("data-id") === id);
  });

  const scenario = PROBLEM_SCENARIOS.find((s) => s.id === id);
  const output = $("#scenario-output");
  output.hidden = false;
  output.innerHTML = `
    <p class="scenario-output-prompt">"${scenario.prompt}"</p>
    <div class="scenario-steps" id="scenario-steps"></div>
    <button class="scenario-reveal-more" id="scenario-reveal-btn"></button>
  `;
  revealNextStep();
  output.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function revealNextStep() {
  const scenario = PROBLEM_SCENARIOS.find((s) => s.id === scenarioState.activeId);
  const stepsEl = $("#scenario-steps");
  const btn = $("#scenario-reveal-btn");
  if (!scenario || !stepsEl) return;

  const step = scenario.steps[scenarioState.revealed];
  if (step) {
    const node = el("div", "scenario-step");
    node.innerHTML = `<span class="step-num">${String(scenarioState.revealed + 1).padStart(2, "0")}</span><div><h5>${step.label}</h5><p>${step.body}</p></div>`;
    stepsEl.appendChild(node);
    scenarioState.revealed += 1;
  }

  const next = scenario.steps[scenarioState.revealed];
  if (next) {
    btn.hidden = false;
    btn.textContent = `Next: ${next.label} →`;
    btn.onclick = () => {
      Analytics.track("give_me_a_problem_step_revealed", { id: scenario.id, step: scenarioState.revealed + 1 });
      revealNextStep();
    };
  } else {
    btn.hidden = true;
  }
}

/* ============================================================
   RENDER: TOOLKIT
   ============================================================ */
function renderToolkit(role) {
  const emphasis = ROLE_PROFILES[role].emphasis;
  const lifecycle = $("#toolkit-lifecycle");
  lifecycle.innerHTML = "";
  Object.values(TOOLKIT).forEach((col) => {
    const colEl = el("div", "toolkit-col");
    colEl.innerHTML = `<h3>${col.label}</h3>`;
    col.items.forEach((item) => {
      const emphasized = matchesEmphasis(item.skill, emphasis);
      const itemEl = el("div", "toolkit-item" + (emphasized ? " emphasized" : ""));
      itemEl.innerHTML = `<span class="skill">${item.skill}</span><span class="evidence">${item.evidence}</span>`;
      colEl.appendChild(itemEl);
    });
    lifecycle.appendChild(colEl);
  });
}

/* ============================================================
   RENDER: CAREER
   ============================================================ */
function renderCareer(role) {
  const emphasisMap = {
    circana: ["Circana"],
    allFor: ["All For"],
    syndigo: ["Syndigo"],
  };
  const order = ROLE_PROFILES[role].projectOrder;
  const emphasizedCompanies = new Set(order.flatMap((id) => emphasisMap[id] || []));

  const list = $("#timeline");
  list.innerHTML = "";
  CAREER.forEach((job) => {
    const li = el("li");
    if (emphasizedCompanies.has(job.company)) li.style.borderTopColor = "var(--accent)";
    li.innerHTML = `
      <div class="tl-meta">
        <div class="company">${job.company}</div>
        <div class="title">${job.title}</div>
        <div class="dates">${job.dates}</div>
      </div>
      <div class="tl-body">
        <ul>${job.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
        <p class="tl-taught"><strong>What this taught me:</strong> ${job.taught}</p>
      </div>
    `;
    list.appendChild(li);
  });
}

/* ============================================================
   RENDER: STATIC SECTIONS (hire me if / looking for / learning / beyond / contact)
   ============================================================ */
function renderHireMeIf() {
  const list = $("#hire-list");
  list.innerHTML = "";
  HIRE_ME_IF.forEach((line) => list.appendChild(el("li", null, line)));
}

function renderLookingFor() {
  $("#looking-headline").textContent = LOOKING_FOR.headline;
  $("#looking-body").textContent = LOOKING_FOR.body;
  $("#looking-interests").textContent = LOOKING_FOR.interests;
}

function renderStillLearning() {
  const list = $("#learning-list");
  list.innerHTML = "";
  STILL_LEARNING.forEach((line) => list.appendChild(el("li", null, line)));
}

function renderBeyondResume() {
  $("#beyond-headline").textContent = PERSONAL.headline;
  $("#beyond-intro").textContent = PERSONAL.intro;
  const grid = $("#personal-grid");
  grid.innerHTML = "";
  const cards = [
    ["Family", PERSONAL.family],
    ["Outside of work", PERSONAL.outsideOfWork],
    ["Currently interested in", PERSONAL.currentlyInterestedIn],
    ["Current rabbit hole", PERSONAL.rabbitHole],
    ["For fun", PERSONAL.forFun],
  ];
  cards.forEach(([label, value]) => {
    const isPlaceholder = typeof value === "string" && value.startsWith("[CONTENT NEEDED");
    const card = el("div", "personal-card" + (isPlaceholder ? " placeholder" : ""));
    card.innerHTML = `<h4>${label}</h4><p>${value}</p>`;
    grid.appendChild(card);
  });
}

function renderContact() {
  const emailLink = $("#contact-email");
  const liLink = $("#contact-linkedin");
  if (PERSON.email && !PERSON.email.startsWith("[CONTENT")) {
    emailLink.href = `mailto:${PERSON.email}`;
  } else {
    emailLink.href = "#";
    emailLink.title = "Add email in js/data.js";
  }
  if (PERSON.linkedin && !PERSON.linkedin.startsWith("[CONTENT")) {
    liLink.href = PERSON.linkedin;
  } else {
    liLink.href = "#";
    liLink.title = "Add LinkedIn URL in js/data.js";
  }
  emailLink.addEventListener("click", () => Analytics.track("contact_click", { channel: "email" }));
  liLink.addEventListener("click", () => Analytics.track("contact_click", { channel: "linkedin" }));

  const pdfLink = $("#resume-pdf-link");
  if (PERSON.resumePdf && !PERSON.resumePdf.startsWith("[CONTENT")) {
    pdfLink.href = PERSON.resumePdf;
  } else {
    pdfLink.href = "#";
    pdfLink.title = "Add resume.pdf path in js/data.js";
  }
  pdfLink.addEventListener("click", () => Analytics.track("resume_pdf_click", {}));
}

/* ============================================================
   RENDER: RESUME MODE
   ============================================================ */
function renderResumeModes() {
  const container = $("#resume-modes");
  container.innerHTML = "";
  Object.entries(RESUME_MODES).forEach(([key, mode]) => {
    const btn = el("button", "resume-mode-btn" + (key === resumeMode ? " active" : ""), mode.label);
    btn.setAttribute("data-mode", key);
    btn.addEventListener("click", () => selectResumeMode(key));
    container.appendChild(btn);
  });
}

function selectResumeMode(mode) {
  resumeMode = mode;
  Analytics.track("resume_mode_selected", { mode });
  document.querySelectorAll(".resume-mode-btn").forEach((b) => b.classList.toggle("active", b.getAttribute("data-mode") === mode));
  renderResumeTimeline(mode);
}

const COMPANY_FOR_PROJECT_ID = { circana: "Circana", allFor: "All For", syndigo: "Syndigo" };

function renderResumeTimeline(mode) {
  const list = $("#resume-timeline");
  list.innerHTML = "";
  let jobs = [...CAREER];
  if (mode !== "onepage" && ROLE_PROFILES[mode]) {
    const priority = ROLE_PROFILES[mode].projectOrder
      .map((id) => COMPANY_FOR_PROJECT_ID[id])
      .filter(Boolean);
    jobs = jobs
      .map((job, i) => {
        const rank = priority.indexOf(job.company);
        return { job, i, rank: rank === -1 ? priority.length : rank };
      })
      .sort((a, b) => a.rank - b.rank || a.i - b.i)
      .map((x) => x.job);
  }
  jobs.forEach((job) => {
    const li = el("li");
    const bullets = mode === "onepage" ? job.bullets.slice(0, 2) : job.bullets;
    li.innerHTML = `
      <div class="tl-meta">
        <div class="company">${job.company}</div>
        <div class="title">${job.title}</div>
        <div class="dates">${job.dates}</div>
      </div>
      <div class="tl-body">
        <ul>${bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
        ${mode === "onepage" ? "" : `<p class="tl-taught"><strong>What this taught me:</strong> ${job.taught}</p>`}
      </div>
    `;
    list.appendChild(li);
  });
}

/* ============================================================
   NAV
   ============================================================ */
function initNav() {
  const toggle = $("#nav-toggle");
  const list = $("#main-nav-list");
  toggle.addEventListener("click", () => {
    const open = list.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  list.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => list.classList.remove("open")));
}

/* ============================================================
   INIT
   ============================================================ */
function init() {
  initNav();
  renderRoleGrid(currentRole);
  renderRoleSummary(currentRole);
  renderHero(currentRole);
  renderProofPoints(currentRole);
  renderWhyProduct();
  renderCaseStudies(currentRole);
  renderDecisions(currentRole);
  renderScenarioGrid();
  renderToolkit(currentRole);
  renderCareer(currentRole);
  renderHireMeIf();
  renderLookingFor();
  renderStillLearning();
  renderBeyondResume();
  renderResumeModes();
  renderResumeTimeline(resumeMode);
  renderContact();
  $("#footer-role").textContent = `Currently viewing: ${ROLE_PROFILES[currentRole].label}`;
  setRoleInUrl(currentRole);
}

init();
