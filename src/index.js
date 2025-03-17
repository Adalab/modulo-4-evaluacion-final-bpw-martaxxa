// Bibliotecas
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mysql = require("mysql2/promise");

async function getConnection() {
  const connectionData = {
    host: process.env["MYSQL_HOST"],
    port: process.env["MYSQL_PORT"],
    user: process.env["MYSQL_USER"],
    password: process.env["MYSQL_PASS"],
    database: process.env["MYSQL_SCHEMA"],
  };

  const connection = await mysql.createConnection(connectionData);
  await connection.connect();
  return connection;
}

// Configuración
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.post('/api/register', (req, res) => {
  console.log("Datos recibidos:", req.body);
  res.json({ success: true, message: "Usuario registrado con éxito" });
});

// Servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port <http://localhost:${port}>`);
});

// Endpoints
app.get("/rugby-femenino", async (req, res) => {

  const conn = await getConnection();

  const [teams] = await conn.query("SELECT * FROM teams;");
  const [leagues] = await conn.query("SELECT * FROM leagues;");
  const [players] = await conn.query("SELECT * FROM players;");

  await conn.end();

  res.json({
    info: {
      teams_num: teams.length,
      leagues_num: leagues.length,
      players_num: players.length,
    },
    results: {teams, leagues, players,}
  });
});

app.get("/rugby-femenino/teams", async (req, res) => {

  const conn = await getConnection();

  const [teams] = await conn.query("SELECT * FROM teams;");

  await conn.end();

  res.json({
    info: {
      teams_num: teams.length,
    },
    results: teams
  });
});

app.get("/rugby-femenino/players", async (req, res) => {

  const conn = await getConnection();

  const [players] = await conn.query("SELECT * FROM players;");

  await conn.end();

  res.json({
    info: {
      players_num: players.length,
    },
    results: players
  });
});

app.get("/rugby-femenino/leagues", async (req, res) => {

  const conn = await getConnection();

  const [leagues] = await conn.query("SELECT * FROM leagues;");

  await conn.end();

  res.json({
    info: {
      leagues_num: leagues.length,
    },
    results: leagues
  });
});

app.get('/rugby-femenino/users', async (req, res) => {
  try {
    const conn = await getConnection();

    const [users] = await conn.query('SELECT * FROM users');

    await conn.end();

    res.json({
      success: true,
      users: users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.get("/api/register", async (req, res) => {

  const conn = await getConnection();

  const [users] = await conn.query("SELECT * FROM users;");

  await conn.end();

  res.json({
    info: {
      users_num: users.length,
    },
    results: users
  });
});

app.get("/rugby-femenino/teams/:id", async (req, res) => {
  const conn = await getConnection();

  const [results] = await conn.query(`
    SELECT * FROM teams
    WHERE team_id = ?;`, [req.params.id]);

  await conn.end();

  res.json(
    results[0]
  );
});

app.post('/rugby-femenino/players', async (req, res) => {

  const {name, surname, position, nationality, team_id} = req.body;
  let missingFields = [];

  if (!name) missingFields.push("name");
  if (!surname) missingFields.push("surname");
  if (!position) missingFields.push("position");
  if (!nationality) missingFields.push("nationality");
  if (!team_id) missingFields.push("team_id");

  if (missingFields.length > 0) {
    return res.status(400).json({
      "success": false,
      "message": `Faltan los siguientes campos obligatorios: ${missingFields.join(", ")}`
    });
  }

  try {
    const conn = await getConnection();

    const [results] = await conn.execute(`
      INSERT INTO players (name, surname, position, nationality, team_id)
      VALUES (?, ?, ?, ?, ?);`,
      [req.body.name, req.body.surname, req.body.position, req.body.nationality, req.body.team_id]);

    await conn.end();

    res.json({
      "success": true,
      "id": results.insertId
    })
  }
  catch(err) {
    res.status(500).json({
      "success": false,
      "message": err.toString()
    })
  }

})

app.post('/rugby-femenino/users', async (req, res) => {
  const { name, surname, email, password } = req.body;

  if (!name || !surname || !email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Faltan campos obligatorios'
    });
  }

  try {
    const conn = await getConnection();

    const [result] = await conn.execute(
      'INSERT INTO users (name, surname, email, password) VALUES (?, ?, ?, ?)', 
      [name, surname, email, password]
    );

    await conn.end();

    res.json({
      success: true,
      message: 'Usuario registrado con éxito',
      userId: result.insertId,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.put('/rugby-femenino/players/:id', async (req, res) => {

  try {
    const conn = await getConnection();

    const [results] = await conn.execute(`
      UPDATE players 
      SET name=?, surname=?, position=?, nationality=?, team_id=?
      WHERE player_id=?;`,
      [req.body.name, req.body.surname, req.body.position, req.body.nationality, req.body.team_id, req.params.id]);

    await conn.end();

    res.json({
      "success": true
    })
  }
  catch(err) {
    res.status(500).json({
      "success": false,
      "message": err.toString()
    })
  }

})

app.delete('/rugby-femenino/players/:id', async (req, res) => {

  try {
    const conn = await getConnection();

    const [results] = await conn.execute(`
      DELETE FROM players 
      WHERE player_id=?;`,
      [req.params.id]);

    await conn.end();

    res.json({
      "success": true
    })
  }
  catch(err) {
    res.status(500).json({
      "success": false,
      "message": err.toString()
    })
  }

})