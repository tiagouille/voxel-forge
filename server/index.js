import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '.env') });
dotenv.config({ path: path.resolve(__dirname, '../.env') });

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { aiRouter } from './routes/ai.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Security headers
app.use(helmet({
  contentSecurityPolicy: false, // Allow client flexibility
  crossOriginResourcePolicy: { policy: 'cross-origin' }
}));

// CORS configuration (allow Vite frontend and preview servers)
app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parsing with 10MB limit for rich project trees
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Mount AI Routes
app.use('/api', aiRouter);

// Root informational endpoint
app.get('/', (req, res) => {
  res.json({
    name: 'Voxel Forge API Server',
    version: '1.0.0',
    endpoints: [
      '/api/health',
      '/api/providers',
      '/api/generate',
      '/api/review',
      '/api/fix',
      '/api/explain',
      '/api/improve',
      '/api/tutorial',
      '/api/chat'
    ]
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('[Voxel Forge Server Error]', err);
  res.status(500).json({
    success: false,
    error: err.message || 'Erreur interne du serveur'
  });
});

// Start listening
app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`⚡ Voxel Forge Backend opérationnel !`);
  console.log(`🌐 Port d'écoute : http://localhost:${PORT}`);
  console.log(`🔑 Gemini Configuré : ${Boolean(process.env.GEMINI_API_KEY)}`);
  console.log(`🔑 Mistral Configuré : ${Boolean(process.env.MISTRAL_API_KEY)}`);
  console.log(`=========================================`);
});
