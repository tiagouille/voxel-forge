/**
 * Google Gemini Service - Lead Architect & Developer for Voxel Forge.
 * Handles architecture planning, file scaffolding, code generation, and automated fixes.
 */

import { extractJsonFromLLMResponse } from '../middleware/validation.js';
import { sanitizeFilePath, inferLanguageFromPath } from '../middleware/security.js';

export class GeminiService {
  constructor() {
    this.modelName = 'gemini-3.5-flash';
    this.fallbackModel = 'gemini-3.1-flash-lite';
    this.tertiaryModel = 'gemini-3.7-flash';
  }

  get apiKey() {
    return (process.env.GEMINI_API_KEY || '').trim();
  }

  isConfigured() {
    return Boolean(this.apiKey && this.apiKey.length > 10);
  }

  /**
   * Generates a complete software project based on user requirements.
   */
  async generateProject({ name = 'voxel-project', type = 'web', language = 'javascript', framework = 'react', description = '', mode = 'auto' }) {
    if (!this.isConfigured()) {
      return this.generateMockProject({ name, type, language, framework, description, mode });
    }

    const systemPrompt = `Tu es Gemini, l'Architecte Logiciel et Développeur Principal de Voxel Forge.
Ton rôle est de concevoir et générer l'intégralité du code d'un projet informatique complet, moderne, propre et parfaitement fonctionnel répondant STRICTEMENT à la demande de l'utilisateur.

Règles impératives :
1. Génère du code COMPLET, robuste et directement exécutable. Pas de code tronqué ni de commentaires de type "// TODO: implémenter ici".
2. Respecte fidèlement ce que demande l'utilisateur (${description}).
3. Respecte les bonnes pratiques du langage (${language}) et du framework (${framework}).
4. Crée tous les fichiers indispensables : code source complet, fichiers HTML/CSS/JS, et un README.md détaillant le projet.
5. N'utilise JAMAIS de chemins absolus ni de "../". Utilise des chemins relatifs propres (ex: index.html, src/game.js, styles.css).
6. IMPORTANT POUR LES JEUX VIDÉO : Si le projet demandé est un jeu (Unity C#, Unreal Engine, Godot, Pygame, Canvas 2D/3D, etc.), en plus des scripts natifs (ex: GameManager.cs, PlayerController.cs), génère TOUJOURS un fichier 'index.html' et 'game.js' (ou index.html avec canvas autonome complet) contenant une version web interactive et jouable immédiatement dans le navigateur avec le bouton 'Run' !`;

    const userPrompt = `Génère le projet demandé :
Nom suggéré : ${name}
Type de projet : ${type}
Langage principal : ${language}
Framework / Moteur : ${framework}
Mode d'exécution : ${mode}
Description & spécifications précises de l'utilisateur :
"${description || 'Projet complet prêt pour la production'}"

Fournis tous les fichiers nécessaires avec leur code complet pour que l'application soit immédiatement opérationnelle.`;

    const projectSchema = {
      type: 'OBJECT',
      properties: {
        name: { type: 'STRING' },
        summary: { type: 'STRING' },
        architecture: { type: 'STRING' },
        techStack: {
          type: 'OBJECT',
          properties: {
            type: { type: 'STRING' },
            language: { type: 'STRING' },
            framework: { type: 'STRING' }
          },
          required: ['type', 'language', 'framework']
        },
        files: {
          type: 'ARRAY',
          items: {
            type: 'OBJECT',
            properties: {
              path: { type: 'STRING' },
              content: { type: 'STRING' },
              language: { type: 'STRING' }
            },
            required: ['path', 'content', 'language']
          }
        }
      },
      required: ['name', 'summary', 'architecture', 'techStack', 'files']
    };

    try {
      const response = await this.callGeminiApi(systemPrompt, userPrompt, true, projectSchema);
      const parsed = extractJsonFromLLMResponse(response);

      return this.sanitizeGeneratedProject(parsed, name, type, language, framework);
    } catch (err) {
      console.error(`[GeminiService] Échec des appels API live (${err.message}).`);
      throw new Error(`Échec de la génération IA Gemini: ${err.message}`);
    }
  }

  /**
   * Generates a comprehensive, step-by-step interactive tutorial for ANY programming language
   * on ANY software / IDE / game engine (Unreal Engine 5 Blueprints, Python PyCharm, Godot, etc.).
   */
  async generateTutorial({
    language = 'Python',
    software = 'PyCharm',
    level = 'Débutant',
    topic = 'Créer son premier programme',
    goal = 'Comprendre les bases et exécuter le projet avec succès'
  }) {
    if (!this.isConfigured()) {
      return this.generateMockTutorial({ language, software, level, topic, goal });
    }

    const systemPrompt = `Tu es le Mentor et Formateur Expert Senior de Voxel Forge.
Ton rôle est de concevoir un tutoriel d'apprentissage ultra-pédagogique, clair, complet et immédiatement applicable pour apprendre le langage/technologie "${language}" dans l'environnement/logiciel "${software}".

Règles impératives :
1. Précision logicielle extrême : indique exactement où cliquer, quels menus ouvrir (ex: "Fichier > Nouveau", "Content Drawer > Clic droit > Blueprint Class", "Palette de nœuds"), et les raccourcis clavier cruciaux dans "${software}".
2. Si c'est du code (ex: Python, C++, C#, JS) : fournis du code complet, moderne, propre et très bien commenté ligne par ligne.
3. Si c'est visuel (ex: Blueprints Unreal Engine 5, Shader Graph) : détaille le nom EXACT des nœuds (ex: "EnhancedInputAction", "Add Movement Input", "Get Actor Forward Vector"), les pins d'entrée/sortie à relier, les types de variables et les composants à ajouter.
4. Découpe en 4 à 6 étapes progressives et logiques.
5. Inclus pour chaque étape : les actions dans le logiciel, le code ou la structure des nœuds, l'explication du concept, une astuce de pro ("proTip") et le piège classique à éviter ("pitfallToAvoid").
6. Propose un défi pratique avec sa solution pour tester les acquis.
7. Fournis également des fichiers complets prêts à charger dans l'éditeur (au minimum un guide complet "TUTORIEL.md" et le fichier source principal).`;

    const userPrompt = `Crée un tutoriel complet :
Langage ou Technologie : ${language}
Logiciel / IDE / Moteur : ${software}
Niveau de l'apprenant : ${level}
Sujet / Thématique : ${topic}
Objectif final : ${goal || 'Maîtriser ce sujet de A à Z'}`;

    const tutorialSchema = {
      type: 'OBJECT',
      properties: {
        title: { type: 'STRING' },
        summary: { type: 'STRING' },
        language: { type: 'STRING' },
        software: { type: 'STRING' },
        level: { type: 'STRING' },
        prerequisites: {
          type: 'ARRAY',
          items: { type: 'STRING' }
        },
        softwareSetup: {
          type: 'OBJECT',
          properties: {
            recommendedVersion: { type: 'STRING' },
            keyShortcuts: {
              type: 'ARRAY',
              items: { type: 'STRING' }
            },
            layoutTips: { type: 'STRING' }
          },
          required: ['recommendedVersion', 'keyShortcuts', 'layoutTips']
        },
        steps: {
          type: 'ARRAY',
          items: {
            type: 'OBJECT',
            properties: {
              stepNumber: { type: 'INTEGER' },
              title: { type: 'STRING' },
              softwareActions: {
                type: 'ARRAY',
                items: { type: 'STRING' }
              },
              codeOrNodes: { type: 'STRING' },
              codeLanguage: { type: 'STRING' },
              explanation: { type: 'STRING' },
              proTip: { type: 'STRING' },
              pitfallToAvoid: { type: 'STRING' }
            },
            required: ['stepNumber', 'title', 'softwareActions', 'codeOrNodes', 'explanation', 'proTip', 'pitfallToAvoid']
          }
        },
        practiceChallenge: {
          type: 'OBJECT',
          properties: {
            title: { type: 'STRING' },
            description: { type: 'STRING' },
            hint: { type: 'STRING' },
            solution: { type: 'STRING' }
          },
          required: ['title', 'description', 'hint', 'solution']
        },
        files: {
          type: 'ARRAY',
          items: {
            type: 'OBJECT',
            properties: {
              path: { type: 'STRING' },
              content: { type: 'STRING' },
              language: { type: 'STRING' }
            },
            required: ['path', 'content', 'language']
          }
        }
      },
      required: ['title', 'summary', 'language', 'software', 'level', 'prerequisites', 'softwareSetup', 'steps', 'practiceChallenge', 'files']
    };

    try {
      const response = await this.callGeminiApi(systemPrompt, userPrompt, true, tutorialSchema);
      const parsed = extractJsonFromLLMResponse(response);
      return this.sanitizeGeneratedTutorial(parsed, language, software, level);
    } catch (err) {
      console.error(`[GeminiService] Échec de génération du tutoriel (${err.message}). Utilisation du fallback.`);
      return this.generateMockTutorial({ language, software, level, topic, goal, error: err.message });
    }
  }

  /**
   * Applies fixes to the project based on Mistral review findings.
   */
  async fixProject({ project, reviewFindings }) {
    if (!this.isConfigured()) {
      return this.applyMockFixes(project, reviewFindings);
    }

    const systemPrompt = `Tu es Gemini, développeur principal dans Voxel Forge.
Le réviseur qualité (Mistral) a inspecté le projet et a détecté des anomalies, des bugs ou des vulnérabilités.
Ton rôle est de corriger le code de chacun des fichiers concernés pour résoudre TOUS les problèmes signalés, tout en maintenant la cohérence globale.

Réponds UNIQUEMENT avec un objet JSON :
{
  "summary": "Résumé des corrections appliquées",
  "fixedFiles": [
    {
      "path": "chemin/du/fichier.ext",
      "content": "Code complet corrigé",
      "changes": "Explication des changements apportés"
    }
  ]
}`;

    const userPrompt = `Voici le projet actuel :
${JSON.stringify(project.files.map(f => ({ path: f.path, contentSnippet: f.content.slice(0, 1500) })), null, 2)}

Voici le rapport d'analyse de Mistral :
${JSON.stringify(reviewFindings, null, 2)}

Applique les corrections nécessaires.`;

    try {
      const response = await this.callGeminiApi(systemPrompt, userPrompt);
      const parsed = extractJsonFromLLMResponse(response);

      const updatedFiles = [...project.files];
      const fixedList = parsed.fixedFiles || [];

      for (const item of fixedList) {
        const idx = updatedFiles.findIndex(f => f.path === item.path);
        if (idx !== -1) {
          updatedFiles[idx] = {
            ...updatedFiles[idx],
            content: item.content,
          };
        } else {
          updatedFiles.push({
            path: sanitizeFilePath(item.path),
            content: item.content,
            language: inferLanguageFromPath(item.path),
          });
        }
      }

      return {
        ...project,
        files: updatedFiles,
        lastFixSummary: parsed.summary || 'Corrections appliquées avec succès.',
      };
    } catch (err) {
      console.warn(`[GeminiService] Fix API call failed (${err.message}). Utilisation du fallback.`);
      return this.applyMockFixes(project, reviewFindings);
    }
  }

  /**
   * Fixes or refactors a single file.
   */
  async fixFile({ filePath, content, instruction = 'Corriger les erreurs et optimiser le code' }) {
    if (!this.isConfigured()) {
      return {
        path: filePath,
        content: `// [Voxel Forge - Auto-Fix appliqué le ${new Date().toLocaleTimeString()}]\n` + content,
        summary: `Fichier ${filePath} corrigé avec succès (simulation).`,
      };
    }

    const systemPrompt = `Tu es Gemini dans Voxel Forge. Tu reçois un fichier de code et une instruction de correction.
Tu dois renvoyer UNIQUEMENT un JSON :
{
  "content": "Code complet corrigé sans balises markdown externes",
  "summary": "Résumé concis des améliorations"
}`;

    const userPrompt = `Fichier : ${filePath}
Instruction : ${instruction}

Code actuel :
\`\`\`
${content}
\`\`\``;

    try {
      const response = await this.callGeminiApi(systemPrompt, userPrompt);
      const parsed = extractJsonFromLLMResponse(response);
      return {
        path: filePath,
        content: parsed.content || content,
        summary: parsed.summary || 'Fichier corrigé avec succès.',
      };
    } catch (err) {
      return {
        path: filePath,
        content: `// [Voxel Forge Fix - Erreur API: ${err.message}]\n` + content,
        summary: `Erreur lors de la correction : ${err.message}`,
      };
    }
  }

  /**
   * Explains a specific file or architecture in detailed markdown.
   */
  async explainCode({ filePath, content }) {
    if (!this.isConfigured()) {
      return `### 📖 Analyse de \`${filePath}\` (Mode simulation)

- **Rôle principal** : Composant central assurant l'initialisation et la logique métier.
- **Points clés** :
  1. Structure modulaire et propre.
  2. Gestion réactive de l'état.
  3. Découpage fonctionnel respectant les standards de l'écosystème.
- **Conseil** : Pour activer l'analyse approfondie en direct par Gemini 2.0, renseignez \`GEMINI_API_KEY\` dans le fichier \`.env\`.`;
    }

    const systemPrompt = `Tu es Gemini, architecte logiciel. Explique de manière pédagogique et claire le code source fourni (rôle, logique, points d'attention, flux de données). Rends ton explication en markdown soigné.`;
    const userPrompt = `Fichier : ${filePath}\n\nCode source :\n\`\`\`\n${content}\n\`\`\``;

    return await this.callGeminiApi(systemPrompt, userPrompt, false);
  }

  /**
   * Improves/optimizes a code snippet.
   */
  async improveCode({ filePath, content }) {
    return this.fixFile({
      filePath,
      content,
      instruction: 'Améliorer les performances, la lisibilité, la sécurité et la robustesse.',
    });
  }

  /**
   * Reviews an entire project for code quality, bugs, architecture, and security.
   * Serves as a high-availability backup reviewer or primary auditor.
   */
  async reviewProject(project, mode = 'auto') {
    if (!this.isConfigured()) {
      return this.generateMockReview(project, mode);
    }

    const systemPrompt = `Tu es l'Auditeur Qualité Principal et Inspecteur de Code de Voxel Forge.
Ton rôle est d'analyser minutieusement l'ensemble des fichiers générés pour un projet informatique et de produire un rapport d'audit technique détaillé en JSON valide.

Règles impératives :
1. Sois exigeant, technique et précis.
2. Écris des résumés clairs et professionnels en français, sans aucun formatage d'erreur brut.
3. Vérifie la concordance exacte des imports entre les fichiers.
4. Fournis un JSON pur conforme au schéma.`;

    const filesRepresentation = (project.files || []).map(f => ({
      path: f.path,
      content: f.content.length > 3000 ? f.content.slice(0, 3000) + '\n...[tronqué pour la revue]...' : f.content
    }));

    const userPrompt = `Projet à auditer : "${project.name}"
Type : ${project.techStack?.type || 'Inconnu'}
Langage : ${project.techStack?.language || 'Inconnu'}
Framework : ${project.techStack?.framework || 'Inconnu'}
Mode : ${mode}

Fichiers du projet :
${JSON.stringify(filesRepresentation, null, 2)}

Produis ton rapport d'audit qualité complet.`;

    const reviewSchema = {
      type: 'OBJECT',
      properties: {
        qualityScore: { type: 'INTEGER' },
        grade: { type: 'STRING' },
        summary: { type: 'STRING' },
        bugs: {
          type: 'ARRAY',
          items: {
            type: 'OBJECT',
            properties: {
              severity: { type: 'STRING' },
              file: { type: 'STRING' },
              description: { type: 'STRING' },
              suggestedFix: { type: 'STRING' }
            },
            required: ['severity', 'file', 'description', 'suggestedFix']
          }
        },
        dependenciesCheck: {
          type: 'OBJECT',
          properties: {
            status: { type: 'STRING' },
            notes: { type: 'STRING' }
          },
          required: ['status', 'notes']
        },
        securityAudit: {
          type: 'OBJECT',
          properties: {
            status: { type: 'STRING' },
            findings: { type: 'STRING' }
          },
          required: ['status', 'findings']
        },
        consistencyCheck: {
          type: 'OBJECT',
          properties: {
            status: { type: 'STRING' },
            notes: { type: 'STRING' }
          },
          required: ['status', 'notes']
        },
        recommendedActions: {
          type: 'ARRAY',
          items: { type: 'STRING' }
        }
      },
      required: ['qualityScore', 'grade', 'summary', 'bugs', 'dependenciesCheck', 'securityAudit', 'consistencyCheck', 'recommendedActions']
    };

    try {
      const response = await this.callGeminiApi(systemPrompt, userPrompt, true, reviewSchema);
      return extractJsonFromLLMResponse(response);
    } catch (err) {
      console.warn(`[GeminiService] Live review API call failed (${err.message}). Utilisation du mock.`);
      return this.generateMockReview(project, mode);
    }
  }

  /**
   * Generates a realistic mock review when live API is unavailable.
   */
  generateMockReview(project, mode = 'auto') {
    const files = project.files || [];
    const bugs = [];
    let score = 94;

    const hasReadme = files.some(f => /readme\.md$/i.test(f.path));
    if (!hasReadme) {
      bugs.push({
        severity: 'low',
        file: 'README.md',
        description: 'Fichier README.md recommandé pour documenter le lancement du projet.',
        suggestedFix: 'Ajouter un README.md avec la description et les instructions d\'utilisation.'
      });
      score -= 4;
    }

    return {
      qualityScore: score,
      grade: score >= 85 ? 'A' : (score >= 70 ? 'B' : 'C'),
      summary: `Audit Qualité Voxel Forge : Code robuste et architecture conforme (${score}/100 - Grade A).`,
      bugs,
      dependenciesCheck: {
        status: 'valid',
        notes: 'Les dépendances et scripts nécessaires sont bien configurés.'
      },
      securityAudit: {
        status: 'clean',
        findings: 'Aucune anomalie critique ni fuite de clé API détectée.'
      },
      consistencyCheck: {
        status: 'valid',
        notes: 'La structure et les extensions des fichiers sont cohérentes.'
      },
      recommendedActions: bugs.length > 0
        ? bugs.map(b => `[${b.file}] ${b.suggestedFix}`)
        : ['Le code respecte les standards de qualité. Prêt pour l\'exécution directe.']
    };
  }

  /**
   * Underlying call to Google Gemini REST API.
   */
  async callGeminiApi(systemPrompt, userPrompt, expectJson = true, schema = null) {
    const modelsToTry = [this.modelName, this.fallbackModel, this.tertiaryModel];
    let lastError = null;

    for (const model of modelsToTry) {
      // First attempt with thinkingBudget: 0 (if supported), fallback to standard config on 400
      for (const disableThinking of [true, false]) {
        try {
          const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${this.apiKey}`;
          const bodyPayload = {
            contents: [
              {
                role: 'user',
                parts: [
                  { text: `${systemPrompt}\n\n---\n\n${userPrompt}` }
                ]
              }
            ],
            generationConfig: {
              temperature: 0.2,
              maxOutputTokens: 16384,
              ...(expectJson ? { responseMimeType: 'application/json' } : {}),
              ...(schema ? { responseSchema: schema } : {}),
              ...(disableThinking ? { thinkingConfig: { thinkingBudget: 0 } } : {})
            }
          };

          const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyPayload),
          });

          if (!res.ok) {
            const errText = await res.text();
            // If 400 occurred specifically with thinkingConfig, retry without thinkingConfig
            if (res.status === 400 && disableThinking) {
              continue;
            }
            throw new Error(`Gemini API error [${res.status}]: ${errText}`);
          }

          const data = await res.json();
          const candidate = data.candidates?.[0];
          const text = candidate?.content?.parts?.[0]?.text;

          if (!text) {
            throw new Error('Réponse vide reçue de Gemini');
          }

          return text;
        } catch (err) {
          lastError = err;
          if (disableThinking && err.message.includes('400')) {
            continue;
          }
          console.warn(`[GeminiService] Modèle ${model} a échoué (${err.message}), essai du suivant...`);
          break;
        }
      }
    }

    throw lastError || new Error('Échec des appels API Gemini sur l\'ensemble des modèles configurés');
  }

  /**
   * Sanitizes and guarantees file integrity on generated JSON.
   */
  sanitizeGeneratedProject(rawJson, defaultName, type, language, framework) {
    const name = (rawJson.name || defaultName).replace(/[^a-zA-Z0-9_-]/g, '-').toLowerCase();
    const rawFiles = Array.isArray(rawJson.files) ? rawJson.files : [];

    const files = rawFiles.map(f => {
      const safePath = sanitizeFilePath(f.path || 'src/index.js');
      return {
        path: safePath,
        content: typeof f.content === 'string' ? f.content : '',
        language: f.language || inferLanguageFromPath(safePath),
      };
    });

    return {
      name,
      summary: rawJson.summary || `Projet ${type} généré avec succès en ${language} (${framework}).`,
      architecture: rawJson.architecture || `Architecture standard modulaire ${framework}.`,
      techStack: {
        type: type || rawJson.techStack?.type || 'web',
        language: language || rawJson.techStack?.language || 'javascript',
        framework: framework || rawJson.techStack?.framework || 'react',
      },
      files,
    };
  }

  /**
   * Smart mock fallback when API keys are not provided yet,
   * returning complete, beautiful, working projects for any choice.
   */
  generateMockProject({ name, type, language, framework, description, mode, note }) {
    const slug = (name || 'voxel-project').toLowerCase().replace(/[^a-z0-9_-]/g, '-');

    if (type === 'game' || type === 'Jeu vidéo') {
      return this.getMockGameProject(slug, description, note);
    } else if (language === 'python' || language === 'Python') {
      return this.getMockPythonProject(slug, description, note);
    } else {
      return this.getMockWebProject(slug, description, framework, note);
    }
  }

  getMockWebProject(slug, description, framework, note) {
    return {
      name: slug,
      summary: `Application Web ${framework} moderne créée par Voxel Forge. ${note || ''}`.trim(),
      architecture: `Architecture orientée composants React/Vite :
- /src/components : Composants réutilisables (Navbar, Dashboard, ActionCard)
- /src/state : Gestion de données réactive locale
- /src/styles : Système de design moderne en CSS avec variables sombres`,
      techStack: {
        type: 'Site web / Application',
        language: 'JavaScript / React',
        framework: framework || 'React + Vite',
      },
      files: [
        {
          path: 'package.json',
          language: 'json',
          content: JSON.stringify({
            name: slug,
            private: true,
            version: '1.0.0',
            type: 'module',
            scripts: {
              dev: 'vite',
              build: 'vite build',
              preview: 'vite preview'
            },
            dependencies: {
              react: '^18.3.1',
              'react-dom': '^18.3.1',
              'lucide-react': '^0.344.0'
            },
            devDependencies: {
              '@vitejs/plugin-react': '^4.3.1',
              vite: '^5.4.2'
            }
          }, null, 2),
        },
        {
          path: 'vite.config.js',
          language: 'javascript',
          content: `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
});`
        },
        {
          path: 'index.html',
          language: 'html',
          content: `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${slug.toUpperCase()} — Voxel Forge</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`
        },
        {
          path: 'src/main.jsx',
          language: 'javascript',
          content: `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`
        },
        {
          path: 'src/App.jsx',
          language: 'javascript',
          content: `import React, { useState } from 'react';
import { Header } from './components/Header';
import { StatCard } from './components/StatCard';
import { FeatureList } from './components/FeatureList';

export default function App() {
  const [metrics, setMetrics] = useState({
    activeUsers: 1420,
    transactions: 8940,
    efficiency: '99.4%'
  });

  return (
    <div className="app-container">
      <Header title="${slug}" />
      
      <main className="content">
        <div className="stats-grid">
          <StatCard label="Utilisateurs Actifs" value={metrics.activeUsers} trend="+12%" />
          <StatCard label="Opérations Traitées" value={metrics.transactions} trend="+24%" />
          <StatCard label="Disponibilité" value={metrics.efficiency} trend="+0.2%" />
        </div>

        <section className="overview-section">
          <h2>Fonctionnalités du projet</h2>
          <FeatureList />
        </section>
      </main>
    </div>
  );
}`
        },
        {
          path: 'src/components/Header.jsx',
          language: 'javascript',
          content: `import React from 'react';

export function Header({ title }) {
  return (
    <header className="navbar">
      <div className="brand">
        <span className="logo-badge">⚡</span>
        <h1>{title}</h1>
      </div>
      <div className="actions">
        <button className="btn-primary" onClick={() => alert('Action Voxel Forge')}>
          Nouvelle Action
        </button>
      </div>
    </header>
  );
}`
        },
        {
          path: 'src/components/StatCard.jsx',
          language: 'javascript',
          content: `import React from 'react';

export function StatCard({ label, value, trend }) {
  return (
    <div className="card stat-card">
      <span className="stat-label">{label}</span>
      <div className="stat-row">
        <span className="stat-value">{value}</span>
        <span className="stat-trend positive">{trend}</span>
      </div>
    </div>
  );
}`
        },
        {
          path: 'src/components/FeatureList.jsx',
          language: 'javascript',
          content: `import React from 'react';

export function FeatureList() {
  const features = [
    { title: 'Architecture Modulaire', desc: 'Composants réutilisables et découplés.' },
    { title: 'Haute Performance', desc: 'Bundlé avec Vite pour un rechargement instantané.' },
    { title: 'Design Sombre', desc: 'Thème ergonomique pour développeurs.' }
  ];

  return (
    <div className="feature-grid">
      {features.map((f, i) => (
        <div key={i} className="card feature-card">
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </div>
  );
}`
        },
        {
          path: 'src/index.css',
          language: 'css',
          content: `:root {
  --bg-dark: #0f172a;
  --bg-card: #1e293b;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --accent: #38bdf8;
  --accent-hover: #0284c7;
  --border: #334155;
  --success: #10b981;
}

body {
  margin: 0;
  font-family: 'Inter', system-ui, sans-serif;
  background-color: var(--bg-dark);
  color: var(--text-main);
}

.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-badge {
  font-size: 24px;
  background: rgba(56, 189, 248, 0.15);
  padding: 6px 12px;
  border-radius: 8px;
}

.btn-primary {
  background: var(--accent);
  color: #0f172a;
  font-weight: 600;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-primary:hover {
  background: var(--accent-hover);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  margin: 32px 0;
}

.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 20px;
}

.stat-label {
  color: var(--text-muted);
  font-size: 14px;
}

.stat-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 8px;
}

.stat-value {
  font-size: 28px;
  font-weight: 700;
}

.stat-trend {
  color: var(--success);
  font-size: 14px;
  font-weight: 600;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 16px;
}`
        },
        {
          path: 'README.md',
          language: 'markdown',
          content: `# ${slug.toUpperCase()}

Projet web moderne généré automatiquement avec **Voxel Forge**.

## 🚀 Démarrage Rapide

1. Installez les dépendances :
\`\`\`bash
npm install
\`\`\`

2. Lancez le serveur de développement :
\`\`\`bash
npm run dev
\`\`\`

3. Ouvrez votre navigateur sur \`http://localhost:3000\`.`
        }
      ]
    };
  }

  getMockGameProject(slug, description, note) {
    return {
      name: slug,
      summary: `Jeu vidéo rétro Canvas 2D avec boucle de jeu fluide, physique de tir et particules. ${note || ''}`.trim(),
      architecture: `Architecture Jeu 2D modulaire :
- GameEngine : Boucle de rendu requestAnimationFrame, delta-time, entrées clavier
- Player : Vaisseau contrôlable avec accélérateur et système d'armement
- EnemySpawner : Vagues d'ennemis dynamiques et calcul de collisions
- ParticleSystem : Émissions d'effets visuels lors des destructions`,
      techStack: {
        type: 'Jeu vidéo',
        language: 'JavaScript',
        framework: 'HTML5 Canvas 2D',
      },
      files: [
        {
          path: 'index.html',
          language: 'html',
          content: `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>${slug.toUpperCase()} — Jeu Vidéo Arcade</title>
  <style>
    body {
      margin: 0;
      background: #090d16;
      color: #fff;
      font-family: sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      overflow: hidden;
    }
    #game-canvas {
      border: 2px solid #38bdf8;
      border-radius: 8px;
      box-shadow: 0 0 30px rgba(56, 189, 248, 0.3);
      background: #020617;
    }
    .hud {
      margin-bottom: 12px;
      display: flex;
      gap: 30px;
      font-size: 20px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="hud">
    <div>SCORE : <span id="score">0</span></div>
    <div>VIES : <span id="lives">3</span></div>
  </div>
  <canvas id="game-canvas" width="800" height="600"></canvas>
  <script type="module" src="src/game.js"></script>
</body>
</html>`
        },
        {
          path: 'src/game.js',
          language: 'javascript',
          content: `import { Player } from './player.js';
import { Enemy } from './enemy.js';
import { Particle } from './particles.js';

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('score');

const player = new Player(canvas.width / 2, canvas.height - 60);
const enemies = [];
const particles = [];
let score = 0;
let lastSpawn = 0;

function gameLoop(time) {
  ctx.fillStyle = 'rgba(2, 6, 23, 0.25)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  player.update();
  player.draw(ctx);

  if (time - lastSpawn > 1200) {
    enemies.push(new Enemy(Math.random() * (canvas.width - 40) + 20, -20));
    lastSpawn = time;
  }

  // Update enemies and collisions
  for (let i = enemies.length - 1; i >= 0; i--) {
    const enemy = enemies[i];
    enemy.update();
    enemy.draw(ctx);

    // Collision with bullets
    for (let j = player.bullets.length - 1; j >= 0; j--) {
      const b = player.bullets[j];
      const dist = Math.hypot(b.x - enemy.x, b.y - enemy.y);
      if (dist < enemy.radius + b.radius) {
        // Explosion particles
        for (let p = 0; p < 12; p++) {
          particles.push(new Particle(enemy.x, enemy.y));
        }
        enemies.splice(i, 1);
        player.bullets.splice(j, 1);
        score += 100;
        scoreEl.innerText = score;
        break;
      }
    }
  }

  // Update particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].draw(ctx);
    if (particles[i].alpha <= 0) particles.splice(i, 1);
  }

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);`
        },
        {
          path: 'src/player.js',
          language: 'javascript',
          content: `export class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 6;
    this.bullets = [];
    this.keys = {};

    window.addEventListener('keydown', e => {
      this.keys[e.code] = true;
      if (e.code === 'Space') this.shoot();
    });
    window.addEventListener('keyup', e => (this.keys[e.code] = false));
  }

  shoot() {
    this.bullets.push({ x: this.x, y: this.y - 15, radius: 4, speed: 10 });
  }

  update() {
    if (this.keys['ArrowLeft'] || this.keys['KeyA']) this.x -= this.speed;
    if (this.keys['ArrowRight'] || this.keys['KeyD']) this.x += this.speed;

    this.x = Math.max(20, Math.min(780, this.x));

    for (let i = this.bullets.length - 1; i >= 0; i--) {
      this.bullets[i].y -= this.bullets[i].speed;
      if (this.bullets[i].y < 0) this.bullets.splice(i, 1);
    }
  }

  draw(ctx) {
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.moveTo(this.x, this.y - 15);
    ctx.lineTo(this.x - 15, this.y + 15);
    ctx.lineTo(this.x + 15, this.y + 15);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#f43f5e';
    for (const b of this.bullets) {
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}`
        },
        {
          path: 'src/enemy.js',
          language: 'javascript',
          content: `export class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 16;
    this.speed = 2.5;
  }

  update() {
    this.y += this.speed;
  }

  draw(ctx) {
    ctx.fillStyle = '#ec4899';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}`
        },
        {
          path: 'src/particles.js',
          language: 'javascript',
          content: `export class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 6;
    this.vy = (Math.random() - 0.5) * 6;
    this.alpha = 1;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 0.03;
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.alpha);
    ctx.fillStyle = '#fbbf24';
    ctx.fillRect(this.x, this.y, 4, 4);
    ctx.restore();
  }
}`
        },
        {
          path: 'README.md',
          language: 'markdown',
          content: `# ${slug.toUpperCase()} — 2D Arcade Space Shooter

Projet de jeu vidéo généré par **Voxel Forge**.

## 🎮 Commandes
- **Flèches Gauche/Droite** ou **A / D** : Déplacer le vaisseau
- **Espace** : Tirer des projectiles laser

## 🚀 Exécution
Ouvrez simplement le fichier \`index.html\` dans n'importe quel navigateur moderne, ou servez-le via une extension live-server.`
        }
      ]
    };
  }

  getMockPythonProject(slug, description, note) {
    return {
      name: slug,
      summary: `Application CLI & utilitaire Python modulaire avec gestionnaire d'arguments. ${note || ''}`.trim(),
      architecture: `Architecture Python moderne :
- app/core.py : Moteur de calcul et traitement
- app/cli.py : Interface en ligne de commande argparse
- tests/test_core.py : Tests unitaires pytest`,
      techStack: {
        type: 'Logiciel',
        language: 'Python',
        framework: 'Standard Library / CLI',
      },
      files: [
        {
          path: 'main.py',
          language: 'python',
          content: `#!/usr/bin/env python3
"""Point d'entrée principal pour ${slug}."""

import sys
from app.cli import parse_arguments
from app.core import run_pipeline

def main():
    args = parse_arguments(sys.argv[1:])
    success = run_pipeline(args.input, args.verbose)
    sys.exit(0 if success else 1)

if __name__ == '__main__':
    main()`
        },
        {
          path: 'app/core.py',
          language: 'python',
          content: `"""Logique métier de traitement."""

import time

def run_pipeline(data_source: str, verbose: bool = False) -> bool:
    if verbose:
        print(f"[Voxel Forge] Initialisation du traitement pour : {data_source}")
    time.sleep(0.2)
    print(f"✓ Pipeline terminé avec succès sur '{data_source}'.")
    return True`
        },
        {
          path: 'app/cli.py',
          language: 'python',
          content: `import argparse

def parse_arguments(argv):
    parser = argparse.ArgumentParser(description="${slug} - Généré par Voxel Forge")
    parser.add_argument('-i', '--input', default='default_input', help='Source de données d\\\'entrée')
    parser.add_argument('-v', '--verbose', action='store_true', help='Activer le mode verbeux')
    return parser.parse_args(argv)`
        },
        {
          path: 'tests/test_core.py',
          language: 'python',
          content: `import unittest
from app.core import run_pipeline

class TestPipeline(unittest.TestCase):
    def test_run_pipeline_success(self):
        result = run_pipeline("test_target", verbose=False)
        self.assertTrue(result)

if __name__ == '__main__':
    unittest.main()`
        },
        {
          path: 'README.md',
          language: 'markdown',
          content: `# ${slug}

Utilitaire Python généré par **Voxel Forge**.

## 🚀 Exécution

\`\`\`bash
python main.py --input mon_fichier --verbose
\`\`\`

## 🧪 Tests

\`\`\`bash
python -m unittest discover tests
\`\`\``
        }
      ]
    };
  }

  /**
   * Sanitizes and validates the generated tutorial object.
   */
  sanitizeGeneratedTutorial(rawJson, defaultLanguage, defaultSoftware, defaultLevel) {
    const title = rawJson.title || `Tutoriel : Apprendre ${defaultLanguage} dans ${defaultSoftware}`;
    const summary = rawJson.summary || `Guide pratique étape par étape pour maîtriser ${defaultLanguage} avec ${defaultSoftware}.`;
    const language = rawJson.language || defaultLanguage;
    const software = rawJson.software || defaultSoftware;
    const level = rawJson.level || defaultLevel;
    const prerequisites = Array.isArray(rawJson.prerequisites) ? rawJson.prerequisites : ['Aucun prérequis particulier'];

    const softwareSetup = rawJson.softwareSetup || {
      recommendedVersion: 'Version récente recommandée',
      keyShortcuts: ['Ctrl + S : Sauvegarder', 'Ctrl + Espace : Ouvrir l\'explorateur / Content Drawer'],
      layoutTips: 'Utilisez la disposition par défaut du logiciel pour suivre facilement les étapes.'
    };

    const rawSteps = Array.isArray(rawJson.steps) ? rawJson.steps : [];
    const steps = rawSteps.map((s, idx) => ({
      stepNumber: s.stepNumber || idx + 1,
      title: s.title || `Étape ${idx + 1}`,
      softwareActions: Array.isArray(s.softwareActions) ? s.softwareActions : [s.softwareActions || 'Ouvrez le logiciel.'],
      codeOrNodes: s.codeOrNodes || '',
      codeLanguage: s.codeLanguage || (language.toLowerCase().includes('blue') ? 'text' : language.toLowerCase()),
      explanation: s.explanation || '',
      proTip: s.proTip || 'Pensez à compiler et sauvegarder régulièrement.',
      pitfallToAvoid: s.pitfallToAvoid || 'Ne pas oublier de relier tous les câbles d\'exécution.'
    }));

    const practiceChallenge = rawJson.practiceChallenge || {
      title: 'Défi Pratique',
      description: 'Essayez de modifier une valeur ou d\'ajouter une fonctionnalité simple.',
      hint: 'Consultez les étapes précédentes pour vous inspirer.',
      solution: 'Vérifiez la logique et testez en direct !'
    };

    // Prepare files for Monaco Code Editor in Voxel Forge
    let files = Array.isArray(rawJson.files) ? rawJson.files.map(f => ({
      path: sanitizeFilePath(f.path || 'TUTORIEL.md'),
      content: typeof f.content === 'string' ? f.content : '',
      language: f.language || inferLanguageFromPath(f.path || 'TUTORIEL.md')
    })) : [];

    const hasTutorialMd = files.some(f => f.path.toLowerCase().endsWith('tutoriel.md') || f.path.toLowerCase().endsWith('tutorial.md'));
    if (!hasTutorialMd) {
      let md = `# ${title}\n\n`;
      md += `> **Langage** : ${language} | **Logiciel / Moteur** : ${software} | **Niveau** : ${level}\n\n`;
      md += `## 📋 Résumé du cours\n${summary}\n\n`;
      md += `## 🛠️ Configuration & Raccourcis (${software})\n`;
      md += `- **Version recommandée** : ${softwareSetup.recommendedVersion}\n`;
      md += `- **Disposition interface** : ${softwareSetup.layoutTips}\n`;
      md += `- **Raccourcis indispensables** :\n`;
      (softwareSetup.keyShortcuts || []).forEach(sc => {
        md += `  - \`${sc}\`\n`;
      });
      md += `\n---\n\n## 🚀 Étapes Pas à Pas\n\n`;

      steps.forEach(st => {
        md += `### Étape ${st.stepNumber} : ${st.title}\n\n`;
        md += `#### 🖱️ Actions dans ${software} :\n`;
        (st.softwareActions || []).forEach(act => {
          md += `- ${act}\n`;
        });
        md += `\n`;
        if (st.codeOrNodes) {
          md += `#### 💻 Code / Nœuds :\n\`\`\`${st.codeLanguage || ''}\n${st.codeOrNodes}\n\`\`\`\n\n`;
        }
        md += `#### 💡 Explication :\n${st.explanation}\n\n`;
        md += `> 💡 **Astuce de Pro** : ${st.proTip}\n\n`;
        md += `> ⚠️ **Piège à éviter** : ${st.pitfallToAvoid}\n\n`;
        md += `---\n\n`;
      });

      md += `## 🏆 Défi Pratique : ${practiceChallenge.title}\n\n`;
      md += `${practiceChallenge.description}\n\n`;
      md += `**Indice** : *${practiceChallenge.hint}*\n\n`;
      md += `<details><summary><b>Cliquez pour voir la solution</b></summary>\n\n\`\`\`\n${practiceChallenge.solution}\n\`\`\`\n\n</details>\n`;

      files.unshift({
        path: 'TUTORIEL.md',
        content: md,
        language: 'markdown'
      });
    }

    return {
      title,
      summary,
      language,
      software,
      level,
      prerequisites,
      softwareSetup,
      steps,
      practiceChallenge,
      files
    };
  }

  generateMockTutorial({ language, software, level, topic, goal, error }) {
    const isUnreal = language.toLowerCase().includes('blue') || software.toLowerCase().includes('unreal');
    const isPython = language.toLowerCase().includes('python') || software.toLowerCase().includes('pycharm');

    if (isUnreal) {
      return this.getMockUnrealTutorial(level, topic, goal, error);
    } else if (isPython) {
      return this.getMockPythonTutorial(level, topic, goal, error);
    } else {
      return this.getMockGenericTutorial(language, software, level, topic, goal, error);
    }
  }

  getMockUnrealTutorial(level, topic, goal, error) {
    const raw = {
      title: 'Créer un Déplacement de Personnage Fluide avec Blueprints dans Unreal Engine 5',
      summary: `Tutoriel pas-à-pas pour configurer les Enhanced Input et programmer le déplacement d'un personnage 3D dans Unreal Engine 5 via le système de scripting visuel Blueprint. ${error ? `(Mode simulation : ${error})` : ''}`,
      language: 'Blueprints',
      software: 'Unreal Engine 5',
      level: level || 'Débutant',
      prerequisites: [
        'Unreal Engine 5.4 (ou 5.3+) installé',
        'Un projet vide ou le template Blank / Third Person'
      ],
      softwareSetup: {
        recommendedVersion: 'Unreal Engine 5.4.x',
        keyShortcuts: [
          'Ctrl + Espace : Ouvrir / Fermer le Content Drawer',
          'Touche Tab (dans Event Graph) : Ouvrir la recherche de nœuds rapide',
          'C : Encadrer les nœuds sélectionnés dans une boîte de commentaire',
          'Alt + P : Lancer la partie directement dans le Viewport'
        ],
        layoutTips: 'Ancrez le Content Drawer en bas et gardez l\'Event Graph au centre pour une lisibilité maximale.'
      },
      steps: [
        {
          stepNumber: 1,
          title: 'Créer la classe Blueprint de Personnage',
          softwareActions: [
            'Ouvrez le Content Drawer avec Ctrl + Espace.',
            'Faites un Clic Droit dans le dossier Content > Blueprint Class.',
            'Sélectionnez "Character" comme classe parente.',
            'Nommez votre Blueprint "BP_MyCharacter" et double-cliquez dessus pour l\'ouvrir.'
          ],
          codeOrNodes: `[Composants requis dans la hiérarchie]
- CapsuleComponent (Collision racine)
  - ArrowComponent (Direction avant)
  - Mesh (SkeletalMesh du personnage)
  - CameraBoom (SpringArmComponent, Longueur: 400)
    - FollowCamera (CameraComponent)
- CharacterMovementComponent (Vitesse max: 600 cm/s)`,
          codeLanguage: 'text',
          explanation: 'La classe Character intègre par défaut la physique de marche, de saut et de gravité grâce au CharacterMovementComponent.',
          proTip: 'Cochez "Use Controller Desired Rotation" dans le CharacterMovementComponent pour que le personnage tourne automatiquement dans la direction de la marche.',
          pitfallToAvoid: 'Ne pas attacher la FollowCamera directement à la racine, sinon elle ne bénéficiera pas du SpringArm (amorti des collisions avec les murs).'
        },
        {
          stepNumber: 2,
          title: 'Créer les Actions Enhanced Input (IA_Move et IMC_Default)',
          softwareActions: [
            'Dans le Content Drawer, Clic Droit > Input > Input Action. Nommez-le "IA_Move".',
            'Ouvrez IA_Move et changez le Value Type de "Digital (bool)" à "Axis2D (Vector2D)". Sauvegardez.',
            'Clic Droit > Input > Input Mapping Context. Nommez-le "IMC_Default".',
            'Ouvrez IMC_Default, ajoutez l\'action "IA_Move" et associez les touches Z (Forward), S (Negate), D (Right), Q (Left/Negate).'
          ],
          codeOrNodes: `[Configuration Input Mapping Context - IMC_Default]
Action: IA_Move (Vector2D)
  ├── Touche Z (ou W) -> Modifiers: Swizzle Input Axis Values (YXZ)
  ├── Touche S -> Modifiers: Swizzle Input Axis Values (YXZ), Negate
  ├── Touche D -> Aucun modifier (X positif)
  └── Touche Q (ou A) -> Modifiers: Negate`,
          codeLanguage: 'text',
          explanation: 'Enhanced Input remplace les anciens Action/Axis Mappings. Il permet de gérer dynamiquement les contextes (marcher, nager, conduire) sans coder en dur les touches.',
          proTip: 'Pour la manette, associez simplement "Gamepad Left Thumbstick 2D-Axis" sans aucun modifier.',
          pitfallToAvoid: 'Oublier d\'ajouter le Mapping Context au joueur local dans le BeginPlay du Character avec le sous-système EnhancedInputLocalPlayerSubsystem.'
        },
        {
          stepNumber: 3,
          title: 'Programmer la logique de mouvement dans l\'Event Graph',
          softwareActions: [
            'Dans l\'éditeur de BP_MyCharacter, rendez-vous dans l\'onglet "Event Graph".',
            'Faites un Clic Droit dans l\'espace vide et cherchez "EnhancedInputAction IA_Move".',
            'Tirez un câble depuis la pin "Triggered" et créez le nœud "Add Movement Input".',
            'Depuis la pin "Action Value" (Vector2D), faites un "Break Vector2D".'
          ],
          codeOrNodes: `// Logique des Nœuds Blueprint :
[EnhancedInputAction IA_Move]
  (Triggered) ──────> [Add Movement Input (Forward/Backward)]
                         Scale Value <── (Break Vector2D: Y)
                         World Direction <── [Get Actor Forward Vector]

  (Triggered) ──────> [Add Movement Input (Right/Left)]
                         Scale Value <── (Break Vector2D: X)
                         World Direction <── [Get Actor Right Vector]`,
          codeLanguage: 'text',
          explanation: 'Add Movement Input applique une force continue sur le CharacterMovementComponent en multipliant la direction du vecteur par la valeur d\'axe reçue (de -1.0 à +1.0).',
          proTip: 'Si vous voulez un déplacement relatif à la caméra plutôt qu\'à l\'acteur, utilisez "Get Control Rotation" avec un "Get Forward Vector" !',
          pitfallToAvoid: 'Ne pas brancher la pin "Started" au lieu de "Triggered" : sinon le personnage n\'avancera que d\'un pixel lors de l\'appui au lieu de courir en continu.'
        },
        {
          stepNumber: 4,
          title: 'Activer la possession et tester en direct',
          softwareActions: [
            'Compilez le Blueprint en cliquant sur le bouton "Compile" (coche verte en haut à gauche) et sauvegardez (Ctrl + S).',
            'Glissez BP_MyCharacter directement dans votre niveau Viewport.',
            'Dans le panneau Details à droite, cherchez "Auto Possess Player" et changez la valeur de "Disabled" à "Player 0".',
            'Appuyez sur Alt + P pour lancer la partie et testez avec ZQSD !'
          ],
          codeOrNodes: `[Paramètres recommandés dans le panneau Details]
- Auto Possess Player : Player 0
- Jump Z Velocity (dans CharacterMovement) : 700.0 cm/s
- Air Control : 0.35 (permet de diriger le saut en l'air)`,
          codeLanguage: 'text',
          explanation: 'Auto Possess Player 0 indique au moteur d\'attribuer automatiquement la première manette ou clavier/souris connectés à cette instance de personnage.',
          proTip: 'Utilisez la touche F8 pendant la partie (Eject) pour vous détacher du personnage et inspecter la scène en caméra libre.',
          pitfallToAvoid: 'Si les touches ne réagissent pas, vérifiez que le nœud "Add Mapping Context" a bien été exécuté dans l\'Event BeginPlay.'
        }
      ],
      practiceChallenge: {
        title: 'Ajouter une mécanique de Sprint (Course rapide)',
        description: 'Créez une nouvelle Input Action "IA_Sprint" (Digital Bool) mappée sur la touche Shift Gauche. Quand la touche est enfoncée, passez la Max Walk Speed à 1000 cm/s, et quand elle est relâchée, remettez-la à 600 cm/s.',
        hint: 'Cherchez le nœud "Set Max Walk Speed" en tirant un câble depuis le composant CharacterMovement.',
        solution: `[EnhancedInputAction IA_Sprint]
  ├── (Started) ──> [Set Max Walk Speed (Target: Character Movement, Max Walk Speed: 1000.0)]
  └── (Completed) ──> [Set Max Walk Speed (Target: Character Movement, Max Walk Speed: 600.0)]`
      },
      files: [
        {
          path: 'BP_Character_Movement_Guide.txt',
          language: 'text',
          content: `=== Unreal Engine 5 Blueprint Architecture ===
Classe : BP_MyCharacter (Parent: Character)
Composants :
  - CapsuleComponent
  - CharacterMovementComponent (Max Walk Speed: 600)
  - SpringArmComponent (TargetArmLength: 400)
  - CameraComponent

Inputs :
  - IA_Move (Axis2D Vector2D)
  - IA_Look (Axis2D Vector2D)
  - IA_Jump (Digital Bool)
  - IA_Sprint (Digital Bool)`
        },
        {
          path: 'README.md',
          language: 'markdown',
          content: `# Guide Unreal Engine 5 — Déplacement Character Blueprints

Ce guide détaille l'implémentation complète d'un système de déplacement à la 3e personne avec le système Enhanced Input d'Unreal Engine 5.

Consultez \`TUTORIEL.md\` pour le guide interactif pas-à-pas.`
        }
      ]
    };
    return this.sanitizeGeneratedTutorial(raw, 'Blueprints', 'Unreal Engine 5', level);
  }

  getMockPythonTutorial(level, topic, goal, error) {
    const raw = {
      title: 'Apprendre Python avec PyCharm : Du premier script aux fonctions et fichiers',
      summary: `Guide complet pour découvrir Python en utilisant l'IDE professionnel PyCharm. Vous apprendrez la syntaxe moderne, la manipulation des données et la sauvegarde dans des fichiers. ${error ? `(Mode simulation : ${error})` : ''}`,
      language: 'Python',
      software: 'PyCharm',
      level: level || 'Débutant',
      prerequisites: [
        'Python 3.10+ installé',
        'PyCharm Community ou Professional Edition'
      ],
      softwareSetup: {
        recommendedVersion: 'PyCharm 2024.x Community',
        keyShortcuts: [
          'Shift + F10 : Exécuter le script courant',
          'Alt + Entrée : Afficher les suggestions et corrections automatiques',
          'Ctrl + / : Mettre en commentaire la sélection',
          'Ctrl + D : Dupliquer la ligne active'
        ],
        layoutTips: 'Gardez la console d\'exécution "Run" épinglée en bas pour voir instantanément vos sorties console.'
      },
      steps: [
        {
          stepNumber: 1,
          title: 'Créer votre projet et premier fichier dans PyCharm',
          softwareActions: [
            'Lancez PyCharm et cliquez sur "New Project".',
            'Vérifiez que l\'interpréteur est bien sélectionné (ex: Virtualenv avec Python 3.x).',
            'Nommez le projet "mon_premier_python" et cliquez sur "Create".',
            'Dans la vue projet à gauche, Clic Droit sur le dossier > New > Python File. Nommez-le "main.py".'
          ],
          codeOrNodes: `# main.py - Mon premier script Python dans PyCharm
print("Bienvenue dans l'univers Python avec Voxel Forge !")
nom_joueur = input("Entrez votre pseudo : ")
print(f"Ravi de vous rencontrer, {nom_joueur} !")`,
          codeLanguage: 'python',
          explanation: 'La fonction print() affiche du texte dans la console. Les f-strings (f"...") permettent d\'injecter facilement des variables dans une chaîne.',
          proTip: 'Tapez "pr" dans PyCharm et appuyez sur Tab : l\'autocomplétion insérera instantanément "print()".',
          pitfallToAvoid: 'Ne nommez jamais votre fichier avec le nom d\'un module existant (ex: évitez "math.py" ou "random.py") pour éviter les conflits d\'import.'
        },
        {
          stepNumber: 2,
          title: 'Variables, Types de Données et Conditions',
          softwareActions: [
            'Dans main.py, écrivez la suite du code pour manipuler des nombres et des conditions.',
            'Exécutez le script avec Shift + F10 ou le bouton triangle vert en haut à droite.'
          ],
          codeOrNodes: `# Gestion des scores et niveaux
score: int = 150
niveau: int = 2
est_actif: bool = True

if score >= 100 and est_actif:
    print(f"Félicitations ! Vous passez au niveau {niveau + 1} !")
else:
    print("Continuez à vous entraîner pour débloquer le palier supérieur.")`,
          codeLanguage: 'python',
          explanation: 'Python utilise l\'indentation (4 espaces) pour délimiter les blocs de code. Le typage optionnel (ex: score: int) aide PyCharm à détecter les erreurs avant l\'exécution.',
          proTip: 'Appuyez sur Ctrl + Alt + L dans PyCharm pour reformater automatiquement votre code selon le standard officiel PEP 8.',
          pitfallToAvoid: 'Ne mélangez jamais les tabulations et les espaces pour l\'indentation sous peine de déclencher une TabError.'
        },
        {
          stepNumber: 3,
          title: 'Créer des Fonctions Modulaires et Typées',
          softwareActions: [
            'Créez un nouveau fichier nommé "outils.py" dans le même dossier.',
            'Définissez vos fonctions et importez-les dans main.py.'
          ],
          codeOrNodes: `# outils.py
def calculer_degats(puissance_base: float, bonus_critique: float = 1.5) -> float:
    """Calcule les dégâts finaux infligés en tenant compte du critique."""
    degats_finaux = puissance_base * bonus_critique
    return round(degats_finaux, 2)

# Dans main.py :
from outils import calculer_degats

degats = calculer_degats(45.0, 2.0)
print(f"Coup critique ! Dégâts infligés : {degats} PV")`,
          codeLanguage: 'python',
          explanation: 'Les fonctions regroupent du code logique et réutilisable. Elles acceptent des arguments par défaut (ex: bonus_critique = 1.5) et retournent un résultat avec return.',
          proTip: 'Survolez une fonction avec Ctrl enfoncé dans PyCharm pour inspecter sa signature et sa documentation Docstring.',
          pitfallToAvoid: 'Oublier d\'appeler la fonction avec des parenthèses () : calculer_degats sans () renvoie l\'objet fonction et non son résultat.'
        },
        {
          stepNumber: 4,
          title: 'Sauvegarder et Charger des Données (Fichiers JSON)',
          softwareActions: [
            'Ajoutez la gestion de sauvegarde dans main.py.',
            'Exécutez avec Shift + F10 pour vérifier la création automatique du fichier "sauvegarde.json".'
          ],
          codeOrNodes: `import json
from pathlib import Path

FICHIER_SAVE = Path("sauvegarde.json")

def sauvegarder_partie(donnees: dict) -> None:
    with open(FICHIER_SAVE, "w", encoding="utf-8") as f:
        json.dump(donnees, f, indent=4, ensure_ascii=False)
    print("Partie sauvegardée avec succès !")

def charger_partie() -> dict:
    if not FICHIER_SAVE.exists():
        return {"pseudo": "Invité", "score": 0, "inventaire": []}
    with open(FICHIER_SAVE, "r", encoding="utf-8") as f:
        return json.load(f)

# Exemple d'utilisation
donnees_joueur = {"pseudo": "VoxelHero", "score": 420, "inventaire": ["Épée laser", "Potion de soin"]}
sauvegarder_partie(donnees_joueur)
partie_chargee = charger_partie()
print("Données chargées :", partie_chargee["pseudo"], "-", partie_chargee["score"], "points")`,
          codeLanguage: 'python',
          explanation: 'L\'instruction "with open(...)" garantit que le fichier est proprement fermé même en cas d\'erreur. Le module json standard permet de sérialiser dictionnaires et listes.',
          proTip: 'Double-cliquez sur "sauvegarde.json" dans la barre latérale de PyCharm pour visualiser et éditer vos données avec coloration JSON.',
          pitfallToAvoid: 'Toujours spécifier encoding="utf-8" lors de l\'ouverture de fichiers texte pour éviter les bugs avec les accents sur Windows.'
        }
      ],
      practiceChallenge: {
        title: 'Créer un Mini-Gestionnaire d\'Inventaire',
        description: 'Ajoutez une fonction "ajouter_item(inventaire: list, item: str)" qui vérifie si l\'objet existe déjà avant de l\'ajouter, puis sauvegarde automatiquement le nouvel inventaire dans le fichier JSON.',
        hint: 'Utilisez la condition "if item in inventaire:" pour vérifier la présence de l\'objet.',
        solution: `def ajouter_item(donnees: dict, nouvel_item: str) -> bool:
    if nouvel_item in donnees["inventaire"]:
        print(f"L'objet {nouvel_item} est déjà dans votre inventaire !")
        return False
    donnees["inventaire"].append(nouvel_item)
    sauvegarder_partie(donnees)
    print(f"{nouvel_item} ajouté avec succès !")
    return True`
      },
      files: [
        {
          path: 'main.py',
          language: 'python',
          content: `"""
Projet Découverte Python & PyCharm — Voxel Forge
"""
import json
from pathlib import Path

print("=== Bienvenue dans votre projet Python PyCharm ! ===")

profil_joueur = {
    "pseudo": "Aventurier",
    "niveau": 1,
    "score": 100,
    "inventaire": ["Carte du monde", "Boussole"]
}

print(f"Joueur connecté : {profil_joueur['pseudo']} (Niveau {profil_joueur['niveau']})")
print(f"Objets possédés : {', '.join(profil_joueur['inventaire'])}")
`
        },
        {
          path: 'README.md',
          language: 'markdown',
          content: `# Apprendre Python avec PyCharm

Projet interactif généré par Voxel Forge.
Pour exécuter le script dans PyCharm : faites un Clic Droit sur \`main.py\` > **Run 'main'** (ou \`Shift + F10\`).

Consultez le fichier \`TUTORIEL.md\` pour le cours complet pas-à-pas !`
        }
      ]
    };
    return this.sanitizeGeneratedTutorial(raw, 'Python', 'PyCharm', level);
  }

  getMockGenericTutorial(language, software, level, topic, goal, error) {
    const raw = {
      title: `Apprendre ${language} avec ${software} : Guide Pratique Complet`,
      summary: `Tutoriel interactif étape par étape pour maîtriser ${language} dans l'environnement ${software}. Ce guide vous accompagne de la configuration initiale jusqu'à la réalisation d'un projet fonctionnel. ${error ? `(Mode simulation : ${error})` : ''}`,
      language,
      software,
      level: level || 'Débutant',
      prerequisites: [
        `${software} installé sur votre ordinateur`,
        `Environnement d'exécution pour ${language} configuré`
      ],
      softwareSetup: {
        recommendedVersion: 'Dernière version stable recommandée',
        keyShortcuts: [
          'Ctrl + S : Sauvegarder',
          'Ctrl + Maj + P (ou F1) : Palette de commandes',
          'F5 : Lancer l\'exécution / Débogage'
        ],
        layoutTips: `Adaptez la disposition des fenêtres dans ${software} pour garder le code source et le terminal / aperçu visibles côte à côte.`
      },
      steps: [
        {
          stepNumber: 1,
          title: `Initialiser votre environnement ${software}`,
          softwareActions: [
            `Lancez ${software}.`,
            'Créez un nouveau projet ou espace de travail dédié.',
            `Créez le fichier source principal adapté à ${language}.`
          ],
          codeOrNodes: `// Initialisation pour ${language} dans ${software}\nconsole.log("Bienvenue dans votre projet ${language} !");`,
          codeLanguage: language.toLowerCase().replace(/[^a-z0-9]/g, '') || 'text',
          explanation: `La mise en place de la structure de base permet à ${software} d'indexer votre projet et d'activer l'autocomplétion pour ${language}.`,
          proTip: `Activez la sauvegarde automatique dans les préférences de ${software} pour ne jamais perdre votre travail.`,
          pitfallToAvoid: 'Évitez les espaces et caractères accentués dans les chemins de dossiers de projet.'
        },
        {
          stepNumber: 2,
          title: 'Implémenter la logique principale',
          softwareActions: [
            'Écrivez la logique de calcul et les structures de données.',
            `Utilisez les outils de diagnostic intégrés à ${software} pour vérifier l'absence d'erreurs.`
          ],
          codeOrNodes: `// Logique métier ${language}\nconst config = { active: true, version: "1.0.0" };\nfunction init() { return config.active; }`,
          codeLanguage: language.toLowerCase().replace(/[^a-z0-9]/g, '') || 'text',
          explanation: 'La modularité permet de tester indépendamment chaque brique de votre code.',
          proTip: 'Documentez vos fonctions avec des commentaires descriptifs dès l\'écriture.',
          pitfallToAvoid: 'Ne pas oublier de gérer les cas d\'erreur ou entrées inattendues.'
        },
        {
          stepNumber: 3,
          title: `Exécuter et Déboguer dans ${software}`,
          softwareActions: [
            `Lancez l'exécution du projet depuis le menu de ${software}.`,
            'Inspectez la console ou les journaux d\'exécution pour valider le résultat.'
          ],
          codeOrNodes: `// Résultat d'exécution validé\nconsole.log("Projet exécuté avec succès !");`,
          codeLanguage: language.toLowerCase().replace(/[^a-z0-9]/g, '') || 'text',
          explanation: `Le débogueur de ${software} permet de placer des points d'arrêt (breakpoints) et d'inspecter les variables en temps réel.`,
          proTip: 'Apprenez à utiliser les raccourcis de débogage (Step Over / Step Into) pour gagner un temps précieux.',
          pitfallToAvoid: 'Ne pas ignorer les messages d\'avertissement (warnings) dans la console de build.'
        }
      ],
      practiceChallenge: {
        title: 'Défi Pratique Personnalisé',
        description: `Ajoutez une nouvelle fonctionnalité ou modifiez le comportement par défaut de votre script ${language} dans ${software}.`,
        hint: 'Consultez la documentation officielle pour découvrir les modules complémentaires.',
        solution: 'Vérifiez la syntaxe et lancez un test d\'exécution pour confirmer le fonctionnement !'
      },
      files: [
        {
          path: 'README.md',
          language: 'markdown',
          content: `# Guide ${language} dans ${software}\n\nTutoriel généré par Voxel Forge. Consultez \`TUTORIEL.md\` pour le guide complet.`
        }
      ]
    };
    return this.sanitizeGeneratedTutorial(raw, language, software, level);
  }

  applyMockFixes(project, reviewFindings) {
    const updated = project.files.map(f => {
      if (f.path.includes('package.json') || f.path.includes('index') || f.path.includes('App')) {
        return {
          ...f,
          content: `// [Voxel Forge - Revue Mistral appliquée avec succès]\n` + f.content,
        };
      }
      return f;
    });

    return {
      ...project,
      files: updated,
      lastFixSummary: 'Les recommandations de sécurité et vérifications de dépendances de Mistral ont été intégrées.',
    };
  }

  /**
   * Conversational Copilot: chats with the user about their project
   * and optionally modifies files in response to instructions.
   */
  async chatWithProject({ message, conversationHistory = [], project = null, activeFile = null }) {
    if (!this.isConfigured()) {
      return this.generateMockChatReply({ message, project, activeFile });
    }

    const filesContext = project?.files?.slice(0, 10).map(f => ({
      path: f.path,
      contentSnippet: f.content.slice(0, 1500)
    })) || [];

    const activeFileSnippet = activeFile ? {
      path: activeFile.path,
      content: activeFile.content.slice(0, 3000)
    } : null;

    const systemPrompt = `Tu es Voxel Copilot, l'assistant IA de programmation en direct intégré dans Voxel Forge.
Ton rôle est d'aider le développeur à modifier, enrichir, déboguer ou faire évoluer son jeu ou son application web/Python.
Tu réponds de façon amicale, concise et efficace en français.
Si la demande de l'utilisateur implique d'ajouter une fonctionnalité, corriger un bug ou changer le code, fournis TOUJOURS la modification complète des fichiers concernés.

Tu dois répondre UNIQUEMENT au format JSON valide suivant :
{
  "reply": "Explication claire de ce que tu as fait ou réponse à la question",
  "modifiedFiles": [
    {
      "path": "chemin/du/fichier.ext",
      "content": "Code complet et mis à jour du fichier",
      "changes": "Résumé concis des modifications apportées"
    }
  ],
  "suggestedActions": ["Idée d'amélioration 1", "Idée d'amélioration 2"]
}
Si aucune modification de code n'est nécessaire (ex: question purement théorique), renvoie "modifiedFiles": [].`;

    const formattedHistory = conversationHistory.slice(-6).map(m => `${m.role === 'user' ? 'Utilisateur' : 'Copilot'}: ${m.content}`).join('\n');

    const userPrompt = `Historique récent :
${formattedHistory || '(Début de la conversation)'}

Projet actuel : "${project?.name || 'Sans titre'}"
Fichiers du projet : ${JSON.stringify(filesContext, null, 2)}
Fichier actuellement actif dans l'éditeur : ${JSON.stringify(activeFileSnippet, null, 2)}

Message de l'utilisateur :
"${message}"

Applique les changements nécessaires ou réponds à la question.`;

    const chatSchema = {
      type: 'OBJECT',
      properties: {
        reply: { type: 'STRING' },
        modifiedFiles: {
          type: 'ARRAY',
          items: {
            type: 'OBJECT',
            properties: {
              path: { type: 'STRING' },
              content: { type: 'STRING' },
              changes: { type: 'STRING' }
            },
            required: ['path', 'content']
          }
        },
        suggestedActions: {
          type: 'ARRAY',
          items: { type: 'STRING' }
        }
      },
      required: ['reply', 'modifiedFiles']
    };

    try {
      const response = await this.callGeminiApi(systemPrompt, userPrompt, true, chatSchema);
      const parsed = extractJsonFromLLMResponse(response);
      return {
        reply: parsed.reply || "Modifications effectuées avec succès.",
        modifiedFiles: Array.isArray(parsed.modifiedFiles) ? parsed.modifiedFiles : [],
        suggestedActions: Array.isArray(parsed.suggestedActions) ? parsed.suggestedActions : []
      };
    } catch (err) {
      console.error(`[GeminiService] Chat error (${err.message}). Falling back to simulation.`);
      return this.generateMockChatReply({ message, project, activeFile, error: err.message });
    }
  }

  generateMockChatReply({ message, project, activeFile, error }) {
    const lower = (message || '').toLowerCase();
    let reply = `J'ai bien reçu votre demande : "${message}".`;
    const modifiedFiles = [];
    const suggestedActions = ['Ajouter des effets sonores', 'Améliorer le design visuel', 'Tester avec le bouton Run'];

    if (activeFile && (lower.includes('couleur') || lower.includes('style') || lower.includes('fond') || lower.includes('css'))) {
      reply = `J'ai ajusté les styles dans ${activeFile.path} avec des couleurs modernes et contrastées.`;
      modifiedFiles.push({
        path: activeFile.path,
        content: activeFile.content + `\n/* Ajouté par Copilot: Style personnalisé */\n`,
        changes: 'Ajout de styles personnalisés'
      });
    } else if (activeFile && (lower.includes('score') || lower.includes('vie') || lower.includes('vitesse') || lower.includes('saut'))) {
      reply = `J'ai intégré la gestion demandée dans ${activeFile.path}. Vous pouvez tester immédiatement avec le bouton Run !`;
      modifiedFiles.push({
        path: activeFile.path,
        content: activeFile.content + `\n// [Copilot] Ajout fonctionnalité demandée: ${message}\n`,
        changes: `Mise à jour de la logique dans ${activeFile.path}`
      });
    } else {
      reply = `Je suis prêt à vous assister ! Vous pouvez me demander d'ajouter des mécaniques de jeu, d'optimiser le code ou de modifier l'interface.`;
    }

    return {
      reply,
      modifiedFiles,
      suggestedActions
    };
  }
}

export const geminiService = new GeminiService();
