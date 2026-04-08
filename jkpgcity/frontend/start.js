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
      "Theoretical Framework",
      "Purpose & research questions",
      "Design, task, conditions",
      "Methods",
      "Scope, next steps + Q&A",
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
    title: "Theoretical Framework",
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
        icon: "panels-top-left",
        title: "Format",
        text: "Two separate groups; one run per participant",
      },
      {
        icon: "users",
        title: "Participants",
        text: "10 design students, with 5 in each group",
      },
      {
        icon: "scale-custom",
        title: "Fair comparison",
        text: "Groups balanced by self-reported Figma experience",
      },
      {
        icon: "clipboard-check",
        title: "Before start",
        text: "Questionnaire plus a quick warm-up check",
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
        eyebrow: "Original workflow",
        title: "Figma tool",
        metric: "01",
        metricLabel: "Direct manual workflow",
        text: "Participants design the webpage directly with standard Figma tools and manual editing.",
        chips: ["Frames", "Auto layout", "Components", "Manual placement"],
      },
      {
        n: 2,
        eyebrow: "AI-supported workflow",
        title: "Figma Make",
        metric: "02",
        metricLabel: "Generation-assisted path",
        text: "Participants use Figma Make to generate and refine a layout from prompts before adjusting it manually.",
        chips: ["Prompting", "Generation", "Iteration", "Refinement"],
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
        title: "Task:",
        text: "Replicate a desktop webpage layout from a reference image",
      },
      {
        icon: "timer",
        title: "Time:",
        text: "Fixed 20-minute limit; non-completion recorded as a time-out",
      },
    ],
    duration: "20",
    durationLabel: "Minutes",
    durationSub: "Minute limit",
    orbitImages: [
      {
        src: "./img/JU_Hero-startsida_1.jpg",
        ring: "outer",
        size: 70,
        angle: 334,
        duration: 40,
        delay: -5,
        offset: 10,
        position: "54% 40%",
      },
      {
        src: "./img/VInnare-2025.jpg",
        ring: "outer",
        size: 62,
        angle: 26,
        duration: 40,
        delay: -18,
        offset: 62,
        position: "50% 40%",
      },
      {
        src: "./img/_JU_7909.webp",
        ring: "outer",
        size: 54,
        angle: 78,
        duration: 40,
        delay: -24,
        offset: 114,
        position: "58% 40%",
      },
      {
        src: "./img/_JU_7909.webp",
        ring: "mid",
        size: 60,
        angle: 322,
        duration: 30,
        delay: -9,
        offset: 4,
        position: "55% 38%",
      },
      {
        src: "./img/puff_ansokan.jpg",
        ring: "mid",
        size: 56,
        angle: 194,
        duration: 30,
        delay: -15,
        offset: 38,
        position: "56% 42%",
      },
      {
        src: "./img/JU_Hero-startsida_1.jpg",
        ring: "mid",
        size: 52,
        angle: 86,
        duration: 30,
        delay: -21,
        offset: 72,
        position: "70% 44%",
      },
      {
        src: "./img/springinspi.jpg",
        ring: "mid",
        size: 48,
        angle: 138,
        duration: 30,
        delay: -11,
        offset: 106,
        position: "52% 42%",
      },
      {
        src: "./img/VInnare-2025.jpg",
        ring: "outer",
        size: 42,
        angle: 296,
        duration: 40,
        delay: -16,
        offset: 152,
        position: "62% 34%",
      },
      {
        src: "./img/puff_ansokan.jpg",
        ring: "outer",
        size: 42,
        angle: 110,
        duration: 40,
        delay: -6,
        offset: 198,
        position: "58% 38%",
      },
    ],
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
  {
    id: 11,
    topLabel: "PREDICTIONS",
    title: "Expected patterns",
    variant: "patterns",
    bullets: [
      "The AI-assisted condition may help participants get started faster and complete work earlier in the task.",
      "However, AI-assisted participants may spend more time checking, correcting, and refining the generated output.",
      "The manual condition may be slower overall, but may provide a more direct and controlled workflow.",
      "AI assistance may reduce some aspects of effort, but may also create mixed effects on workload, confidence, and perceived control as designers evaluate and adjust AI-generated results.",
    ],
    chartTitle: "Predicted Workflow Pattern",
    series: [
      { label: "Manual", colorClass: "series-blue", values: [82, 76, 70] },
      { label: "AI-Assisted", colorClass: "series-cyan", values: [40, 60, 66] },
    ],
  },
  {
    id: 12,
    topLabel: "TIMELINE",
    title: "Next steps",
    variant: "timeline",
    steps: [
      {
        n: 1,
        title: "Finalise participant recruitment",
        text: "Confirm the remaining participants, sessions, and practical study logistics.",
      },
      {
        n: 2,
        title: "Conduct experiment and collect data",
        text: "Run both conditions, capture recordings, and gather post-task reflections.",
      },
      {
        n: 3,
        title: "Complete the analysis",
        text: "Compare performance, workload, confidence, perceived control, and workflow patterns.",
      },
      {
        n: 4,
        title: "Finalise the thesis and defence preparation",
        text: "Complete the remaining chapters, polish the presentation, and prepare the final discussion.",
      },
    ],
  },
  {
    id: 13,
    topLabel: "END OF PRESENTATION",
    title: "Thank you!",
    variant: "thanks",
    subtitle: "Questions?",
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

function reveal(content, delay = 0, extraClass = "") {
  return `<div class="reveal ${extraClass}" style="--delay:${delay}ms">${content}</div>`;
}

function renderCover(slide) {
  return `
    <section class="slide slide-cover">
      <div class="slide-max">
        ${reveal(labelPill(slide.topLabel), 20)}
        ${reveal(`<h1 class="cover-title">${nl2br(slide.title)}</h1>`, 120)}
        ${reveal(`<p class="cover-subtitle">${escapeHtml(slide.subtitle)}</p>`, 220)}
        ${reveal(accentLine("wide"), 300)}
      </div>

      <div class="cover-meta">
        ${slide.meta
          .map(
            ([label, value, accent], index) =>
              reveal(
                `
              <div class="cover-meta-row">
                <span class="meta-label">${escapeHtml(label)}:</span>
                <span class="${accent ? "meta-accent" : ""}">${escapeHtml(value)}</span>
              </div>
            `,
                360 + index * 70
              )
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderToc(slide) {
  const splitIndex = Math.ceil(slide.items.length / 2);
  const columns = [slide.items.slice(0, splitIndex), slide.items.slice(splitIndex)];

  return `
    <section class="slide slide-toc">
      <div class="center-stack">
        ${reveal(`<h2 class="section-title center">${escapeHtml(slide.title)}</h2>`, 40)}
        ${reveal(accentLine(), 110)}
      </div>
      <div class="toc-grid">
        ${columns
          .map(
            (column, columnIndex) => `
              <div class="toc-column">
                ${column
                  .map(
                    (item, itemIndex) => `
                      ${reveal(
                        `
                          <article class="toc-item">
                            <div class="toc-number">${String(columnIndex * splitIndex + itemIndex + 1).padStart(2, "0")}</div>
                            <div class="toc-copy">
                              <div class="toc-text">${escapeHtml(item)}</div>
                            </div>
                          </article>
                        `,
                        120 + (columnIndex * splitIndex + itemIndex) * 55
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
      ${reveal(labelPill(slide.topLabel), 20)}
      ${reveal(`<h2 class="section-title">${escapeHtml(slide.title)}</h2>`, 100)}
      ${reveal(accentLine(), 170)}
      <div class="three-grid intro-grid">
        ${slide.cards
          .map((card, index) =>
            reveal(
              glassCard(
              `
                ${iconTile(card.icon, card.gradient)}
                <p class="intro-copy">${escapeHtml(card.text)}</p>
              `,
              "intro-card"
            ),
              230 + index * 90
            )
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderFramework(slide) {
  const leftNode = slide.nodes[1];
  const rightNode = slide.nodes[2];
  const bottomNode = slide.nodes[0];

  return `
    <section class="slide slide-framework">
      <div class="center-stack">
        ${reveal(labelPill(slide.topLabel), 20)}
        ${reveal(`<h2 class="section-title center">${escapeHtml(slide.title)}</h2>`, 110)}
        ${reveal(accentLine(), 170)}
      </div>

      <div class="framework-stage framework-stage-orbit">
        ${reveal(
          `
            <div class="framework-orbit-grid" aria-hidden="true"></div>
            <div class="framework-orbit-path framework-orbit-path-horizontal"></div>
            <div class="framework-orbit-path framework-orbit-path-diagonal"></div>
            <div class="framework-orbit-path framework-orbit-path-diagonal-alt"></div>
          `,
          180
        )}

        ${reveal(
          glassCard(
            `
              <div class="framework-node-header">
                <div class="framework-node-chip">Concept 01</div>
                ${iconMarkup(leftNode.icon, "framework-node-icon")}
              </div>
              <div class="framework-node-title">${nl2br(leftNode.title)}</div>
            `,
            "framework-node framework-node-left"
          ),
          240
        )}

        ${reveal(
          glassCard(
            `
              <div class="framework-node-header">
                <div class="framework-node-chip">Concept 02</div>
                ${iconMarkup(rightNode.icon, "framework-node-icon")}
              </div>
              <div class="framework-node-title">${nl2br(rightNode.title)}</div>
            `,
            "framework-node framework-node-right"
          ),
          320
        )}

        ${reveal(
          glassCard(
            `
              <div class="framework-node-header">
                <div class="framework-node-chip">Concept 03</div>
                ${iconMarkup(bottomNode.icon, "framework-node-icon")}
              </div>
              <div class="framework-node-title">${nl2br(bottomNode.title)}</div>
            `,
            "framework-node framework-node-bottom"
          ),
          400
        )}

        ${reveal(
          `<div class="framework-center framework-center-orb">
            <div class="framework-center-glow"></div>
            <div class="framework-center-shell">
              <div class="framework-center-rings"></div>
              <div class="framework-center-rings framework-center-rings-alt"></div>
              <div class="framework-center-core"></div>
              ${iconMarkup("lightbulb", "framework-center-icon")}
            </div>
          </div>`,
          290
        )}

        ${reveal(
          `
            <div class="framework-connector framework-connector-left" aria-hidden="true"></div>
            <div class="framework-connector framework-connector-right" aria-hidden="true"></div>
            <div class="framework-connector framework-connector-bottom" aria-hidden="true"></div>
          `,
          350
        )}
      </div>
    </section>
  `;
}

function renderPurpose(slide) {
  const icons = ["target", "activity", "boxes"];

  return `
    <section class="slide slide-standard centered-intro">
      <div class="center-stack">
        ${reveal(labelPill(slide.topLabel), 20)}
        ${reveal(`<h2 class="section-title center">${escapeHtml(slide.title)}</h2>`, 100)}
        ${reveal(accentLine(), 170)}
      </div>

      <div class="purpose-layout">
        ${reveal(
          glassCard(
          `
            <div class="purpose-topline">Purpose</div>
            <div class="purpose-heading">Research Aim</div>
            <p class="purpose-copy">${escapeHtml(slide.purpose)}</p>
            <div class="purpose-footnote purpose-footnote-center">
              <span class="purpose-dot"></span>
              Core research objective
            </div>
          `,
          "purpose-card"
        ),
          220
        )}

        <div class="purpose-question-grid">
          ${slide.questions
            .map((question, index) =>
              reveal(
                glassCard(
                `
                  <div class="question-card-top">
                    <div class="question-icon-box">
                      ${iconMarkup(icons[index], "question-icon")}
                    </div>
                    <div class="question-index">RQ${index + 1}</div>
                  </div>
                  <div class="question-text">${escapeHtml(question)}</div>
                `,
                "purpose-question-card"
              ),
                290 + index * 80
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
        ${reveal(labelPill(slide.topLabel), 20)}
        ${reveal(`<h2 class="section-title center">${escapeHtml(slide.title)}</h2>`, 100)}
        ${reveal(accentLine(), 170)}
      </div>

      <div class="three-grid scope-grid">
        ${slide.columns
          .map((column, index) =>
            reveal(glassCard(
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
            ), 240 + index * 90)
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderSetup(slide) {
  const leftItems = slide.setup.slice(0, 2);
  const rightItems = slide.setup.slice(2, 4);

  return `
    <section class="slide slide-standard centered-intro">
      <div class="center-stack">
        ${reveal(labelPill(slide.topLabel), 20)}
        ${reveal(`<h2 class="section-title center">${escapeHtml(slide.title)}</h2>`, 100)}
        ${reveal(accentLine(), 170)}
      </div>

      <div class="setup-stage">
        <div class="setup-column">
          ${leftItems
            .map(
              (item, index) =>
                reveal(
                  glassCard(
                    `
                  <div class="setup-mini-icon">
                    ${iconMarkup(item.icon, "setup-icon")}
                  </div>
                  <div class="setup-title">${escapeHtml(item.title)}</div>
                  <div class="setup-copy">${escapeHtml(item.text)}</div>
                `,
                    "setup-card setup-card-side"
                  ),
                  240 + index * 90
                )
            )
            .join("")}
        </div>

        ${reveal(
          `
            <div class="setup-centerpiece">
              <div class="setup-orb-glow"></div>
              <div class="setup-orb-shell">
                <div class="setup-orb-core"></div>
              </div>
            </div>
          `,
          230
        )}

        <div class="setup-column">
          ${rightItems
            .map(
              (item, index) =>
                reveal(
                  glassCard(
                    `
                  <div class="setup-mini-icon">
                    ${iconMarkup(item.icon, "setup-icon")}
                  </div>
                  <div class="setup-title">${escapeHtml(item.title)}</div>
                  <div class="setup-copy">${escapeHtml(item.text)}</div>
                `,
                    "setup-card setup-card-side"
                  ),
                  330 + index * 90
                )
            )
            .join("")}
        </div>

        <div class="setup-link setup-link-left-top" aria-hidden="true"></div>
        <div class="setup-link setup-link-left-bottom" aria-hidden="true"></div>
        <div class="setup-link setup-link-right-top" aria-hidden="true"></div>
        <div class="setup-link setup-link-right-bottom" aria-hidden="true"></div>
      </div>
    </section>
  `;
}

function renderConditions(slide) {
  const [leftCondition, rightCondition] = slide.conditions;

  return `
    <section class="slide slide-standard centered-intro">
      <div class="center-stack">
        ${reveal(labelPill(slide.topLabel), 20)}
        ${reveal(`<h2 class="section-title center">${escapeHtml(slide.title)}</h2>`, 100)}
        ${reveal(accentLine(), 170)}
      </div>

      <div class="conditions-stage">
        ${reveal(
          `
            <div class="conditions-board">
              <article class="condition-card condition-card-left">
                <div class="condition-card-inner">
                  <div class="condition-section-label">${escapeHtml(leftCondition.eyebrow)}</div>
                  <div class="condition-panel-title">${escapeHtml(leftCondition.title)}</div>
                  <div class="condition-metric">${escapeHtml(leftCondition.metric)}</div>
                  <div class="condition-metric-label">${escapeHtml(leftCondition.metricLabel)}</div>
                  <div class="condition-text">${escapeHtml(leftCondition.text)}</div>
                  <div class="condition-chip-label">Tools / interaction</div>
                  <div class="condition-chip-row">
                    ${leftCondition.chips
                      .map(
                        (chip) => `
                          <span class="condition-chip">${escapeHtml(chip)}</span>
                        `
                      )
                      .join("")}
                  </div>
                </div>
              </article>

              <div class="condition-cube-wrap" aria-hidden="true">
                <div class="condition-cube-container">
                  <video class="condition-cube-video" autoplay muted playsinline preload="auto" src="./img/conditions-video.mov"></video>
                </div>
              </div>

              <article class="condition-card condition-card-right">
                <div class="condition-card-inner">
                  <div class="condition-section-label">${escapeHtml(rightCondition.eyebrow)}</div>
                  <div class="condition-panel-title">${escapeHtml(rightCondition.title)}</div>
                  <div class="condition-metric">${escapeHtml(rightCondition.metric)}</div>
                  <div class="condition-metric-label">${escapeHtml(rightCondition.metricLabel)}</div>
                  <div class="condition-text">${escapeHtml(rightCondition.text)}</div>
                  <div class="condition-chip-label">Tools / interaction</div>
                  <div class="condition-chip-row">
                    ${rightCondition.chips
                      .map(
                        (chip) => `
                          <span class="condition-chip">${escapeHtml(chip)}</span>
                        `
                      )
                      .join("")}
                  </div>
                </div>
              </article>
            </div>
          `,
          180
        )}
      </div>
    </section>
  `;
}

function renderTask(slide) {
  return `
    <section class="slide slide-standard centered-intro">
      <div class="center-stack">
        ${reveal(labelPill(slide.topLabel), 20)}
        ${reveal(`<h2 class="section-title center">${escapeHtml(slide.title)}</h2>`, 100)}
        ${reveal(accentLine(), 170)}
      </div>

      <div class="task-spotlight">
        ${reveal(
          `<div class="task-rings-panel">
            <div class="task-rings-glow"></div>
            <div class="task-ring task-ring-outer"></div>
            <div class="task-ring task-ring-mid"></div>
            <div class="task-ring task-ring-inner"></div>
            ${slide.orbitImages
              .map(
                (item, index) => `
                  <div
                    class="task-orbit task-orbit-${escapeHtml(item.ring)}"
                    style="--orbit-size:${item.size}px;--orbit-angle:${item.angle}deg;--orbit-duration:${item.duration}s;--orbit-delay:${item.delay}s;--orbit-offset:${item.offset ?? 0}px"
                  >
                    <div class="task-orbit-node">
                      <img
                        class="task-orbit-image"
                        src="${escapeHtml(item.src)}"
                        alt=""
                        style="object-position:${escapeHtml(item.position)}"
                      />
                    </div>
                  </div>
                `
              )
              .join("")}
            <div class="task-ring-core">
              <img class="task-ring-logo" src="./img/ju_logo_white.svg" alt="Jönköping University logo" />
            </div>
          </div>`,
          160
        )}

        <div class="task-callouts">
          ${slide.tasks
            .map((item, index) =>
              reveal(
                `
                  <article class="task-callout">
                    <div class="task-callout-head">
                      ${iconMarkup(item.icon, "task-icon")}
                      <div class="task-title">${escapeHtml(item.title)}</div>
                    </div>
                    <div class="task-copy">${escapeHtml(item.text)}</div>
                  </article>
                `,
                220 + index * 85
              )
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderData(slide) {
  return `
    <section class="slide slide-standard centered-intro">
      <div class="center-stack">
        ${reveal(labelPill(slide.topLabel), 20)}
        ${reveal(`<h2 class="section-title center">${escapeHtml(slide.title)}</h2>`, 100)}
      </div>

      <div class="data-grid">
        ${slide.dataCards
          .map((card, index) =>
            reveal(glassCard(
              `
                ${iconTile(card.icon, card.gradient)}
                <div class="data-title">${escapeHtml(card.title)}</div>
                <div class="data-copy">${escapeHtml(card.text)}</div>
              `,
              "data-card"
            ), 180 + index * 80)
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderPatterns(slide) {
  const labels = ["Early", "Mid", "Late"];
  const maxValue = 90;
  const manualPoints = slide.series[0].values
    .map((value, index) => `${index * 50},${100 - (value / maxValue) * 100}`)
    .join(" ");
  const aiPoints = slide.series[1].values
    .map((value, index) => `${index * 50},${100 - (value / maxValue) * 100}`)
    .join(" ");

  return `
    <section class="slide slide-standard centered-intro">
      <div class="center-stack">
        ${reveal(labelPill(slide.topLabel), 20)}
        ${reveal(`<h2 class="section-title center">${escapeHtml(slide.title)}</h2>`, 100)}
      </div>

      <div class="patterns-grid">
        <div class="patterns-list">
          ${slide.bullets
            .map(
              (bullet, index) =>
                reveal(
                  glassCard(
                    `
                      <div class="pattern-bullet-row">
                        <span class="pattern-dot"></span>
                        <p class="pattern-copy">${escapeHtml(bullet)}</p>
                      </div>
                    `,
                    "pattern-card"
                  ),
                  180 + index * 75
                )
            )
            .join("")}
        </div>

        ${reveal(
          glassCard(
            `
              <div class="pattern-chart-title">${escapeHtml(slide.chartTitle)}</div>
              <div class="chart-shell">
                <div class="chart-y-axis">
                  <span>80</span>
                  <span>60</span>
                  <span>40</span>
                  <span>20</span>
                  <span>0</span>
                </div>
                <div class="chart-stage">
                  <div class="chart-grid-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <svg viewBox="0 0 100 100" class="pattern-chart-svg" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="manual-fill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="rgba(59,130,246,0.82)"></stop>
                        <stop offset="100%" stop-color="rgba(59,130,246,0.02)"></stop>
                      </linearGradient>
                      <linearGradient id="ai-fill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="rgba(20,184,166,0.82)"></stop>
                        <stop offset="100%" stop-color="rgba(20,184,166,0.02)"></stop>
                      </linearGradient>
                    </defs>
                    <path d="M 0 100 L ${manualPoints} L 100 100 Z" class="area-manual"></path>
                    <path d="M 0 100 L ${aiPoints} L 100 100 Z" class="area-ai"></path>
                    <polyline points="${manualPoints}" class="line-manual"></polyline>
                    <polyline points="${aiPoints}" class="line-ai"></polyline>
                  </svg>
                  <div class="chart-x-axis">
                    ${labels.map((label) => `<span>${label}</span>`).join("")}
                  </div>
                </div>
              </div>
              <div class="chart-legend">
                ${slide.series
                  .map(
                    (series) => `
                      <div class="legend-item">
                        <span class="legend-dot ${series.colorClass}"></span>
                        <span>${escapeHtml(series.label)}</span>
                      </div>
                    `
                  )
                  .join("")}
              </div>
            `,
            "pattern-chart-card"
          ),
          280
        )}
      </div>
    </section>
  `;
}

function renderTimeline(slide) {
  return `
    <section class="slide slide-standard">
      ${reveal(labelPill(slide.topLabel), 20)}
      ${reveal(`<h2 class="section-title">${escapeHtml(slide.title)}</h2>`, 100)}
      ${reveal(accentLine(), 170)}

      <div class="timeline-layout">
        <div class="timeline-rail" aria-hidden="true"></div>
        <div class="timeline-stack">
          ${slide.steps
            .map(
              (step, index) => `
                <div class="timeline-row">
                  ${reveal(
                    `<div class="timeline-marker">${step.n}</div>`,
                    220 + index * 90
                  )}
                  ${reveal(
                    glassCard(
                      `
                        <div class="timeline-card-title">${escapeHtml(step.title)}</div>
                        <div class="timeline-card-copy">${escapeHtml(step.text)}</div>
                      `,
                      "timeline-card"
                    ),
                    260 + index * 90
                  )}
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderThanks(slide) {
  const dots = Array.from({ length: 28 }, (_, index) => {
    const left = ((index * 37) % 100) + 1;
    const top = ((index * 19) % 88) + 4;
    const delay = (index % 7) * 0.6;
    const duration = 5 + (index % 5);
    return `<span class="thanks-dot" style="left:${left}%;top:${top}%;--float-delay:${delay}s;--float-duration:${duration}s"></span>`;
  }).join("");

  return `
    <section class="slide slide-thanks">
      <div class="thanks-particles" aria-hidden="true">${dots}</div>
      <div class="thanks-inner">
        ${reveal(labelPill(slide.topLabel), 20)}
        ${reveal(`<h2 class="thanks-title">${escapeHtml(slide.title)}</h2>`, 120)}
        ${reveal(`<div class="thanks-subtitle">${escapeHtml(slide.subtitle)}</div>`, 250)}
        ${reveal(accentLine("short"), 320)}
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
    case "patterns":
      return renderPatterns(slide);
    case "timeline":
      return renderTimeline(slide);
    case "thanks":
      return renderThanks(slide);
    default:
      return "";
  }
}

function renderCurrentSlide() {
  const slide = slides[current];
  slideContent.classList.remove("slide-content-enter");
  slideContent.innerHTML = renderSlide(slide);
  currentSlideEl.textContent = String(current + 1);
  progressBar.style.width = `${((current + 1) / slides.length) * 100}%`;

  requestAnimationFrame(() => {
    slideContent.classList.add("slide-content-enter");
  });

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons({
      attrs: {
        "stroke-width": 1.9,
      },
    });
  }

  initPingPongVideos();
}

function initPingPongVideos() {
  const videos = slideContent.querySelectorAll(".condition-cube-video");

  videos.forEach((video) => {
    let reverseFrame = 0;
    let direction = 1;

    const cancelReverse = () => {
      if (reverseFrame) {
        cancelAnimationFrame(reverseFrame);
        reverseFrame = 0;
      }
    };

    const stepReverse = () => {
      if (video.paused && direction === 1) {
        cancelReverse();
        return;
      }

      if (direction !== -1) {
        cancelReverse();
        return;
      }

      if (video.currentTime <= 0.04) {
        video.currentTime = 0;
        direction = 1;
        cancelReverse();
        video.play().catch(() => {});
        return;
      }

      video.currentTime = Math.max(0, video.currentTime - 1 / 60);
      reverseFrame = requestAnimationFrame(stepReverse);
    };

    video.addEventListener("ended", () => {
      direction = -1;
      cancelReverse();
      reverseFrame = requestAnimationFrame(stepReverse);
    });

    video.addEventListener("play", () => {
      if (direction === 1) {
        cancelReverse();
      }
    });

    video.addEventListener("loadeddata", () => {
      video.play().catch(() => {});
    });
  });
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
