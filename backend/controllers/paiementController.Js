const pool = require('../config/db');

// Récupérer tous les paiements
async function getAllPayments(req, res) {
  try {
    const [rows] = await pool.query('SELECT * FROM paiements');
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération des paiements' });
  }
}

// Créer un paiement
async function createPayment(req, res) {
  const { projet_id, montant, mode_paiement, statut } = req.body;
  try {
    const query = `
      INSERT INTO paiements (projet_id, montant, mode_paiement, statut)
      VALUES (?, ?, ?, ?)
    `;
    const [result] = await pool.query(query, [projet_id, montant, mode_paiement, statut]);
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la création du paiement' });
  }
}

// Récupérer le paiement d'un projet
async function getPaymentByProject(req, res) {
  const { projet_id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM paiements WHERE projet_id = ?', [projet_id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Aucun paiement trouvé pour ce projet' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération du paiement pour ce projet' });
  }
}

module.exports = {
  getAllPayments,
  createPayment,
  getPaymentByProject,
};
