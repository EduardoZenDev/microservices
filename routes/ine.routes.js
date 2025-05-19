const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Conexión a la base de datos
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Ruta POST para guardar datos del INE
router.post('/', (req, res) => {
  const { nombre, curp, domicilio, claveElector, seccion, estado, municipio } = req.body;

  const query = `
    INSERT INTO ine_personas 
    (nombre, curp, domicilio, claveElector, seccion, estado, municipio) 
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [nombre, curp, domicilio, claveElector, seccion, estado, municipio], (err, result) => {
    if (err) {
      console.error('Error al insertar:', err);
      return res.status(500).json({ error: 'Error al guardar los datos' });
    }

    res.status(201).json({ message: 'Datos guardados correctamente', id: result.insertId });
  });
});

module.exports = router;
