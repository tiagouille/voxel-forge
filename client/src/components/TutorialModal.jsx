import React, { useState } from 'react';
import { 
  X, 
  GraduationCap, 
  Sparkles, 
  BookOpen, 
  Gamepad2, 
  Code, 
  Terminal, 
  Box, 
  Layers,
  Wand2
} from 'lucide-react';

const TUTORIAL_PRESETS = [
  {
    title: '🎮 Unreal Engine 5 & Blueprints',
    lang: 'Blueprints',
    app: 'Unreal Engine 5',
    lvl: 'Débutant',
    topic: 'Déplacement de personnage 3D avec Enhanced Inputs',
    goal: 'Créer un Character Blueprint, configurer IA_Move/IMC_Default et faire bouger le joueur dans le Viewport'
  },
  {
    title: '🐍 Python & PyCharm',
    lang: 'Python',
    app: 'PyCharm',
    lvl: 'Débutant',
    topic: 'Fondamentaux, Fonctions et Sauvegarde JSON',
    goal: 'Créer son premier projet dans PyCharm, manipuler des variables et sauvegarder des données'
  },
  {
    title: '🕹️ Godot 4 & GDScript',
    lang: 'GDScript',
    app: 'Godot 4',
    lvl: 'Débutant',
    topic: 'Premier jeu 2D avec Nœuds CharacterBody2D et Signaux',
    goal: 'Comprendre l\'arbre de scène Godot, programmer les inputs et gérer les collisions'
  },
  {
    title: '⚡ Unity & C#',
    lang: 'C#',
    app: 'Unity',
    lvl: 'Débutant',
    topic: 'Contrôleur de saut et physique Rigidbody',
    goal: 'Créer un script MonoBehaviour de déplacement avec détection de sol (GroundCheck)'
  },
  {
    title: '🎨 Blender & Python',
    lang: 'Python',
    app: 'Blender 4',
    lvl: 'Intermédiaire',
    topic: 'Génération procédurale de mesh 3D par script',
    goal: 'Utiliser l\'API bpy pour créer et manipuler des objets 3D dans le Viewport Blender'
  },
  {
    title: '🌐 JavaScript & VS Code',
    lang: 'JavaScript',
    app: 'VS Code',
    lvl: 'Débutant',
    topic: 'Manipulation interactive du DOM et événements',
    goal: 'Créer une interface dynamique avec écouteurs d\'événements et animations'
  }
];

const SUGGESTED_LANGUAGES = [
  'Blueprints (UE5)', 'Python', 'C++', 'C#', 'GDScript', 
  'JavaScript', 'TypeScript', 'Rust', 'Shader Graph', 'Lua', 'SQL'
];

const SUGGESTED_SOFTWARES = [
  'Unreal Engine 5', 'PyCharm', 'Godot 4', 'Unity', 
  'VS Code', 'Blender', 'Visual Studio', 'Android Studio'
];

export function TutorialModal({ isOpen, onClose, onSubmit, isGenerating }) {
  const [language, setLanguage] = useState('Blueprints');
  const [software, setSoftware] = useState('Unreal Engine 5');
  const [level, setLevel] = useState('Débutant');
  const [topic, setTopic] = useState('Créer un déplacement de personnage à la 3e personne');
  const [goal, setGoal] = useState('Comprendre les Enhanced Inputs et faire bouger le personnage dans le Viewport');

  if (!isOpen) return null;

  const handleApplyPreset = (p) => {
    setLanguage(p.lang);
    setSoftware(p.app);
    setLevel(p.lvl);
    setTopic(p.topic);
    setGoal(p.goal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!language.trim() || !software.trim()) {
      alert('Veuillez spécifier un langage et un logiciel.');
      return;
    }

    onSubmit({
      language: language.trim(),
      software: software.trim(),
      level,
      topic: topic.trim() || 'Apprentissage et fondamentaux',
      goal: goal.trim() || 'Comprendre et maîtriser ce sujet avec succès',
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: '680px' }} onClick={(e) => e.stopPropagation()}>
        <header className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ background: 'rgba(168, 85, 247, 0.15)', padding: '6px', borderRadius: '8px', color: '#c084fc' }}>
              <GraduationCap size={20} />
            </div>
            <div>
              <h2 style={{ fontSize: '15px', fontWeight: 600, color: '#fff' }}>Créer un Tutoriel d'Apprentissage IA</h2>
              <p style={{ fontSize: '11px', color: '#8b949e', margin: 0 }}>
                Apprenez n'importe quel langage sur n'importe quel logiciel ou moteur de jeu
              </p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            style={{ background: 'transparent', border: 'none', color: '#8b949e', cursor: 'pointer' }}
          >
            <X size={18} />
          </button>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Presets rapides */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <Sparkles size={13} color="#c084fc" />
                <span className="form-label" style={{ marginBottom: 0, fontSize: '12px', fontWeight: 600 }}>
                  Suggestions Populaires (1-Clic)
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
                {TUTORIAL_PRESETS.map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleApplyPreset(p)}
                    style={{
                      fontSize: '11px',
                      justifyContent: 'flex-start',
                      padding: '8px 10px',
                      textAlign: 'left',
                      background: '#0d1117',
                      borderColor: '#30363d',
                      lineHeight: '1.3'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, color: '#e6edf3' }}>{p.title}</div>
                      <div style={{ fontSize: '10px', color: '#8b949e', marginTop: '2px' }}>{p.topic}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Language & Software Inputs */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Code size={13} color="#38bdf8" />
                  <span>Langage ou Technologie</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  placeholder="ex: Blueprints, Python, C++, GDScript..."
                  required
                />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '6px' }}>
                  {SUGGESTED_LANGUAGES.slice(0, 6).map((l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => setLanguage(l)}
                      style={{
                        background: language === l ? 'rgba(56, 189, 248, 0.2)' : '#161b22',
                        color: language === l ? '#38bdf8' : '#8b949e',
                        border: `1px solid ${language === l ? '#38bdf8' : '#30363d'}`,
                        borderRadius: '4px',
                        fontSize: '10px',
                        padding: '2px 6px',
                        cursor: 'pointer'
                      }}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Box size={13} color="#f43f5e" />
                  <span>Logiciel / IDE / Moteur</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  value={software}
                  onChange={(e) => setSoftware(e.target.value)}
                  placeholder="ex: Unreal Engine 5, PyCharm, Godot, Unity..."
                  required
                />
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '6px' }}>
                  {SUGGESTED_SOFTWARES.slice(0, 5).map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSoftware(s)}
                      style={{
                        background: software === s ? 'rgba(244, 63, 94, 0.2)' : '#161b22',
                        color: software === s ? '#f43f5e' : '#8b949e',
                        border: `1px solid ${software === s ? '#f43f5e' : '#30363d'}`,
                        borderRadius: '4px',
                        fontSize: '10px',
                        padding: '2px 6px',
                        cursor: 'pointer'
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Level Selector */}
            <div className="form-group">
              <label className="form-label">Niveau Visé</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                {['Débutant (Zéro prérequis)', 'Intermédiaire (Pratique)', 'Avancé (Expertise)'].map((lvl) => {
                  const val = lvl.split(' ')[0];
                  const isSelected = level.startsWith(val);
                  return (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setLevel(val)}
                      className="btn btn-secondary btn-sm"
                      style={{
                        padding: '8px',
                        fontSize: '11px',
                        justifyContent: 'center',
                        background: isSelected ? 'rgba(168, 85, 247, 0.15)' : '#0d1117',
                        borderColor: isSelected ? '#c084fc' : '#30363d',
                        color: isSelected ? '#c084fc' : '#8b949e',
                        fontWeight: isSelected ? 600 : 400
                      }}
                    >
                      {lvl}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Topic / Objective */}
            <div className="form-group">
              <label className="form-label">Thème ou Sujet précis du cours</label>
              <input
                type="text"
                className="form-input"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="ex: Créer une IA ennemie qui poursuit le joueur, Manipuler des fichiers..."
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Objectif d'apprentissage attendu</label>
              <input
                type="text"
                className="form-input"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="ex: Comprendre chaque étape et savoir le refaire de mémoire..."
              />
            </div>
          </div>

          <footer className="modal-footer">
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={onClose}
              disabled={isGenerating}
            >
              Annuler
            </button>
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isGenerating}
              style={{
                background: 'linear-gradient(135deg, #9333ea 0%, #7e22ce 100%)',
                borderColor: '#a855f7'
              }}
            >
              <Wand2 size={14} />
              <span>{isGenerating ? 'Conception du Tutoriel...' : 'Générer le Tutoriel Interactif'}</span>
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
}
