import React from 'react';
import { X, Palette, Check } from 'lucide-react';
import { sounds } from '../services/soundEffects';

export const THEMES = [
  {
    id: 'default',
    name: 'Default Dark Slate',
    description: 'Style épuré sombre GitHub, reposant pour les yeux.',
    colors: ['#0d1117', '#161b22', '#58a6ff', '#38bdf8']
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk Neon',
    description: 'Ambiance néon intense, jaune électrique et violet cybernétique.',
    colors: ['#0f051d', '#1a0b2e', '#facc15', '#ec4899']
  },
  {
    id: 'matrix',
    name: 'Matrix Hacker',
    description: 'Noir pur et typographie verte digitale inspirée des terminaux mainframe.',
    colors: ['#050805', '#0a100a', '#22c55e', '#4ade80']
  },
  {
    id: 'dracula',
    name: 'Dracula Pro',
    description: 'Palette violette emblématique, cyan pastel et touches rosées.',
    colors: ['#1e1f29', '#282a36', '#bd93f9', '#8be9fd']
  },
  {
    id: 'synthwave',
    name: 'Synthwave 80s',
    description: 'Coucher de soleil rétro-gaming, nuances violettes et rose fluo.',
    colors: ['#12072b', '#241442', '#ff71ce', '#01cdfe']
  }
];

export function ThemeModal({ isOpen, onClose, currentTheme, onSelectTheme }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content" 
        style={{ maxWidth: '560px', width: '90vw' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header" style={{ borderBottom: '1px solid #30363d', paddingBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Palette size={20} color="#38bdf8" />
            <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: '#f0f6fc' }}>
              Personnalisation du Thème Visuel
            </h2>
          </div>
          <button className="btn-icon" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {THEMES.map((th) => {
            const isSelected = currentTheme === th.id;
            return (
              <div
                key={th.id}
                onClick={() => {
                  sounds.playClick();
                  onSelectTheme(th.id);
                }}
                style={{
                  background: isSelected ? 'rgba(56, 189, 248, 0.1)' : '#161b22',
                  border: `1px solid ${isSelected ? '#38bdf8' : '#30363d'}`,
                  borderRadius: '10px',
                  padding: '12px 16px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.15s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontWeight: 600, fontSize: '14px', color: isSelected ? '#38bdf8' : '#f0f6fc' }}>
                      {th.name}
                    </span>
                    {isSelected && (
                      <span style={{
                        fontSize: '10px',
                        background: '#38bdf820',
                        color: '#38bdf8',
                        padding: '1px 6px',
                        borderRadius: '10px',
                        border: '1px solid #38bdf840'
                      }}>
                        Actif
                      </span>
                    )}
                  </div>
                  <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#8b949e' }}>
                    {th.description}
                  </p>
                </div>

                {/* Color swatches */}
                <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                  {th.colors.map((c, i) => (
                    <div
                      key={i}
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        background: c,
                        border: '1px solid rgba(255,255,255,0.15)'
                      }}
                    />
                  ))}
                  {isSelected && <Check size={16} color="#38bdf8" style={{ marginLeft: '6px' }} />}
                </div>
              </div>
            );
          })}
        </div>

        <div className="modal-footer" style={{ borderTop: '1px solid #30363d', justifyContent: 'flex-end' }}>
          <button className="btn btn-primary" onClick={onClose}>
            Valider
          </button>
        </div>
      </div>
    </div>
  );
}
