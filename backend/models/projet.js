const pool = require('../config/db');

// Fonction pour créer la table "Projets" si elle n'existe pas
async function createProjetTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS projets (
      id INT AUTO_INCREMENT PRIMARY KEY,
      titre VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      client_id INT NOT NULL,
      statut ENUM('en attente', 'en cours', 'terminé', 'annulé') DEFAULT 'en attente',
      budget_min DECIMAL(10,2) NOT NULL,
      budget_max DECIMAL(10,2) NOT NULL,
      competences_requises VARCHAR(255) NOT NULL,
      date_creation DATETIME DEFAULT CURRENT_TIMESTAMP,
      date_limite DATETIME NULL,
      FOREIGN KEY (client_id) REFERENCES utilisateurs(id) ON DELETE CASCADE
    );
  `;

  try {
    await pool.query(query);
    console.log('Table "Projets" créée avec succès.');
  } catch (error) {
    console.error('Erreur lors de la création de la table "Projets":', error);
  }
}

module.exports = { createProjetTable };
