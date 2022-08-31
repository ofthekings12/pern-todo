const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "oTk120893!",
  host: "localhost",
  database: "todo",
  port: 5433
});

module.exports = pool;