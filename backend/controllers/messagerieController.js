const pool = require('../config/db');

// Récupérer tous les messages
async function getAllMessages(req, res) {
  try {
    const [rows] = await pool.query('SELECT * FROM messagerie');
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération des messages' });
  }
}

// Créer un message
async function createMessage(req, res) {
  const { projet_id, emetteur_id, destinataire_id, message } = req.body;
  try {
    const query = `
      INSERT INTO messagerie (projet_id, emetteur_id, destinataire_id, message)
      VALUES (?, ?, ?, ?)
    `;
    const [result] = await pool.query(query, [projet_id, emetteur_id, destinataire_id, message]);
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la création du message' });
  }
}

// Récupérer les messages liés à un projet
async function getMessagesByProject(req, res) {
  const { projet_id } = req.params;
  try {
    const [rows] = await pool.query('SELECT * FROM messagerie WHERE projet_id = ?', [projet_id]);
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la récupération des messages pour ce projet' });
  }
}

module.exports = {
  getAllMessages,
  createMessage,
  getMessagesByProject,
};
