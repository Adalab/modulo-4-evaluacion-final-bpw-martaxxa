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
const app = express();

app.use(cors());
app.use(express.json());

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

app.get("/rugby-femenino/teams/:id", async (req, res) => {
  console.log(req.params);

  const conn = await getConnection();

  const [results] = await conn.query(`
    SELECT * FROM teams
    WHERE team_id = ?;`, [req.params.id]);

  await conn.end();

  res.json(
    results[0]
  );
});