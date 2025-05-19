const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((error) => {
  if (error) {
    console.error('❌ Error al conectar a MySQL:', error.message);
    process.exit(1);
  }
  console.log('✅ Conectado exitosamente a MySQL (local)');
});

module.exports = connection;
