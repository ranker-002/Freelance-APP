const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const pool = require('./config/db'); // Remplacer sequelize par pool si vous utilisez mysql2
const projetRoutes = require('./routes/projetRoutes');
const candidatureRoutes = require('./routes/candidatureRoutes');
const messagerieRoutes = require('./routes/messagerieRoutes');
const paiementRoutes = require('./routes/paiementRoutes');
const evaluationRoutes = require('./routes/evaluationRoutes');
const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');



// Chargement des variables d'environnement
dotenv.config();

// Initialiser Express
const app = express();

app.use(express.json()); // Pour analyser les requêtes JSON
app.use(express.urlencoded({ extended: true })); // Pour les requêtes URL-encodées


// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test de connexion à la base de données
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Connexion à la base de données réussie.');
    connection.release();
  } catch (error) {
    console.error('Impossible de se connecter à la base de données:', error);
  }
})();
// pour proteger les routes contres les utilisateurs non authentifié
app.use('/api/protected', protectedRoutes);
// Ajouter les routes d'authentification
app.use('/api/auth', authRoutes);
// Ajouter les routes pour les projets
app.use('/api/projets', projetRoutes);
// Ajouter les routes pour les candidatures
app.use('/api/candidatures', candidatureRoutes);
// Ajouter les routes pour la messagerie
app.use('/api/messagerie', messagerieRoutes);
// Ajouter les routes pour les paiements
app.use('/api/paiements', paiementRoutes);
// Ajouter les routes pour les évaluations
app.use('/api/evaluations', evaluationRoutes);

// Exemple de route
app.get('/', (req, res) => {
  res.send('Bienvenue dans le backend de services pour freelances !');
});

// Exporter app pour l'utiliser dans server.js
module.exports = app;
