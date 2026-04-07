const slides = [
  {
    id: 1,
    topLabel: "RESEARCH STUDY",
    title: "AI-Assisted vs Manual\nWebpage Layout Design",
    subtitle:
      "A feasibility study of performance, experience, and workflow patterns",
    variant: "cover",
    meta: [
      ["main subject area", "informatics"],
      ["authors", "Denisa-Georgiana Badea & Anastasiia Makarova"],
      ["supervisor", "Mira Pop"],
      ["location", "Jonkoping 2026/04", true],
    ],
  },
  {
    id: 2,
    title: "Table of Contents",
    variant: "toc",
    items: [
      "Introduction",
      "Theoretical framework",
      "Purpose & Research questions",
      "Scope and limitations",
      "Study setup",
      "Conditions",
      "Task and time limit",
      "Data collection & analysis plan",
      "Expected patterns",
      "Next steps",
    ],
  },
  {
    id: 3,
    topLabel: "OVERVIEW",
    title: "Introduction",
    variant: "intro",
    cards: [
      {
        icon: "sparkles",
        gradient: "gradient-cyan",
        text: "Exploring the impact of AI assistance on web design workflows",
      },
      {
        icon: "bar-chart-3",
        gradient: "gradient-blue",
        text: "Comparing manual and AI-assisted approaches to webpage layout",
      },
      {
        icon: "users",
        gradient: "gradient-violet",
        text: "Understanding how designers interact with AI tools",
      },
    ],
  },
  {
    id: 4,
    topLabel: "FOUNDATION",
    title: "Theoretical framework",
    variant: "framework",
    nodes: [
      {
        title: "Redistribution\nof Effort",
        icon: "scale-custom",
      },
      {
        title: "Human-AI\nCo-Creation",
        icon: "sparkles",
      },
      {
        title: "Iterative Design\nProcess",
        icon: "refresh-cw",
      },
    ],
  },
  {
    id: 5,
    topLabel: "FOCUS",
    title: "Purpose & Research questions",
    variant: "purpose",
    purpose:
      "To examine how AI assistance in a UI design tool affects task performance, perceived workload, and workflow during a constrained layout task, compared with a manual workflow.",
    questions: [
      "To what extent does AI assistance affect task performance compared with a manual workflow?",
      "What impact does AI assistance have on perceived workload compared with manual work?",
      "How do designers' workflow strategies and decision-making differ between AI-assisted and manual work?",
    ],
  },
  {
    id: 6,
    topLabel: "BOUNDARIES",
    title: "Scope and limitations",
    variant: "scope",
    columns: [
      {
        title: "Scope",
        icon: "scan-search",
        tone: "tone-cyan",
        gradient: "gradient-cyan",
        accent: "accent-cyan",
        items: [
          "Controlled comparison of AI-assisted (Figma Make) vs manual interface layout work in Figma using a reference-based layout replication task.",
          "Focus on performance, perceived workload and experience, plus workflow differences.",
        ],
      },
      {
        title: "Out of scope",
        icon: "x-circle",
        tone: "tone-slate",
        gradient: "gradient-slate",
        accent: "accent-slate",
        items: [
          "Learning and transfer over time",
          "Creative redesign outcomes",
          "End-user UX outcomes such as usability, preference, or conversion",
        ],
      },
      {
        title: "Limitations",
        icon: "alert-triangle",
        tone: "tone-orange",
        gradient: "gradient-orange",
        accent: "accent-orange",
        items: [
          "Tool-specific to Figma Make",
          "Small sample with 5 per condition, so the study is exploratory",
          "Limited generalisability",
        ],
      },
    ],
  },
  {
    id: 7,
    topLabel: "METHODOLOGY",
    title: "Study setup",
    variant: "setup",
    setup: [
      {
        icon: "target",
        title: "Design",
        text: "Within-subjects experimental design",
      },
      {
        icon: "users",
        title: "Participants",
        text: "Complete tasks in both conditions",
      },
      {
        icon: "boxes",
        title: "Order",
        text: "Randomized to control learning effects",
      },
      {
        icon: "database",
        title: "Data",
        text: "Multiple collection methods",
      },
    ],
  },
  {
    id: 8,
    topLabel: "COMPARISON",
    title: "Conditions",
    variant: "conditions",
    conditions: [
      {
        n: 1,
        title: "Manual",
        text: "Manual webpage layout design",
        tone: "tone-blue",
        circle: "circle-blue",
        check: "check-blue",
        bullets: [
          "Traditional design tools",
          "Full designer control",
          "Standard workflow",
        ],
      },
      {
        n: 2,
        title: "AI-Assisted",
        text: "AI-assisted webpage layout design",
        tone: "tone-cyan",
        circle: "circle-cyan",
        check: "check-cyan",
        bullets: [
          "AI generation tools",
          "Human-AI collaboration",
          "Assisted workflow",
        ],
      },
    ],
    footer:
      "Counterbalanced presentation order • Same design brief and requirements",
  },
  {
    id: 9,
    topLabel: "EXECUTION",
    title: "Task and time limit",
    variant: "task",
    tasks: [
      {
        icon: "target",
        title: "Design Task",
        text: "Create a webpage layout for a given brief",
      },
      {
        icon: "activity",
        title: "Complexity",
        text: "Comparable complexity across conditions",
      },
      {
        icon: "check-circle-2",
        title: "Scenario",
        text: "Realistic design scenario",
      },
    ],
    duration: "Fixed",
    durationSub: "Per Condition",
  },
  {
    id: 10,
    topLabel: "MEASUREMENT",
    title: "Data collection",
    variant: "data",
    dataCards: [
      {
        icon: "trending-up",
        gradient: "gradient-blue",
        title: "Task performance",
        text: "Time, completion, fidelity",
      },
      {
        icon: "activity",
        gradient: "gradient-violet",
        title: "Perceived workload",
        text: "NASA-TLX overall plus dimensions",
      },
      {
        icon: "bar-chart-3",
        gradient: "gradient-orange-soft",
        title: "Workflow patterns",
        text: "Reflections plus screen recordings",
      },
      {
        icon: "brain",
        gradient: "gradient-green",
        title: "Supplementary",
        text: "Confidence plus perceived control",
      },
    ],
  },
];

function runSlideAssertions(slidesToCheck) {
  if (!Array.isArray(slidesToCheck) || slidesToCheck.length === 0) {
    throw new Error("Slides array must contain at least one slide.");
  }

  const ids = new Set();
  slidesToCheck.forEach((slide) => {
    if (ids.has(slide.id)) {
      throw new Error(`Duplicate slide id found: ${slide.id}`);
    }
    ids.add(slide.id);

    if (!slide.title || !slide.title.trim()) {
      throw new Error(`Slide ${slide.id} is missing a title.`);
    }

    if (slide.variant === "toc" && slide.items.length === 0) {
      throw new Error("Table of contents slide must have items.");
    }

    if (slide.variant === "framework" && slide.nodes.length !== 3) {
      throw new Error("Framework slide must have exactly 3 nodes.");
    }
  });
}

runSlideAssertions(slides);

const slideContent = document.getElementById("slide-content");
const progressBar = document.getElementById("progress-bar");
const currentSlideEl = document.getElementById("current-slide");
const totalSlidesEl = document.getElementById("total-slides");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const fullscreenBtn = document.getElementById("fullscreen-btn");

let current = 0;

totalSlidesEl.textContent = String(slides.length);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function nl2br(value) {
  return escapeHtml(value).replaceAll("\n", "<br />");
}

function iconMarkup(name, extraClass = "") {
  if (name === "scale-custom") {
    return `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" class="${extraClass}">
        <path d="M12 3v18"></path>
        <path d="M8 7h8"></path>
        <path d="M6 7 3.5 12h5L6 7Z"></path>
        <path d="M18 7 15.5 12h5L18 7Z"></path>
        <path d="M9 21h6"></path>
      </svg>
    `;
  }

  return `<i data-lucide="${escapeHtml(name)}" class="${extraClass}"></i>`;
}

function labelPill(text) {
  return `<div class="label-pill">${escapeHtml(text)}</div>`;
}

function accentLine(extraClass = "") {
  return `<div class="accent-line ${extraClass}"></div>`;
}

function glassCard(content, extraClass = "") {
  return `<article class="glass-card ${extraClass}">${content}</article>`;
}

function iconTile(icon, gradient, extraClass = "") {
  return `
    <div class="icon-tile ${gradient} ${extraClass}">
      ${iconMarkup(icon, "tile-icon")}
    </div>
  `;
}

function renderCover(slide) {
  return `
    <section class="slide slide-cover">
      <div class="slide-max">
        ${labelPill(slide.topLabel)}
        <h1 class="cover-title">${nl2br(slide.title)}</h1>
        <p class="cover-subtitle">${escapeHtml(slide.subtitle)}</p>
        ${accentLine("wide")}
      </div>

      <div class="cover-meta">
        ${slide.meta
          .map(
            ([label, value, accent]) => `
              <div class="cover-meta-row">
                <span class="meta-label">${escapeHtml(label)}:</span>
                <span class="${accent ? "meta-accent" : ""}">${escapeHtml(value)}</span>
              </div>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderToc(slide) {
  const rows = [];

  for (let i = 0; i < slide.items.length; i += 2) {
    rows.push(slide.items.slice(i, i + 2));
  }

  return `
    <section class="slide slide-toc">
      <h2 class="section-title center">${escapeHtml(slide.title)}</h2>
      <div class="toc-grid">
        ${rows
          .map(
            (pair, rowIndex) => `
              <div class="toc-row">
                ${pair
                  .map(
                    (item, idx) => `
                      ${glassCard(
                        `
                          <div class="toc-number">${String(rowIndex * 2 + idx + 1).padStart(2, "0")}</div>
                          <div class="toc-text">${escapeHtml(item)}</div>
                        `,
                        "toc-card"
                      )}
                    `
                  )
                  .join("")}
              </div>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderIntro(slide) {
  return `
    <section class="slide slide-standard">
      ${labelPill(slide.topLabel)}
      <h2 class="section-title">${escapeHtml(slide.title)}</h2>
      ${accentLine()}
      <div class="three-grid intro-grid">
        ${slide.cards
          .map((card) =>
            glassCard(
              `
                ${iconTile(card.icon, card.gradient)}
                <p class="intro-copy">${escapeHtml(card.text)}</p>
              `,
              "intro-card"
            )
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderFramework(slide) {
  return `
    <section class="slide slide-framework">
      <div class="center-stack">
        ${labelPill(slide.topLabel)}
        <h2 class="section-title center">${escapeHtml(slide.title)}</h2>
      </div>

      <div class="framework-stage">
        <div class="framework-line"></div>

        ${glassCard(
          `
            ${iconMarkup(slide.nodes[0].icon, "framework-node-icon")}
            <div class="framework-node-title">${nl2br(slide.nodes[0].title)}</div>
          `,
          "framework-node framework-left"
        )}

        ${glassCard(
          `
            ${iconMarkup(slide.nodes[1].icon, "framework-node-icon")}
            <div class="framework-node-title">${nl2br(slide.nodes[1].title)}</div>
          `,
          "framework-node framework-top"
        )}

        <div class="framework-center">
          ${iconMarkup("lightbulb", "framework-center-icon")}
        </div>

        ${glassCard(
          `
            ${iconMarkup(slide.nodes[2].icon, "framework-node-icon")}
            <div class="framework-node-title">${nl2br(slide.nodes[2].title)}</div>
          `,
          "framework-node framework-right"
        )}
      </div>
    </section>
  `;
}

function renderPurpose(slide) {
  const icons = ["target", "activity", "boxes"];

  return `
    <section class="slide slide-standard">
      ${labelPill(slide.topLabel)}
      <h2 class="section-title">${escapeHtml(slide.title)}</h2>
      ${accentLine()}

      <div class="purpose-grid">
        ${glassCard(
          `
            ${iconTile("target", "gradient-cyan")}
            <div class="purpose-heading">Purpose</div>
            ${accentLine("short")}
            <p class="purpose-copy">${escapeHtml(slide.purpose)}</p>
            <div class="purpose-footnote">
              <span class="purpose-dot"></span>
              Core research objective
            </div>
          `,
          "purpose-card"
        )}

        <div class="purpose-question-list">
          ${slide.questions
            .map((question, index) =>
              glassCard(
                `
                  <div class="question-index-wrap">
                    <div class="question-index">${String(index + 1).padStart(2, "0")}</div>
                    <div class="question-icon-box">
                      ${iconMarkup(icons[index], "question-icon")}
                    </div>
                  </div>
                  <div class="question-text">${escapeHtml(question)}</div>
                `,
                "purpose-question-card"
              )
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderScope(slide) {
  return `
    <section class="slide slide-standard centered-intro">
      <div class="center-stack">
        ${labelPill(slide.topLabel)}
        <h2 class="section-title center">${escapeHtml(slide.title)}</h2>
        ${accentLine()}
      </div>

      <div class="three-grid scope-grid">
        ${slide.columns
          .map((column) =>
            glassCard(
              `
                ${iconTile(column.icon, column.gradient)}
                <div class="scope-title">${escapeHtml(column.title)}</div>
                <div class="scope-accent ${column.accent}"></div>
                <ul class="scope-list">
                  ${column.items
                    .map(
                      (item) => `
                        <li>
                          <span class="scope-bullet ${column.accent}"></span>
                          <span>${escapeHtml(item)}</span>
                        </li>
                      `
                    )
                    .join("")}
                </ul>
              `,
              `scope-card ${column.tone}`
            )
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderSetup(slide) {
  return `
    <section class="slide slide-standard centered-intro">
      <div class="center-stack">
        ${labelPill(slide.topLabel)}
        <h2 class="section-title center">${escapeHtml(slide.title)}</h2>
      </div>

      <div class="setup-grid">
        ${slide.setup
          .map(
            (item, index) => `
              ${glassCard(
                `
                  <div class="setup-icon-ring">
                    ${iconMarkup(item.icon, "setup-icon")}
                  </div>
                  <div class="setup-title">${escapeHtml(item.title)}</div>
                  <div class="setup-copy">${escapeHtml(item.text)}</div>
                `,
                "setup-card"
              )}
              ${
                index < slide.setup.length - 1
                  ? `<div class="setup-connector" aria-hidden="true"></div>`
                  : ""
              }
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderConditions(slide) {
  return `
    <section class="slide slide-standard centered-intro">
      <div class="center-stack">
        ${labelPill(slide.topLabel)}
        <h2 class="section-title center">${escapeHtml(slide.title)}</h2>
      </div>

      <div class="conditions-grid">
        ${slide.conditions
          .map((condition) =>
            glassCard(
              `
                <div class="condition-head">
                  <div class="condition-number ${condition.circle}">${condition.n}</div>
                  <div class="condition-title">${escapeHtml(condition.title)}</div>
                </div>
                <div class="condition-text">${escapeHtml(condition.text)}</div>
                <ul class="condition-list">
                  ${condition.bullets
                    .map(
                      (bullet) => `
                        <li>
                          ${iconMarkup("check-circle-2", `condition-check ${condition.check}`)}
                          <span>${escapeHtml(bullet)}</span>
                        </li>
                      `
                    )
                    .join("")}
                </ul>
              `,
              `condition-card ${condition.tone}`
            )
          )
          .join("")}
      </div>

      ${glassCard(
        `
          <span class="footer-highlight">Counterbalanced presentation order</span>
          <span class="footer-dot">•</span>
          <span>Same design brief and requirements</span>
        `,
        "conditions-footer"
      )}
    </section>
  `;
}

function renderTask(slide) {
  return `
    <section class="slide slide-standard centered-intro">
      <div class="center-stack">
        ${labelPill(slide.topLabel)}
        <h2 class="section-title center">${escapeHtml(slide.title)}</h2>
      </div>

      <div class="task-grid">
        <div class="task-list">
          ${slide.tasks
            .map((item) =>
              glassCard(
                `
                  <div class="task-card-row">
                    ${iconMarkup(item.icon, "task-icon")}
                    <div>
                      <div class="task-title">${escapeHtml(item.title)}</div>
                      <div class="task-copy">${escapeHtml(item.text)}</div>
                    </div>
                  </div>
                `,
                "task-card"
              )
            )
            .join("")}
        </div>

        <div class="task-timer-wrap">
          <div class="task-timer-ring">
            <div class="task-timer-core">
              ${iconMarkup("timer", "timer-icon")}
              <div class="timer-main">${escapeHtml(slide.duration)}</div>
              <div class="timer-label">Duration</div>
              <div class="timer-sub">${escapeHtml(slide.durationSub)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderData(slide) {
  return `
    <section class="slide slide-standard centered-intro">
      <div class="center-stack">
        ${labelPill(slide.topLabel)}
        <h2 class="section-title center">${escapeHtml(slide.title)}</h2>
      </div>

      <div class="data-grid">
        ${slide.dataCards
          .map((card) =>
            glassCard(
              `
                ${iconTile(card.icon, card.gradient)}
                <div class="data-title">${escapeHtml(card.title)}</div>
                <div class="data-copy">${escapeHtml(card.text)}</div>
              `,
              "data-card"
            )
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderSlide(slide) {
  switch (slide.variant) {
    case "cover":
      return renderCover(slide);
    case "toc":
      return renderToc(slide);
    case "intro":
      return renderIntro(slide);
    case "framework":
      return renderFramework(slide);
    case "purpose":
      return renderPurpose(slide);
    case "scope":
      return renderScope(slide);
    case "setup":
      return renderSetup(slide);
    case "conditions":
      return renderConditions(slide);
    case "task":
      return renderTask(slide);
    case "data":
      return renderData(slide);
    default:
      return "";
  }
}

function renderCurrentSlide() {
  const slide = slides[current];
  slideContent.innerHTML = renderSlide(slide);
  currentSlideEl.textContent = String(current + 1);
  progressBar.style.width = `${((current + 1) / slides.length) * 100}%`;

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons({
      attrs: {
        "stroke-width": 1.9,
      },
    });
  }
}

function next() {
  current = (current + 1) % slides.length;
  renderCurrentSlide();
}

function prev() {
  current = (current - 1 + slides.length) % slides.length;
  renderCurrentSlide();
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.();
  } else {
    document.exitFullscreen?.();
  }
}

prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);
fullscreenBtn.addEventListener("click", toggleFullscreen);

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
    event.preventDefault();
    next();
  }

  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    prev();
  }

  if (event.key === "Home") {
    current = 0;
    renderCurrentSlide();
  }

  if (event.key === "End") {
    current = slides.length - 1;
    renderCurrentSlide();
  }

  if (event.key.toLowerCase() === "f") {
    toggleFullscreen();
  }
});

renderCurrentSlide();
