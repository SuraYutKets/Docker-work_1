const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Set up PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Auto-create table on startup if it doesn't exist
pool.query(`
  CREATE TABLE IF NOT EXISTS names (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
  );
`).then(() => {
    console.log("Database table 'names' is ready.");
}).catch(err => {
    console.error("Error creating table", err);
});

// GET endpoint to fetch names
app.get('/names', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM names ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST endpoint to add a new name
app.post('/names', async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });
  
  try {
    const result = await pool.query('INSERT INTO names (name) VALUES ($1) RETURNING *', [name]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`);
});
