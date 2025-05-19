const express = require('express');
require('dotenv').config();
const ineRoutes = require('./routes/ine.routes');

const app = express();
app.use(express.json());
app.use('/api/ine', ineRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Microservicio activo en puerto ${PORT}`));
