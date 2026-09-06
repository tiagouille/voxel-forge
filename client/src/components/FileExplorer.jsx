import React, { useState, useMemo } from 'react';
import { 
  Folder, 
  FolderOpen, 
  FileCode, 
  FileText, 
  FileJson, 
  File, 
  Plus, 
  Trash2, 
  ChevronRight, 
  ChevronDown,
  Layers
} from 'lucide-react';

/**
 * Builds a nested folder/file tree from a flat list of file objects.
 */
function buildTree(files) {
  const root = { name: 'root', type: 'folder', children: {} };

  for (const file of files) {
    const parts = file.path.replace(/\\/g, '/').replace(/^\/+/, '').split('/');
    let current = root;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const isFile = i === parts.length - 1;

      if (isFile) {
        current.children[part] = {
          name: part,
          path: file.path,
          type: 'file',
          file,
        };
      } else {
        if (!current.children[part]) {
          current.children[part] = {
            name: part,
            type: 'folder',
            children: {},
          };
        }
        current = current.children[part];
      }
    }
  }

  return root;
}

/**
 * Get specific icon for file extension
 */
function getFileIcon(fileName) {
  const ext = fileName.split('.').pop()?.toLowerCase();
  switch (ext) {
    case 'js':
    case 'jsx':
    case 'ts':
    case 'tsx':
      return <FileCode size={14} color="#f7df1e" />;
    case 'py':
      return <FileCode size={14} color="#38bdf8" />;
    case 'cs':
    case 'cpp':
    case 'java':
      return <FileCode size={14} color="#bc8cff" />;
    case 'html':
      return <FileCode size={14} color="#f97316" />;
    case 'css':
    case 'scss':
      return <FileCode size={14} color="#38bdf8" />;
    case 'json':
      return <FileJson size={14} color="#fbbf24" />;
    case 'md':
      return <FileText size={14} color="#94a3b8" />;
    default:
      return <File size={14} color="#8b949e" />;
  }
}

export function FileExplorer({ 
  project, 
  activeFile, 
  onSelectFile, 
  onAddFile, 
  onDeleteFile 
}) {
  const [collapsedFolders, setCollapsedFolders] = useState({});
  const [isAddingFile, setIsAddingFile] = useState(false);
  const [newFilePath, setNewFilePath] = useState('');

  const tree = useMemo(() => buildTree(project?.files || []), [project?.files]);

  const toggleFolder = (folderKey) => {
    setCollapsedFolders(prev => ({
      ...prev,
      [folderKey]: !prev[folderKey],
    }));
  };

  const handleCreateFileSubmit = (e) => {
    e.preventDefault();
    if (newFilePath.trim()) {
      onAddFile(newFilePath.trim());
      setNewFilePath('');
      setIsAddingFile(false);
    }
  };

  /**
   * Recursive tree node renderer
   */
  const renderNode = (node, pathPrefix = '', depth = 0) => {
    const keys = Object.keys(node.children || {}).sort((a, b) => {
      const aIsFolder = node.children[a].type === 'folder';
      const bIsFolder = node.children[b].type === 'folder';
      if (aIsFolder && !bIsFolder) return -1;
      if (!aIsFolder && bIsFolder) return 1;
      return a.localeCompare(b);
    });

    return keys.map(key => {
      const item = node.children[key];
      const currentPath = pathPrefix ? `${pathPrefix}/${item.name}` : item.name;

      if (item.type === 'folder') {
        const isCollapsed = collapsedFolders[currentPath];
        return (
          <div key={currentPath}>
            <div 
              className="tree-node"
              style={{ paddingLeft: `${depth * 14 + 12}px` }}
              onClick={() => toggleFolder(currentPath)}
            >
              {isCollapsed ? <ChevronRight size={14} color="#8b949e" /> : <ChevronDown size={14} color="#8b949e" />}
              {isCollapsed ? <Folder size={14} color="#58a6ff" /> : <FolderOpen size={14} color="#58a6ff" />}
              <span className="folder-label">{item.name}</span>
            </div>
            {!isCollapsed && renderNode(item, currentPath, depth + 1)}
          </div>
        );
      }

      const isActive = activeFile?.path === item.path;

      return (
        <div 
          key={item.path}
          className={`tree-node ${isActive ? 'active' : ''}`}
          style={{ paddingLeft: `${depth * 14 + 18}px` }}
          onClick={() => onSelectFile(item.file)}
        >
          {getFileIcon(item.name)}
          <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {item.name}
          </span>

          {project?.files?.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (confirm(`Supprimer ${item.name} ?`)) {
                  onDeleteFile(item.path);
                }
              }}
              className="btn-sm"
              style={{ 
                background: 'transparent', 
                border: 'none', 
                color: '#6e7681', 
                padding: '2px',
                cursor: 'pointer',
                opacity: 0.6
              }}
              title="Supprimer ce fichier"
            >
              <Trash2 size={12} />
            </button>
          )}
        </div>
      );
    });
  };

  return (
    <aside className="sidebar-explorer">
      <div className="explorer-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Layers size={13} color="#58a6ff" />
          <span>Explorateur ({project?.files?.length || 0})</span>
        </div>

        <button 
          onClick={() => setIsAddingFile(!isAddingFile)}
          className="btn-sm"
          style={{
            background: 'transparent',
            border: 'none',
            color: '#8b949e',
            cursor: 'pointer'
          }}
          title="Nouveau fichier"
        >
          <Plus size={15} />
        </button>
      </div>

      {/* Project Root Label */}
      <div 
        style={{
          padding: '6px 12px',
          fontSize: '11px',
          fontWeight: 700,
          color: '#58a6ff',
          textTransform: 'uppercase',
          letterSpacing: '0.6px',
          background: 'rgba(88, 166, 255, 0.05)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}
      >
        <Folder size={12} />
        <span>{project?.name || 'PROJET'}</span>
      </div>

      {/* Add File Prompt Form */}
      {isAddingFile && (
        <form onSubmit={handleCreateFileSubmit} style={{ padding: '8px 12px', background: '#0d1117', borderBottom: '1px solid #30363d' }}>
          <input
            type="text"
            placeholder="ex: src/utils/helpers.js"
            value={newFilePath}
            onChange={(e) => setNewFilePath(e.target.value)}
            autoFocus
            className="form-input"
            style={{ width: '100%', fontSize: '11px', padding: '4px 8px' }}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '6px', marginTop: '6px' }}>
            <button type="button" onClick={() => setIsAddingFile(false)} className="btn btn-secondary btn-sm" style={{ padding: '2px 6px', fontSize: '10px' }}>
              Annuler
            </button>
            <button type="submit" className="btn btn-primary btn-sm" style={{ padding: '2px 6px', fontSize: '10px' }}>
              Créer
            </button>
          </div>
        </form>
      )}

      {/* Tree view */}
      <div className="explorer-tree">
        {project?.files?.length ? (
          renderNode(tree)
        ) : (
          <div style={{ padding: '20px 14px', fontSize: '12px', color: '#6e7681', textAlign: 'center' }}>
            Aucun fichier dans le projet.<br />Cliquez sur "Nouveau Projet".
          </div>
        )}
      </div>
    </aside>
  );
}
