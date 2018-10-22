const mysql = require('mysql');
const logger = require('../logger');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'matt',
  password: 'password',
  database: 'my_database',
});

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      logger.error('Database connection was closed.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      logger.error('Database has too many connections.');
    }
    if (err.code === 'ECONNREFUSED') {
      logger.error('Database connection was refused.');
    }
  }
  if (connection) connection.release();
});

module.exports = pool;
