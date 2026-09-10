import React, { useState } from 'react';
import { 
  X, 
  Gamepad2, 
  Play, 
  FolderDown, 
  Search, 
  Sparkles, 
  Box, 
  Layers, 
  Code2,
  Tag
} from 'lucide-react';
import { GALLERY_TEMPLATES } from '../constants/galleryTemplates';
import { sounds } from '../services/soundEffects';

export function GalleryModal({ isOpen, onClose, onLoadProject, onRunProject }) {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const categories = ['Tous', '3D & Voxel', 'Arcade 2D', 'Web Apps', 'Python'];

  const filteredTemplates = GALLERY_TEMPLATES.filter((tpl) => {
    const matchesCat = selectedCategory === 'Tous' || tpl.category === selectedCategory;
    const matchesSearch = 
      tpl.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tpl.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tpl.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content" 
        style={{ maxWidth: '1000px', width: '95vw', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header" style={{ borderBottom: '1px solid #30363d', paddingBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #0284c7, #38bdf8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              boxShadow: '0 0 16px rgba(56, 189, 248, 0.4)'
            }}>
              <Gamepad2 size={22} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: '#f0f6fc' }}>
                Galerie de Jeux & Projets Voxel Forge
              </h2>
              <p style={{ margin: 0, fontSize: '12px', color: '#8b949e', marginTop: '2px' }}>
                Explorez, jouez en 1 clic et chargez le code directement dans votre éditeur
              </p>
            </div>
          </div>

          <button className="btn-icon" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Filter Bar & Search */}
        <div style={{ padding: '16px 20px 0 20px', display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Category pills */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sounds.playClick();
                  setSelectedCategory(cat);
                }}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: selectedCategory === cat ? 600 : 400,
                  background: selectedCategory === cat 
                    ? 'linear-gradient(135deg, #0284c7, #6366f1)' 
                    : '#21262d',
                  color: selectedCategory === cat ? '#fff' : '#8b949e',
                  transition: 'all 0.15s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div style={{
            position: 'relative',
            minWidth: '220px',
            flex: '1',
            maxWidth: '300px'
          }}>
            <Search size={14} color="#8b949e" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              placeholder="Rechercher un jeu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '6px 10px 6px 32px',
                background: '#0d1117',
                border: '1px solid #30363d',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '12px',
                outline: 'none'
              }}
            />
          </div>
        </div>

        {/* Scrollable Templates Grid */}
        <div style={{
          overflowY: 'auto',
          padding: '16px 20px',
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
          gap: '14px'
        }}>
          {filteredTemplates.map((tpl) => (
            <div
              key={tpl.id}
              style={{
                background: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '12px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.15s, border-color 0.15s',
                boxShadow: '0 4px 12px rgba(0,0,0,0.25)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#58a6ff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#30363d';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <h3 style={{ margin: 0, fontSize: '15px', color: '#f0f6fc', fontWeight: 700 }}>
                    {tpl.title}
                  </h3>
                  {tpl.badge && (
                    <span style={{
                      fontSize: '10px',
                      padding: '2px 8px',
                      borderRadius: '10px',
                      background: 'rgba(56, 189, 248, 0.15)',
                      color: '#38bdf8',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      fontWeight: 600,
                      whiteSpace: 'nowrap'
                    }}>
                      {tpl.badge}
                    </span>
                  )}
                </div>

                <p style={{ fontSize: '12px', color: '#8b949e', margin: '0 0 12px 0', lineHeight: 1.5 }}>
                  {tpl.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '16px' }}>
                  {tpl.tags.map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '10px',
                        background: '#0d1117',
                        color: '#c9d1d9',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        border: '1px solid #21262d'
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', borderTop: '1px solid #21262d', paddingTop: '12px' }}>
                <button
                  className="btn btn-run btn-sm"
                  onClick={() => {
                    sounds.playRun();
                    onRunProject({
                      name: tpl.title,
                      files: tpl.files
                    });
                  }}
                  title="Lancer le jeu en direct dans le Runner"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                >
                  <Play size={13} fill="#10b981" color="#10b981" />
                  <span>Jouer direct</span>
                </button>

                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    sounds.playSuccess();
                    onLoadProject({
                      name: tpl.title,
                      description: tpl.description,
                      files: tpl.files
                    });
                    onClose();
                  }}
                  title="Charger les fichiers de ce projet dans Monaco Editor"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
                >
                  <FolderDown size={13} />
                  <span>Dans l'éditeur</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="modal-footer" style={{ borderTop: '1px solid #30363d', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '11px', color: '#8b949e' }}>
            ⚡ <strong>{filteredTemplates.length}</strong> projets disponibles • 100% exécutables dans votre navigateur
          </span>
          <button className="btn btn-secondary" onClick={onClose}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
