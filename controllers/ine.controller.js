const ineModel = require('../models/ine.model');

exports.guardarDatosINE = (req, res) => {
  const datos = req.body;

  ineModel.insertarINE(datos, (err, resultado) => {
    if (err) {
      console.error('Error al guardar:', err);
      return res.status(500).json({ mensaje: 'Error al guardar los datos' });
    }
    res.status(200).json({ mensaje: 'Datos guardados con éxito' });
  });
};
