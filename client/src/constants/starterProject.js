/**
 * Default starter project loaded locally without API requests.
 * Instant, responsive, and ready to be run in the sandbox.
 */

export const DEFAULT_STARTER_PROJECT = {
  name: 'voxel-cyber-demo',
  summary: 'Projet de démonstration interactif Voxel Forge avec dashboard réactif et animation Canvas.',
  architecture: `Application Web moderne intégrant :
- index.html : Structure de la page avec barre d'état et commandes interactives.
- styles.css : Thème sombre néon cyberpunk responsive.
- app.js : Logique applicative avec compteurs, particules et rendu temps réel.
- README.md : Guide d'utilisation et commandes de lancement.`,
  techStack: {
    type: 'Site web / Démo interactive',
    language: 'JavaScript / HTML5 / CSS3',
    framework: 'Vanilla ES6+',
  },
  files: [
    {
      path: 'index.html',
      language: 'html',
      content: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Voxel Forge — Studio IA</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="app-card">
    <header class="card-header">
      <div class="badge">Voxel Forge v2.0</div>
      <h1>Studio de Création IA</h1>
      <p class="subtitle">Votre environnement de génération de code et de jeux en direct.</p>
    </header>

    <div class="stats-grid">
      <div class="stat-box">
        <span class="stat-num" id="clickCount">0</span>
        <span class="stat-label">Interactions</span>
      </div>
      <div class="stat-box">
        <span class="stat-num" id="particleCount">0</span>
        <span class="stat-label">Particules</span>
      </div>
      <div class="stat-box">
        <span class="stat-num" id="fpsDisplay">60</span>
        <span class="stat-label">FPS</span>
      </div>
    </div>

    <div class="actions">
      <button id="actionBtn" class="btn btn-primary">Générer Particules</button>
      <button id="resetBtn" class="btn btn-secondary">Réinitialiser</button>
    </div>

    <canvas id="stage" width="600" height="240"></canvas>

    <footer class="card-footer">
      <span>Prêt pour vos créations • Cliquez sur "Générer un Projet" pour démarrer</span>
    </footer>
  </div>

  <script type="module" src="app.js"></script>
</body>
</html>`,
    },
    {
      path: 'styles.css',
      language: 'css',
      content: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background: radial-gradient(circle at top, #131b2e 0%, #080a12 100%);
  color: #e6edf3;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.app-card {
  background: rgba(22, 27, 34, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(56, 189, 248, 0.2);
  border-radius: 14px;
  padding: 24px;
  width: 100%;
  max-width: 640px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(56, 189, 248, 0.1);
}

.card-header {
  text-align: center;
  margin-bottom: 20px;
}

.badge {
  display: inline-block;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #38bdf8;
  background: rgba(56, 189, 248, 0.1);
  border: 1px solid rgba(56, 189, 248, 0.3);
  border-radius: 20px;
  margin-bottom: 8px;
}

h1 {
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 6px;
}

.subtitle {
  font-size: 13px;
  color: #8b949e;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 16px;
}

.stat-box {
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 12px;
  text-align: center;
}

.stat-num {
  display: block;
  font-size: 20px;
  font-weight: 700;
  color: #58a6ff;
  font-family: monospace;
}

.stat-label {
  font-size: 11px;
  color: #8b949e;
}

.actions {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
}

.btn {
  flex: 1;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.btn-primary {
  background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
  color: #fff;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
  box-shadow: 0 0 15px rgba(56, 189, 248, 0.4);
}

.btn-secondary {
  background: #21262d;
  color: #c9d1d9;
  border: 1px solid #30363d;
}

.btn-secondary:hover {
  background: #30363d;
}

#stage {
  width: 100%;
  height: 200px;
  background: #090d16;
  border: 1px solid #30363d;
  border-radius: 8px;
  display: block;
}

.card-footer {
  margin-top: 14px;
  text-align: center;
  font-size: 11px;
  color: #6e7681;
}`,
    },
    {
      path: 'app.js',
      language: 'javascript',
      content: `const canvas = document.getElementById('stage');
const ctx = canvas.getContext('2d');
const clickDisplay = document.getElementById('clickCount');
const particleDisplay = document.getElementById('particleCount');
const fpsDisplay = document.getElementById('fpsDisplay');
const actionBtn = document.getElementById('actionBtn');
const resetBtn = document.getElementById('resetBtn');

let clicks = 0;
const particles = [];
let lastFrameTime = performance.now();
let frameCount = 0;
let lastFpsUpdate = performance.now();

class Particle {
  constructor(x, y) {
    this.x = x || canvas.width / 2;
    this.y = y || canvas.height / 2;
    this.vx = (Math.random() - 0.5) * 6;
    this.vy = (Math.random() - 0.5) * 6;
    this.radius = Math.random() * 3 + 2;
    this.hue = Math.random() * 60 + 190;
    this.alpha = 1;
    this.decay = Math.random() * 0.015 + 0.005;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= this.decay;

    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.alpha);
    ctx.fillStyle = \`hsl(\${this.hue}, 90%, 60%)\`;
    ctx.shadowBlur = 10;
    ctx.shadowColor = \`hsl(\${this.hue}, 90%, 60%)\`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

function spawnParticles(count = 20, x, y) {
  for (let i = 0; i < count; i++) {
    particles.push(new Particle(x, y));
  }
}

actionBtn.addEventListener('click', () => {
  clicks++;
  clickDisplay.textContent = clicks;
  spawnParticles(25);
});

resetBtn.addEventListener('click', () => {
  clicks = 0;
  particles.length = 0;
  clickDisplay.textContent = '0';
  particleDisplay.textContent = '0';
});

canvas.addEventListener('pointerdown', (e) => {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const x = (e.clientX - rect.left) * scaleX;
  const y = (e.clientY - rect.top) * scaleY;

  clicks++;
  clickDisplay.textContent = clicks;
  spawnParticles(15, x, y);
});

// Initial particles
spawnParticles(30);

function loop(currentTime) {
  frameCount++;
  if (currentTime - lastFpsUpdate >= 500) {
    const fps = Math.round((frameCount * 1000) / (currentTime - lastFpsUpdate));
    fpsDisplay.textContent = fps;
    frameCount = 0;
    lastFpsUpdate = currentTime;
  }

  ctx.fillStyle = 'rgba(9, 13, 22, 0.2)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.update();
    p.draw();
    if (p.alpha <= 0) {
      particles.splice(i, 1);
    }
  }

  particleDisplay.textContent = particles.length;

  // Auto spawn occasional particles
  if (Math.random() < 0.2 && particles.length < 50) {
    spawnParticles(1);
  }

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
console.log('Voxel Forge Demo initialisé avec succès !');`,
    },
    {
      path: 'README.md',
      language: 'markdown',
      content: `# Voxel Forge — Démo Interactive

Ce projet est la démonstration initiale de **Voxel Forge**.

## Fonctionnalités
- Rendu Canvas fluide avec système de particules dynamiques.
- Compteur réactif d'interactions et de FPS en temps réel.
- Entièrement exécutable directement en cliquant sur **"Run"** dans la barre supérieure !

## Pour créer votre propre projet
Cliquez sur le bouton **"Générer un Projet"** ou **"Nouveau Projet"** pour décrire le jeu ou le site web de votre choix !`,
    },
  ],
};
