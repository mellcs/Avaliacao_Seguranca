import express from "express";
import pkg from "pg";

const { Pool } = pkg;

const app = express();
app.use(express.json());

const {
  POSTGRES_DB = "app_db",
  APP_DB_USER = "app_user",
  APP_DB_PASSWORD = "secret",
} = process.env;

// Host do Postgres = nome do serviço no Compose
const pool = new Pool({
  host: "db",
  port: 5432,
  database: POSTGRES_DB,
  user: APP_DB_USER,
  password: APP_DB_PASSWORD,
  max: 10,
  idleTimeoutMillis: 30000,
});

app.get("/api/health", async (req, res) => {
  try {
    const r = await pool.query("SELECT 1 as ok");
    res.json({ status: "ok", db: r.rows[0].ok === 1 });
  } catch (e) {
    res.status(500).json({ status: "error", error: e.message });
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const r = await pool.query("SELECT id, name FROM app.users ORDER BY id");
    res.json(r.rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post("/api/users", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "name is required" });
    const r = await pool.query(
      "INSERT INTO app.users(name) VALUES ($1) RETURNING id, name",
      [name]
    );
    res.status(201).json(r.rows[0]);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const port = process.env.API_PORT || 3000;
app.listen(port, () => console.log(`API on ${port}`));
