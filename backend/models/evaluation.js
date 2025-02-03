// Fichier : src/models/evaluation.js

const pool = require('../config/db');

// Fonction pour créer la table "Évaluations" si elle n'existe pas
async function createEvaluationTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS evaluations (
      id INT AUTO_INCREMENT PRIMARY KEY,
      projet_id INT NOT NULL,
      auteur_id INT NOT NULL,
      destinataire_id INT NOT NULL,
      note INT NOT NULL CHECK (note >= 1 AND note <= 5),
      commentaire TEXT,
      date_evaluation DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (projet_id) REFERENCES projets(id) ON DELETE CASCADE,
      FOREIGN KEY (auteur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE,
      FOREIGN KEY (destinataire_id) REFERENCES utilisateurs(id) ON DELETE CASCADE
    );
  `;

  try {
    const connection = await pool.getConnection();
    await connection.query(query);
    console.log('Table "Évaluations" créée avec succès.');
    connection.release();
  } catch (error) {
    console.error('Erreur lors de la création de la table "Évaluations":', error);
  }
}

module.exports = { createEvaluationTable };
