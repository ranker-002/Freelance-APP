const pool = require('../config/db');

// Fonction pour créer la table "Utilisateurs" si elle n'existe pas
async function createUtilisateurTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS utilisateurs (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nom VARCHAR(100) NOT NULL,
      email VARCHAR(150) UNIQUE NOT NULL,
      mot_de_passe VARCHAR(255) NOT NULL,
      role ENUM('freelance', 'client', 'admin') NOT NULL,
      profil VARCHAR(255) NULL,
      bio TEXT NULL,
      note_moyenne FLOAT NULL,
      date_inscription DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await pool.query(query); // Exécution directe de la requête
    console.log('Table "Utilisateurs" créée avec succès.');
  } catch (error) {
    console.error('Erreur lors de la création de la table "Utilisateurs":', error);
  }
}

module.exports = { createUtilisateurTable };
