import React from 'react';
import { 
  X, 
  ShieldCheck, 
  Bot, 
  Scale, 
  Lock, 
  Sparkles, 
  FileCode, 
  Server, 
  AlertCircle,
  CheckCircle2
} from 'lucide-react';

export function TermsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content" 
        style={{ maxWidth: '840px', width: '95vw', maxHeight: '88vh', display: 'flex', flexDirection: 'column' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header" style={{ borderBottom: '1px solid #30363d', paddingBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #10b981, #059669)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              boxShadow: '0 0 16px rgba(16, 185, 129, 0.4)'
            }}>
              <Scale size={22} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: '#f0f6fc' }}>
                Conditions Générales d'Utilisation & Mentions Légales
              </h2>
              <p style={{ margin: 0, fontSize: '12px', color: '#8b949e', marginTop: '2px' }}>
                Voxel Forge — Plateforme de création et d'apprentissage du code
              </p>
            </div>
          </div>

          <button className="btn-icon" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div style={{ overflowY: 'auto', padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '18px' }}>
          
          {/* Highlight AI Banner */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(56, 189, 248, 0.15))',
            border: '1px solid rgba(168, 85, 247, 0.35)',
            borderRadius: '12px',
            padding: '16px',
            display: 'flex',
            gap: '14px',
            alignItems: 'flex-start'
          }}>
            <Bot size={28} color="#c084fc" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 700, color: '#f0f6fc', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>Origine du site : Conçu et Développé Intégralement par Intelligence Artificielle</span>
                <Sparkles size={14} color="#facc15" />
              </h3>
              <p style={{ margin: '6px 0 0 0', fontSize: '13px', color: '#cbd5e1', lineHeight: 1.6 }}>
                Le présent site <strong>Voxel Forge</strong>, son architecture logicielle (frontend Vite React, backend Node.js, Monaco Editor, bac à sable d'exécution, algorithmes de génération et visionneuse de tutoriels) a été <strong>entièrement conçu, écrit et développé par Intelligence Artificielle (DeepMind Antigravity)</strong> sous la supervision de son créateur.
              </p>
            </div>
          </div>

          {/* Section 1: Objet & Gratuité */}
          <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: '10px', padding: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#38bdf8' }}>
              <CheckCircle2 size={16} />
              <h4 style={{ margin: 0, fontSize: '13px', fontWeight: 700, textTransform: 'uppercase' }}>
                1. Objet & Service 100% Gratuit
              </h4>
            </div>
            <p style={{ margin: 0, fontSize: '13px', color: '#c9d1d9', lineHeight: 1.6 }}>
              Voxel Forge est une plateforme gratuite dédiée à l'apprentissage des langages de programmation (Python, C++, Blueprints Unreal Engine, GDScript, C#, JavaScript, etc.), au prototypage de jeux vidéo et au développement web interactif.
              L'accès à la plateforme est libre, sans obligation d'abonnement ni frais cachés.
            </p>
          </div>

          {/* Section 2: Données & Confidentialité */}
          <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: '10px', padding: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#10b981' }}>
              <Lock size={16} />
              <h4 style={{ margin: 0, fontSize: '13px', fontWeight: 700, textTransform: 'uppercase' }}>
                2. Respect de la Vie Privée & Données Locales
              </h4>
            </div>
            <p style={{ margin: 0, fontSize: '13px', color: '#c9d1d9', lineHeight: 1.6 }}>
              Voxel Forge respecte strictement la confidentialité de vos données :
            </p>
            <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px', fontSize: '13px', color: '#8b949e', lineHeight: 1.6 }}>
              <li><strong>Stockage Local</strong> : Vos projets en cours, fichiers personnalisés, thèmes et préférences sont stockés directement dans votre navigateur via <code style={{ color: '#38bdf8' }}>localStorage</code>.</li>
              <li><strong>Aucun pistage intrusif</strong> : Aucun tracker publicitaire n'est utilisé.</li>
              <li><strong>Clés API facultatives</strong> : Si vous configurez vos propres clés d'API IA (Gemini ou Mistral), celles-ci restent confidentielles et ne sont jamais partagées à des tiers.</li>
            </ul>
          </div>

          {/* Section 3: Propriété Intellectuelle */}
          <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: '10px', padding: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#f59e0b' }}>
              <FileCode size={16} />
              <h4 style={{ margin: 0, fontSize: '13px', fontWeight: 700, textTransform: 'uppercase' }}>
                3. Propriété du Code Généré
              </h4>
            </div>
            <p style={{ margin: 0, fontSize: '13px', color: '#c9d1d9', lineHeight: 1.6 }}>
              Tout le code source, les scripts, les jeux vidéo ou les projets que vous écrivez ou faites générer par l'assistant IA dans Voxel Forge vous appartiennent entièrement. Vous avez le droit de les exporter au format ZIP, de les modifier, les distribuer et les utiliser librement à des fins personnelles, éducatives ou commerciales.
            </p>
          </div>

          {/* Section 4: Avertissement & Responsabilité IA */}
          <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: '10px', padding: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#ef4444' }}>
              <AlertCircle size={16} />
              <h4 style={{ margin: 0, fontSize: '13px', fontWeight: 700, textTransform: 'uppercase' }}>
                4. Avertissement sur les Contenus Générés par IA
              </h4>
            </div>
            <p style={{ margin: 0, fontSize: '13px', color: '#c9d1d9', lineHeight: 1.6 }}>
              Les modèles d'Intelligence Artificielle fournissent des suggestions de code, des revues et des tutoriels à titre d'assistance pédagogique. Bien que le pipeline applique des vérifications automatiques (Mistral Review & sanitizers), il appartient à l'utilisateur de tester et valider le code avant toute utilisation critique ou mise en production externe.
            </p>
          </div>

          {/* Section 5: Hébergement Technique */}
          <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: '10px', padding: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#bc8cff' }}>
              <Server size={16} />
              <h4 style={{ margin: 0, fontSize: '13px', fontWeight: 700, textTransform: 'uppercase' }}>
                5. Infrastructure & Hébergement
              </h4>
            </div>
            <p style={{ margin: 0, fontSize: '13px', color: '#c9d1d9', lineHeight: 1.6 }}>
              Le site Voxel Forge est hébergé de manière sécurisée et distribuée :
            </p>
            <ul style={{ margin: '8px 0 0 0', paddingLeft: '20px', fontSize: '13px', color: '#8b949e', lineHeight: 1.6 }}>
              <li><strong>Hébergement Frontend</strong> : GitHub Pages (<code style={{ color: '#58a6ff' }}>tiagouille.github.io/voxel-forge</code>).</li>
              <li><strong>Passerelle & Redirection</strong> : Cloudflare Pages (<code style={{ color: '#58a6ff' }}>voxel-forge-4cz.pages.dev</code>).</li>
              <li><strong>Backend IA</strong> : Déployé sur Render Cloud Service (<code style={{ color: '#58a6ff' }}>voxel-forge.onrender.com</code>).</li>
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="modal-footer" style={{ borderTop: '1px solid #30363d', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '11px', color: '#8b949e' }}>
            Dernière mise à jour : 2026 • Voxel Forge v1.2
          </span>
          <button className="btn btn-primary" onClick={onClose}>
            J'ai compris & Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
