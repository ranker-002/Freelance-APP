const bcrypt = require('bcrypt');
const pool = require('../config/db');

// Hacher le mot de passe avant de l’enregistrer
async function hashPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

// Créer un utilisateur
async function createUser({ nom, email, mot_de_passe, role, profil, bio }) {
  const hashedPassword = await hashPassword(mot_de_passe);
  const query = `
    INSERT INTO utilisateurs (nom, email, mot_de_passe, role, profil, bio)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const [result] = await pool.query(query, [nom, email, hashedPassword, role, profil, bio]);
  return result.insertId;
}

// Récupérer un utilisateur par ID
async function getUserById(id) {
  const query = 'SELECT * FROM utilisateurs WHERE id = ?';
  const [rows] = await pool.query(query, [id]);
  return rows.length > 0 ? rows[0] : null;
}

// Récupérer tous les utilisateurs
async function getAllUsers() {
  const query = 'SELECT * FROM utilisateurs';
  const [rows] = await pool.query(query);
  return rows;
}

module.exports = {
  hashPassword,
  createUser,
  getUserById,
  getAllUsers,
};
