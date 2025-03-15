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
  console.log(connectionData);

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
      teams_count: teams.length,
      leagues_count: leagues.length,
      players_count: players.length,
    },
    results: {teams, leagues, players,}
  });
});
