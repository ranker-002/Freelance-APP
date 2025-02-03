const pool = require('../config/db');

// Récupérer tous les projets
async function getAllProjects(req, res) {
  try {
    const [rows] = await pool.query('SELECT * FROM projets');
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération des projets' });
  }
}

// Créer un projet
async function createProject(req, res) {
  const { titre, description, client_id, statut, budget_min, budget_max, competences_requises, date_limite } = req.body;
  try {
    const query = `
      INSERT INTO projets (titre, description, client_id, statut, budget_min, budget_max, competences_requises, date_limite)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const [result] = await pool.query(query, [titre, description, client_id, statut, budget_min, budget_max, competences_requises, date_limite]);
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la création du projet' });
  }
}

// Récupérer un projet par son ID
async function getProjectById(req, res) {
  const { id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM projets WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Projet non trouvé' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération du projet' });
  }
}

// Mettre à jour un projet
async function updateProject(req, res) {
  const { id } = req.params;
  const { titre, description, client_id, statut, budget_min, budget_max, competences_requises, date_limite } = req.body;
  try {
    const query = `
      UPDATE projets
      SET titre = ?, description = ?, client_id = ?, statut = ?, budget_min = ?, budget_max = ?, competences_requises = ?, date_limite = ?
      WHERE id = ?
    `;
    await pool.query(query, [titre, description, client_id, statut, budget_min, budget_max, competences_requises, date_limite, id]);
    res.status(200).json({ message: 'Projet mis à jour avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la mise à jour du projet' });
  }
}

// Supprimer un projet
async function deleteProject(req, res) {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM projets WHERE id = ?', [id]);
    res.status(200).json({ message: 'Projet supprimé avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la suppression du projet' });
  }
}

module.exports = {
  getAllProjects,
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
};
