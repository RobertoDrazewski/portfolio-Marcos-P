const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Servir archivos estáticos de React (después del build)
app.use(express.static(path.join(__dirname, '../client/dist')));

// Ruta para el CV (colócalo en client/public)
app.get('/download-cv', (req, res) => {
  res.download(path.join(__dirname, '../client/public/CV_Marcos_Ponce.pdf'));
});

// Cualquier otra ruta redirige al index.html de React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});