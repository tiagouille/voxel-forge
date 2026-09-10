import React, { useState, useRef, useEffect } from 'react';
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
  Play, 
  GraduationCap,
  MessageSquare,
  Send,
  Check,
  Code2
} from 'lucide-react';
import { api } from '../services/api';
import { sounds } from '../services/soundEffects';

export function AssistantPanel({
  project,
  activeFile,
  review,
  pipelineStatus,
  isGenerating,
  onGenerateProject,
  onOpenTutorial,
  onRun,
  onReviewWithMistral,
  onFixActiveFile,
  onImproveActiveFile,
  onExplainActiveFile,
  onRegenerateActiveFile,
  onDownloadZip,
  onApplyCopilotFiles,
}) {
  const [activeTab, setActiveTab] = useState('pipeline'); // 'pipeline' | 'copilot'
  const [showArchDetails, setShowArchDetails] = useState(true);

  // Chat Copilot State
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      role: 'assistant',
      text: "Bonjour ! Je suis **Voxel Copilot**. Vous pouvez me demander d'ajouter des mécaniques de jeu, de corriger des bugs, d'ajuster le design ou d'ajouter des sons en direct !",
      suggestedActions: [
        "🎮 Ajouter un système de score et vies",
        "🔊 Ajouter des effets sonores",
        "🎨 Changer le style en mode Cyberpunk",
        "💡 Expliquer le code de ce fichier"
      ]
    }
  ]);
  const [inputMsg, setInputMsg] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);
  const chatBottomRef = useRef(null);

  useEffect(() => {
    if (activeTab === 'copilot') {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, activeTab]);

  // Send message to Copilot
  const handleSendMessage = async (textToSend) => {
    const text = (textToSend || inputMsg).trim();
    if (!text || isChatLoading) return;

    sounds.playClick();
    const userMsgId = Date.now();
    const newMessages = [...messages, { id: userMsgId, role: 'user', text }];
    setMessages(newMessages);
    setInputMsg('');
    setIsChatLoading(true);

    try {
      const response = await api.chatWithCopilot({
        message: text,
        conversationHistory: newMessages.map(m => ({ role: m.role, content: m.text })),
        project,
        activeFile
      });

      sounds.playChat();

      const assistantMsg = {
        id: Date.now() + 1,
        role: 'assistant',
        text: response.reply || "Modifications terminées !",
        modifiedFiles: response.modifiedFiles || [],
        suggestedActions: response.suggestedActions || []
      };

      setMessages(prev => [...prev, assistantMsg]);

      // If files were modified, automatically offer to apply or auto-apply
      if (response.modifiedFiles && response.modifiedFiles.length > 0 && onApplyCopilotFiles) {
        onApplyCopilotFiles(response.modifiedFiles);
      }
    } catch (err) {
      sounds.playError();
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          role: 'assistant',
          text: `⚠️ Erreur : ${err.message || 'Impossible de joindre le serveur'}.`
        }
      ]);
    } finally {
      setIsChatLoading(false);
    }
  };

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
      {/* Header with Tab Switcher */}
      <div className="assistant-header" style={{ flexDirection: 'column', gap: '8px', alignItems: 'stretch', padding: '10px 14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="assistant-title">
            <Bot size={18} color="#bc8cff" />
            <span>Assistant IA & Studio</span>
          </div>
          {(isGenerating || isChatLoading) && (
            <span style={{ fontSize: '11px', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <RefreshCw size={12} className="animate-spin" />
              Actif...
            </span>
          )}
        </div>

        {/* Tab Navigation */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          background: '#0d1117',
          padding: '2px',
          borderRadius: '8px',
          border: '1px solid #30363d'
        }}>
          <button
            onClick={() => {
              sounds.playClick();
              setActiveTab('pipeline');
            }}
            style={{
              padding: '5px 8px',
              borderRadius: '6px',
              fontSize: '11px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: activeTab === 'pipeline' ? 600 : 400,
              background: activeTab === 'pipeline' ? 'linear-gradient(135deg, #0284c7, #6366f1)' : 'transparent',
              color: activeTab === 'pipeline' ? '#fff' : '#8b949e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            <Sparkles size={12} />
            <span>Pipeline IA</span>
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              setActiveTab('copilot');
            }}
            style={{
              padding: '5px 8px',
              borderRadius: '6px',
              fontSize: '11px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: activeTab === 'copilot' ? 600 : 400,
              background: activeTab === 'copilot' ? 'linear-gradient(135deg, #a855f7, #6366f1)' : 'transparent',
              color: activeTab === 'copilot' ? '#fff' : '#8b949e',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            <MessageSquare size={12} />
            <span>Chat Copilot</span>
          </button>
        </div>
      </div>

      {/* TAB 1: PIPELINE & REVIEW */}
      {activeTab === 'pipeline' && (
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
                }}>
                  {project.description || 'Projet généré avec succès.'}
                </div>
              )}
            </div>
          )}

          {/* Mistral Quality Audit */}
          {review && (
            <div className="ai-card">
              <div className="ai-card-title">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={15} color="#f43f5e" />
                  <span>Audit Qualité Mistral</span>
                </div>
                <span className={`quality-badge ${scoreClass(review.qualityScore)}`}>
                  Score : {review.qualityScore}/100
                </span>
              </div>

              <p style={{ fontSize: '12px', color: '#c9d1d9', margin: '6px 0' }}>
                {review.summary}
              </p>

              {review.bugs && review.bugs.length > 0 && (
                <div style={{ marginTop: '10px' }}>
                  <div style={{ fontSize: '11px', color: '#f85149', fontWeight: 600, marginBottom: '6px' }}>
                    Points d'attention ({review.bugs.length}) :
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '160px', overflowY: 'auto' }}>
                    {review.bugs.map((bug, i) => (
                      <div key={i} className="bug-item">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <span style={{ color: '#e6edf3', fontWeight: 600 }}>{bug.file}</span>
                          <span style={{ fontSize: '10px', color: '#f85149' }}>L.{bug.line || '?'}</span>
                        </div>
                        <div style={{ color: '#8b949e', marginTop: '2px' }}>{bug.description}</div>
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
                className="btn btn-secondary" 
                onClick={onOpenTutorial} 
                disabled={isGenerating}
                style={{ 
                  gridColumn: 'span 2', 
                  borderColor: '#a855f7', 
                  color: '#c084fc', 
                  background: 'rgba(168, 85, 247, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <GraduationCap size={16} color="#c084fc" />
                <span style={{ fontWeight: 600 }}>Créer un Tutoriel (UE5, Python...)</span>
              </button>

              <button 
                className="btn btn-run" 
                onClick={onRun} 
                disabled={!project}
                style={{ gridColumn: 'span 2', padding: '10px' }}
              >
                <Play size={16} fill="#10b981" color="#10b981" />
                <span>Lancer le Projet (Run)</span>
              </button>

              <button 
                className="btn btn-secondary" 
                onClick={onReviewWithMistral} 
                disabled={isGenerating || !project}
              >
                <ShieldCheck size={14} color="#f43f5e" />
                <span>Review Mistral</span>
              </button>

              <button 
                className="btn btn-secondary" 
                onClick={onFixActiveFile} 
                disabled={isGenerating || !activeFile}
              >
                <Wrench size={14} color="#58a6ff" />
                <span>Fix File</span>
              </button>

              <button 
                className="btn btn-secondary" 
                onClick={onImproveActiveFile} 
                disabled={isGenerating || !activeFile}
              >
                <Zap size={14} color="#d29922" />
                <span>Improve</span>
              </button>

              <button 
                className="btn btn-secondary" 
                onClick={onExplainActiveFile} 
                disabled={isGenerating || !activeFile}
              >
                <HelpCircle size={14} color="#bc8cff" />
                <span>Explain</span>
              </button>

              <button 
                className="btn btn-secondary" 
                onClick={onRegenerateActiveFile} 
                disabled={isGenerating || !activeFile}
              >
                <RefreshCw size={14} color="#3fb950" />
                <span>Regenerate File</span>
              </button>

              <button 
                className="btn btn-primary" 
                onClick={onDownloadZip} 
                disabled={!project}
              >
                <Download size={14} />
                <span>Download ZIP</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CHAT COPILOT EN DIRECT */}
      {activeTab === 'copilot' && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
          {/* Chat Messages Log */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {messages.map((m) => {
              const isUser = m.role === 'user';
              return (
                <div
                  key={m.id}
                  style={{
                    alignSelf: isUser ? 'flex-end' : 'flex-start',
                    maxWidth: '92%',
                    background: isUser ? 'linear-gradient(135deg, #0284c7, #2563eb)' : '#161b22',
                    border: `1px solid ${isUser ? 'transparent' : '#30363d'}`,
                    borderRadius: isUser ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                    padding: '10px 12px',
                    color: '#f0f6fc',
                    fontSize: '12px',
                    lineHeight: '1.5'
                  }}
                >
                  <div style={{ whiteSpace: 'pre-wrap' }}>
                    {m.text}
                  </div>

                  {/* Modified files notification */}
                  {m.modifiedFiles && m.modifiedFiles.length > 0 && (
                    <div style={{
                      marginTop: '8px',
                      padding: '8px',
                      background: 'rgba(34, 197, 94, 0.1)',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      borderRadius: '6px',
                      fontSize: '11px',
                      color: '#4ade80'
                    }}>
                      <div style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Check size={12} />
                        <span>Fichiers modifiés et mis à jour :</span>
                      </div>
                      <div style={{ marginTop: '2px', color: '#c9d1d9' }}>
                        {m.modifiedFiles.map(f => f.path).join(', ')}
                      </div>
                    </div>
                  )}

                  {/* Quick Action Chips */}
                  {m.suggestedActions && m.suggestedActions.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
                      {m.suggestedActions.map((sug, i) => (
                        <button
                          key={i}
                          onClick={() => handleSendMessage(sug)}
                          disabled={isChatLoading}
                          style={{
                            background: '#0d1117',
                            border: '1px solid #30363d',
                            color: '#38bdf8',
                            fontSize: '10px',
                            padding: '3px 8px',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            textAlign: 'left'
                          }}
                        >
                          {sug}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {isChatLoading && (
              <div style={{
                alignSelf: 'flex-start',
                background: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '12px 12px 12px 2px',
                padding: '8px 12px',
                fontSize: '12px',
                color: '#38bdf8',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <RefreshCw size={12} className="animate-spin" />
                <span>Copilot réfléchit et modifie le code...</span>
              </div>
            )}

            <div ref={chatBottomRef} />
          </div>

          {/* Chat Input Bar */}
          <div style={{
            padding: '10px 12px',
            borderTop: '1px solid #30363d',
            background: '#161b22',
            display: 'flex',
            gap: '8px',
            alignItems: 'center'
          }}>
            <input
              type="text"
              placeholder={activeFile ? `Parler à Copilot (ex: "ajoute un son dans ${activeFile.path}")...` : "Demander une modification..."}
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
              disabled={isChatLoading}
              style={{
                flex: 1,
                padding: '8px 12px',
                background: '#0d1117',
                border: '1px solid #30363d',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '12px',
                outline: 'none'
              }}
            />
            <button
              className="btn btn-primary btn-sm"
              onClick={() => handleSendMessage()}
              disabled={!inputMsg.trim() || isChatLoading}
              style={{ padding: '8px 12px' }}
            >
              <Send size={13} />
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
