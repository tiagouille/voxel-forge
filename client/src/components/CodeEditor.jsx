import React, { useRef, useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { 
  X, 
  Save, 
  Copy, 
  Check, 
  FileCode, 
  Terminal, 
  Search,
  Maximize2
} from 'lucide-react';

export function CodeEditor({ 
  openTabs, 
  activeFile, 
  onSelectTab, 
  onCloseTab, 
  onCodeChange, 
  onSaveFile,
  isDirty 
}) {
  const [copied, setCopied] = useState(false);
  const [cursorPos, setCursorPos] = useState({ line: 1, col: 1 });
  const editorRef = useRef(null);

  // Handle Monaco mount
  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;

    // Track cursor position
    editor.onDidChangeCursorPosition((e) => {
      setCursorPos({
        line: e.position.lineNumber,
        col: e.position.column,
      });
    });

    // Keyboard shortcut Ctrl+S
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      onSaveFile();
    });
  };

  const handleCopyCode = async () => {
    if (!activeFile?.content) return;
    try {
      await navigator.clipboard.writeText(activeFile.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  // Infer editor language
  const language = activeFile?.language || 'plaintext';

  return (
    <section className="editor-panel">
      {/* Tabs Bar */}
      <div className="editor-tabs-bar">
        {openTabs.map((file) => {
          const isActive = file.path === activeFile?.path;
          const fileName = file.path.split('/').pop() || file.path;

          return (
            <div
              key={file.path}
              className={`editor-tab ${isActive ? 'active' : ''}`}
              onClick={() => onSelectTab(file)}
            >
              <FileCode size={13} color={isActive ? '#38bdf8' : '#8b949e'} />
              <span>{fileName}</span>

              {/* Dirty indicator */}
              {isDirty && isActive && (
                <span className="tab-dirty-indicator" title="Modifications non sauvegardées"></span>
              )}

              {/* Close tab */}
              <span
                className="tab-close"
                onClick={(e) => {
                  e.stopPropagation();
                  onCloseTab(file.path);
                }}
                title="Fermer l'onglet"
              >
                <X size={12} />
              </span>
            </div>
          );
        })}
      </div>

      {/* Monaco Editor Container */}
      <div className="editor-container">
        {activeFile ? (
          <Editor
            height="100%"
            theme="vs-dark"
            path={activeFile.path}
            defaultLanguage={language}
            language={language}
            value={activeFile.content || ''}
            onChange={(val) => onCodeChange(val || '')}
            onMount={handleEditorDidMount}
            options={{
              fontSize: 13,
              fontFamily: "'Fira Code', 'Consolas', 'Courier New', monospace",
              fontLigatures: true,
              minimap: { enabled: true, side: 'right' },
              scrollBeyondLastLine: false,
              wordWrap: 'on',
              lineNumbers: 'on',
              renderWhitespace: 'selection',
              smoothScrolling: true,
              cursorBlinking: 'smooth',
              cursorSmoothCaretAnimation: 'on',
              bracketPairColorization: { enabled: true },
              automaticLayout: true,
              tabSize: 2,
            }}
          />
        ) : (
          <div style={{ 
            display: 'flex', 
            height: '100%', 
            alignItems: 'center', 
            justifyContent: 'center', 
            flexDirection: 'column', 
            gap: '12px',
            color: '#6e7681'
          }}>
            <Terminal size={36} opacity={0.4} />
            <p style={{ fontSize: '13px' }}>Sélectionnez un fichier dans l'explorateur pour l'afficher.</p>
          </div>
        )}
      </div>

      {/* Editor Status Bar */}
      {activeFile && (
        <footer className="editor-statusbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span>{activeFile.path}</span>
            <span>Ln {cursorPos.line}, Col {cursorPos.col}</span>
            <span>UTF-8</span>
            <span style={{ textTransform: 'uppercase', color: '#58a6ff' }}>{language}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {isDirty && (
              <span style={{ color: '#e3b341', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                ● Non sauvegardé
              </span>
            )}

            <button
              className="btn btn-secondary btn-sm"
              onClick={onSaveFile}
              title="Sauvegarder (Ctrl+S)"
              style={{ padding: '2px 8px', fontSize: '11px' }}
            >
              <Save size={12} />
              <span>Sauvegarder</span>
            </button>

            <button
              className="btn btn-secondary btn-sm"
              onClick={handleCopyCode}
              title="Copier le code dans le presse-papiers"
              style={{ padding: '2px 8px', fontSize: '11px' }}
            >
              {copied ? <Check size={12} color="#3fb950" /> : <Copy size={12} />}
              <span>{copied ? 'Copié !' : 'Copier'}</span>
            </button>
          </div>
        </footer>
      )}
    </section>
  );
}
