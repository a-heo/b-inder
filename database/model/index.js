const { Pool } = require('pg');

const pool = new Pool({
  user: 'annie',
  database: 'b_inder',
});

pool.connect();

module.exports = pool;
