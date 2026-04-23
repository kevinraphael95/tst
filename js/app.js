/* ============================================================
   KevinScale — Application Logic
   ============================================================ */

(function () {
  "use strict";

  // ── STATE ──────────────────────────────────────────────────
  const state = {
    current: 0,
    answers: {},
    shuffled: [],
  };

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
    const byAxis = {};
    arr.forEach((q) => {
      const axisId = q.effect[0].axis;
      if (!byAxis[axisId]) byAxis[axisId] = [];
      byAxis[axisId].push(q);
    });
    Object.values(byAxis).forEach((group) => {
      for (let i = group.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [group[i], group[j]] = [group[j], group[i]];
      }
    });
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
  // Boutons style PolitiScales : empilés verticalement, colorés
  const ANSWER_OPTIONS = [
    { text: "Absolument d'accord",   cls: "ps-agree-2"   },
    { text: "Plutôt d'accord",       cls: "ps-agree-1"   },
    { text: "Neutre ou hésitant",    cls: "ps-neutral"   },
    { text: "Plutôt pas d'accord",   cls: "ps-disagree-1"},
    { text: "Pas du tout d'accord",  cls: "ps-disagree-2"},
  ];

  function renderQuestion(index) {
    const q = state.shuffled[index];
    if (!q) return;

    const axisId = q.effect[0].axis;
    const axis = AXES.find((a) => a.id === axisId);

    // Progress
    const pct = Math.round((index / state.shuffled.length) * 100);
    document.querySelectorAll(".progress-fill").forEach(
      (el) => (el.style.width = pct + "%")
    );
    document.querySelectorAll(".progress-count").forEach(
      (el) => (el.textContent = `${index + 1} / ${state.shuffled.length}`)
    );

    const badge = document.getElementById("q-axis-badge");
    if (badge) badge.innerHTML = `${axis.icon} ${axis.label.toUpperCase()}`;

    const num = document.getElementById("q-number");
    if (num) num.textContent = `${index + 1} / ${state.shuffled.length}`;

    const textEl = document.getElementById("q-text");
    if (textEl) {
      textEl.classList.remove("slide-enter");
      void textEl.offsetWidth;
      textEl.textContent = q.text;
      textEl.classList.add("slide-enter");
    }

    // Boutons empilés style PolitiScales
    const grid = document.getElementById("likert-grid");
    if (grid) {
      grid.innerHTML = "";
      ANSWER_OPTIONS.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.className = `ps-btn ${opt.cls}`;
        if (state.answers[q.id] === i) btn.classList.add("selected");
        btn.textContent = opt.text;
        btn.addEventListener("click", () => selectAnswer(q.id, i));
        grid.appendChild(btn);
      });
    }

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

    document.querySelectorAll(".ps-btn").forEach((btn, i) => {
      btn.classList.toggle("selected", i === value);
    });

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
  function computeResults() {
    const raw = {};
    AXES.forEach((a) => (raw[a.id] = { sum: 0, max: 0 }));

    const WEIGHTS = [2, 1, 0, 1, 2];

    state.shuffled.forEach((q) => {
      const val = state.answers[q.id];
      if (val === undefined) return;
      const weight = WEIGHTS[val];
      const direction = val <= 1 ? 1 : val >= 3 ? -1 : 0;
      const delta = weight * direction;

      q.effect.forEach(({ axis, agree }) => {
        const contribution = agree ? delta : -delta;
        raw[axis].sum += contribution;
        raw[axis].max += 2;
      });
    });

    AXES.forEach((axis) => {
      const { sum, max } = raw[axis.id];
      if (max === 0) {
        axisScores[axis.id] = 50;
        return;
      }
      axisScores[axis.id] = Math.round(((sum + max) / (2 * max)) * 100);
    });
  }

  // ── SHOW RESULTS ───────────────────────────────────────────
  function showResults() {
    showScreen("screen-results");

    const global = Math.round(
      AXES.reduce((sum, a) => sum + axisScores[a.id], 0) / AXES.length
    );

    const scoreEl = document.getElementById("global-score");
    if (scoreEl) {
      let count = 0;
      const interval = setInterval(() => {
        count = Math.min(count + 3, global);
        scoreEl.textContent = count;
        if (count >= global) clearInterval(interval);
      }, 20);
    }

    const verdict = VERDICTS.find((v) => global >= v.min) || VERDICTS[VERDICTS.length - 1];
    const titleEl = document.getElementById("results-title");
    const verdictEl = document.getElementById("results-verdict");
    if (titleEl) titleEl.textContent = verdict.emoji + " " + verdict.title;
    if (verdictEl) verdictEl.textContent = verdict.text;

    const grid = document.getElementById("results-grid");
    if (!grid) return;
    grid.innerHTML = "";

    AXES.forEach((axis, i) => {
      const score = axisScores[axis.id];
      const card = buildAxisCard(axis, score, i);
      grid.appendChild(card);
    });

    setTimeout(() => {
      document.querySelectorAll(".axis-result-card").forEach((card, i) => {
        setTimeout(() => {
          card.classList.add("revealed");
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
    const kevinPct = axis.kevinPosition;

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

  // ── DOWNLOAD RESULTS AS IMAGE ──────────────────────────────
  window.downloadResultsImage = function () {
    const global = Math.round(
      AXES.reduce((sum, a) => sum + axisScores[a.id], 0) / AXES.length
    );
    const verdict = VERDICTS.find((v) => global >= v.min) || VERDICTS[VERDICTS.length - 1];

    const W = 900, H = 640;
    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");

    // Background
    ctx.fillStyle = "#f7f5f0";
    ctx.fillRect(0, 0, W, H);

    // Top bar
    ctx.fillStyle = "#1a1714";
    ctx.fillRect(0, 0, W, 90);

    // Logo text
    ctx.fillStyle = "#c0392b";
    ctx.fillRect(32, 24, 42, 42);
    ctx.fillStyle = "#fff";
    ctx.font = "bold 26px Georgia";
    ctx.textAlign = "center";
    ctx.fillText("K", 53, 52);

    ctx.fillStyle = "#fff";
    ctx.font = "bold 28px Georgia";
    ctx.textAlign = "left";
    ctx.fillText("KevinScale", 84, 53);

    // Global score box (top-right)
    ctx.fillStyle = "#c0392b";
    ctx.fillRect(W - 190, 0, 190, 90);
    ctx.fillStyle = "#fff";
    ctx.font = "bold 48px Georgia";
    ctx.textAlign = "center";
    ctx.fillText(global + "%", W - 95, 56);
    ctx.font = "13px monospace";
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.fillText("COMME KÉVIN", W - 95, 78);

    // Verdict
    ctx.fillStyle = "#1a1714";
    ctx.font = "bold 30px Georgia";
    ctx.textAlign = "left";
    ctx.fillText(verdict.emoji + " " + verdict.title, 32, 138);

    ctx.fillStyle = "#5a5650";
    ctx.font = "16px Georgia";
    const words = verdict.text.split(" ");
    let line = "", x = 32, y = 166;
    words.forEach((w) => {
      const test = line + w + " ";
      if (ctx.measureText(test).width > W - 220 && line) {
        ctx.fillText(line, x, y);
        line = w + " ";
        y += 24;
      } else {
        line = test;
      }
    });
    ctx.fillText(line, x, y);

    // Axes grid (3 cols × 4 rows roughly)
    const COLS = 3;
    const padX = 28, padY = 220;
    const cellW = (W - padX * 2) / COLS;
    const cellH = 96;

    AXES.forEach((axis, i) => {
      const col = i % COLS;
      const row = Math.floor(i / COLS);
      const cx = padX + col * cellW;
      const cy = padY + row * cellH;
      const score = axisScores[axis.id] ?? 50;

      // Card bg
      ctx.fillStyle = "#ffffff";
      ctx.strokeStyle = "#d8d3c8";
      ctx.lineWidth = 1;
      roundRect(ctx, cx + 4, cy + 4, cellW - 12, cellH - 12, 3);
      ctx.fill();
      ctx.stroke();

      // Icon + name
      ctx.font = "14px monospace";
      ctx.fillStyle = "#9a948c";
      ctx.textAlign = "left";
      ctx.fillText(axis.icon + "  " + axis.label.toUpperCase(), cx + 14, cy + 26);

      // Score
      ctx.font = "bold 22px Georgia";
      ctx.fillStyle = "#1a1714";
      ctx.textAlign = "right";
      ctx.fillText(score + "%", cx + cellW - 16, cy + 26);

      // Bar
      const bx = cx + 14, by = cy + 38, bw = cellW - 28, bh = 8;
      const grad = ctx.createLinearGradient(bx, 0, bx + bw, 0);
      grad.addColorStop(0, axis.left.color);
      grad.addColorStop(0.5, "#e8e3db");
      grad.addColorStop(1, axis.right.color);
      ctx.fillStyle = grad;
      roundRect(ctx, bx, by, bw, bh, 4);
      ctx.fill();

      // Kevin marker
      const kx = bx + (axis.kevinPosition / 100) * bw;
      ctx.fillStyle = "#1a3a5c";
      ctx.fillRect(kx - 1, by - 2, 2, bh + 4);

      // User marker
      const ux = bx + (score / 100) * bw;
      ctx.fillStyle = "#c0392b";
      ctx.beginPath();
      ctx.arc(ux, by + bh / 2, 7, 0, Math.PI * 2);
      ctx.fill();

      // Poles
      ctx.font = "9px monospace";
      ctx.textAlign = "left";
      ctx.fillStyle = axis.left.color;
      ctx.fillText(axis.left.label, bx, by + bh + 18);
      ctx.textAlign = "right";
      ctx.fillStyle = axis.right.color;
      ctx.fillText(axis.right.label, bx + bw, by + bh + 18);
    });

    // Footer
    ctx.fillStyle = "#9a948c";
    ctx.font = "11px monospace";
    ctx.textAlign = "center";
    ctx.fillText("kevinscale · Résultats générés localement · Aucune donnée collectée", W / 2, H - 18);

    // Download
    const link = document.createElement("a");
    link.download = "kevinscale-resultats.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  // ── HELPER: roundRect ──────────────────────────────────────
  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
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
