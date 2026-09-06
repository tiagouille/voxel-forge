import React, { useState } from 'react';
import { X, Sparkles, Wand2 } from 'lucide-react';

const PROJECT_TYPES = [
  'Jeu vidéo',
  'Site web',
  'Application',
  'Logiciel',
  'Autre'
];

const LANGUAGES = [
  'JavaScript',
  'TypeScript',
  'Python',
  'C#',
  'C++',
  'Java',
  'HTML/CSS',
  'Autre'
];

const FRAMEWORKS = [
  'React',
  'Vite',
  'Next.js',
  'Node.js',
  'Express',
  'Unity',
  'Unreal Engine',
  'Godot',
  'Autre'
];

const QUICK_PRESETS = [
  {
    title: '🎮 Jeu Arcade 2D',
    type: 'Jeu vidéo',
    language: 'JavaScript',
    framework: 'Vite',
    desc: 'Jeu spatial rétro en canvas 2D avec vaisseau, vagues d\'ennemis, système de scores, tirs laser et particules.',
  },
  {
    title: '⚡ Dashboard React',
    type: 'Site web',
    language: 'JavaScript',
    framework: 'React',
    desc: 'Tableau de bord moderne sombre avec statistiques interactives, liste de fonctionnalités et composants modulaires.',
  },
  {
    title: '🚀 API REST Express',
    type: 'Application',
    language: 'JavaScript',
    framework: 'Express',
    desc: 'API REST modulaire avec architecture contrôleurs / services / middleware, gestion d\'erreurs et validation.',
  },
  {
    title: '🐍 CLI Data Python',
    type: 'Logiciel',
    language: 'Python',
    framework: 'Autre',
    desc: 'Utilitaire en ligne de commande avec argparse, traitement de données automatisé et tests unitaires.',
  }
];

export function ProjectModal({ isOpen, onClose, onSubmit, initialMode = 'auto' }) {
  const [name, setName] = useState('voxel-project');
  const [type, setType] = useState('Site web');
  const [language, setLanguage] = useState('JavaScript');
  const [framework, setFramework] = useState('React');
  const [mode, setMode] = useState(initialMode);
  const [description, setDescription] = useState('Application web moderne avec design sombre, responsive et modulaire.');

  if (!isOpen) return null;

  const handleApplyPreset = (preset) => {
    setType(preset.type);
    setLanguage(preset.language);
    setFramework(preset.framework);
    setDescription(preset.desc);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name: name.trim() || 'voxel-project',
      type,
      language,
      framework,
      mode,
      description: description.trim(),
    });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <header className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Wand2 size={18} color="#38bdf8" />
            <h2 style={{ fontSize: '15px', fontWeight: 600 }}>Nouveau Projet Voxel Forge</h2>
          </div>
          <button 
            onClick={onClose} 
            style={{ background: 'transparent', border: 'none', color: '#8b949e', cursor: 'pointer' }}
          >
            <X size={18} />
          </button>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            {/* Presets */}
            <div>
              <span className="form-label" style={{ display: 'block', marginBottom: '6px' }}>
                Modèles rapides
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                {QUICK_PRESETS.map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleApplyPreset(p)}
                    style={{ fontSize: '11px', justifyContent: 'flex-start' }}
                  >
                    {p.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Name */}
            <div className="form-group">
              <label className="form-label">Nom du projet</label>
              <input
                type="text"
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="ex: cyber-arcade-3d"
                required
              />
            </div>

            {/* Selects Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
              <div className="form-group">
                <label className="form-label">Type</label>
                <select className="form-select" value={type} onChange={(e) => setType(e.target.value)}>
                  {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Langage</label>
                <select className="form-select" value={language} onChange={(e) => setLanguage(e.target.value)}>
                  {LANGUAGES.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Framework / Moteur</label>
                <select className="form-select" value={framework} onChange={(e) => setFramework(e.target.value)}>
                  {FRAMEWORKS.map(f => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>
            </div>

            {/* Mode */}
            <div className="form-group">
              <label className="form-label">Mode de Génération</label>
              <select className="form-select" value={mode} onChange={(e) => setMode(e.target.value)}>
                <option value="auto">Auto (Gemini génère → Mistral vérifie → Gemini corrige)</option>
                <option value="fast">Fast (Génération directe rapide)</option>
                <option value="max_quality">Max Quality (Double analyse approfondie Gemini + Mistral)</option>
              </select>
            </div>

            {/* Description */}
            <div className="form-group">
              <label className="form-label">Description & Spécifications</label>
              <textarea
                className="form-textarea"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Décrivez les fonctionnalités, mécaniques, pages et styles attendus..."
                required
              />
            </div>
          </div>

          <footer className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Annuler
            </button>
            <button type="submit" className="btn btn-accent">
              <Sparkles size={14} />
              <span>Lancer la génération</span>
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
}
