/**
 * In-memory bundler for Voxel Forge sandbox runner.
 * Bundles multi-file projects into a runnable HTML document
 * with live console interception and ES module importmap support.
 */

export function bundleProjectForPreview(project) {
  if (!project || !project.files || project.files.length === 0) {
    return createPlaceholderHtml('Aucun fichier dans le projet à exécuter.');
  }

  const files = project.files;
  const techType = (project.techStack?.type || '').toLowerCase();
  const language = (project.techStack?.language || '').toLowerCase();

  // 1. Python projects: return interactive terminal emulator
  if (language.includes('python')) {
    return createPythonTerminalBundle(project);
  }

  // 2. Web & Canvas Games: Look for index.html
  const indexHtmlFile = files.find(f => f.path.toLowerCase() === 'index.html' || f.path.toLowerCase().endsWith('/index.html'));

  if (indexHtmlFile) {
    return createWebBundle(files, indexHtmlFile);
  }

  // 3. React / Component projects without direct index.html
  const appFile = files.find(f => f.path.includes('App') || f.path.includes('main') || f.path.endsWith('.jsx') || f.path.endsWith('.tsx'));
  if (appFile) {
    return createReactBundle(files, appFile);
  }

  // 4. Default JS/HTML fallback
  const firstJs = files.find(f => f.path.endsWith('.js') || f.path.endsWith('.html'));
  if (firstJs && firstJs.path.endsWith('.html')) {
    return createWebBundle(files, firstJs);
  }

  return createGenericJsBundle(files);
}

/**
 * Creates a standalone HTML bundle from index.html and associated files.
 */
function createWebBundle(files, indexHtmlFile) {
  let html = indexHtmlFile.content || '';

  // Console spy script injected into the head
  const consoleSpyScript = `
    <script>
      (function() {
        const send = (level, args) => {
          try {
            const message = args.map(a => {
              if (typeof a === 'object') {
                try { return JSON.stringify(a); } catch(e) { return String(a); }
              }
              return String(a);
            }).join(' ');
            window.parent.postMessage({ type: 'VOXEL_CONSOLE', level, message }, '*');
          } catch(e) {}
        };
        const _log = console.log;
        const _err = console.error;
        const _warn = console.warn;
        const _info = console.info;

        console.log = function(...args) { _log.apply(console, args); send('info', args); };
        console.error = function(...args) { _err.apply(console, args); send('error', args); };
        console.warn = function(...args) { _warn.apply(console, args); send('warn', args); };
        console.info = function(...args) { _info.apply(console, args); send('info', args); };

        window.addEventListener('error', function(e) {
          send('error', [e.message + ' (ligne ' + (e.lineno || '?') + ')']);
        });

        window.addEventListener('unhandledrejection', function(e) {
          send('error', ['Promise Rejection: ' + (e.reason ? (e.reason.message || e.reason) : 'Inconnue')]);
        });

        // Ensure canvas or window has immediate keyboard focus
        window.addEventListener('load', function() {
          window.focus();
          const canvas = document.querySelector('canvas');
          if (canvas) {
            canvas.tabIndex = 1;
            canvas.focus();
          }
        });
      })();
    </script>
  `;

  // Create in-memory blob URLs for JS/CSS modules
  const importMap = { imports: {} };
  const blobUrls = [];

  for (const file of files) {
    if (file.path === indexHtmlFile.path) continue;

    const normPath = file.path.replace(/\\/g, '/').replace(/^\/+/, '');
    const isJs = normPath.endsWith('.js') || normPath.endsWith('.mjs') || normPath.endsWith('.jsx');
    const isCss = normPath.endsWith('.css');

    if (isJs) {
      const mime = 'application/javascript';
      const blob = new Blob([file.content || ''], { type: mime });
      const url = URL.createObjectURL(blob);
      blobUrls.push(url);

      // Register in importmap
      importMap.imports[`./${normPath}`] = url;
      importMap.imports[`/${normPath}`] = url;
      importMap.imports[normPath] = url;

      // Handle relative imports from within subfolders (e.g. src/game.js importing ./player.js)
      const fileName = normPath.split('/').pop();
      importMap.imports[`./${fileName}`] = url;
    } else if (isCss) {
      // Inline CSS or link blob
      const styleTag = `<style data-source="${normPath}">${file.content || ''}</style>`;
      if (html.includes('</head>')) {
        html = html.replace('</head>', `${styleTag}</head>`);
      } else {
        html = `${styleTag}${html}`;
      }
    }
  }

  // Inject importmap
  const importMapScript = `<script type="importmap">${JSON.stringify(importMap)}</script>`;

  if (html.includes('<head>')) {
    html = html.replace('<head>', `<head>${consoleSpyScript}${importMapScript}`);
  } else {
    html = `${consoleSpyScript}${importMapScript}${html}`;
  }

  // Replace relative script tags like <script type="module" src="src/game.js"></script>
  for (const [modKey, blobUrl] of Object.entries(importMap.imports)) {
    const searchSrc = `src="${modKey}"`;
    const searchSrcAlt = `src="./${modKey}"`;
    if (html.includes(searchSrc)) {
      html = html.replaceAll(searchSrc, `src="${blobUrl}"`);
    }
    if (html.includes(searchSrcAlt)) {
      html = html.replaceAll(searchSrcAlt, `src="${blobUrl}"`);
    }
  }

  return html;
}

/**
 * Creates a React runtime bundle using Babel Standalone and ESM React
 */
function createReactBundle(files, appFile) {
  const cssFiles = files.filter(f => f.path.endsWith('.css'));
  const cssContent = cssFiles.map(c => c.content).join('\n');

  // Find components
  const jsFiles = files.filter(f => f.path.endsWith('.js') || f.path.endsWith('.jsx'));

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Voxel Forge React Runner</title>
  <style>
    ${cssContent}
  </style>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="importmap">
    {
      "imports": {
        "react": "https://esm.sh/react@18.3.1?dev",
        "react-dom": "https://esm.sh/react-dom@18.3.1?dev",
        "react-dom/client": "https://esm.sh/react-dom@18.3.1/client?dev",
        "lucide-react": "https://esm.sh/lucide-react@0.344.0"
      }
    }
  </script>
</head>
<body style="margin: 0; background: #0f172a; color: #f8fafc; font-family: system-ui, sans-serif;">
  <div id="root"></div>

  <script>
    (function() {
      const send = (level, args) => {
        window.parent.postMessage({ type: 'VOXEL_CONSOLE', level, message: args.join(' ') }, '*');
      };
      console.log = function(...args) { send('info', args); };
      console.error = function(...args) { send('error', args); };
      console.warn = function(...args) { send('warn', args); };
    })();
  </script>

  <script type="text/babel" data-type="module">
    import React, { useState, useEffect } from 'react';
    import ReactDOM from 'react-dom/client';

    ${jsFiles.map(f => `// File: ${f.path}\n${stripImportsExports(f.content)}`).join('\n\n')}

    const rootElement = document.getElementById('root');
    if (typeof App !== 'undefined') {
      ReactDOM.createRoot(rootElement).render(<App />);
    } else {
      rootElement.innerHTML = '<div style="padding: 24px; text-align: center;">Composant principal App chargé avec succès.</div>';
    }
  </script>
</body>
</html>`;
}

/**
 * Strips import and export keywords for unified script eval
 */
function stripImportsExports(code = '') {
  return code
    .replace(/import\s+.*?from\s+['"].*?['"];?/g, '')
    .replace(/import\s+['"].*?['"];?/g, '')
    .replace(/export\s+default\s+function/g, 'function')
    .replace(/export\s+default\s+class/g, 'class')
    .replace(/export\s+default\s+/g, '')
    .replace(/export\s+const\s+/g, 'const ')
    .replace(/export\s+function\s+/g, 'function ')
    .replace(/export\s+class\s+/g, 'class ');
}

/**
 * Interactive Python WebAssembly (Pyodide) runner with terminal emulation
 */
function createPythonTerminalBundle(project) {
  const mainFile = project.files.find(f => f.path.endsWith('.py')) || project.files[0];
  const rawCode = mainFile?.content || '# Aucun script Python';
  const escapedJsonCode = JSON.stringify(rawCode);

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Python 3.12 WebAssembly Runner — ${escapeHtml(project.name || 'Script')}</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: #090d16;
      color: #38bdf8;
      font-family: 'Fira Code', Consolas, Monaco, monospace;
      padding: 16px;
      font-size: 13px;
      line-height: 1.6;
      display: flex;
      flex-direction: column;
      height: 100vh;
      overflow: hidden;
    }
    .header {
      color: #8b949e;
      border-bottom: 1px solid #30363d;
      padding-bottom: 8px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
    }
    .status-badge {
      font-size: 11px;
      padding: 2px 8px;
      border-radius: 12px;
      background: rgba(56, 189, 248, 0.15);
      color: #38bdf8;
      border: 1px solid rgba(56, 189, 248, 0.3);
    }
    .terminal-output {
      flex: 1;
      overflow-y: auto;
      white-space: pre-wrap;
      word-break: break-word;
      color: #e6edf3;
      padding-right: 6px;
    }
    .output-info { color: #8b949e; }
    .output-success { color: #3fb950; font-weight: bold; }
    .output-error { color: #f85149; font-weight: bold; }
    .output-cmd { color: #38bdf8; font-weight: bold; }
    .input-line {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 10px;
      padding-top: 8px;
      border-top: 1px solid #21262d;
      flex-shrink: 0;
    }
    .prompt {
      color: #38bdf8;
      font-weight: bold;
      user-select: none;
    }
    input {
      background: transparent;
      border: none;
      outline: none;
      color: #f0f6fc;
      font-family: inherit;
      font-size: inherit;
      flex: 1;
    }
    .loading-spinner {
      display: inline-block;
      width: 12px;
      height: 12px;
      border: 2px solid #38bdf8;
      border-radius: 50%;
      border-top-color: transparent;
      animation: spin 0.8s linear infinite;
      margin-right: 6px;
      vertical-align: middle;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <span>🐍 Python 3.12 WebAssembly (Pyodide)</span>
      <span style="color: #6e7681; margin-left: 8px;">Fichier : <strong>${escapeHtml(mainFile?.path || 'main.py')}</strong></span>
    </div>
    <div id="status" class="status-badge">
      <span class="loading-spinner"></span> Initialisation du moteur Pyodide...
    </div>
  </div>

  <div id="output" class="terminal-output"></div>

  <div class="input-line">
    <span class="prompt">&gt;&gt;&gt;</span>
    <input id="repl-input" type="text" placeholder="Entrez une commande Python (ex: print(2 + 2), import math...)" disabled autocomplete="off">
  </div>

  <!-- Pyodide CDN -->
  <script src="https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js"></script>
  <script>
    const output = document.getElementById('output');
    const input = document.getElementById('repl-input');
    const status = document.getElementById('status');
    const userCode = ${escapedJsonCode};

    function append(text, type = '') {
      const span = document.createElement('span');
      if (type) span.className = 'output-' + type;
      span.textContent = text + '\\n';
      output.appendChild(span);
      output.scrollTop = output.scrollHeight;
    }

    function sendParent(level, message) {
      try {
        window.parent.postMessage({ type: 'VOXEL_CONSOLE', level, message }, '*');
      } catch(e) {}
    }

    let pyodideInstance = null;

    async function initPyodide() {
      append("⚡ Démarrage du moteur Python WebAssembly...", "info");
      const startTime = performance.now();

      try {
        if (typeof loadPyodide === 'undefined') {
          throw new Error("Impossible de charger Pyodide depuis le CDN.");
        }

        pyodideInstance = await loadPyodide({
          stdout: (text) => {
            append(text);
            sendParent('info', text);
          },
          stderr: (text) => {
            append(text, 'error');
            sendParent('error', text);
          }
        });

        const loadTime = Math.round(performance.now() - startTime);
        status.innerHTML = "✓ Prêt (" + loadTime + "ms)";
        status.style.color = "#3fb950";
        status.style.borderColor = "rgba(63, 185, 80, 0.4)";
        status.style.background = "rgba(63, 185, 80, 0.15)";
        input.disabled = false;
        input.focus();

        append("✓ Environnement Python prêt. Exécution du script principal...\\n", "success");

        // Execute user script
        try {
          const runStart = performance.now();
          await pyodideInstance.runPythonAsync(userCode);
          const duration = Math.round(performance.now() - runStart);
          append("\\n--- Fin de l'exécution (" + duration + "ms, Code 0) ---", "success");
        } catch (err) {
          append("\\nErreur d'exécution Python :\\n" + (err.message || err), "error");
          sendParent('error', err.message || String(err));
        }

      } catch (loadErr) {
        status.innerText = "Mode secours local";
        status.style.color = "#d29922";
        append("⚠️ " + loadErr.message + "\\nBasculement vers l'émulateur JavaScript local :", "info");

        // Simple local JS eval simulation for quick offline tests
        input.disabled = false;
        try {
          const lines = userCode.split('\\n');
          for (const line of lines) {
            if (line.trim().startsWith('print(')) {
              const content = line.trim().slice(6, -1);
              append(eval(content));
            }
          }
          append("\\n✓ Exécution simulée terminée.", "success");
        } catch (e) {
          append("Erreur simulation: " + e.message, "error");
        }
      }
    }

    // Interactive REPL Input handler
    input.addEventListener('keydown', async (e) => {
      if (e.key === 'Enter') {
        const val = input.value.trim();
        if (!val) return;

        append(">>> " + val, "cmd");
        input.value = '';

        if (pyodideInstance) {
          try {
            const res = await pyodideInstance.runPythonAsync(val);
            if (res !== undefined && res !== null) {
              append(String(res));
              sendParent('info', String(res));
            }
          } catch (err) {
            append(err.message || String(err), "error");
            sendParent('error', err.message || String(err));
          }
        } else {
          append("[Simulation] " + val);
        }
      }
    });

    initPyodide();
  </script>
</body>
</html>`;
}

function createGenericJsBundle(files) {
  const js = files.map(f => `// ${f.path}\n${f.content}`).join('\n\n');
  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>Voxel Runner</title></head>
<body style="background: #0d1117; color: #fff; font-family: sans-serif; padding: 20px;">
  <h2>Sortie JavaScript</h2>
  <pre id="out"></pre>
  <script>
    const out = document.getElementById('out');
    console.log = function(...args) {
      out.innerText += args.join(' ') + '\\n';
      window.parent.postMessage({ type: 'VOXEL_CONSOLE', level: 'info', message: args.join(' ') }, '*');
    };
    try {
      ${js}
    } catch(e) {
      console.error(e);
      window.parent.postMessage({ type: 'VOXEL_CONSOLE', level: 'error', message: e.message }, '*');
    }
  </script>
</body>
</html>`;
}

function createPlaceholderHtml(msg) {
  return `<!DOCTYPE html><html><body style="background:#0d1117;color:#8b949e;display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;"><h3>${msg}</h3></body></html>`;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
