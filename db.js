// db.js
const mysql = require('mysql2');
const fs = require('fs');
require('dotenv').config();

const sslOptions = process.env.DB_SSL === 'true'
  ? {
      ssl: {
        ca: fs.readFileSync(__dirname + '/ca.pem') // path to your PEM file
      }
    }
  : {};

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  ...sslOptions
});

module.exports = pool.promise();
