const db = require('../db');

exports.insertarINE = (datos, callback) => {
  const { nombre, curp, domicilio, claveElector, seccion, estado, municipio } = datos;

  const sql = `
    INSERT INTO ine_personas
    (nombre, curp, domicilio, claveElector, seccion, estado, municipio)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [nombre, curp, domicilio, claveElector, seccion, estado, municipio];
  db.query(sql, values, callback);
};
