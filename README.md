# ⚡ Voxel Forge — Générateur de Projets IA

**Voxel Forge** est une application web complète inspirée de VS Code et Cursor, combinant la puissance de deux modèles d'IA complémentaires :
- **Google Gemini** : Architecte & développeur principal (conception de l'architecture, arborescence, génération de code, corrections).
- **Mistral AI** : Contrôleur qualité & reviewer (détection de bugs, vérification des dépendances, analyse de sécurité, score de qualité).

---

## 🛠️ Stack Technique

- **Frontend** : React 18, Vite, Monaco Editor, Lucide Icons, JSZip
- **Backend** : Node.js, Express, REST API
- **Sécurité** : Validation d'entrées, isolation des clés API dans `.env`, protection anti-traversée de répertoires (`../`), limitation des quotas de fichiers
- **Export** : Téléchargement complet du projet en archive ZIP respectant l'arborescence

---

## 🚀 Installation & Démarrage

### 1. Prérequis
- **Node.js** (v18+)
- **pnpm** (ou npm)

### 2. Clés API
Copiez le fichier `.env.example` en `.env` (déjà créé à la racine) et ajoutez vos clés API si vous en disposez :

```env
PORT=5000
GEMINI_API_KEY=votre_cle_gemini
MISTRAL_API_KEY=votre_cle_mistral
```

> **Note :** Si les clés ne sont pas encore renseignées, Voxel Forge dispose d'un moteur de génération de démonstration intégré, vous permettant de tester immédiatement l'interface, Monaco Editor, le pipeline d'actions et l'export ZIP !

### 3. Installation des dépendances

```bash
# À la racine de voxel-forge :
pnpm install
```

Ou individuellement :
```bash
cd server && pnpm install
cd ../client && pnpm install
```

### 4. Lancement de l'application

```bash
# Lance le frontend et le backend en parallèle :
pnpm dev
```

- **Frontend** : [http://localhost:5173](http://localhost:5173)
- **Backend API** : [http://localhost:5000](http://localhost:5000)

---

## 🧭 Pipeline de Génération

1. **Utilisateur** choisit le type de projet, le langage, le framework et décrit son besoin.
2. **Gemini Architecture** structure le projet et définit l'arborescence.
3. **Gemini Génération** génère le code complet de tous les fichiers.
4. **Mistral Review** analyse le code, détecte les éventuels bugs et calcule un score de qualité.
5. **Gemini Auto-Fix** corrige automatiquement les anomalies remontées.
6. **Voxel Forge** charge le projet dans l'éditeur Monaco avec coloration syntaxique, onglets et téléchargement ZIP.

---

## 📂 Structure du Projet

```text
voxel-forge/
├── client/                 # Frontend React + Vite + Monaco
│   ├── src/
│   │   ├── components/     # Composants UI (Header, Explorer, Editor, Assistant, Modals)
│   │   ├── services/       # Client API et export ZIP
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
│
├── server/                 # Backend Node.js + Express
│   ├── services/           # Services d'intégration Gemini & Mistral
│   ├── routes/             # Endpoints REST (/api/generate, /api/review, etc.)
│   ├── middleware/         # Sécurité et validation
│   ├── index.js
│   └── package.json
│
├── .env                    # Fichier contenant vos clés (ignoré par git)
├── .env.example
├── .gitignore
├── package.json
└── README.md
```
