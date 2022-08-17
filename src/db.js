const { Pool } = require('pg');
const CONFIG = require('./config/index');

const pool = new Pool({
  user: CONFIG.DB.user,
  host: CONFIG.DB.host,
  database: CONFIG.DB.name,
  password: CONFIG.DB.password,
  max: 50,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  port: 5432,
});

pool.on('connect', () => {
  console.log('Database successfully connected!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
}
