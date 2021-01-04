const { Pool } = require('pg');

const pool = new Pool({
  user: 'annie',
  database: 'binder',
});

pool.connect();

module.exports = pool;
