const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connecté'))
  .catch(err => console.error('Erreur de connexion à MongoDB:', err));

// Routes
app.get('/', (req, res) => {
  res.send('API de l\u00e9integration cloud pour e-commerce');
});

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});