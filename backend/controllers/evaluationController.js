const pool = require('../config/db');

// Récupérer toutes les évaluations
async function getAllEvaluations(req, res) {
  try {
    const [rows] = await pool.query('SELECT * FROM evaluations');
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération des évaluations' });
  }
}

// Créer une évaluation
async function createEvaluation(req, res) {
  const { projet_id, auteur_id, destinataire_id, note, commentaire } = req.body;
  try {
    const query = `
      INSERT INTO evaluations (projet_id, auteur_id, destinataire_id, note, commentaire)
      VALUES (?, ?, ?, ?, ?)
    `;
    const [result] = await pool.query(query, [projet_id, auteur_id, destinataire_id, note, commentaire]);
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la création de l\'évaluation' });
  }
}

// Récupérer les évaluations d'un projet
async function getEvaluationsByProject(req, res) {
  const { projet_id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM evaluations WHERE projet_id = ?', [projet_id]);
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération des évaluations pour ce projet' });
  }
}

// Récupérer les évaluations pour un utilisateur
async function getEvaluationsForUser(req, res) {
  const { user_id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM evaluations WHERE destinataire_id = ?', [user_id]);
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération des évaluations pour cet utilisateur' });
  }
}

module.exports = {
  getAllEvaluations,
  createEvaluation,
  getEvaluationsByProject,
  getEvaluationsForUser,
};
