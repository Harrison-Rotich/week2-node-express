require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware: log each incoming request (bonus requirement).
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.originalUrl}`);
  next();
});

// Parse JSON request bodies.
app.use(express.json());

// Serve the static homepage from the public folder.
app.use(express.static(path.join(__dirname, "public")));

// GET / - API welcome response (the HTML page is served by express.static).
app.get("/api", (req, res) => {
  res.status(200).json({ message: "My Week 2 API!" });
});

// POST /user - accept name and email.
app.post("/user", (req, res) => {
  const { name, email } = req.body || {};

  if (
    typeof name !== "string" || !name.trim() ||
    typeof email !== "string" || !email.trim()
  ) {
    return res.status(400).json({
      error: "Missing required data. Please provide both name and email."
    });
  }

  return res.status(201).json({
    message: `Hello, ${name.trim()}!`,
    user: { name: name.trim(), email: email.trim() }
  });
});

// GET /user/:id - return a simple profile message.
app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  return res.status(200).json({ message: `User ${id} profile` });
});

// Handle malformed JSON bodies.
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({ error: "Invalid JSON in request body." });
  }
  return next(err);
});

// Catch unexpected errors.
app.use((err, req, res, next) => {
  console.error(err.stack || err);
  res.status(500).json({ error: "Internal server error." });
});

// Unknown route.
app.use((req, res) => {
  res.status(404).json({ error: "Route not found." });
});

app.listen(PORT, () => {
  console.log(`Week 2 API is running at http://localhost:${PORT}`);
});
