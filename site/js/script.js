// Portfolio interactions — CRT oscilloscope signal bench
// Signature interaction: detented knobs switch channels (sections),
// sweep freezes on trigger, traces arm/light per channel.

(function () {
  'use strict';

  // ── Case study data ──
  const CASES = [
    {
      id: 'concrete',
      title: 'Predicting concrete compressive strength',
      problem: 'Concrete mix design relies on lab testing that takes 28 days to cure. Engineers need strength estimates earlier to set mix proportions and approve pours without waiting weeks for cylinder results.',
      data: 'Public UCI dataset of 1,030 lab samples with mix ingredients (cement, slag, fly ash, water, superplasticizer, coarse aggregate, fine aggregate, age) and measured compressive strength in MPa.',
      method: 'Cleaned and validated in Python; trained a tuned neural network with time-aware evaluation; compared against linear regression and gradient boosting baselines.',
      result: 'Tuned neural network reaches R² 0.93, RMSE 4.6 MPa and MAE 2.9 MPa on held-out data — about 38% lower error than linear regression (7.4 MPa RMSE). Gradient boosting is essentially tied. On unseen recipes expect about 5 MPa RMSE. Age is the biggest driver, then binder, cement and water.',
      tools: 'Python · scikit-learn · neural networks',
      linkText: 'View full analysis',
      linkHref: 'projects/concrete-strength/notebook.html',
      linkIpynb: 'projects/concrete-strength/Concrete_Strength_Prediction_Case_Study.ipynb',
      status: 'complete'
    },
    {
      id: 'automobile',
      title: 'Automobile Clustering',
      problem: 'Group automobiles into meaningful segments based on technical and performance characteristics without predefined categories.',
      data: 'mtcars dataset — 32 automobile models, 11 numeric features (mpg, cylinders, displacement, horsepower, weight, etc.).',
      method: 'Agglomerative hierarchical clustering (Ward and average linkage, Euclidean distance) with StandardScaler preprocessing; compared 2–7 cluster solutions.',
      result: 'Ward clustering with 3 clusters, silhouette score 0.416. Clusters: 15 fuel-efficient light vehicles (24.65 MPG), 12 heavy 8-cylinder vehicles (15.05 MPG), 5 high-performance vehicles (198.80 HP). PCA: 84.17% variance in 2 components.',
      tools: 'Python · SciPy · scikit-learn · Pandas · Matplotlib · Seaborn',
      linkText: 'View full analysis',
      linkHref: 'projects/automobile-clustering/notebook.html',
      linkIpynb: 'projects/automobile-clustering/Automobile_Hierarchical_Clustering_Portfolio.ipynb',
      status: 'complete'
    }
  ];

  // ── Elements ──
  const knobs = document.querySelectorAll('.knob');
  const sweep = document.getElementById('sweep');
  const traces = document.querySelectorAll('.trace');
  const readoutVal = document.getElementById('readout-val');
  const sections = document.querySelectorAll('.page-section');
  const caseGrid = document.getElementById('case-grid');
  const caseDetailList = document.getElementById('case-detail-list');

  // ── Sweep: continuous phosphor scan ──
  let sweepPaused = false;
  function toggleSweep() {
    sweepPaused = !sweepPaused;
    sweep.style.animationPlayState = sweepPaused ? 'paused' : 'running';
  }

  // ── Knobs: detented channel selection ──
  function activateKnob(targetSection) {
    knobs.forEach(k => {
      const active = k.dataset.section === targetSection;
      k.classList.toggle('active', active);
      k.setAttribute('aria-pressed', active);
    });
    sections.forEach(s => {
      const show = s.id === targetSection;
      s.classList.toggle('hidden', !show);
      s.classList.toggle('visible', show);
    });
    // Arm the trace matching the selected case
    traces.forEach(t => {
      const match = t.dataset.case === getCaseId(targetSection);
      t.classList.toggle('active', match);
      if (match) t.style.color = '#0f0';
      else t.style.color = '#8fff8f';
    });
    // Jitter the readout value on channel change
    if (readoutVal) {
      readoutVal.textContent = Math.floor(70 + Math.random() * 30) + '%';
    }
  }

  function getCaseId(sectionId) {
    const map = { home: 'concrete', cases: 'automobile', about: 'none', contact: 'none' };
    return map[sectionId] || 'concrete';
  }

  knobs.forEach(knob => {
    knob.addEventListener('click', () => {
      activateKnob(knob.dataset.section);
      toggleSweep(); // freeze sweep on new channel, like a triggered oscilloscope
      setTimeout(toggleSweep, 1200); // release after trigger hold
    });
    knob.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        knob.click();
      }
    });
    knob.setAttribute('tabindex', '0');
    knob.setAttribute('role', 'button');
    knob.setAttribute('aria-pressed', knob.classList.contains('active'));
  });

  // ── Case study injection ──
  function renderCases() {
    if (!caseGrid) return;
    caseGrid.innerHTML = CASES.map(c => {
      const comingSoon = c.status === 'coming soon';
      return `
        <article class="case-card${comingSoon ? ' coming-soon' : ''}">
          <h3>${c.title}</h3>
          ${!comingSoon ? `<p><strong>Problem:</strong> ${c.problem}</p>
          <p><strong>Data:</strong> ${c.data}</p>
          <p><strong>Method:</strong> ${c.method}</p>
          <p><strong>Result:</strong> ${c.result}</p>` : ''}
          <div class="case-meta">${c.tools} &nbsp;·&nbsp; <em>${c.status}</em></div>
          ${!comingSoon ? `<p class="case-link"><a href="${c.linkHref}">${c.linkText}</a> &nbsp;·&nbsp; <a href="${c.linkIpynb}">Jupyter notebook (.ipynb)</a></p>` : ''}
        </article>
      `;
    }).join('');

    if (!caseDetailList) return;
    caseDetailList.innerHTML = CASES.map(c => {
      const comingSoon = c.status === 'coming soon';
      return `
        <article class="case-card${comingSoon ? ' coming-soon' : ''}">
          <h3>${c.title}</h3>
          ${!comingSoon ? `<p><strong>Problem:</strong> ${c.problem}</p>
          <p><strong>Data:</strong> ${c.data}</p>
          <p><strong>Method:</strong> ${c.method}</p>
          <p><strong>Result:</strong> ${c.result}</p>` : ''}
          <div class="case-meta">${c.tools} &nbsp;·&nbsp; <em>${c.status}</em></div>
          ${!comingSoon ? `<p class="case-link"><a href="${c.linkHref}">${c.linkText}</a> &nbsp;·&nbsp; <a href="${c.linkIpynb}">Jupyter notebook (.ipynb)</a></p>` : ''}
        </article>
      `;
    }).join('');
  }

  // ── Intersection Observer: fade in sections as they enter ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(s => observer.observe(s));

  // ── Init ──
  document.addEventListener('DOMContentLoaded', () => {
    renderCases();
    activateKnob('home');
  });
})();
