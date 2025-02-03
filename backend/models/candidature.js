// Fichier : src/models/candidature.js

const pool = require('../config/db');

// Fonction pour créer la table "Candidatures" si elle n'existe pas
async function createCandidatureTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS candidatures (
      id INT AUTO_INCREMENT PRIMARY KEY,
      projet_id INT NOT NULL,
      freelance_id INT NOT NULL,
      proposition TEXT NOT NULL,
      tarif DECIMAL(10,2) NOT NULL,
      statut ENUM('en attente', 'acceptée', 'rejetée') DEFAULT 'en attente',
      date_postulation DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (projet_id) REFERENCES projets(id) ON DELETE CASCADE,
      FOREIGN KEY (freelance_id) REFERENCES utilisateurs(id) ON DELETE CASCADE
    );
  `;

  try {
    const connection = await pool.getConnection();
    await connection.query(query);
    console.log('Table "Candidatures" créée avec succès.');
    connection.release();
  } catch (error) {
    console.error('Erreur lors de la création de la table "Candidatures":', error);
  }
}

module.exports = { createCandidatureTable };
