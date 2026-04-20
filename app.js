/* ============================================================
   KevinScale — Application Logic
   ============================================================ */

(function () {
  "use strict";

  // ── STATE ──────────────────────────────────────────────────
  const state = {
    current: 0,          // index question courante
    answers: {},         // { questionId: value (0-4) }
    shuffled: [],        // questions mélangées
  };

  // Scores par axe : valeur entre -100 (pôle droit) et +100 (pôle gauche)
  const axisScores = {};

  // ── INIT ───────────────────────────────────────────────────
  function init() {
    buildIntro();
    state.shuffled = shuffleQuestions([...QUESTIONS]);
    document.getElementById("btn-start").addEventListener("click", startQuiz);
  }

  // ── BUILD INTRO ────────────────────────────────────────────
  function buildIntro() {
    const list = document.getElementById("axes-preview-list");
    if (!list) return;
    AXES.forEach((axis) => {
      const li = document.createElement("div");
      li.className = "axis-preview-row";
      li.innerHTML = `
        <span class="axis-icon">${axis.icon}</span>
        <span class="axis-preview-name">${axis.label}</span>
        <span class="axis-preview-poles">
          <span class="pole-tag">${axis.left.label}</span>
          <span>↔</span>
          <span class="pole-tag">${axis.right.label}</span>
        </span>
      `;
      list.appendChild(li);
    });
  }

  // ── SHUFFLE ────────────────────────────────────────────────
  function shuffleQuestions(arr) {
    // Regroup by axis, shuffle within group, then interleave
    const byAxis = {};
    arr.forEach((q) => {
      const axisId = q.effect[0].axis;
      if (!byAxis[axisId]) byAxis[axisId] = [];
      byAxis[axisId].push(q);
    });

    // Shuffle each group
    Object.values(byAxis).forEach((group) => {
      for (let i = group.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [group[i], group[j]] = [group[j], group[i]];
      }
    });

    // Round-robin interleave
    const keys = Object.keys(byAxis);
    const result = [];
    let round = 0;
    while (result.length < arr.length) {
      keys.forEach((k) => {
        if (byAxis[k][round]) result.push(byAxis[k][round]);
      });
      round++;
    }
    return result;
  }

  // ── START QUIZ ─────────────────────────────────────────────
  function startQuiz() {
    showScreen("screen-quiz");
    buildSidebar();
    renderQuestion(0);
  }

  // ── SIDEBAR ────────────────────────────────────────────────
  function buildSidebar() {
    const nav = document.getElementById("axis-nav");
    if (!nav) return;
    nav.innerHTML = "";
    AXES.forEach((axis) => {
      const li = document.createElement("li");
      li.className = "axis-nav-item";
      li.id = `nav-${axis.id}`;
      li.innerHTML = `
        <span class="axis-nav-dot"></span>
        <span class="axis-icon-sm">${axis.icon}</span>
        ${axis.label}
      `;
      nav.appendChild(li);
    });
  }

  function updateSidebar() {
    const currentQuestion = state.shuffled[state.current];
    if (!currentQuestion) return;
    const currentAxisId = currentQuestion.effect[0].axis;

    // Determine answered axes
    const answeredAxisIds = new Set();
    state.shuffled.forEach((q, i) => {
      if (i < state.current && state.answers[q.id] !== undefined) {
        q.effect.forEach((e) => answeredAxisIds.add(e.axis));
      }
    });

    AXES.forEach((axis) => {
      const item = document.getElementById(`nav-${axis.id}`);
      if (!item) return;
      item.className = "axis-nav-item";
      if (answeredAxisIds.has(axis.id)) item.classList.add("done");
      if (axis.id === currentAxisId) item.classList.add("active");
    });
  }

  // ── RENDER QUESTION ────────────────────────────────────────
  function renderQuestion(index, direction = "forward") {
    const q = state.shuffled[index];
    if (!q) return;

    const axisId = q.effect[0].axis;
    const axis = AXES.find((a) => a.id === axisId);

    // Update progress
    const pct = Math.round((index / state.shuffled.length) * 100);
    document.querySelectorAll(".progress-fill").forEach(
      (el) => (el.style.width = pct + "%")
    );
    document.querySelectorAll(".progress-count").forEach(
      (el) => (el.textContent = `${index + 1} / ${state.shuffled.length}`)
    );

    // Axis badge
    const badge = document.getElementById("q-axis-badge");
    if (badge) badge.innerHTML = `${axis.icon} ${axis.label.toUpperCase()}`;

    // Question number
    const num = document.getElementById("q-number");
    if (num) num.textContent = `${index + 1} / ${state.shuffled.length}`;

    // Question text — animate
    const textEl = document.getElementById("q-text");
    if (textEl) {
      textEl.classList.remove("slide-enter");
      void textEl.offsetWidth;
      textEl.textContent = q.text;
      textEl.classList.add("slide-enter");
    }

    // Likert buttons
    const grid = document.getElementById("likert-grid");
    if (grid) {
      const labels = [
        { icon: "✅", text: "Tout à fait\nd'accord" },
        { icon: "👍", text: "Plutôt\nd'accord" },
        { icon: "🤷", text: "Sans\nopinion" },
        { icon: "👎", text: "Plutôt pas\nd'accord" },
        { icon: "❌", text: "Pas du tout\nd'accord" },
      ];
      grid.innerHTML = "";
      labels.forEach((lbl, i) => {
        const btn = document.createElement("button");
        btn.className = "likert-btn";
        btn.setAttribute("aria-label", lbl.text.replace("\n", " "));
        if (state.answers[q.id] === i) btn.classList.add("selected");
        btn.innerHTML = `
          <span class="likert-icon">${lbl.icon}</span>
          <span class="likert-label">${lbl.text.replace("\n", "<br>")}</span>
        `;
        btn.addEventListener("click", () => selectAnswer(q.id, i));
        grid.appendChild(btn);
      });
    }

    // Nav buttons
    const prevBtn = document.getElementById("btn-prev");
    const nextBtn = document.getElementById("btn-next");
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) {
      nextBtn.disabled = state.answers[q.id] === undefined;
      nextBtn.textContent =
        index === state.shuffled.length - 1
          ? "Voir mes résultats →"
          : "Suivant →";
    }

    updateSidebar();
  }

  // ── SELECT ANSWER ──────────────────────────────────────────
  function selectAnswer(questionId, value) {
    state.answers[questionId] = value;

    // Highlight selected
    document.querySelectorAll(".likert-btn").forEach((btn, i) => {
      btn.classList.toggle("selected", i === value);
    });

    // Enable next
    const nextBtn = document.getElementById("btn-next");
    if (nextBtn) nextBtn.disabled = false;
  }

  // ── NAVIGATION ─────────────────────────────────────────────
  function nextQuestion() {
    const q = state.shuffled[state.current];
    if (state.answers[q.id] === undefined) return;

    if (state.current >= state.shuffled.length - 1) {
      computeResults();
      showResults();
    } else {
      state.current++;
      renderQuestion(state.current, "forward");
    }
  }

  function prevQuestion() {
    if (state.current > 0) {
      state.current--;
      renderQuestion(state.current, "back");
    }
  }

  // ── COMPUTE RESULTS ────────────────────────────────────────
  /**
   * Pour chaque réponse :
   *   Likert value 0 = Tout à fait d'accord  → score = +2 (si agree:true) ou -2 (si agree:false)
   *   Likert value 1 = Plutôt d'accord       → score = +1 / -1
   *   Likert value 2 = Neutre                → score = 0
   *   Likert value 3 = Plutôt pas d'accord   → score = -1 / +1
   *   Likert value 4 = Pas du tout d'accord  → score = -2 / +2
   *
   * Ensuite on normalise en [0, 100] où :
   *   100 = identique à Kévin
   *   0   = exact opposé de Kévin
   */
  function computeResults() {
    // Raw scores per axis (accumulate deltas)
    const raw = {}; // { axisId: { sum: X, max: Y } }
    AXES.forEach((a) => (raw[a.id] = { sum: 0, max: 0 }));

    const WEIGHTS = [2, 1, 0, 1, 2]; // distance from neutral

    state.shuffled.forEach((q) => {
      const val = state.answers[q.id];
      if (val === undefined) return;
      const weight = WEIGHTS[val];
      // Direction: 0-1 = agree, 3-4 = disagree
      const direction = val <= 1 ? 1 : val >= 3 ? -1 : 0;
      const delta = weight * direction;

      q.effect.forEach(({ axis, agree }) => {
        // agree:true → positive delta means kevin-aligned
        // agree:false → positive delta means anti-kevin
        const contribution = agree ? delta : -delta;
        raw[axis].sum += contribution;
        raw[axis].max += 2; // max possible per question per axis
      });
    });

    // Convert raw to Kevin-compatibility %
    AXES.forEach((axis) => {
      const { sum, max } = raw[axis.id];
      if (max === 0) {
        axisScores[axis.id] = 50; // no data → neutral
        return;
      }
      // sum ∈ [-max, +max]
      // +max → 100% kevin, -max → 0% kevin, 0 → 50%
      axisScores[axis.id] = Math.round(((sum + max) / (2 * max)) * 100);
    });
  }

  // ── SHOW RESULTS ───────────────────────────────────────────
  function showResults() {
    showScreen("screen-results");

    // Global score (average over all axes)
    const global = Math.round(
      AXES.reduce((sum, a) => sum + axisScores[a.id], 0) / AXES.length
    );

    // Animate global score counter
    const scoreEl = document.getElementById("global-score");
    if (scoreEl) {
      let count = 0;
      const target = global;
      const interval = setInterval(() => {
        count = Math.min(count + 3, target);
        scoreEl.textContent = count;
        if (count >= target) clearInterval(interval);
      }, 20);
    }

    // Verdict
    const verdict = VERDICTS.find((v) => global >= v.min) || VERDICTS[VERDICTS.length - 1];
    const titleEl = document.getElementById("results-title");
    const verdictEl = document.getElementById("results-verdict");
    if (titleEl) titleEl.textContent = verdict.emoji + " " + verdict.title;
    if (verdictEl) verdictEl.textContent = verdict.text;

    // Build axes grid
    const grid = document.getElementById("results-grid");
    if (!grid) return;
    grid.innerHTML = "";

    AXES.forEach((axis, i) => {
      const score = axisScores[axis.id];
      const card = buildAxisCard(axis, score, i);
      grid.appendChild(card);
    });

    // Staggered reveal
    setTimeout(() => {
      document.querySelectorAll(".axis-result-card").forEach((card, i) => {
        setTimeout(() => {
          card.classList.add("revealed");
          // Animate user marker
          const marker = card.querySelector(".user-marker");
          if (marker) {
            const userPct = axisScores[card.dataset.axisId];
            marker.style.left = userPct + "%";
          }
        }, i * 80);
      });
    }, 400);
  }

  // ── BUILD AXIS CARD ────────────────────────────────────────
  function buildAxisCard(axis, score, index) {
    const card = document.createElement("div");
    card.className = "axis-result-card";
    card.dataset.axisId = axis.id;
    card.style.transitionDelay = (index * 0.06) + "s";

    const comment = getAxisComment(score, axis);
    const kevinPct = axis.kevinPosition; // Kevin's position on spectrum

    card.innerHTML = `
      <div class="arc-top">
        <div class="arc-axis-name">
          <span class="arc-icon">${axis.icon}</span>
          <span class="arc-name">${axis.label.toUpperCase()}</span>
        </div>
        <div class="arc-score">${score}<span style="font-size:.8em;font-weight:400;color:var(--text-3)">%</span></div>
      </div>

      <div class="axis-bar-container">
        <div class="axis-spectrum"
             style="--left-color:${axis.left.color};--right-color:${axis.right.color}">
          <div class="kevin-marker" style="left:${kevinPct}%"></div>
          <div class="user-marker" style="left:50%"></div>
        </div>
        <div class="axis-poles">
          <span style="color:${axis.left.color}">${axis.left.label}</span>
          <span style="color:${axis.right.color}">${axis.right.label}</span>
        </div>
      </div>

      <div class="arc-comment">${comment}</div>
    `;

    // Set user marker to actual score after card is appended (for animation)
    // Defer the actual position set to showResults's stagger
    const marker = card.querySelector(".user-marker");
    // Start at 50%, will be moved by stagger
    marker.style.left = "50%";

    return card;
  }

  // ── AXIS COMMENT ───────────────────────────────────────────
  function getAxisComment(score, axis) {
    const kevin = axis.kevinPosition;
    const diff = Math.abs(score - kevin);
    const userSide = score < 50 ? axis.left.label : axis.right.label;
    const kevinSide = kevin < 50 ? axis.left.label : axis.right.label;

    if (diff <= 10)
      return `Tu es pratiquement au même endroit que Kévin sur cet axe — vous êtes tous les deux clairement ${kevinSide}.`;
    if (diff <= 25)
      return `Proche de Kévin ici, même si vous ne vous situez pas exactement pareil. Consensus global.`;
    if (diff <= 40)
      return `Vous divergez sur cet axe. Tu penches vers le ${userSide}, lui vers le ${kevinSide}.`;
    if (diff <= 60)
      return `Désaccord assez net. Tu es du côté ${userSide}, Kévin est clairement ${kevinSide}.`;
    return `Aux antipodes sur cet axe. Toi : ${userSide}. Kévin : ${kevinSide}. Évite d'en parler ensemble.`;
  }

  // ── SHOW SCREEN ────────────────────────────────────────────
  function showScreen(id) {
    document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
    const el = document.getElementById(id);
    if (el) el.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ── RESET ──────────────────────────────────────────────────
  function resetQuiz() {
    state.current = 0;
    state.answers = {};
    state.shuffled = shuffleQuestions([...QUESTIONS]);
    AXES.forEach((a) => (axisScores[a.id] = 0));
    showScreen("screen-intro");
  }

  // ── EXPOSE ─────────────────────────────────────────────────
  window.KS = {
    start: startQuiz,
    next: nextQuestion,
    prev: prevQuestion,
    reset: resetQuiz,
    init,
  };

  document.addEventListener("DOMContentLoaded", init);
})();
