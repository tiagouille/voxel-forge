import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  ShieldCheck, 
  AlertTriangle, 
  Wrench, 
  FileSearch, 
  Zap, 
  RefreshCw, 
  Download, 
  CheckCircle2, 
  Clock, 
  ChevronDown, 
  ChevronUp,
  HelpCircle,
  Bug,
  Lock,
  PackageCheck,
  Play
} from 'lucide-react';

export function AssistantPanel({
  project,
  activeFile,
  review,
  pipelineStatus,
  isGenerating,
  onGenerateProject,
  onRun,
  onReviewWithMistral,
  onFixActiveFile,
  onImproveActiveFile,
  onExplainActiveFile,
  onRegenerateActiveFile,
  onDownloadZip,
}) {
  const [showArchDetails, setShowArchDetails] = useState(true);

  // Pipeline steps list
  const steps = [
    { id: 'arch', label: 'Gemini Architecture', icon: Sparkles },
    { id: 'gen', label: 'Gemini Génération', icon: Bot },
    { id: 'review', label: 'Mistral Review', icon: ShieldCheck },
    { id: 'fix', label: 'Gemini Auto-Fix', icon: Wrench },
    { id: 'done', label: 'Projet Final', icon: CheckCircle2 },
  ];

  const getStepStatus = (stepId) => {
    if (!pipelineStatus) return 'idle';
    if (pipelineStatus.current === stepId) return 'active';
    if (pipelineStatus.completed?.includes(stepId)) return 'completed';
    return 'idle';
  };

  const scoreClass = (score) => {
    if (score >= 85) return 'score-a';
    if (score >= 70) return 'score-b';
    if (score >= 55) return 'score-c';
    return 'score-d';
  };

  return (
    <aside className="assistant-panel">
      {/* Header */}
      <div className="assistant-header">
        <div className="assistant-title">
          <Bot size={18} color="#bc8cff" />
          <span>Assistant IA & Pipeline</span>
        </div>
        {isGenerating && (
          <span style={{ fontSize: '11px', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <RefreshCw size={12} className="animate-spin" />
            En cours...
          </span>
        )}
      </div>

      <div className="assistant-content">
        {/* Pipeline Stepper */}
        <div className="ai-card">
          <div className="ai-card-title">
            <span>Pipeline de Génération</span>
            <span style={{ fontSize: '10px', color: '#38bdf8' }}>Gemini + Mistral</span>
          </div>

          <div className="pipeline-track">
            {steps.map((step) => {
              const status = getStepStatus(step.id);
              const StepIcon = step.icon;

              return (
                <div key={step.id} className="pipeline-step">
                  <div className={`step-icon-box ${status}`}>
                    {status === 'active' ? (
                      <RefreshCw size={13} style={{ animation: 'spin 1s linear infinite' }} />
                    ) : (
                      <StepIcon size={13} />
                    )}
                  </div>
                  <span style={{ 
                    color: status === 'active' ? '#38bdf8' : status === 'completed' ? '#e6edf3' : '#8b949e',
                    fontWeight: status === 'active' ? 600 : 400
                  }}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Project Architecture Summary */}
        {project && (
          <div className="ai-card">
            <div 
              className="ai-card-title" 
              style={{ cursor: 'pointer' }}
              onClick={() => setShowArchDetails(!showArchDetails)}
            >
              <span>Architecture & Spécifications</span>
              {showArchDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </div>

            <div style={{ fontSize: '12px', color: '#8b949e', marginBottom: '8px' }}>
              <strong>Type :</strong> {project.techStack?.type || 'Web'} | <strong>Langage :</strong> {project.techStack?.language} | <strong>Framework :</strong> {project.techStack?.framework}
            </div>

            {showArchDetails && (
              <div style={{
                background: '#0d1117',
                padding: '10px',
                borderRadius: '6px',
                fontSize: '11px',
                lineHeight: '1.5',
                color: '#c9d1d9',
                maxHeight: '140px',
                overflowY: 'auto',
                whiteSpace: 'pre-wrap'
              }}>
                {project.architecture || project.summary}
              </div>
            )}
          </div>
        )}

        {/* Mistral Review Card */}
        {review && (
          <div className="ai-card">
            <div className="ai-card-title">
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={14} color="#f43f5e" />
                Rapport Qualité Mistral
              </span>
              <span className={`score-pill ${scoreClass(review.qualityScore || 90)}`}>
                {review.qualityScore || 90}/100 • Grade {review.grade || 'A'}
              </span>
            </div>

            <p style={{ fontSize: '12px', color: '#c9d1d9', marginBottom: '12px' }}>
              {review.summary}
            </p>

            {/* Audit Pills */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px' }}>
              <div style={{ fontSize: '11px', display: 'flex', alignItems: 'center', gap: '6px', color: '#8b949e' }}>
                <PackageCheck size={12} color="#3fb950" />
                <span>Dépendances : <strong>{review.dependenciesCheck?.status || 'Valides'}</strong></span>
              </div>
              <div style={{ fontSize: '11px', display: 'flex', alignItems: 'center', gap: '6px', color: '#8b949e' }}>
                <Lock size={12} color="#58a6ff" />
                <span>Sécurité : <strong>{review.securityAudit?.status || 'Propre'}</strong></span>
              </div>
            </div>

            {/* Bugs List */}
            {review.bugs && review.bugs.length > 0 && (
              <div style={{ marginTop: '8px' }}>
                <span style={{ fontSize: '11px', fontWeight: 600, color: '#f85149', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' }}>
                  <Bug size={12} />
                  Anomalies & Alertes ({review.bugs.length})
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '160px', overflowY: 'auto' }}>
                  {review.bugs.map((bug, idx) => (
                    <div key={idx} style={{ background: '#0d1117', padding: '8px', borderRadius: '6px', fontSize: '11px', borderLeft: `3px solid ${bug.severity === 'high' ? '#f85149' : '#d29922'}` }}>
                      <div style={{ fontWeight: 600, color: '#e6edf3' }}>{bug.file}</div>
                      <div style={{ color: '#8b949e', marginTop: '2px' }}>{bug.description}</div>
                      {bug.suggestedFix && (
                        <div style={{ color: '#58a6ff', marginTop: '4px', fontStyle: 'italic' }}>
                          💡 {bug.suggestedFix}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Primary Action Buttons */}
        <div className="ai-card">
          <div className="ai-card-title">
            <span>Actions Principales</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <button 
              className="btn btn-accent" 
              onClick={onGenerateProject} 
              disabled={isGenerating}
              style={{ gridColumn: 'span 2' }}
            >
              <Sparkles size={14} />
              <span>Générer un Projet</span>
            </button>

            <button 
              className="btn btn-run" 
              onClick={onRun} 
              disabled={!project}
              style={{ gridColumn: 'span 2', padding: '10px' }}
              title="Exécuter et essayer le jeu / l'application en direct (Run)"
            >
              <Play size={16} fill="#10b981" color="#10b981" />
              <span>Lancer le Projet (Run)</span>
            </button>

            <button 
              className="btn btn-secondary" 
              onClick={onReviewWithMistral} 
              disabled={isGenerating || !project}
              title="Lancer une inspection qualité complète avec Mistral"
            >
              <ShieldCheck size={14} color="#f43f5e" />
              <span>Review Mistral</span>
            </button>

            <button 
              className="btn btn-secondary" 
              onClick={onFixActiveFile} 
              disabled={isGenerating || !activeFile}
              title="Corriger automatiquement le fichier sélectionné avec Gemini"
            >
              <Wrench size={14} color="#58a6ff" />
              <span>Fix File</span>
            </button>

            <button 
              className="btn btn-secondary" 
              onClick={onImproveActiveFile} 
              disabled={isGenerating || !activeFile}
              title="Optimiser et refactoriser le fichier actif"
            >
              <Zap size={14} color="#d29922" />
              <span>Improve</span>
            </button>

            <button 
              className="btn btn-secondary" 
              onClick={onExplainActiveFile} 
              disabled={isGenerating || !activeFile}
              title="Obtenir des explications détaillées sur le code du fichier actif"
            >
              <HelpCircle size={14} color="#bc8cff" />
              <span>Explain</span>
            </button>

            <button 
              className="btn btn-secondary" 
              onClick={onRegenerateActiveFile} 
              disabled={isGenerating || !activeFile}
              title="Régénérer complètement le fichier actif"
            >
              <RefreshCw size={14} color="#3fb950" />
              <span>Regenerate File</span>
            </button>

            <button 
              className="btn btn-primary" 
              onClick={onDownloadZip} 
              disabled={!project}
              title="Télécharger l'arborescence complète en archive ZIP"
            >
              <Download size={14} />
              <span>Download ZIP</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
