import React from 'react';
import { X, BookOpen, Copy, Check } from 'lucide-react';

export function ExplanationModal({ isOpen, onClose, title, explanation }) {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    if (!explanation) return;
    await navigator.clipboard.writeText(explanation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: '640px' }} onClick={(e) => e.stopPropagation()}>
        <header className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={18} color="#bc8cff" />
            <h2 style={{ fontSize: '15px', fontWeight: 600 }}>
              Explication de code : {title}
            </h2>
          </div>
          <button 
            onClick={onClose} 
            style={{ background: 'transparent', border: 'none', color: '#8b949e', cursor: 'pointer' }}
          >
            <X size={18} />
          </button>
        </header>

        <div className="modal-body" style={{ maxHeight: '65vh', overflowY: 'auto' }}>
          <div style={{
            background: '#0d1117',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '16px',
            fontSize: '13px',
            lineHeight: '1.6',
            color: '#e6edf3',
            whiteSpace: 'pre-wrap',
            fontFamily: 'Inter, sans-serif'
          }}>
            {explanation}
          </div>
        </div>

        <footer className="modal-footer">
          <button className="btn btn-secondary" onClick={handleCopy}>
            {copied ? <Check size={14} color="#3fb950" /> : <Copy size={14} />}
            <span>{copied ? 'Copié !' : 'Copier'}</span>
          </button>
          <button className="btn btn-primary" onClick={onClose}>
            Fermer
          </button>
        </footer>
      </div>
    </div>
  );
}
