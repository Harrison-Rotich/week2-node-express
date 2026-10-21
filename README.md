# Week 2 Node.js + Express API

A beginner-friendly Express API assignment with JSON parsing, validation, error handling, a `.env` port, static HTML, request logging middleware, and GitHub instructions.

## Requirements

- Node.js (LTS recommended)
- npm (installed with Node.js)
- Git
- A GitHub account

## Run locally

1. Open a terminal in this project folder.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Confirm `.env` contains:

   ```env
   PORT=3000
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Open `http://localhost:3000` in a browser. The static HTML page should appear.

## Endpoints

### GET /api

```bash
curl http://localhost:3000/api
```

Expected JSON:

```json
{"message":"My Week 2 API!"}
```

The assignment asks for `GET /` to return the message and also for a static HTML page at `/`. This project serves the required HTML at `/` and exposes the same JSON welcome message at `/api` so both requirements can be demonstrated.

### POST /user

```bash
curl -X POST http://localhost:3000/user \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Amina\",\"email\":\"amina@example.com\"}"
```

Expected status: `201 Created`. The response includes `Hello, Amina!` and the submitted user data.

Missing `name` or `email` returns `400 Bad Request`.

### GET /user/:id

```bash
curl http://localhost:3000/user/123
```

Expected JSON:

```json
{"message":"User 123 profile"}
```

## Test with Postman

- GET `http://localhost:3000/api`
- POST `http://localhost:3000/user`; select **Body → raw → JSON**, then enter:
  ```json
  {"name":"Amina","email":"amina@example.com"}
  ```
- GET `http://localhost:3000/user/123`
- Test validation by sending `{ "name": "Amina" }` to `POST /user`; expect status `400`.

## Git and GitHub

Create a public GitHub repository named `week2-node-express`

Then run these commands from the project folder, replacing `YOUR-USERNAME` with your GitHub username:

```bash
git init
git add .
git commit -m "Build Week 2 Express API"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/week2-node-express.git
git push -u origin main
```

If Git says the remote `origin` already exists, run:

```bash
git remote set-url origin https://github.com/YOUR-USERNAME/week2-node-express.git
git push -u origin main
```

Do not commit `.env`; `.gitignore` excludes it. The sample `.env.example` is safe to commit.

## Note about the two `/` requirements
This project serves the HTML homepage at / and the JSON welcome response at /api.