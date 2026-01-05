Frontend (React + Vite)
=======================

Overview
--------

Single-page app for creating and managing blog posts. Built with React 18, Vite, and Tailwind-style utility classes. Communicates with the Express API at `http://localhost:5000` by default (see `src/services/api.js`).

Getting Started
---------------

Prerequisites: Node.js 18+, backend API running.

1) Install dependencies
	- `npm install`

2) Start dev server
	- `npm run dev`
	- Vite defaults to port 5173; it will print the URL.

3) Build for production
	- `npm run build`
	- Preview locally: `npm run preview`

API Configuration
-----------------

- Base URL is defined in `src/services/api.js` as `API_BASE_URL`.
- Update this value for production deployments (e.g., when backend is hosted elsewhere).

Project Structure
-----------------

- `src/App.jsx` — page shell and layout
- `src/components/PostList.jsx` — fetches and renders posts, wires create/delete
- `src/components/CreatePost.jsx` — form to add posts
- `src/components/PostItem.jsx` — individual post card with edit/delete
- `src/services/api.js` — CRUD helpers for backend
- `src/index.css` — global styles
- `public/index.html` — HTML template

Features
--------

- List posts with newest-first ordering (as returned by API)
- Create new posts (title, content, optional author)
- Edit and delete posts inline
- Basic error handling with user alerts

Running With Backend
--------------------

- Start backend on port 5000 (default) or update `API_BASE_URL` accordingly.
- In production, you can build the frontend and copy the `dist/` output into `backend/public/` to serve from the same server.
