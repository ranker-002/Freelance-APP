const pool = require('../config/db');

// Récupérer toutes les candidatures
async function getAllApplications(req, res) {
  try {
    const [rows] = await pool.query('SELECT * FROM candidatures');
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération des candidatures' });
  }
}

// Créer une candidature
async function createApplication(req, res) {
  const { projet_id, freelance_id, proposition, tarif, statut } = req.body;
  try {
    const query = `
      INSERT INTO candidatures (projet_id, freelance_id, proposition, tarif, statut)
      VALUES (?, ?, ?, ?, ?)
    `;
    const [result] = await pool.query(query, [projet_id, freelance_id, proposition, tarif, statut]);
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la création de la candidature' });
  }
}

// Récupérer une candidature par son ID
async function getApplicationById(req, res) {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM candidatures WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Candidature non trouvée' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération de la candidature' });
  }
}

// Mettre à jour une candidature
async function updateApplication(req, res) {
  const { id } = req.params;
  const { projet_id, freelance_id, proposition, tarif, statut } = req.body;
  try {
    const query = `
      UPDATE candidatures
      SET projet_id = ?, freelance_id = ?, proposition = ?, tarif = ?, statut = ?
      WHERE id = ?
    `;
    await pool.query(query, [projet_id, freelance_id, proposition, tarif, statut, id]);
    res.status(200).json({ message: 'Candidature mise à jour avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la mise à jour de la candidature' });
  }
}

// Supprimer une candidature
async function deleteApplication(req, res) {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM candidatures WHERE id = ?', [id]);
    res.status(200).json({ message: 'Candidature supprimée avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la suppression de la candidature' });
  }
}

module.exports = {
  getAllApplications,
  createApplication,
  getApplicationById,
  updateApplication,
  deleteApplication,
};
