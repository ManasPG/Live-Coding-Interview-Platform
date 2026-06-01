# TalentIQ — Live Coding Interview Platform

A production-grade, full-stack technical interview platform enabling real-time 1-on-1 video interviews with an in-browser code editor, sandboxed execution, and automated test-case evaluation.

**Live Demo:** [talent-iq-six-pi.vercel.app](https://talent-iq-six-pi.vercel.app) &nbsp;|&nbsp; **Stack:** React.js · Node.js · Express · MongoDB · Stream SDK · Clerk · Inngest · TanStack Query

---

## Features

- **Real-time Video Rooms** — WebRTC-powered 1-on-1 video via Stream SDK with screen sharing and session recording
- **In-Browser Code Editor** — VSCode-powered editor with syntax highlighting and multi-language support
- **Sandboxed Code Execution** — Run and evaluate code against automated test cases in a secure environment
- **Room Access Control** — Room locking (max 2 participants), candidate-only entry enforcement
- **Candidate Dashboard** — Live stats, session history, and interview progress tracking
- **Auth & Identity** — Clerk authentication with secure session management
- **Async Background Jobs** — Inngest-powered job queue for non-blocking tasks
- **Optimistic UI & Caching** — TanStack Query for efficient data fetching, caching, and sync

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, TanStack Query, TailwindCSS |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Auth | Clerk |
| Video / Realtime | Stream SDK (WebRTC) |
| Background Jobs | Inngest |
| Deployment | Vercel (frontend), Render (backend) |
| CI/CD | Git/GitHub PR workflow, CodeRabbit code reviews |

---

## Project Structure

```
Live-Coding-Interview-Platform/
├── backend/
│   └── ...                   # Express API, MongoDB models, Inngest job handlers
├── frontend/
│   └── ...                   # React app, TanStack Query hooks, Stream SDK integration
├── .gitignore
├── package.json
├── package-lock.json
└── vercel.json
```

---

## Getting Started

### Prerequisites

- Node.js >= 18
- MongoDB instance (local or Atlas)
- Clerk account → [clerk.com](https://clerk.com)
- Stream account → [getstream.io](https://getstream.io)
- Inngest account → [inngest.com](https://inngest.com)

### Installation

```bash
git clone https://github.com/ManasPG/Live-Coding-Interview-Platform.git
cd Live-Coding-Interview-Platform
npm install
```

### Environment Variables

Create `.env` files in both `backend/` and `frontend/`:

**backend/.env**
```env
MONGODB_URI=your_mongodb_uri
CLERK_SECRET_KEY=your_clerk_secret
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
INNGEST_SIGNING_KEY=your_inngest_signing_key
```

**frontend/.env**
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_STREAM_API_KEY=your_stream_api_key
VITE_API_URL=http://localhost:5000
```

### Run Locally

```bash
# Backend
cd backend && npm run dev

# Frontend
cd frontend && npm run dev
```

---

## Deployment

- **Frontend** deployed on [Vercel](https://vercel.com) — configured via `vercel.json`
- **Backend** deployed on [Render](https://render.com)
- PR-based workflow with [CodeRabbit](https://coderabbit.ai) for automated code reviews

---

## Author

**Manas Pratim Goswamee** — [@ManasPG](https://github.com/ManasPG)
