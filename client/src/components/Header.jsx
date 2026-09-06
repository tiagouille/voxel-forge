import React from 'react';
import { 
  Box, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Download, 
  FolderPlus, 
  Settings, 
  Layers 
} from 'lucide-react';

export function Header({ 
  mode, 
  setMode, 
  providers, 
  onNewProject, 
  onDownloadZip, 
  onOpenSettings,
  isGenerating 
}) {
  return (
    <header className="top-header">
      {/* Brand */}
      <div className="brand-section">
        <div className="brand-badge">
          <Box size={18} />
        </div>
        <div className="brand-title">
          <span>Voxel Forge</span>
          <span className="brand-version">v1.0</span>
        </div>
      </div>

      {/* Mode Selector */}
      <div className="header-center">
        <div className="mode-pill-group">
          <button
            className={`mode-pill ${mode === 'auto' ? 'active auto' : ''}`}
            onClick={() => setMode('auto')}
            title="Auto : Gemini génère → Mistral vérifie → Gemini corrige automatiquement"
          >
            <Sparkles size={13} />
            <span>Auto</span>
          </button>

          <button
            className={`mode-pill ${mode === 'fast' ? 'active fast' : ''}`}
            onClick={() => setMode('fast')}
            title="Fast : Gemini génère directement sans analyse approfondie"
          >
            <Zap size={13} />
            <span>Fast</span>
          </button>

          <button
            className={`mode-pill ${mode === 'max_quality' ? 'active max-quality' : ''}`}
            onClick={() => setMode('max_quality')}
            title="Max Quality : Gemini architecture → Gemini génération → Mistral review → Gemini fix → Mistral re-check"
          >
            <ShieldCheck size={13} />
            <span>Max Quality</span>
          </button>
        </div>

        {/* AI Provider Badges */}
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginLeft: '12px' }}>
          <div 
            title={providers?.gemini?.configured ? "Gemini connecté (Live API)" : "Gemini en mode simulation intelligent"}
            style={{
              fontSize: '11px',
              padding: '2px 8px',
              borderRadius: '12px',
              background: providers?.gemini?.configured ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.06)',
              color: providers?.gemini?.configured ? '#38bdf8' : '#8b949e',
              border: `1px solid ${providers?.gemini?.configured ? '#38bdf8' : '#30363d'}`,
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: providers?.gemini?.configured ? '#38bdf8' : '#6e7681' }}></span>
            Gemini
          </div>

          <div 
            title={providers?.mistral?.configured ? "Mistral connecté (Live API)" : "Mistral en mode audit heuristique"}
            style={{
              fontSize: '11px',
              padding: '2px 8px',
              borderRadius: '12px',
              background: providers?.mistral?.configured ? 'rgba(244, 63, 94, 0.15)' : 'rgba(255, 255, 255, 0.06)',
              color: providers?.mistral?.configured ? '#f43f5e' : '#8b949e',
              border: `1px solid ${providers?.mistral?.configured ? '#f43f5e' : '#30363d'}`,
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: providers?.mistral?.configured ? '#f43f5e' : '#6e7681' }}></span>
            Mistral
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="header-right">
        <button 
          className="btn btn-primary btn-sm"
          onClick={onNewProject}
          disabled={isGenerating}
        >
          <FolderPlus size={14} />
          <span>Nouveau Projet</span>
        </button>

        <button 
          className="btn btn-secondary btn-sm"
          onClick={onDownloadZip}
          title="Télécharger l'arborescence complète en archive ZIP"
        >
          <Download size={14} />
          <span>Export ZIP</span>
        </button>

        <button 
          className="btn btn-secondary btn-sm"
          onClick={onOpenSettings}
          title="Paramètres & Clés API"
        >
          <Settings size={14} />
        </button>
      </div>
    </header>
  );
}
