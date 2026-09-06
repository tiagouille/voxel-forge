/**
 * Security middleware and validation utilities for Voxel Forge.
 */

// Max limits to protect server resources
export const LIMITS = {
  MAX_FILES: 50,
  MAX_FILE_SIZE_BYTES: 500 * 1024, // 500 KB per file
  MAX_TOTAL_PROJECT_SIZE_BYTES: 5 * 1024 * 1024, // 5 MB total project
  MAX_PROMPT_LENGTH: 5000,
};

/**
 * Validates and normalizes a relative file path.
 * Rejects path traversal (../), absolute paths (C:\ or /), and forbidden characters.
 */
export function sanitizeFilePath(filePath) {
  if (typeof filePath !== 'string' || !filePath.trim()) {
    throw new Error('Chemin de fichier invalide');
  }

  const normalized = filePath.replace(/\\/g, '/').trim();

  // Block null bytes
  if (normalized.includes('\0')) {
    throw new Error('Chemin contenant un caractère nul interdit');
  }

  // Block directory traversal
  const segments = normalized.split('/');
  for (const seg of segments) {
    if (seg === '..' || seg === '.') {
      throw new Error(`Traversée de répertoire interdite: ${filePath}`);
    }
  }

  // Block absolute paths
  if (normalized.startsWith('/') || /^[a-zA-Z]:/.test(normalized)) {
    throw new Error(`Chemins absolus interdits: ${filePath}`);
  }

  // Block Windows reserved filenames
  const reservedRegex = /^(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])(\..*)?$/i;
  for (const seg of segments) {
    if (reservedRegex.test(seg)) {
      throw new Error(`Nom de fichier système réservé: ${seg}`);
    }
  }

  return normalized;
}

/**
 * Validates an entire project structure before processing.
 */
export function validateProjectPayload(project) {
  if (!project || typeof project !== 'object') {
    throw new Error('Objet de projet manquant ou invalide');
  }

  const files = project.files || [];
  if (!Array.isArray(files)) {
    throw new Error('La propriété "files" doit être un tableau');
  }

  if (files.length > LIMITS.MAX_FILES) {
    throw new Error(`Le projet dépasse la limite de ${LIMITS.MAX_FILES} fichiers`);
  }

  let totalSize = 0;
  const sanitizedFiles = [];

  for (const file of files) {
    if (!file || typeof file !== 'object') {
      continue;
    }

    const safePath = sanitizeFilePath(file.path);
    const content = typeof file.content === 'string' ? file.content : '';

    const contentSize = Buffer.byteLength(content, 'utf8');
    if (contentSize > LIMITS.MAX_FILE_SIZE_BYTES) {
      throw new Error(`Le fichier "${safePath}" dépasse la taille maximale autorisée (500 Ko)`);
    }

    totalSize += contentSize;
    if (totalSize > LIMITS.MAX_TOTAL_PROJECT_SIZE_BYTES) {
      throw new Error(`La taille totale du projet dépasse la limite autorisée (5 Mo)`);
    }

    sanitizedFiles.push({
      path: safePath,
      content,
      language: file.language || inferLanguageFromPath(safePath),
    });
  }

  return {
    ...project,
    files: sanitizedFiles,
  };
}

/**
 * Infers language for editor syntax highlighting based on file extension.
 */
export function inferLanguageFromPath(filePath) {
  const ext = filePath.split('.').pop()?.toLowerCase();
  switch (ext) {
    case 'js':
    case 'mjs':
    case 'cjs':
      return 'javascript';
    case 'jsx':
      return 'javascript';
    case 'ts':
      return 'typescript';
    case 'tsx':
      return 'typescript';
    case 'py':
      return 'python';
    case 'cs':
      return 'csharp';
    case 'cpp':
    case 'cc':
    case 'cxx':
    case 'h':
    case 'hpp':
      return 'cpp';
    case 'java':
      return 'java';
    case 'html':
    case 'htm':
      return 'html';
    case 'css':
    case 'scss':
    case 'less':
      return 'css';
    case 'json':
      return 'json';
    case 'md':
      return 'markdown';
    case 'gd':
      return 'gdscript';
    case 'yaml':
    case 'yml':
      return 'yaml';
    case 'sh':
    case 'bash':
      return 'shell';
    case 'sql':
      return 'sql';
    default:
      return 'plaintext';
  }
}
