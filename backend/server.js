const http = require('http'); // Importer le module HTTP de Node.js
const app = require('./app'); // Importer l'application Express définie dans app.js
const dotenv = require('dotenv'); // Importer dotenv pour gérer les variables d'environnement

// Charger les variables d'environnement depuis un fichier .env
dotenv.config();

// Définir le port à partir des variables d'environnement ou un port par défaut
const PORT = process.env.PORT || 3000;

// Créer un serveur HTTP avec Express
const server = http.createServer(app);

// Démarrer le serveur
server.listen(PORT, () => {
  console.log(`Serveur démarré et écoute sur le port ${PORT}`);
});

// Gérer les erreurs liées au serveur
server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof PORT === 'string' ? `Pipe ${PORT}` : `Port ${PORT}`;

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} nécessite des privilèges élevés`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} est déjà utilisé`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});
