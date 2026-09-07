import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  X, 
  RotateCw, 
  Maximize2, 
  Minimize2, 
  Monitor, 
  Tablet, 
  Smartphone, 
  Terminal, 
  Play, 
  Trash2,
  ExternalLink
} from 'lucide-react';
import { bundleProjectForPreview } from '../services/sandboxBundler';

export function PreviewModal({ isOpen, onClose, project }) {
  const [viewport, setViewport] = useState('desktop'); // 'desktop' | 'tablet' | 'mobile'
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);
  const [logs, setLogs] = useState([]);
  const [reloadKey, setReloadKey] = useState(0);

  const iframeRef = useRef(null);

  // Generate HTML bundle in memory
  const previewHtml = useMemo(() => {
    if (!project) return '';
    return bundleProjectForPreview(project);
  }, [project, reloadKey]);

  // Listen to console events from the sandboxed iframe
  useEffect(() => {
    if (!isOpen) {
      setLogs([]);
      return;
    }

    const handleMessage = (event) => {
      if (event.data && event.data.type === 'VOXEL_CONSOLE') {
        setLogs(prev => [
          ...prev,
          {
            id: Date.now() + Math.random(),
            level: event.data.level || 'info',
            message: event.data.message,
            time: new Date().toLocaleTimeString(),
          }
        ]);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [isOpen]);

  // Auto-focus the iframe for direct game keyboard controls
  const handleIframeLoad = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      try {
        iframeRef.current.contentWindow.focus();
      } catch (e) {}
    }
  };

  if (!isOpen) return null;

  const getViewportWidth = () => {
    switch (viewport) {
      case 'mobile': return '375px';
      case 'tablet': return '768px';
      default: return '100%';
    }
  };

  const errorCount = logs.filter(l => l.level === 'error').length;

  return (
    <div className={`modal-overlay preview-modal-overlay ${isFullscreen ? 'fullscreen-overlay' : ''}`} onClick={onClose}>
      <div 
        className={`preview-modal-card ${isFullscreen ? 'fullscreen-card' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <header className="preview-modal-header">
          {/* Status badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="preview-live-badge">
              <span className="live-pulsing-dot"></span>
              <span>LIVE RUNNER</span>
            </div>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#e6edf3' }}>
              {project?.name || 'Projet'}
            </span>
          </div>

          {/* Viewport Selectors */}
          <div className="preview-viewport-group">
            <button
              className={`viewport-btn ${viewport === 'desktop' ? 'active' : ''}`}
              onClick={() => setViewport('desktop')}
              title="Ordinateur (Plein écran)"
            >
              <Monitor size={14} />
            </button>
            <button
              className={`viewport-btn ${viewport === 'tablet' ? 'active' : ''}`}
              onClick={() => setViewport('tablet')}
              title="Tablette (768px)"
            >
              <Tablet size={14} />
            </button>
            <button
              className={`viewport-btn ${viewport === 'mobile' ? 'active' : ''}`}
              onClick={() => setViewport('mobile')}
              title="Mobile (375px)"
            >
              <Smartphone size={14} />
            </button>
          </div>

          {/* Controls & Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Reload */}
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => setReloadKey(k => k + 1)}
              title="Redémarrer le jeu / Recharger la page"
            >
              <RotateCw size={13} />
              <span>Recharger</span>
            </button>

            {/* Console toggle */}
            <button
              className={`btn btn-secondary btn-sm ${isConsoleOpen ? 'active' : ''}`}
              onClick={() => setIsConsoleOpen(!isConsoleOpen)}
              title="Afficher la console de logs et erreurs"
            >
              <Terminal size={13} />
              <span>Console</span>
              {errorCount > 0 && (
                <span className="console-error-pill">{errorCount}</span>
              )}
            </button>

            {/* Fullscreen Toggle */}
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => setIsFullscreen(!isFullscreen)}
              title={isFullscreen ? "Quitter le plein écran" : "Plein écran"}
            >
              {isFullscreen ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="preview-close-btn"
              title="Fermer (Échap)"
            >
              <X size={18} />
            </button>
          </div>
        </header>

        {/* Runner Viewport Container */}
        <div className="preview-viewport-container">
          <div 
            className="preview-frame-wrapper"
            style={{ width: getViewportWidth() }}
          >
            <iframe
              ref={iframeRef}
              key={reloadKey}
              srcDoc={previewHtml}
              onLoad={handleIframeLoad}
              title="Voxel Forge Live Sandbox"
              className="preview-iframe"
              sandbox="allow-scripts allow-modals allow-pointer-lock allow-forms allow-same-origin"
              allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone; midi"
            />
          </div>
        </div>

        {/* Integrated Console Drawer */}
        {isConsoleOpen && (
          <div className="preview-console-drawer">
            <div className="console-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Terminal size={13} color="#58a6ff" />
                <span style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase' }}>
                  Console de sortie ({logs.length})
                </span>
              </div>

              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setLogs([])}
                style={{ padding: '2px 6px', fontSize: '10px' }}
                title="Effacer les logs"
              >
                <Trash2 size={11} />
                <span>Effacer</span>
              </button>
            </div>

            <div className="console-logs-list">
              {logs.length === 0 ? (
                <div style={{ color: '#6e7681', fontSize: '11px', padding: '10px 0' }}>
                  Aucun log pour le moment. Interagissez avec votre jeu/application.
                </div>
              ) : (
                logs.map(log => (
                  <div key={log.id} className={`console-line ${log.level}`}>
                    <span className="console-timestamp">[{log.time}]</span>
                    <span className="console-msg">{log.message}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
