import JSZip from 'jszip';

/**
 * Generates and downloads a ZIP file containing the generated project,
 * maintaining the exact folder and file hierarchy.
 */
export async function downloadProjectAsZip(project) {
  if (!project || !project.files || project.files.length === 0) {
    throw new Error('Aucun fichier à exporter');
  }

  const zip = new JSZip();
  const rootFolderName = (project.name || 'voxel-forge-project')
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, '-');

  const rootFolder = zip.folder(rootFolderName);

  for (const file of project.files) {
    if (!file.path) continue;
    // Normalize path
    const normalizedPath = file.path.replace(/\\/g, '/').replace(/^\/+/, '');
    rootFolder.file(normalizedPath, file.content || '');
  }

  // Generate zip buffer
  const content = await zip.generateAsync({
    type: 'blob',
    compression: 'DEFLATE',
    compressionOptions: { level: 9 },
  });

  // Trigger browser download
  const downloadUrl = URL.createObjectURL(content);
  const a = document.createElement('a');
  a.href = downloadUrl;
  a.download = `${rootFolderName}.zip`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(downloadUrl);
}
