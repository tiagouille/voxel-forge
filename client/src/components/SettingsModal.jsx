import React, { useState } from 'react';
import { X, Server, Key, Shield, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { getApiBaseUrl, setApiBaseUrl } from '../services/api.js';

export function SettingsModal({ isOpen, onClose, providers, onRefreshProviders }) {
  const [apiUrl, setApiUrl] = useState(getApiBaseUrl());
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSaveUrl = (e) => {
    e.preventDefault();
    setApiBaseUrl(apiUrl);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
    onRefreshProviders();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <header className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Server size={18} color="#58a6ff" />
            <h2 style={{ fontSize: '15px', fontWeight: 600 }}>Configuration & Fournisseurs IA</h2>
          </div>
          <button 
            onClick={onClose} 
            style={{ background: 'transparent', border: 'none', color: '#8b949e', cursor: 'pointer' }}
          >
            <X size={18} />
          </button>
        </header>

        <div className="modal-body">
          {/* Security Banner */}
          <div style={{
            background: 'rgba(56, 189, 248, 0.08)',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            borderRadius: '8px',
            padding: '12px',
            fontSize: '12px',
            display: 'flex',
            gap: '10px'
          }}>
            <Shield size={18} color="#38bdf8" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ color: '#e6edf3' }}>Sécurité des clés API</strong>
              <p style={{ color: '#8b949e', marginTop: '3px' }}>
                Vos clés API ne transitent jamais dans le frontend. Elles sont stockées de façon sécurisée dans le fichier <code>.env</code> du serveur.
              </p>
            </div>
          </div>

          {/* Providers Status */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span className="form-label">État des Fournisseurs IA</span>
              <button 
                className="btn btn-secondary btn-sm" 
                onClick={onRefreshProviders}
                style={{ fontSize: '11px', padding: '2px 8px' }}
              >
                <RefreshCw size={11} />
                <span>Actualiser</span>
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {/* Gemini */}
              <div style={{
                background: '#0d1117',
                border: '1px solid #30363d',
                borderRadius: '8px',
                padding: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '13px', color: '#e6edf3' }}>
                    Google Gemini (Architecte)
                  </div>
                  <div style={{ fontSize: '11px', color: '#8b949e', marginTop: '2px' }}>
                    Modèle : <code>{providers?.gemini?.model || 'gemini-2.5-flash'}</code>
                  </div>
                </div>

                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '11px',
                  padding: '3px 8px',
                  borderRadius: '12px',
                  background: providers?.gemini?.configured ? 'rgba(63, 185, 80, 0.15)' : 'rgba(210, 153, 34, 0.15)',
                  color: providers?.gemini?.configured ? '#3fb950' : '#d29922',
                  border: `1px solid ${providers?.gemini?.configured ? 'rgba(63, 185, 80, 0.3)' : 'rgba(210, 153, 34, 0.3)'}`
                }}>
                  {providers?.gemini?.configured ? (
                    <><CheckCircle2 size={12} /> Clé active</>
                  ) : (
                    <><AlertCircle size={12} /> Mode simulation</>
                  )}
                </span>
              </div>

              {/* Mistral */}
              <div style={{
                background: '#0d1117',
                border: '1px solid #30363d',
                borderRadius: '8px',
                padding: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '13px', color: '#e6edf3' }}>
                    Mistral AI (Reviewer & Qualité)
                  </div>
                  <div style={{ fontSize: '11px', color: '#8b949e', marginTop: '2px' }}>
                    Modèle : <code>{providers?.mistral?.model || 'mistral-small-latest'}</code>
                  </div>
                </div>

                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  fontSize: '11px',
                  padding: '3px 8px',
                  borderRadius: '12px',
                  background: providers?.mistral?.configured ? 'rgba(63, 185, 80, 0.15)' : 'rgba(210, 153, 34, 0.15)',
                  color: providers?.mistral?.configured ? '#3fb950' : '#d29922',
                  border: `1px solid ${providers?.mistral?.configured ? 'rgba(63, 185, 80, 0.3)' : 'rgba(210, 153, 34, 0.3)'}`
                }}>
                  {providers?.mistral?.configured ? (
                    <><CheckCircle2 size={12} /> Clé active</>
                  ) : (
                    <><AlertCircle size={12} /> Audit heuristique</>
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Config URL for GitHub Pages */}
          <form onSubmit={handleSaveUrl} className="form-group">
            <label className="form-label">
              URL de l'API Backend (nécessaire en cas d'hébergement sur GitHub Pages)
            </label>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="text"
                className="form-input"
                style={{ flex: 1 }}
                placeholder="Par défaut : /api (serveur local)"
                value={apiUrl}
                onChange={(e) => setApiUrl(e.target.value)}
              />
              <button type="submit" className="btn btn-secondary">
                {savedSuccess ? 'Enregistré !' : 'Appliquer'}
              </button>
            </div>
            <span style={{ fontSize: '11px', color: '#6e7681' }}>
              Laissez vide pour le développement local standard via le proxy Vite (http://localhost:5000).
            </span>
          </form>

          {/* Instructions */}
          <div style={{ background: '#0d1117', padding: '12px', borderRadius: '8px', fontSize: '11px', color: '#8b949e' }}>
            <strong style={{ color: '#c9d1d9' }}>Comment activer vos vraies clés API ?</strong>
            <p style={{ marginTop: '4px' }}>
              Éditez le fichier <code>voxel-forge/.env</code> sur votre ordinateur et renseignez vos clés :
            </p>
            <pre style={{ background: '#161b22', padding: '8px', borderRadius: '4px', marginTop: '6px', color: '#38bdf8' }}>
              GEMINI_API_KEY=votre_cle_gemini<br />
              MISTRAL_API_KEY=votre_cle_mistral
            </pre>
          </div>
        </div>

        <footer className="modal-footer">
          <button type="button" className="btn btn-primary" onClick={onClose}>
            Fermer
          </button>
        </footer>
      </div>
    </div>
  );
}
