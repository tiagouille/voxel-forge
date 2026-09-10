import { Router } from 'express';
import { geminiService } from '../services/gemini.js';
import { mistralService } from '../services/mistral.js';
import { validateProjectPayload, sanitizeFilePath } from '../middleware/security.js';

export const aiRouter = Router();

// Pluggable AI Providers Architecture
export const providers = {
  gemini: geminiService,
  mistral: mistralService,
};

/**
 * Health check endpoint
 */
aiRouter.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Voxel Forge Backend',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

/**
 * Check availability and status of configured AI providers
 */
aiRouter.get('/providers', (req, res) => {
  res.json({
    gemini: {
      name: 'Google Gemini',
      role: 'Architecte & Développeur Principal',
      configured: providers.gemini.isConfigured(),
      model: providers.gemini.modelName,
      status: providers.gemini.isConfigured() ? 'ready' : 'fallback_mode',
    },
    mistral: {
      name: 'Mistral AI',
      role: 'Contrôleur Qualité & Reviewer',
      configured: providers.mistral.isConfigured(),
      model: providers.mistral.modelName,
      status: providers.mistral.isConfigured() ? 'ready' : 'fallback_mode',
    },
  });
});

/**
 * POST /api/generate
 * Pipeline execution based on selected mode:
 * - 'fast': Gemini generates project directly.
 * - 'auto': Gemini generates -> Mistral reviews -> Gemini applies fixes if needed.
 * - 'max_quality': Gemini generates -> Mistral deep review -> Gemini fixes -> final review.
 */
aiRouter.post('/generate', async (req, res) => {
  try {
    const { name, type, language, framework, description, mode = 'auto' } = req.body;

    // Step 1 & 2: Gemini generates architecture and code
    let project = await providers.gemini.generateProject({
      name,
      type,
      language,
      framework,
      description,
      mode,
    });

    // Validate sanitized project
    project = validateProjectPayload(project);

    // If Fast mode, return immediately
    if (mode === 'fast') {
      return res.json({
        success: true,
        pipeline: ['gemini_generation'],
        project,
      });
    }

    // Step 3: Mistral reviews the project
    const review = await providers.mistral.reviewProject(project, mode);

    // Step 4: If problems detected and in Auto/Max Quality mode, Gemini applies fixes
    let finalProject = project;
    let postFixReview = null;
    const hasIssues = (review.bugs && review.bugs.length > 0) || review.qualityScore < 85;

    if (hasIssues && (mode === 'auto' || mode === 'max_quality')) {
      finalProject = await providers.gemini.fixProject({
        project,
        reviewFindings: review,
      });
      finalProject = validateProjectPayload(finalProject);

      // In Max Quality mode, Mistral performs a secondary validation check
      if (mode === 'max_quality') {
        postFixReview = await providers.mistral.reviewProject(finalProject, 'max_quality');
      }
    }

    res.json({
      success: true,
      mode,
      pipeline: mode === 'max_quality' 
        ? ['gemini_generation', 'mistral_review', 'gemini_fix', 'mistral_verification']
        : ['gemini_generation', 'mistral_review', 'gemini_fix'],
      project: finalProject,
      review: postFixReview || review,
      initialReview: postFixReview ? review : null,
    });
  } catch (err) {
    console.error('Error during /api/generate:', err.message);
    const isValidation = /traversée|interdit|invalide|dépasse/i.test(err.message);
    res.status(isValidation ? 400 : 500).json({
      success: false,
      error: err.message || 'Échec de la génération du projet',
    });
  }
});

/**
 * POST /api/tutorial
 * Generates an interactive, step-by-step tutorial for ANY language on ANY software.
 */
aiRouter.post('/tutorial', async (req, res) => {
  try {
    const {
      language = 'Python',
      software = 'PyCharm',
      level = 'Débutant',
      topic = 'Créer son premier projet',
      goal = 'Comprendre et exécuter le code avec succès'
    } = req.body;

    const tutorial = await providers.gemini.generateTutorial({
      language,
      software,
      level,
      topic,
      goal,
    });

    res.json({
      success: true,
      tutorial,
    });
  } catch (err) {
    console.error('Error during /api/tutorial:', err.message);
    res.status(500).json({
      success: false,
      error: err.message || 'Échec de la création du tutoriel',
    });
  }
});

/**
 * POST /api/review
 * Mistral explicitly reviews an existing project or modified files.
 */
aiRouter.post('/review', async (req, res) => {
  try {
    const validated = validateProjectPayload(req.body.project);
    const mode = req.body.mode || 'auto';

    const review = await providers.mistral.reviewProject(validated, mode);

    res.json({
      success: true,
      review,
    });
  } catch (err) {
    console.error('Error during /api/review:', err.message);
    const isValidation = /traversée|interdit|invalide|dépasse/i.test(err.message);
    res.status(isValidation ? 400 : 500).json({
      success: false,
      error: err.message || 'Échec de la revue du projet',
    });
  }
});

/**
 * POST /api/fix
 * Gemini applies fixes either to the whole project or to a specific target file.
 */
aiRouter.post('/fix', async (req, res) => {
  try {
    const { project, filePath, instruction, reviewFindings } = req.body;

    // Single file fix
    if (filePath && req.body.content) {
      const safePath = sanitizeFilePath(filePath);
      const fixResult = await providers.gemini.fixFile({
        filePath: safePath,
        content: req.body.content,
        instruction: instruction || 'Corriger les anomalies détectées.',
      });
      return res.json({ success: true, fixed: fixResult });
    }

    // Whole project fix
    if (project) {
      const validated = validateProjectPayload(project);
      const fixedProject = await providers.gemini.fixProject({
        project: validated,
        reviewFindings: reviewFindings || {},
      });
      return res.json({ success: true, project: validateProjectPayload(fixedProject) });
    }

    res.status(400).json({ success: false, error: 'Paramètres manquants pour la correction' });
  } catch (err) {
    console.error('Error during /api/fix:', err);
    res.status(500).json({
      success: false,
      error: err.message || 'Échec de la correction',
    });
  }
});

/**
 * POST /api/explain
 * Gemini provides an in-depth pedagogical explanation of a file or architecture.
 */
aiRouter.post('/explain', async (req, res) => {
  try {
    const { filePath, content } = req.body;
    if (!content) {
      return res.status(400).json({ success: false, error: 'Contenu manquant' });
    }

    const safePath = filePath ? sanitizeFilePath(filePath) : 'unknown';
    const explanation = await providers.gemini.explainCode({
      filePath: safePath,
      content,
    });

    res.json({ success: true, explanation });
  } catch (err) {
    console.error('Error during /api/explain:', err);
    res.status(500).json({
      success: false,
      error: err.message || 'Échec de l\'explication de code',
    });
  }
});

/**
 * POST /api/improve
 * Gemini refactors and enhances the selected file.
 */
aiRouter.post('/improve', async (req, res) => {
  try {
    const { filePath, content } = req.body;
    if (!content) {
      return res.status(400).json({ success: false, error: 'Contenu manquant' });
    }

    const safePath = sanitizeFilePath(filePath || 'code.js');
    const result = await providers.gemini.improveCode({
      filePath: safePath,
      content,
    });

    res.json({ success: true, improved: result });
  } catch (err) {
    console.error('Error during /api/improve:', err);
    res.status(500).json({
      success: false,
      error: err.message || 'Échec de l\'amélioration du code',
    });
  }
});

/**
 * POST /api/chat
 * Conversational Voxel Copilot: chats with the user about their project
 * and can return real-time file updates.
 */
aiRouter.post('/chat', async (req, res) => {
  try {
    const { message, conversationHistory = [], project = null, activeFile = null } = req.body;

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ success: false, error: 'Message requis' });
    }

    const response = await providers.gemini.chatWithProject({
      message: message.trim(),
      conversationHistory,
      project,
      activeFile,
    });

    res.json({
      success: true,
      ...response,
    });
  } catch (err) {
    console.error('Error during /api/chat:', err);
    res.status(500).json({
      success: false,
      error: err.message || 'Échec de la discussion avec Copilot',
    });
  }
});

