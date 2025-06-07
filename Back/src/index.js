const express = require('express');
const app = express();
const db  =require('./config/db');

console.log(db);

app.use(express.json());

app.use('/api/pacientes', require('./rutas/ruta.router'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});