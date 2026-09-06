/**
 * API Client Service for Voxel Forge.
 * Communicates with backend endpoints.
 * Supports configurable base URL for local dev and GitHub Pages deployments.
 */

const STORAGE_KEY = 'voxel_forge_api_url';

export function getApiBaseUrl() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return saved.replace(/\/+$/, '');
  // Default to relative /api (handled by Vite proxy in dev)
  return '';
}

export function setApiBaseUrl(url) {
  if (!url) {
    localStorage.removeItem(STORAGE_KEY);
  } else {
    localStorage.setItem(STORAGE_KEY, url.trim().replace(/\/+$/, ''));
  }
}

async function request(endpoint, options = {}) {
  const base = getApiBaseUrl();
  const url = `${base}${endpoint}`;

  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  const response = await fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || `Erreur serveur [${response.status}]`);
  }

  return data;
}

export const api = {
  getHealth: () => request('/api/health'),
  getProviders: () => request('/api/providers'),

  generateProject: (payload) =>
    request('/api/generate', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  reviewProject: (project, mode = 'auto') =>
    request('/api/review', {
      method: 'POST',
      body: JSON.stringify({ project, mode }),
    }),

  fixProject: (project, reviewFindings) =>
    request('/api/fix', {
      method: 'POST',
      body: JSON.stringify({ project, reviewFindings }),
    }),

  fixFile: (filePath, content, instruction) =>
    request('/api/fix', {
      method: 'POST',
      body: JSON.stringify({ filePath, content, instruction }),
    }),

  explainCode: (filePath, content) =>
    request('/api/explain', {
      method: 'POST',
      body: JSON.stringify({ filePath, content }),
    }),

  improveCode: (filePath, content) =>
    request('/api/improve', {
      method: 'POST',
      body: JSON.stringify({ filePath, content }),
    }),
};
