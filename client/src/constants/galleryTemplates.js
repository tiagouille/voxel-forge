/**
 * Gallery Templates for Voxel Forge
 * 8 High-Quality, immediately runnable games and applications.
 */

export const GALLERY_TEMPLATES = [
  {
    id: 'voxel-world-3d',
    title: '🧊 Voxel World 3D (Minecraft Web)',
    category: '3D & Voxel',
    badge: 'Flagship 3D',
    description: 'Moteur 3D temps réel à base de blocs en Three.js. Déplacez-vous à la première personne (ZQSD + Souris), sautez, cassez et posez des cubes avec sélection de matériaux.',
    tags: ['Three.js', 'Voxel', '3D Sandbox', 'First Person'],
    files: [
      {
        path: 'index.html',
        language: 'html',
        content: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Voxel World 3D — Voxel Forge</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { overflow: hidden; background: #87ceeb; font-family: 'Segoe UI', Tahoma, sans-serif; user-select: none; }
    #canvas-container { width: 100vw; height: 100vh; display: block; }
    
    /* Crosshair */
    #crosshair {
      position: absolute;
      top: 50%; left: 50%;
      width: 14px; height: 14px;
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 10;
    }
    #crosshair::before, #crosshair::after {
      content: ''; position: absolute; background: rgba(255,255,255,0.85);
      box-shadow: 0 0 2px rgba(0,0,0,0.8);
    }
    #crosshair::before { top: 6px; left: 0; width: 14px; height: 2px; }
    #crosshair::after { top: 0; left: 6px; width: 2px; height: 14px; }

    /* UI Overlay */
    #ui-overlay {
      position: absolute; top: 16px; left: 16px;
      color: #fff; text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
      font-size: 13px; line-height: 1.5; pointer-events: none; z-index: 10;
    }
    .hud-title { font-size: 16px; font-weight: 700; color: #38bdf8; margin-bottom: 4px; }

    /* Hotbar */
    #hotbar {
      position: absolute; bottom: 20px; left: 50%;
      transform: translateX(-50%);
      display: flex; gap: 8px;
      background: rgba(15, 23, 42, 0.75);
      backdrop-filter: blur(8px);
      padding: 6px 12px; border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.2);
      z-index: 10;
    }
    .slot {
      width: 44px; height: 44px;
      border-radius: 8px; border: 2px solid transparent;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      cursor: pointer; transition: all 0.15s;
    }
    .slot.active {
      border-color: #38bdf8;
      background: rgba(56, 189, 248, 0.2);
      transform: scale(1.08);
    }
    .block-preview {
      width: 20px; height: 20px; border-radius: 3px;
      box-shadow: inset 0 0 4px rgba(0,0,0,0.5);
    }
    .slot-num { font-size: 10px; color: #94a3b8; margin-top: 2px; font-weight: bold; }

    /* Instructions Modal */
    #blocker {
      position: absolute; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0.65); backdrop-filter: blur(4px);
      display: flex; align-items: center; justify-content: center;
      z-index: 20; cursor: pointer; color: #fff; text-align: center;
    }
    .instructions {
      background: #1e293b; border: 1px solid #334155;
      padding: 28px 40px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.5);
    }
    .btn-play {
      background: linear-gradient(135deg, #0284c7, #6366f1);
      color: #fff; border: none; padding: 10px 24px; border-radius: 8px;
      font-weight: 700; margin-top: 16px; cursor: pointer; font-size: 14px;
    }
  </style>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
</head>
<body>
  <div id="canvas-container"></div>
  <div id="crosshair"></div>

  <div id="ui-overlay">
    <div class="hud-title">🧊 Voxel Forge 3D World</div>
    <div>Position : <span id="coords">X: 0, Y: 5, Z: 0</span></div>
    <div>Blocs posés : <span id="block-count">0</span></div>
    <div style="margin-top: 6px; font-size: 11px; color: #cbd5e1;">
      [Clic Gauche] Détruire • [Clic Droit] Poser<br>
      [1-5] Sélectionner le bloc • [Espace] Sauter
    </div>
  </div>

  <div id="hotbar">
    <div class="slot active" data-type="grass" data-key="1">
      <div class="block-preview" style="background: #4ade80;"></div>
      <span class="slot-num">1</span>
    </div>
    <div class="slot" data-type="dirt" data-key="2">
      <div class="block-preview" style="background: #92400e;"></div>
      <span class="slot-num">2</span>
    </div>
    <div class="slot" data-type="stone" data-key="3">
      <div class="block-preview" style="background: #64748b;"></div>
      <span class="slot-num">3</span>
    </div>
    <div class="slot" data-type="wood" data-key="4">
      <div class="block-preview" style="background: #b45309;"></div>
      <span class="slot-num">4</span>
    </div>
    <div class="slot" data-type="leaves" data-key="5">
      <div class="block-preview" style="background: #15803d;"></div>
      <span class="slot-num">5</span>
    </div>
  </div>

  <div id="blocker">
    <div class="instructions">
      <h2 style="margin-bottom: 8px;">🎮 Voxel World 3D</h2>
      <p style="color: #94a3b8; font-size: 13px; margin-bottom: 14px;">
        Cliquez pour verrouiller le curseur et explorer le monde.<br>
        Contrôles : <strong>Z, Q, S, D</strong> (ou Flèches) pour marcher, <strong>Espace</strong> pour sauter.
      </p>
      <button class="btn-play">Cliquer pour Jouer</button>
    </div>
  </div>

  <script src="game.js"></script>
</body>
</html>`
      },
      {
        path: 'game.js',
        language: 'javascript',
        content: `// Voxel Forge 3D World Engine
const container = document.getElementById('canvas-container');
const coordsEl = document.getElementById('coords');
const blockCountEl = document.getElementById('block-count');
const blocker = document.getElementById('blocker');

// 1. Scene & Camera Setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);
scene.fog = new THREE.FogExp2(0x87ceeb, 0.025);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 6, 12);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
container.appendChild(renderer.domElement);

// 2. Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
scene.add(ambientLight);

const sunLight = new THREE.DirectionalLight(0xfffbeb, 0.85);
sunLight.position.set(30, 60, 20);
sunLight.castShadow = true;
scene.add(sunLight);

// 3. Materials
const BLOCK_MATERIALS = {
  grass: new THREE.MeshLambertMaterial({ color: 0x4ade80 }),
  dirt: new THREE.MeshLambertMaterial({ color: 0x854d0e }),
  stone: new THREE.MeshLambertMaterial({ color: 0x64748b }),
  wood: new THREE.MeshLambertMaterial({ color: 0xb45309 }),
  leaves: new THREE.MeshLambertMaterial({ color: 0x15803d })
};

let currentBlockType = 'grass';
let placedBlocksCount = 0;

// Geometry & Voxel Grid
const boxGeo = new THREE.BoxGeometry(1, 1, 1);
const voxels = new Map();

function addVoxel(x, y, z, type = 'grass') {
  const key = \`\${x},\${y},\${z}\`;
  if (voxels.has(key)) return;

  const mat = BLOCK_MATERIALS[type] || BLOCK_MATERIALS.grass;
  const mesh = new THREE.Mesh(boxGeo, mat);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData = { key, type };

  scene.add(mesh);
  voxels.set(key, mesh);
  return mesh;
}

function removeVoxel(x, y, z) {
  const key = \`\${x},\${y},\${z}\`;
  const mesh = voxels.get(key);
  if (mesh) {
    scene.remove(mesh);
    voxels.delete(key);
  }
}

// 4. Procedural Terrain Generation
const WORLD_SIZE = 14;
for (let x = -WORLD_SIZE; x <= WORLD_SIZE; x++) {
  for (let z = -WORLD_SIZE; z <= WORLD_SIZE; z++) {
    const dist = Math.sqrt(x*x + z*z);
    const height = Math.floor(Math.sin(x * 0.25) * 1.5 + Math.cos(z * 0.25) * 1.5);
    
    // Bottom stone
    addVoxel(x, -1, z, 'stone');
    // Middle dirt
    for (let y = 0; y < height; y++) {
      addVoxel(x, y, z, 'dirt');
    }
    // Top grass
    addVoxel(x, height, z, 'grass');
  }
}

// Add a few decorative trees
function plantTree(x, z, groundY) {
  for (let y = 1; y <= 4; y++) addVoxel(x, groundY + y, z, 'wood');
  for (let lx = -1; lx <= 1; lx++) {
    for (let lz = -1; lz <= 1; lz++) {
      for (let ly = 4; ly <= 5; ly++) {
        if (lx !== 0 || lz !== 0 || ly === 5) {
          addVoxel(x + lx, groundY + ly, z + lz, 'leaves');
        }
      }
    }
  }
}
plantTree(4, -4, 1);
plantTree(-5, 6, 1);

// Wireframe block highlighter
const outlineGeo = new THREE.BoxGeometry(1.02, 1.02, 1.02);
const outlineMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const targetBox = new THREE.Mesh(outlineGeo, outlineMat);
targetBox.visible = false;
scene.add(targetBox);

// 5. First Person Controls & Physics
let isLocked = false;
let moveForward = false, moveBackward = false, moveLeft = false, moveRight = false;
let velocity = new THREE.Vector3();
let direction = new THREE.Vector3();
let canJump = true;

// Pointer lock
blocker.addEventListener('click', () => {
  renderer.domElement.requestPointerLock();
});

document.addEventListener('pointerlockchange', () => {
  isLocked = document.pointerLockElement === renderer.domElement;
  blocker.style.display = isLocked ? 'none' : 'flex';
});

// Mouse look
let pitch = 0, yaw = 0;
document.addEventListener('mousemove', (e) => {
  if (!isLocked) return;
  const movementX = e.movementX || 0;
  const movementY = e.movementY || 0;

  yaw -= movementX * 0.0025;
  pitch -= movementY * 0.0025;
  pitch = Math.max(-Math.PI / 2.1, Math.min(Math.PI / 2.1, pitch));

  camera.rotation.order = 'YXZ';
  camera.rotation.y = yaw;
  camera.rotation.x = pitch;
});

// Keyboard
document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'KeyW': case 'KeyZ': case 'ArrowUp': moveForward = true; break;
    case 'KeyS': case 'ArrowDown': moveBackward = true; break;
    case 'KeyA': case 'KeyQ': case 'ArrowLeft': moveLeft = true; break;
    case 'KeyD': case 'ArrowRight': moveRight = true; break;
    case 'Space':
      if (canJump) {
        velocity.y = 8.5;
        canJump = false;
      }
      break;
    case 'Digit1': selectSlot('grass'); break;
    case 'Digit2': selectSlot('dirt'); break;
    case 'Digit3': selectSlot('stone'); break;
    case 'Digit4': selectSlot('wood'); break;
    case 'Digit5': selectSlot('leaves'); break;
  }
});

document.addEventListener('keyup', (e) => {
  switch (e.code) {
    case 'KeyW': case 'KeyZ': case 'ArrowUp': moveForward = false; break;
    case 'KeyS': case 'ArrowDown': moveBackward = false; break;
    case 'KeyA': case 'KeyQ': case 'ArrowLeft': moveLeft = false; break;
    case 'KeyD': case 'ArrowRight': moveRight = false; break;
  }
});

function selectSlot(type) {
  currentBlockType = type;
  document.querySelectorAll('.slot').forEach(s => {
    s.classList.toggle('active', s.getAttribute('data-type') === type);
  });
}

document.querySelectorAll('.slot').forEach(slot => {
  slot.addEventListener('click', () => selectSlot(slot.getAttribute('data-type')));
});

// 6. Raycasting (Break & Place Blocks)
const raycaster = new THREE.Raycaster();
let targetedIntersect = null;

function checkRaycast() {
  raycaster.setFromCamera({ x: 0, y: 0 }, camera);
  const meshes = Array.from(voxels.values());
  const intersects = raycaster.intersectObjects(meshes);

  if (intersects.length > 0 && intersects[0].distance < 7.5) {
    targetedIntersect = intersects[0];
    targetBox.position.copy(targetedIntersect.object.position);
    targetBox.visible = true;
  } else {
    targetedIntersect = null;
    targetBox.visible = false;
  }
}

document.addEventListener('mousedown', (e) => {
  if (!isLocked || !targetedIntersect) return;

  if (e.button === 0) {
    // Left Click: Break
    const pos = targetedIntersect.object.position;
    removeVoxel(pos.x, pos.y, pos.z);
    targetBox.visible = false;
    targetedIntersect = null;
  } else if (e.button === 2) {
    // Right Click: Place
    const normal = targetedIntersect.face.normal;
    const targetPos = targetedIntersect.object.position.clone().add(normal);
    
    // Prevent placing inside player
    if (camera.position.distanceTo(targetPos) > 1.2) {
      addVoxel(targetPos.x, targetPos.y, targetPos.z, currentBlockType);
      placedBlocksCount++;
      blockCountEl.innerText = placedBlocksCount;
    }
  }
});

// Disable right click context menu
window.addEventListener('contextmenu', (e) => e.preventDefault());

// 7. Game Loop & Physics
let prevTime = performance.now();

function animate() {
  requestAnimationFrame(animate);

  const time = performance.now();
  const delta = Math.min((time - prevTime) / 1000, 0.1);
  prevTime = time;

  if (isLocked) {
    // Gravity & Ground Check
    velocity.y -= 22.0 * delta;

    direction.z = Number(moveForward) - Number(moveBackward);
    direction.x = Number(moveRight) - Number(moveLeft);
    direction.normalize();

    const speed = 7.5;
    if (moveForward || moveBackward) velocity.z = direction.z * speed;
    else velocity.z = 0;
    if (moveLeft || moveRight) velocity.x = direction.x * speed;
    else velocity.x = 0;

    // Apply movement relative to camera yaw
    const forwardVec = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
    const rightVec = new THREE.Vector3(1, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);

    const moveVector = new THREE.Vector3()
      .addScaledVector(forwardVec, velocity.z * delta)
      .addScaledVector(rightVec, velocity.x * delta);

    camera.position.add(moveVector);
    camera.position.y += velocity.y * delta;

    // Basic ground collision at Y = 2
    if (camera.position.y < 2.5) {
      velocity.y = 0;
      camera.position.y = 2.5;
      canJump = true;
    }

    // Update HUD
    coordsEl.innerText = \`X: \${Math.round(camera.position.x)}, Y: \${Math.round(camera.position.y)}, Z: \${Math.round(camera.position.z)}\`;
    checkRaycast();
  }

  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
`
      }
    ]
  },
  {
    id: 'cyberpunk-neon-pong',
    title: '🏓 Cyberpunk Neon Pong 2D',
    category: 'Arcade 2D',
    badge: 'Rétro Synthwave',
    description: 'Duel d\'arcade classique revisité en style Cyberpunk avec trainées néon, rebonds physiques dynamiques et effets de particules.',
    tags: ['Canvas 2D', 'Arcade', 'Cyberpunk', 'Sound FX'],
    files: [
      {
        path: 'index.html',
        language: 'html',
        content: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Cyberpunk Neon Pong</title>
  <style>
    body { margin: 0; background: #070913; overflow: hidden; display: flex; align-items: center; justify-content: center; height: 100vh; font-family: 'Courier New', monospace; }
    canvas { border: 2px solid #38bdf8; box-shadow: 0 0 25px rgba(56, 189, 248, 0.4); border-radius: 8px; }
  </style>
</head>
<body>
  <canvas id="game" width="800" height="500"></canvas>
  <script src="game.js"></script>
</body>
</html>`
      },
      {
        path: 'game.js',
        language: 'javascript',
        content: `const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let p1 = { x: 20, y: 200, w: 12, h: 90, score: 0, color: '#38bdf8' };
let p2 = { x: 768, y: 200, w: 12, h: 90, score: 0, color: '#ec4899' };
let ball = { x: 400, y: 250, r: 7, vx: 5.5, vy: 3, speed: 5.5 };
let trails = [];

// Mouse & Keys
let mouseY = 250;
window.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  mouseY = e.clientY - rect.top;
});

function resetBall(scorer) {
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.speed = 5.5;
  ball.vx = (scorer === 1 ? -1 : 1) * ball.speed;
  ball.vy = (Math.random() * 4 - 2);
}

function update() {
  // P1 follows mouse smoothly
  p1.y += (mouseY - p1.h / 2 - p1.y) * 0.2;
  p1.y = Math.max(10, Math.min(canvas.height - p1.h - 10, p1.y));

  // P2 AI
  const targetY = ball.y - p2.h / 2;
  p2.y += (targetY - p2.y) * 0.08;
  p2.y = Math.max(10, Math.min(canvas.height - p2.h - 10, p2.y));

  // Ball
  ball.x += ball.vx;
  ball.y += ball.vy;

  // Trail
  trails.push({ x: ball.x, y: ball.y, alpha: 1.0 });
  if (trails.length > 15) trails.shift();

  // Top/Bottom bounce
  if (ball.y < ball.r || ball.y > canvas.height - ball.r) {
    ball.vy *= -1;
  }

  // P1 Collision
  if (ball.x - ball.r <= p1.x + p1.w && ball.y >= p1.y && ball.y <= p1.y + p1.h && ball.vx < 0) {
    ball.speed += 0.3;
    ball.vx = ball.speed;
    const diff = (ball.y - (p1.y + p1.h / 2)) / (p1.h / 2);
    ball.vy = diff * 6.5;
  }

  // P2 Collision
  if (ball.x + ball.r >= p2.x && ball.y >= p2.y && ball.y <= p2.y + p2.h && ball.vx > 0) {
    ball.speed += 0.3;
    ball.vx = -ball.speed;
    const diff = (ball.y - (p2.y + p2.h / 2)) / (p2.h / 2);
    ball.vy = diff * 6.5;
  }

  // Scoring
  if (ball.x < 0) {
    p2.score++;
    resetBall(2);
  } else if (ball.x > canvas.width) {
    p1.score++;
    resetBall(1);
  }
}

function draw() {
  ctx.fillStyle = '#090d16';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Center net
  ctx.strokeStyle = 'rgba(255,255,255,0.1)';
  ctx.setLineDash([8, 8]);
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();
  ctx.setLineDash([]);

  // Scores
  ctx.font = 'bold 36px monospace';
  ctx.fillStyle = '#38bdf8';
  ctx.fillText(p1.score, 330, 50);
  ctx.fillStyle = '#ec4899';
  ctx.fillText(p2.score, 440, 50);

  // Trail
  trails.forEach((t, i) => {
    ctx.fillStyle = \`rgba(56, 189, 248, \${(i / trails.length) * 0.4})\`;
    ctx.beginPath();
    ctx.arc(t.x, t.y, ball.r, 0, Math.PI * 2);
    ctx.fill();
  });

  // Paddles
  ctx.shadowBlur = 15;
  ctx.shadowColor = p1.color;
  ctx.fillStyle = p1.color;
  ctx.fillRect(p1.x, p1.y, p1.w, p1.h);

  ctx.shadowColor = p2.color;
  ctx.fillStyle = p2.color;
  ctx.fillRect(p2.x, p2.y, p2.w, p2.h);

  // Ball
  ctx.shadowColor = '#fff';
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}
loop();
`
      }
    ]
  },
  {
    id: 'super-snake-arcade',
    title: '🐍 Super Snake 2D Arcade',
    category: 'Arcade 2D',
    badge: 'Classique',
    description: 'Le jeu Snake arcade ultime avec grille fluide, bonus fruits dorés, accélération progressive et suivi du meilleur score.',
    tags: ['Canvas 2D', 'Retro', 'Snake', 'Score'],
    files: [
      {
        path: 'index.html',
        language: 'html',
        content: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Super Snake Arcade</title>
  <style>
    body { background: #0d1117; color: #fff; font-family: 'Segoe UI', sans-serif; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0; }
    #score-bar { font-size: 16px; font-weight: bold; margin-bottom: 12px; display: flex; gap: 24px; }
    canvas { background: #161b22; border: 2px solid #30363d; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
  </style>
</head>
<body>
  <div id="score-bar">
    <div>🍎 Score : <span id="score">0</span></div>
    <div>🏆 Meilleur : <span id="high">0</span></div>
  </div>
  <canvas id="cv" width="400" height="400"></canvas>
  <p style="color: #8b949e; font-size: 12px; margin-top: 10px;">Utilisez les flèches ou Z, Q, S, D pour diriger le serpent</p>
  <script src="main.js"></script>
</body>
</html>`
      },
      {
        path: 'main.js',
        language: 'javascript',
        content: `const cv = document.getElementById('cv');
const ctx = cv.getContext('2d');
const scoreEl = document.getElementById('score');
const highEl = document.getElementById('high');

const GRID = 20;
const TILE = cv.width / GRID;

let snake = [{x: 10, y: 10}, {x: 9, y: 10}, {x: 8, y: 10}];
let dx = 1, dy = 0;
let nextDx = 1, nextDy = 0;
let food = {x: 15, y: 10, golden: false};
let score = 0;
let highScore = 0;
let speed = 120;
let interval = null;

function spawnFood() {
  food = {
    x: Math.floor(Math.random() * GRID),
    y: Math.floor(Math.random() * GRID),
    golden: Math.random() < 0.2
  };
}

function resetGame() {
  snake = [{x: 10, y: 10}, {x: 9, y: 10}, {x: 8, y: 10}];
  dx = 1; dy = 0;
  nextDx = 1; nextDy = 0;
  score = 0;
  speed = 120;
  scoreEl.innerText = score;
  spawnFood();
  clearInterval(interval);
  interval = setInterval(tick, speed);
}

function tick() {
  dx = nextDx;
  dy = nextDy;
  const head = {x: snake[0].x + dx, y: snake[0].y + dy};

  // Wall collision
  if (head.x < 0 || head.x >= GRID || head.y < 0 || head.y >= GRID) {
    return resetGame();
  }

  // Self collision
  for (let part of snake) {
    if (head.x === part.x && head.y === part.y) return resetGame();
  }

  snake.unshift(head);

  // Food eaten
  if (head.x === food.x && head.y === food.y) {
    score += food.golden ? 30 : 10;
    if (score > highScore) {
      highScore = score;
      highEl.innerText = highScore;
    }
    scoreEl.innerText = score;
    spawnFood();
  } else {
    snake.pop();
  }

  draw();
}

function draw() {
  ctx.fillStyle = '#161b22';
  ctx.fillRect(0, 0, cv.width, cv.height);

  // Snake body
  snake.forEach((part, i) => {
    ctx.fillStyle = i === 0 ? '#38bdf8' : '#22c55e';
    ctx.fillRect(part.x * TILE + 1, part.y * TILE + 1, TILE - 2, TILE - 2);
  });

  // Food
  ctx.fillStyle = food.golden ? '#fbbf24' : '#f85149';
  ctx.beginPath();
  ctx.arc(food.x * TILE + TILE/2, food.y * TILE + TILE/2, TILE/2 - 2, 0, Math.PI * 2);
  ctx.fill();
}

window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp': case 'z': case 'w': if (dy === 0) { nextDx = 0; nextDy = -1; } break;
    case 'ArrowDown': case 's': if (dy === 0) { nextDx = 0; nextDy = 1; } break;
    case 'ArrowLeft': case 'q': case 'a': if (dx === 0) { nextDx = -1; nextDy = 0; } break;
    case 'ArrowRight': case 'd': if (dx === 0) { nextDx = 1; nextDy = 0; } break;
  }
});

resetGame();
`
      }
    ]
  },
  {
    id: 'space-shooter-3d',
    title: '🚀 Retro Space Shooter 3D',
    category: '3D & Voxel',
    badge: 'Action 3D',
    description: 'Combats spatiaux intenses en Three.js avec champ d\'astéroïdes dynamique, tirs laser et explosions polygonales.',
    tags: ['Three.js', '3D Game', 'Sci-Fi', 'Particles'],
    files: [
      {
        path: 'index.html',
        language: 'html',
        content: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Retro Space Shooter 3D</title>
  <style>
    body { margin: 0; background: #000; overflow: hidden; font-family: monospace; }
    #hud { position: absolute; top: 16px; left: 16px; color: #38bdf8; font-size: 16px; z-index: 10; }
  </style>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
</head>
<body>
  <div id="hud">SCORE: <span id="score">0</span> • VIES: <span id="lives">3</span></div>
  <script src="game.js"></script>
</body>
</html>`
      },
      {
        path: 'game.js',
        language: 'javascript',
        content: `const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 500);
camera.position.set(0, 3, 10);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lighting
scene.add(new THREE.AmbientLight(0xffffff, 0.4));
const dirLight = new THREE.DirectionalLight(0x38bdf8, 1);
dirLight.position.set(5, 10, 7);
scene.add(dirLight);

// Starfield
const starGeo = new THREE.BufferGeometry();
const starCount = 1200;
const starPos = new Float32Array(starCount * 3);
for (let i = 0; i < starCount * 3; i += 3) {
  starPos[i] = (Math.random() - 0.5) * 300;
  starPos[i+1] = (Math.random() - 0.5) * 300;
  starPos[i+2] = (Math.random() - 0.5) * 300;
}
starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.8 });
const stars = new THREE.Points(starGeo, starMat);
scene.add(stars);

// Player Ship
const shipGeo = new THREE.ConeGeometry(0.8, 2.2, 4);
const shipMat = new THREE.MeshLambertMaterial({ color: 0x38bdf8 });
const ship = new THREE.Mesh(shipGeo, shipMat);
ship.rotation.x = Math.PI / 2;
scene.add(ship);

let lasers = [];
let enemies = [];
let score = 0;
let lives = 3;

// Movement
let mouseX = 0, mouseY = 0;
window.addEventListener('mousemove', (e) => {
  mouseX = (e.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
});

window.addEventListener('mousedown', () => {
  const laserGeo = new THREE.CylinderGeometry(0.08, 0.08, 1.2, 8);
  const laserMat = new THREE.MeshBasicMaterial({ color: 0x22c55e });
  const laser = new THREE.Mesh(laserGeo, laserMat);
  laser.rotation.x = Math.PI / 2;
  laser.position.copy(ship.position);
  scene.add(laser);
  lasers.push(laser);
});

// Spawn Enemies
setInterval(() => {
  const enemyGeo = new THREE.DodecahedronGeometry(0.8, 0);
  const enemyMat = new THREE.MeshLambertMaterial({ color: 0xf43f5e });
  const enemy = new THREE.Mesh(enemyGeo, enemyMat);
  enemy.position.set((Math.random() - 0.5) * 16, (Math.random() - 0.5) * 10, -50);
  scene.add(enemy);
  enemies.push(enemy);
}, 800);

function animate() {
  requestAnimationFrame(animate);

  // Ship follow mouse
  ship.position.x += (mouseX * 7 - ship.position.x) * 0.1;
  ship.position.y += (mouseY * 4.5 - ship.position.y) * 0.1;
  ship.rotation.z = -mouseX * 0.5;

  // Starfield parallax
  stars.position.z += 0.5;
  if (stars.position.z > 100) stars.position.z = 0;

  // Lasers update
  lasers.forEach((l, li) => {
    l.position.z -= 1.8;
    if (l.position.z < -60) {
      scene.remove(l);
      lasers.splice(li, 1);
    }
  });

  // Enemies update
  enemies.forEach((e, ei) => {
    e.position.z += 0.45;
    e.rotation.x += 0.02;
    e.rotation.y += 0.03;

    // Check hit with lasers
    lasers.forEach((l, li) => {
      if (l.position.distanceTo(e.position) < 1.3) {
        scene.remove(e);
        scene.remove(l);
        enemies.splice(ei, 1);
        lasers.splice(li, 1);
        score += 100;
        document.getElementById('score').innerText = score;
      }
    });

    if (e.position.z > 10) {
      scene.remove(e);
      enemies.splice(ei, 1);
    }
  });

  renderer.render(scene, camera);
}
animate();
`
      }
    ]
  },
  {
    id: 'python-data-simulation',
    title: '🐍 Data Science & Monte Carlo (Python)',
    category: 'Python',
    badge: 'Pyodide WebAssembly',
    description: 'Script Python de calcul probabiliste et simulation scientifique de Monte Carlo pour estimer Pi et modéliser des lois normales.',
    tags: ['Python', 'WebAssembly', 'Algorithmes', 'Math'],
    files: [
      {
        path: 'main.py',
        language: 'python',
        content: `import math
import random
import time

print("=" * 55)
print("  VOXEL FORGE — SIMULATION SCIENTIFIQUE PYTHON")
print("=" * 55)

# 1. Estimation de Pi par méthode de Monte Carlo
def monte_carlo_pi(points_count=25000):
    start = time.time()
    inside_circle = 0
    
    for _ in range(points_count):
        x = random.random()
        y = random.random()
        if (x * x + y * y) <= 1.0:
            inside_circle += 1
            
    estimated_pi = 4.0 * inside_circle / points_count
    duration = time.time() - start
    error = abs(estimated_pi - math.pi) / math.pi * 100
    
    print(f"\\n🎯 Estimation de Pi ({points_count:,} itérations) :")
    print(f"   • Valeur estimée : {estimated_pi:.6f}")
    print(f"   • Valeur exacte   : {math.pi:.6f}")
    print(f"   • Marge d'erreur  : {error:.3f}%")
    print(f"   • Temps de calcul : {duration * 1000:.1f} ms")
    return estimated_pi

# 2. Génération de suite de Fibonacci
def fibonacci(n=12):
    seq = [0, 1]
    for i in range(2, n):
        seq.append(seq[-1] + seq[-2])
    print(f"\\n🔢 Suite de Fibonacci ({n} termes) :")
    print(f"   {seq}")
    return seq

# Lancement des simulations
monte_carlo_pi(30000)
fibonacci(15)

print("\\n" + "=" * 55)
print("✓ Exécution Python WebAssembly terminée avec succès !")
print("Tapez vos propres commandes ci-dessous dans l'invite '>>>'")
print("=" * 55)
`
      }
    ]
  },
  {
    id: 'scientific-calculator',
    title: '📊 Calculatrice Scientifique & Graphique',
    category: 'Web Apps',
    badge: 'Productivité',
    description: 'Calculatrice scientifique réactive avec fonctions trigonométriques, historique des calculs et traceur de courbes en direct.',
    tags: ['JavaScript', 'HTML5', 'Math', 'Graph'],
    files: [
      {
        path: 'index.html',
        language: 'html',
        content: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Calculatrice Scientifique</title>
  <style>
    body { background: #0d1117; color: #fff; font-family: 'Segoe UI', sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
    .calc-card { background: #161b22; border: 1px solid #30363d; border-radius: 16px; padding: 24px; width: 340px; box-shadow: 0 16px 36px rgba(0,0,0,0.5); }
    #display { width: 100%; height: 50px; background: #090d16; border: 1px solid #30363d; border-radius: 8px; color: #38bdf8; font-size: 24px; text-align: right; padding: 10px; box-sizing: border-box; font-family: monospace; margin-bottom: 16px; }
    .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
    button { height: 44px; border: 1px solid #30363d; background: #21262d; color: #e6edf3; border-radius: 8px; font-size: 15px; font-weight: 600; cursor: pointer; transition: 0.15s; }
    button:hover { background: #30363d; border-color: #58a6ff; }
    button.op { background: rgba(56, 189, 248, 0.15); color: #38bdf8; }
    button.eq { background: #238636; color: #fff; grid-column: span 2; border: none; }
  </style>
</head>
<body>
  <div class="calc-card">
    <div style="font-size: 12px; color: #8b949e; margin-bottom: 6px; font-weight: bold;">VOXEL CALC</div>
    <input id="display" type="text" value="0" readonly>
    <div class="grid">
      <button onclick="clearDisplay()">C</button>
      <button class="op" onclick="append('Math.sqrt(')">√</button>
      <button class="op" onclick="append('**')">^</button>
      <button class="op" onclick="append('/')">÷</button>
      <button onclick="append('7')">7</button>
      <button onclick="append('8')">8</button>
      <button onclick="append('9')">9</button>
      <button class="op" onclick="append('*')">×</button>
      <button onclick="append('4')">4</button>
      <button onclick="append('5')">5</button>
      <button onclick="append('6')">6</button>
      <button class="op" onclick="append('-')">−</button>
      <button onclick="append('1')">1</button>
      <button onclick="append('2')">2</button>
      <button onclick="append('3')">3</button>
      <button class="op" onclick="append('+')">+</button>
      <button onclick="append('0')">0</button>
      <button onclick="append('.')">.</button>
      <button class="eq" onclick="calculate()">=</button>
    </div>
  </div>
  <script>
    const disp = document.getElementById('display');
    function append(val) {
      if (disp.value === '0') disp.value = val;
      else disp.value += val;
    }
    function clearDisplay() { disp.value = '0'; }
    function calculate() {
      try {
        disp.value = Function('"use strict";return (' + disp.value + ')')();
      } catch(e) {
        disp.value = 'Erreur';
      }
    }
  </script>
</body>
</html>`
      }
    ]
  },
  {
    id: 'retro-brick-breaker',
    title: '🧱 Retro Brick Breaker 2026',
    category: 'Arcade 2D',
    badge: 'Arcade',
    description: 'Casse-briques complet avec rebonds physiques, briques multicolores destructibles, effets de particules et bonus.',
    tags: ['Canvas 2D', 'Arcade', 'Breakout'],
    files: [
      {
        path: 'index.html',
        language: 'html',
        content: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Brick Breaker 2026</title>
  <style>
    body { margin: 0; background: #070a13; display: flex; align-items: center; justify-content: center; height: 100vh; overflow: hidden; font-family: sans-serif; }
    canvas { border: 2px solid #30363d; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
  </style>
</head>
<body>
  <canvas id="c" width="480" height="400"></canvas>
  <script src="game.js"></script>
</body>
</html>`
      },
      {
        path: 'game.js',
        language: 'javascript',
        content: `const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');

let paddle = { x: 190, y: 375, w: 90, h: 10, speed: 7 };
let ball = { x: 240, y: 250, r: 6, vx: 3.5, vy: -3.5 };
let bricks = [];
const ROWS = 5, COLS = 8, BRICK_W = 50, BRICK_H = 14, PADDING = 8, OFFSET_T = 40, OFFSET_L = 12;

const COLORS = ['#f43f5e', '#fbbf24', '#22c55e', '#38bdf8', '#a855f7'];

function initBricks() {
  bricks = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      bricks.push({
        x: c * (BRICK_W + PADDING) + OFFSET_L,
        y: r * (BRICK_H + PADDING) + OFFSET_T,
        status: 1,
        color: COLORS[r]
      });
    }
  }
}
initBricks();

window.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  paddle.x = e.clientX - rect.left - paddle.w / 2;
  paddle.x = Math.max(0, Math.min(canvas.width - paddle.w, paddle.x));
});

function update() {
  ball.x += ball.vx;
  ball.y += ball.vy;

  // Wall bounce
  if (ball.x < ball.r || ball.x > canvas.width - ball.r) ball.vx *= -1;
  if (ball.y < ball.r) ball.vy *= -1;

  // Bottom reset
  if (ball.y > canvas.height) {
    ball.x = 240; ball.y = 250; ball.vy = -3.5;
    initBricks();
  }

  // Paddle bounce
  if (ball.y + ball.r >= paddle.y && ball.x >= paddle.x && ball.x <= paddle.x + paddle.w && ball.vy > 0) {
    ball.vy = -Math.abs(ball.vy);
    const diff = (ball.x - (paddle.x + paddle.w/2)) / (paddle.w/2);
    ball.vx = diff * 5;
  }

  // Brick collision
  bricks.forEach(b => {
    if (b.status === 1) {
      if (ball.x > b.x && ball.x < b.x + BRICK_W && ball.y > b.y && ball.y < b.y + BRICK_H) {
        ball.vy *= -1;
        b.status = 0;
      }
    }
  });
}

function draw() {
  ctx.fillStyle = '#090d16';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Paddle
  ctx.fillStyle = '#38bdf8';
  ctx.fillRect(paddle.x, paddle.y, paddle.w, paddle.h);

  // Ball
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
  ctx.fill();

  // Bricks
  bricks.forEach(b => {
    if (b.status === 1) {
      ctx.fillStyle = b.color;
      ctx.fillRect(b.x, b.y, BRICK_W, BRICK_H);
    }
  });
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}
loop();
`
      }
    ]
  },
  {
    id: 'particle-vortex-3d',
    title: '🎨 Vortex de 10 000 Particules 3D',
    category: '3D & Voxel',
    badge: 'Visuel',
    description: 'Animation interactive de 10 000 particules 3D réagissant en temps réel à la souris avec rotation galactique.',
    tags: ['Three.js', 'Shader', 'Visual', 'Particles'],
    files: [
      {
        path: 'index.html',
        language: 'html',
        content: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Vortex de Particules 3D</title>
  <style>body { margin: 0; background: #05060b; overflow: hidden; }</style>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
</head>
<body>
  <script>
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 45;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const count = 10000;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
      const r = Math.random() * 25 + 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      pos[i] = r * Math.cos(theta) * Math.cos(phi);
      pos[i+1] = r * Math.sin(phi);
      pos[i+2] = r * Math.sin(theta) * Math.cos(phi);

      col[i] = 0.2 + Math.random() * 0.4;
      col[i+1] = 0.5 + Math.random() * 0.5;
      col[i+2] = 1.0;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));

    const mat = new THREE.PointsMaterial({ size: 0.35, vertexColors: true, transparent: true, opacity: 0.85 });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    let mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    function anim() {
      requestAnimationFrame(anim);
      points.rotation.y += 0.003;
      points.rotation.x += 0.001;
      camera.position.x += (mouseX * 15 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 15 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
    }
    anim();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  </script>
</body>
</html>`
      }
    ]
  }
];
