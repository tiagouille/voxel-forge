import React from 'react';
import { 
  Bot, 
  Scale, 
  Volume2, 
  VolumeX, 
  Palette, 
  Sparkles, 
  FolderGit2,
  Cpu
} from 'lucide-react';
import { sounds } from '../services/soundEffects';

export function Footer({ 
  project, 
  activeFile, 
  theme, 
  isMuted, 
  onToggleSound, 
  onOpenTerms, 
  onOpenThemeSelect 
}) {
  return (
    <footer style={{
      height: '26px',
      background: '#161b22',
      borderTop: '1px solid #30363d',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 12px',
      fontSize: '11px',
      color: '#8b949e',
      userSelect: 'none',
      zIndex: 5
    }}>
      {/* Left section: Active file info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#e6edf3' }}>
          <FolderGit2 size={12} color="#58a6ff" />
          <span>{project?.name || 'Voxel Studio'}</span>
        </div>

        {activeFile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span>📄 {activeFile.path}</span>
            <span style={{ color: '#6e7681' }}>({activeFile.language || 'code'})</span>
          </div>
        )}
      </div>

      {/* Center: AI Creation notice */}
      <div 
        onClick={onOpenTerms}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          cursor: 'pointer',
          padding: '2px 8px',
          borderRadius: '4px',
          background: 'rgba(168, 85, 247, 0.1)',
          color: '#c084fc',
          border: '1px solid rgba(168, 85, 247, 0.25)',
          transition: 'all 0.15s ease'
        }}
        title="En savoir plus sur la conception de Voxel Forge par IA"
      >
        <Bot size={12} />
        <span>Conçu & Architecturé par IA</span>
        <Sparkles size={11} color="#facc15" />
      </div>

      {/* Right section: Theme, Sound & Terms */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Theme pill */}
        <button
          onClick={onOpenThemeSelect}
          style={{
            background: 'none',
            border: 'none',
            color: '#8b949e',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '11px',
            padding: '2px 6px',
            borderRadius: '4px'
          }}
          title="Changer de thème visuel"
        >
          <Palette size={12} color="#38bdf8" />
          <span style={{ textTransform: 'capitalize' }}>Thème : {theme}</span>
        </button>

        {/* Sound toggle */}
        <button
          onClick={onToggleSound}
          style={{
            background: 'none',
            border: 'none',
            color: isMuted ? '#6e7681' : '#3fb950',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '11px',
            padding: '2px 6px',
            borderRadius: '4px'
          }}
          title={isMuted ? 'Activer les sons rétro 8-bit' : 'Couper le son'}
        >
          {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
          <span>{isMuted ? 'Muet' : 'Audio 8-Bit'}</span>
        </button>

        {/* CGU & Mentions Légales button */}
        <button
          onClick={onOpenTerms}
          style={{
            background: 'none',
            border: 'none',
            color: '#8b949e',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '11px',
            padding: '2px 6px',
            borderRadius: '4px'
          }}
          title="Consulter les Conditions Générales d'Utilisation"
        >
          <Scale size={12} />
          <span>CGU & Mentions</span>
        </button>
      </div>
    </footer>
  );
}
