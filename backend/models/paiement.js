// Fichier : src/models/paiement.js

const pool = require('../config/db');

// Fonction pour créer la table "Paiements" si elle n'existe pas
async function createPaiementTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS paiements (
      id INT AUTO_INCREMENT PRIMARY KEY,
      projet_id INT NOT NULL,
      montant DECIMAL(10,2) NOT NULL,
      mode_paiement ENUM('Stripe', 'PayPal', 'Autre') NOT NULL,
      statut ENUM('en attente', 'effectué', 'annulé') DEFAULT 'en attente',
      date_paiement DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (projet_id) REFERENCES projets(id) ON DELETE CASCADE
    );
  `;

  try {
    const connection = await pool.getConnection();
    await connection.query(query);
    console.log('Table "Paiements" créée avec succès.');
    connection.release();
  } catch (error) {
    console.error('Erreur lors de la création de la table "Paiements":', error);
  }
}

module.exports = { createPaiementTable };
