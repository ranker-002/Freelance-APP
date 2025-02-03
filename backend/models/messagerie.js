// Fichier : src/models/messagerie.js

const pool = require('../config/db');

// Fonction pour créer la table "Messagerie" si elle n'existe pas
async function createMessagerieTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS messagerie (
      id INT AUTO_INCREMENT PRIMARY KEY,
      projet_id INT NOT NULL,
      emetteur_id INT NOT NULL,
      destinataire_id INT NOT NULL,
      message TEXT NOT NULL,
      date_envoi DATETIME DEFAULT CURRENT_TIMESTAMP,
      lu BOOLEAN DEFAULT FALSE,
      FOREIGN KEY (projet_id) REFERENCES projets(id) ON DELETE CASCADE,
      FOREIGN KEY (emetteur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE,
      FOREIGN KEY (destinataire_id) REFERENCES utilisateurs(id) ON DELETE CASCADE
    );
  `;

  try {
    const connection = await pool.getConnection();
    await connection.query(query);
    console.log('Table "Messagerie" créée avec succès.');
    connection.release();
  } catch (error) {
    console.error('Erreur lors de la création de la table "Messagerie":', error);
  }
}

module.exports = { createMessagerieTable };
