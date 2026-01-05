BlogPost
========

Full-stack blog platform with a React frontend and an Express/PostgreSQL backend. Provides CRUD for posts with a clean, modern UI and a simple REST API.

Project Structure
-----------------

- backend/ — Express API, PostgreSQL integration, static asset hosting
- frontend/ — React + Vite SPA

Quick Start
-----------

Prerequisites: Node.js 18+, PostgreSQL instance, npm.

1) Backend
- `cd backend`
- `npm install`
- Create `.env` with DB settings (see backend/README.md)
- Initialize schema (optional if DB is empty): `node src/db/init-db.js`
- Start dev server: `npm run dev` (defaults to port 5000)

2) Frontend
- `cd frontend`
- `npm install`
- Start dev server: `npm run dev` (default Vite port 5173)

Environment
-----------

- Backend: configured via `.env` (DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT, PORT)
- Frontend: API base URL set in `src/services/api.js` (defaults to `http://localhost:5000`)

Key Features
------------

- Create, read, update, delete blog posts
- Health check endpoint for DB connectivity
- Modern UI with Tailwind-inspired styling
- Static frontend can be served from backend `public/` for production

Scripts
-------

- Backend: `npm run dev`, `npm start`
- Frontend: `npm run dev`, `npm run build`, `npm run preview`

API Overview
------------

- `POST /posts` — create post
- `GET /posts` — list posts
- `GET /posts/:id` — get post
- `PUT /posts/:id` — update post
- `DELETE /posts/:id` — delete post
- `GET /health` — DB health check

Database
--------

- PostgreSQL table `posts`: id, title, content, author, created_at
