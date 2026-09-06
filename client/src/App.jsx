import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { FileExplorer } from './components/FileExplorer';
import { CodeEditor } from './components/CodeEditor';
import { AssistantPanel } from './components/AssistantPanel';
import { ProjectModal } from './components/ProjectModal';
import { SettingsModal } from './components/SettingsModal';
import { ExplanationModal } from './components/ExplanationModal';
import { api } from './services/api';
import { downloadProjectAsZip } from './services/zipExport';

export default function App() {
  const [project, setProject] = useState(null);
  const [activeFile, setActiveFile] = useState(null);
  const [openTabs, setOpenTabs] = useState([]);
  const [isDirty, setIsDirty] = useState(false);
  const [mode, setMode] = useState('auto');
  const [review, setReview] = useState(null);
  const [providers, setProviders] = useState(null);
  const [pipelineStatus, setPipelineStatus] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Modals
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [explanationModal, setExplanationModal] = useState({ isOpen: false, title: '', content: '' });

  // Load providers and initial starter project
  useEffect(() => {
    fetchProviders();
    generateStarterProject();
  }, []);

  const fetchProviders = async () => {
    try {
      const data = await api.getProviders();
      setProviders(data);
    } catch (err) {
      console.warn('Backend not responding yet, running local client state:', err);
    }
  };

  const generateStarterProject = async () => {
    await handleGenerateProject({
      name: 'voxel-cyber-demo',
      type: 'Site web',
      language: 'JavaScript',
      framework: 'React + Vite',
      mode: 'auto',
      description: 'Application moderne Voxel Forge avec tableau de bord et composants interactifs.'
    });
  };

  // Generate full project through the AI pipeline
  const handleGenerateProject = async (params) => {
    setIsGenerating(true);
    setPipelineStatus({ current: 'arch', completed: [] });

    try {
      // Step 1: Architecture
      setPipelineStatus({ current: 'arch', completed: [] });
      await new Promise(r => setTimeout(r, 400));

      // Step 2: Generation
      setPipelineStatus({ current: 'gen', completed: ['arch'] });

      const response = await api.generateProject({
        ...params,
        mode: params.mode || mode,
      });

      if (!response.success || !response.project) {
        throw new Error(response.error || 'Échec de génération');
      }

      // Step 3: Review
      if (params.mode !== 'fast') {
        setPipelineStatus({ current: 'review', completed: ['arch', 'gen'] });
        await new Promise(r => setTimeout(r, 400));

        // Step 4: Fix
        setPipelineStatus({ current: 'fix', completed: ['arch', 'gen', 'review'] });
        await new Promise(r => setTimeout(r, 300));
      }

      // Final Step: Complete
      setPipelineStatus({ current: null, completed: ['arch', 'gen', 'review', 'fix', 'done'] });

      const finalProject = response.project;
      setProject(finalProject);
      setReview(response.review || null);

      // Open primary file by default
      const defaultFile = finalProject.files.find(f => 
        f.path.includes('App') || f.path.includes('index') || f.path.includes('main')
      ) || finalProject.files[0];

      if (defaultFile) {
        setActiveFile(defaultFile);
        setOpenTabs([defaultFile]);
      }
      setIsDirty(false);
    } catch (err) {
      alert(`Erreur lors de la génération : ${err.message}`);
      setPipelineStatus(null);
    } finally {
      setIsGenerating(false);
    }
  };

  // Review with Mistral
  const handleReviewWithMistral = async () => {
    if (!project) return;
    setIsGenerating(true);
    setPipelineStatus({ current: 'review', completed: ['arch', 'gen'] });

    try {
      const res = await api.reviewProject(project, mode);
      if (res.success && res.review) {
        setReview(res.review);
        setPipelineStatus({ current: null, completed: ['arch', 'gen', 'review', 'done'] });
      }
    } catch (err) {
      alert(`Erreur lors de l'audit Mistral : ${err.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  // Fix Active File with Gemini
  const handleFixActiveFile = async () => {
    if (!activeFile) return;
    setIsGenerating(true);
    try {
      const res = await api.fixFile(activeFile.path, activeFile.content, 'Corriger les erreurs potentielles et améliorer la clarté');
      if (res.success && res.fixed) {
        updateFileContent(activeFile.path, res.fixed.content);
        alert(`Correction appliquée : ${res.fixed.summary || 'Succès'}`);
      }
    } catch (err) {
      alert(`Erreur de correction : ${err.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  // Improve Active File with Gemini
  const handleImproveActiveFile = async () => {
    if (!activeFile) return;
    setIsGenerating(true);
    try {
      const res = await api.improveCode(activeFile.path, activeFile.content);
      if (res.success && res.improved) {
        updateFileContent(activeFile.path, res.improved.content);
        alert(`Amélioration appliquée : ${res.improved.summary || 'Code optimisé'}`);
      }
    } catch (err) {
      alert(`Erreur d'amélioration : ${err.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  // Explain Active File
  const handleExplainActiveFile = async () => {
    if (!activeFile) return;
    setIsGenerating(true);
    try {
      const res = await api.explainCode(activeFile.path, activeFile.content);
      if (res.success && res.explanation) {
        setExplanationModal({
          isOpen: true,
          title: activeFile.path,
          content: res.explanation,
        });
      }
    } catch (err) {
      alert(`Erreur d'explication : ${err.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  // Regenerate Active File
  const handleRegenerateActiveFile = async () => {
    if (!activeFile) return;
    if (!confirm(`Voulez-vous vraiment régénérer entièrement ${activeFile.path} ?`)) return;
    setIsGenerating(true);
    try {
      const res = await api.fixFile(activeFile.path, activeFile.content, 'Régénérer intégralement le fichier avec une implémentation moderne et robuste');
      if (res.success && res.fixed) {
        updateFileContent(activeFile.path, res.fixed.content);
      }
    } catch (err) {
      alert(`Erreur de régénération : ${err.message}`);
    } finally {
      setIsGenerating(false);
    }
  };

  // Download ZIP
  const handleDownloadZip = async () => {
    if (!project) return;
    try {
      await downloadProjectAsZip(project);
    } catch (err) {
      alert(`Erreur lors de l'export ZIP : ${err.message}`);
    }
  };

  // File selection & tabs
  const handleSelectFile = (file) => {
    setActiveFile(file);
    if (!openTabs.some(t => t.path === file.path)) {
      setOpenTabs([...openTabs, file]);
    }
    setIsDirty(false);
  };

  const handleCloseTab = (filePath) => {
    const remaining = openTabs.filter(t => t.path !== filePath);
    setOpenTabs(remaining);

    if (activeFile?.path === filePath) {
      setActiveFile(remaining.length > 0 ? remaining[remaining.length - 1] : null);
      setIsDirty(false);
    }
  };

  // Code modifications in Monaco
  const handleCodeChange = (newCode) => {
    if (!activeFile) return;
    setActiveFile({
      ...activeFile,
      content: newCode,
    });
    setIsDirty(true);
  };

  const handleSaveFile = () => {
    if (!activeFile || !project) return;
    updateFileContent(activeFile.path, activeFile.content);
    setIsDirty(false);
  };

  const updateFileContent = (filePath, newContent) => {
    setProject(prev => {
      if (!prev) return prev;
      const updatedFiles = prev.files.map(f => {
        if (f.path === filePath) {
          return { ...f, content: newContent };
        }
        return f;
      });
      return { ...prev, files: updatedFiles };
    });

    setActiveFile(prev => prev && prev.path === filePath ? { ...prev, content: newContent } : prev);

    setOpenTabs(prev => prev.map(t => {
      if (t.path === filePath) {
        return { ...t, content: newContent };
      }
      return t;
    }));
  };

  const handleAddFile = (newPath) => {
    if (!project) return;
    const exists = project.files.some(f => f.path === newPath);
    if (exists) {
      alert('Un fichier avec ce chemin existe déjà !');
      return;
    }

    const newFile = {
      path: newPath,
      content: `// Nouveau fichier créé dans Voxel Forge\n`,
      language: 'javascript',
    };

    setProject(prev => ({
      ...prev,
      files: [...prev.files, newFile],
    }));

    handleSelectFile(newFile);
  };

  const handleDeleteFile = (filePath) => {
    if (!project) return;
    setProject(prev => ({
      ...prev,
      files: prev.files.filter(f => f.path !== filePath),
    }));

    handleCloseTab(filePath);
  };

  return (
    <div className="app-container">
      {/* Top Header */}
      <Header 
        mode={mode}
        setMode={setMode}
        providers={providers}
        onNewProject={() => setIsProjectModalOpen(true)}
        onDownloadZip={handleDownloadZip}
        onOpenSettings={() => setIsSettingsModalOpen(true)}
        isGenerating={isGenerating}
      />

      {/* Main 3-Column Layout */}
      <div className="workspace-main">
        {/* Left: File Explorer */}
        <FileExplorer 
          project={project}
          activeFile={activeFile}
          onSelectFile={handleSelectFile}
          onAddFile={handleAddFile}
          onDeleteFile={handleDeleteFile}
        />

        {/* Center: Monaco Editor with Tabs */}
        <CodeEditor 
          openTabs={openTabs}
          activeFile={activeFile}
          onSelectTab={(file) => {
            setActiveFile(file);
            setIsDirty(false);
          }}
          onCloseTab={handleCloseTab}
          onCodeChange={handleCodeChange}
          onSaveFile={handleSaveFile}
          isDirty={isDirty}
        />

        {/* Right: AI Assistant & Mistral Review */}
        <AssistantPanel 
          project={project}
          activeFile={activeFile}
          review={review}
          pipelineStatus={pipelineStatus}
          isGenerating={isGenerating}
          onGenerateProject={() => setIsProjectModalOpen(true)}
          onReviewWithMistral={handleReviewWithMistral}
          onFixActiveFile={handleFixActiveFile}
          onImproveActiveFile={handleImproveActiveFile}
          onExplainActiveFile={handleExplainActiveFile}
          onRegenerateActiveFile={handleRegenerateActiveFile}
          onDownloadZip={handleDownloadZip}
        />
      </div>

      {/* Modals */}
      <ProjectModal 
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        onSubmit={handleGenerateProject}
        initialMode={mode}
      />

      <SettingsModal 
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        providers={providers}
        onRefreshProviders={fetchProviders}
      />

      <ExplanationModal 
        isOpen={explanationModal.isOpen}
        onClose={() => setExplanationModal({ isOpen: false, title: '', content: '' })}
        title={explanationModal.title}
        explanation={explanationModal.content}
      />
    </div>
  );
}
