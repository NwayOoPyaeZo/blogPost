Backend (Express + PostgreSQL)
==============================

Overview
--------

REST API for managing blog posts. Uses Express, PostgreSQL (pg), and serves static assets from `public/` for production builds of the frontend.

Getting Started
---------------

Prerequisites: Node.js 18+, PostgreSQL instance.

1) Install dependencies
	- `npm install`

2) Configure environment
	- Create `.env` in `backend/`:
	  - `DB_HOST=`
	  - `DB_USER=`
	  - `DB_PASSWORD=`
	  - `DB_NAME=`
	  - `DB_PORT=` (e.g., 5432)
	  - `PORT=` (optional, default 5000)

3) Initialize database (creates `posts` table)
	- `node src/db/init-db.js`

4) Run the server
	- Dev (nodemon): `npm run dev`
	- Prod: `npm start`

Scripts
-------

- `npm run dev` — start with nodemon (reload on change)
- `npm start` — start server (src/server.js)

Project Structure
-----------------

- `src/server.js` — entry point, loads env, starts Express
- `src/app.js` — Express app, middleware, routes, static serving
- `src/routes/posts.routes.js` — posts endpoints
- `src/controllers/posts.controller.js` — CRUD handlers
- `src/db/db.js` — pg Pool connection
- `src/db/init-db.js` — runs schema.sql to bootstrap DB
- `src/db/schema.sql` — table definitions
- `public/` — static files (built frontend)

API Endpoints
-------------

Base URL: `http://localhost:5000`

- `GET /` — service check ("Backend is running")
- `GET /health` — DB health (returns status and db time)
- `POST /posts` — create post `{ title, content, author? }`
- `GET /posts` — list posts (newest first)
- `GET /posts/:id` — get a post
- `PUT /posts/:id` — update `{ title, content, author? }`
- `DELETE /posts/:id` — delete a post

Database Schema
---------------

Table `posts` (see `src/db/schema.sql`):
- `id` SERIAL PRIMARY KEY
- `title` VARCHAR(150) NOT NULL
- `content` TEXT NOT NULL
- `author` VARCHAR(100)
- `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP

Notes
-----

- CORS enabled.
- Uses parameterized queries to prevent SQL injection.
- Static frontend can be served from `public/` when deployed together.
