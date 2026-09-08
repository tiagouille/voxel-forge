import React, { useState } from 'react';
import { 
  X, 
  Check, 
  Copy, 
  ChevronLeft, 
  ChevronRight, 
  GraduationCap, 
  MousePointer, 
  Code2, 
  Lightbulb, 
  Sparkles, 
  AlertTriangle, 
  Clock, 
  FolderDown, 
  CheckCircle2, 
  Keyboard, 
  Trophy,
  Layers,
  Info
} from 'lucide-react';

export function TutorialViewerModal({ isOpen, onClose, tutorial, onLoadIntoStudio }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedSolution, setCopiedSolution] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(true);

  if (!isOpen || !tutorial) return null;

  const steps = tutorial.steps || [];
  const currentStep = steps[currentStepIndex] || {};
  const progressPercent = steps.length > 0 ? Math.round(((currentStepIndex + 1) / steps.length) * 100) : 100;

  const handleCopy = (text, setCopiedState) => {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      setCopiedState(true);
      setTimeout(() => setCopiedState(false), 2000);
    });
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  // Helper to parse shortcuts regardless of format
  const parsedShortcuts = (tutorial.softwareSetup?.keyShortcuts || []).map((sc) => {
    if (typeof sc === 'string') {
      const parts = sc.split(':');
      return {
        key: parts[0]?.trim() || sc,
        action: parts.slice(1).join(':').trim() || ''
      };
    }
    return { key: sc.key, action: sc.action };
  });

  // Helper to get software actions array
  const rawActions = currentStep.softwareActions || currentStep.softwareAction;
  const actionsList = Array.isArray(rawActions) 
    ? rawActions 
    : typeof rawActions === 'string' 
      ? rawActions.split('\n').filter(Boolean)
      : [];

  const codeContent = currentStep.codeOrNodes || currentStep.codeSnippet;
  const codeLang = currentStep.codeLanguage || tutorial.language;
  const currentTitle = currentStep.title || currentStep.stepTitle || `Étape ${currentStepIndex + 1}`;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content" 
        style={{ maxWidth: '960px', width: '95vw', maxHeight: '92vh', display: 'flex', flexDirection: 'column' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header" style={{ borderBottom: '1px solid #30363d', paddingBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #a855f7, #6366f1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              boxShadow: '0 0 16px rgba(168, 85, 247, 0.4)'
            }}>
              <GraduationCap size={22} />
            </div>
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: '#f0f6fc' }}>
                {tutorial.title || 'Tutoriel d\'Apprentissage'}
              </h2>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginTop: '4px', flexWrap: 'wrap' }}>
                <span className="badge" style={{ background: '#a855f720', color: '#c084fc', border: '1px solid #a855f740' }}>
                  {tutorial.language}
                </span>
                <span className="badge" style={{ background: '#38bdf820', color: '#38bdf8', border: '1px solid #38bdf840' }}>
                  💻 {tutorial.software}
                </span>
                <span className="badge" style={{ background: '#22c55e20', color: '#4ade80', border: '1px solid #22c55e40' }}>
                  Niveau : {tutorial.level}
                </span>
                {tutorial.estimatedTime && (
                  <span style={{ fontSize: '11px', color: '#8b949e', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} /> {tutorial.estimatedTime}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => {
                onLoadIntoStudio(tutorial);
                onClose();
              }}
              title="Charger tous les fichiers du tutoriel dans le Monaco Editor de Voxel Studio"
              style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)', border: 'none' }}
            >
              <FolderDown size={14} />
              <span>Ouvrir dans le Studio</span>
            </button>
            <button className="btn-icon" onClick={onClose}>
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div style={{ overflowY: 'auto', padding: '16px 20px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Summary & Prerequisites */}
          {tutorial.summary && (
            <div style={{
              background: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '8px',
              padding: '12px 16px',
              fontSize: '13px',
              color: '#c9d1d9',
              lineHeight: 1.5
            }}>
              <strong style={{ color: '#58a6ff' }}>🎯 Objectif : </strong>
              {tutorial.summary}
              {tutorial.prerequisites && tutorial.prerequisites.length > 0 && (
                <div style={{ marginTop: '6px', fontSize: '11px', color: '#8b949e' }}>
                  <strong>Prérequis : </strong> {tutorial.prerequisites.join(' • ')}
                </div>
              )}
            </div>
          )}

          {/* Software Setup / Shortcuts Banner */}
          {tutorial.softwareSetup && (
            <div style={{
              background: 'rgba(99, 102, 241, 0.08)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              borderRadius: '8px',
              padding: '12px 16px',
            }}>
              <div 
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                onClick={() => setShowShortcuts(!showShortcuts)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, fontSize: '12px', color: '#818cf8' }}>
                  <Keyboard size={14} />
                  <span>Prise en main & Raccourcis sur {tutorial.software}</span>
                  {tutorial.softwareSetup.recommendedVersion && (
                    <span style={{ fontSize: '11px', color: '#a5b4fc', fontWeight: 400 }}>
                      ({tutorial.softwareSetup.recommendedVersion})
                    </span>
                  )}
                </div>
                <span style={{ fontSize: '11px', color: '#8b949e' }}>
                  {showShortcuts ? 'Masquer ▲' : 'Afficher ▼'}
                </span>
              </div>

              {showShortcuts && (
                <div style={{ marginTop: '10px' }}>
                  {(tutorial.softwareSetup.layoutTips || tutorial.softwareSetup.installationTips) && (
                    <p style={{ fontSize: '12px', color: '#8b949e', margin: '0 0 8px 0' }}>
                      💡 {tutorial.softwareSetup.layoutTips || tutorial.softwareSetup.installationTips}
                    </p>
                  )}
                  {parsedShortcuts.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {parsedShortcuts.map((sc, i) => (
                        <div key={i} style={{
                          background: '#0d1117',
                          border: '1px solid #30363d',
                          borderRadius: '6px',
                          padding: '3px 8px',
                          fontSize: '11px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}>
                          <code style={{ color: '#38bdf8', fontWeight: 700, background: '#161b22', padding: '1px 5px', borderRadius: '4px' }}>
                            {sc.key}
                          </code>
                          {sc.action && <span style={{ color: '#c9d1d9' }}>{sc.action}</span>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Stepper Navigation Bar */}
          <div style={{
            background: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '10px 14px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#f0f6fc' }}>
                Étape {currentStepIndex + 1} sur {steps.length}
              </span>
              <span style={{ fontSize: '12px', color: '#a855f7', fontWeight: 600 }}>
                {progressPercent}% complété
              </span>
            </div>

            {/* Progress Bar */}
            <div style={{ width: '100%', height: '5px', background: '#21262d', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{
                width: `${progressPercent}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #a855f7, #38bdf8)',
                transition: 'width 0.3s ease'
              }} />
            </div>

            {/* Step Pills */}
            <div style={{ display: 'flex', gap: '6px', marginTop: '10px', overflowX: 'auto', paddingBottom: '2px' }}>
              {steps.map((step, idx) => {
                const isActive = idx === currentStepIndex;
                const isPast = idx < currentStepIndex;
                const title = step.title || step.stepTitle || `Étape ${idx + 1}`;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentStepIndex(idx)}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      border: 'none',
                      cursor: 'pointer',
                      background: isActive 
                        ? 'linear-gradient(135deg, #a855f7, #6366f1)' 
                        : isPast 
                          ? 'rgba(34, 197, 94, 0.15)' 
                          : '#21262d',
                      color: isActive ? '#fff' : isPast ? '#4ade80' : '#8b949e',
                      fontWeight: isActive ? 600 : 400,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {isPast && <Check size={11} />}
                    <span>{idx + 1}. {title.slice(0, 18)}...</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current Step Content Card */}
          <div style={{
            background: '#0d1117',
            border: '1px solid #30363d',
            borderRadius: '10px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {/* Step Title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: '#a855f7',
                color: '#fff',
                fontWeight: 700,
                fontSize: '13px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {currentStep.stepNumber || currentStepIndex + 1}
              </div>
              <h3 style={{ margin: 0, fontSize: '1.15rem', color: '#f0f6fc', fontWeight: 600 }}>
                {currentTitle}
              </h3>
            </div>

            {/* 🖱️ Software Action (What to click in UE5, PyCharm, Godot, Blender, etc.) */}
            {actionsList.length > 0 && (
              <div style={{
                background: 'rgba(56, 189, 248, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                borderRadius: '8px',
                padding: '14px',
                display: 'flex',
                gap: '12px'
              }}>
                <MousePointer size={20} color="#38bdf8" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                    Actions dans l'interface de {tutorial.software}
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: '#e6edf3', lineHeight: 1.6 }}>
                    {actionsList.map((act, i) => (
                      <li key={i} style={{ marginBottom: '4px' }}>
                        {act}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* 💻 Code Snippet / Blueprints Nodes */}
            {codeContent && (
              <div style={{
                background: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: '#21262d',
                  padding: '8px 14px',
                  borderBottom: '1px solid #30363d'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#8b949e' }}>
                    <Code2 size={14} color="#a855f7" />
                    <span>{codeLang}</span>
                  </div>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => handleCopy(codeContent, setCopiedCode)}
                    style={{ padding: '3px 8px', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    {copiedCode ? <Check size={12} color="#22c55e" /> : <Copy size={12} />}
                    <span>{copiedCode ? 'Copié !' : 'Copier'}</span>
                  </button>
                </div>
                <pre style={{
                  margin: 0,
                  padding: '14px',
                  fontSize: '12px',
                  fontFamily: 'Fira Code, Consolas, monospace',
                  color: '#e6edf3',
                  overflowX: 'auto',
                  lineHeight: 1.5,
                  maxHeight: '320px'
                }}>
                  <code>{codeContent}</code>
                </pre>
              </div>
            )}

            {/* 💡 Pedagogical Explanation */}
            {currentStep.explanation && (
              <div style={{
                fontSize: '13px',
                color: '#c9d1d9',
                lineHeight: 1.6,
                padding: '4px 2px'
              }}>
                <strong style={{ color: '#bc8cff', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <Lightbulb size={15} /> Explication du concept :
                </strong>
                {currentStep.explanation}
              </div>
            )}

            {/* Tips & Pitfalls Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
              {currentStep.proTip && (
                <div style={{
                  background: 'rgba(168, 85, 247, 0.08)',
                  border: '1px solid rgba(168, 85, 247, 0.25)',
                  borderRadius: '8px',
                  padding: '10px 12px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 700, color: '#c084fc', marginBottom: '4px' }}>
                    <Sparkles size={13} />
                    <span>ASTUCE DE PRO</span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#c9d1d9', lineHeight: 1.5 }}>
                    {currentStep.proTip}
                  </div>
                </div>
              )}

              {currentStep.pitfallToAvoid && (
                <div style={{
                  background: 'rgba(234, 179, 8, 0.08)',
                  border: '1px solid rgba(234, 179, 8, 0.25)',
                  borderRadius: '8px',
                  padding: '10px 12px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 700, color: '#fbbf24', marginBottom: '4px' }}>
                    <AlertTriangle size={13} />
                    <span>PIÈGE CLASSIQUE À ÉVITER</span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#c9d1d9', lineHeight: 1.5 }}>
                    {currentStep.pitfallToAvoid}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Practice Challenge */}
          {tutorial.practiceChallenge && (
            <div style={{
              background: '#161b22',
              border: '1px solid rgba(234, 179, 8, 0.3)',
              borderRadius: '10px',
              padding: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <Trophy size={18} color="#eab308" />
                <h4 style={{ margin: 0, fontSize: '13px', color: '#f0f6fc', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {tutorial.practiceChallenge.title || 'Défi Pratique d\'application'}
                </h4>
              </div>

              <div style={{ fontSize: '13px', color: '#c9d1d9', lineHeight: 1.6, marginBottom: '12px' }}>
                {tutorial.practiceChallenge.description}
              </div>

              {(tutorial.practiceChallenge.hint || (tutorial.practiceChallenge.hints && tutorial.practiceChallenge.hints.length > 0)) && (
                <div style={{ marginBottom: '12px', background: '#0d1117', padding: '10px 12px', borderRadius: '6px', border: '1px solid #21262d' }}>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: '#8b949e', marginBottom: '4px' }}>
                    💡 Indice :
                  </div>
                  <div style={{ fontSize: '12px', color: '#8b949e' }}>
                    {tutorial.practiceChallenge.hint || tutorial.practiceChallenge.hints?.join(' • ')}
                  </div>
                </div>
              )}

              {tutorial.practiceChallenge.solution && (
                <div>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => setShowSolution(!showSolution)}
                    style={{ fontSize: '11px' }}
                  >
                    {showSolution ? 'Masquer la Solution' : '👁️ Afficher la Solution'}
                  </button>

                  {showSolution && (
                    <div style={{ marginTop: '10px', background: '#0d1117', border: '1px solid #30363d', borderRadius: '6px', padding: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <span style={{ fontSize: '11px', color: '#22c55e', fontWeight: 600 }}>Solution recommandée :</span>
                        <button
                          className="btn btn-secondary btn-sm"
                          onClick={() => handleCopy(tutorial.practiceChallenge.solution, setCopiedSolution)}
                          style={{ padding: '2px 6px', fontSize: '10px' }}
                        >
                          {copiedSolution ? <Check size={11} color="#22c55e" /> : <Copy size={11} />}
                          <span>{copiedSolution ? 'Copié' : 'Copier'}</span>
                        </button>
                      </div>
                      <pre style={{
                        margin: 0,
                        padding: '10px',
                        background: '#161b22',
                        borderRadius: '4px',
                        fontSize: '11px',
                        color: '#c9d1d9',
                        overflowX: 'auto',
                        whiteSpace: 'pre-wrap',
                        fontFamily: 'Fira Code, Consolas, monospace'
                      }}>
                        <code>{tutorial.practiceChallenge.solution}</code>
                      </pre>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Files List in Tutorial */}
          {tutorial.files && tutorial.files.length > 0 && (
            <div style={{
              background: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '8px',
              padding: '12px 16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#f0f6fc' }}>
                  📦 Fichiers inclus ({tutorial.files.length}) :
                </div>
                <div style={{ fontSize: '11px', color: '#8b949e', marginTop: '2px' }}>
                  {tutorial.files.map(f => f.path || f.name).join(', ')}
                </div>
              </div>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  onLoadIntoStudio(tutorial);
                  onClose();
                }}
                style={{ fontSize: '11px', borderColor: '#a855f7', color: '#c084fc' }}
              >
                <FolderDown size={13} />
                <span>Charger dans l'éditeur</span>
              </button>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="modal-footer" style={{ borderTop: '1px solid #30363d', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button
            className="btn btn-secondary"
            onClick={handlePrev}
            disabled={currentStepIndex === 0}
            style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            <ChevronLeft size={16} />
            <span>Étape Précédente</span>
          </button>

          <div style={{ display: 'flex', gap: '10px' }}>
            {currentStepIndex < steps.length - 1 ? (
              <button
                className="btn btn-primary"
                onClick={handleNext}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'linear-gradient(135deg, #a855f7, #6366f1)' }}
              >
                <span>Étape Suivante</span>
                <ChevronRight size={16} />
              </button>
            ) : (
              <button
                className="btn btn-accent"
                onClick={() => {
                  onLoadIntoStudio(tutorial);
                  onClose();
                }}
                style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <CheckCircle2 size={16} />
                <span>Terminé ! Ouvrir dans le Studio</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
