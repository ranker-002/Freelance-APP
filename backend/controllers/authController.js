const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Inscription
async function register(req, res) {
    const { nom, email, mot_de_passe, role, profil, bio } = req.body;
  
    // Vérification des champs obligatoires
    if (!nom || !email || !mot_de_passe || !role) {
      return res.status(400).json({ error: 'Tous les champs obligatoires doivent être remplis.' });
    }
  
    try {
      // Vérifier si l'utilisateur existe déjà
      const [existingUser] = await pool.query('SELECT * FROM utilisateurs WHERE email = ?', [email]);
      if (existingUser.length > 0) {
        return res.status(400).json({ error: 'Cet email est déjà utilisé.' });
      }
  
      // Hacher le mot de passe
      const hashedPassword = await bcrypt.hash(mot_de_passe, 10);
  
      // Ajouter l'utilisateur dans la base de données
      const query = `
        INSERT INTO utilisateurs (nom, email, mot_de_passe, role, profil, bio)
        VALUES (?, ?, ?, ?, ?, ?)
      `;
      await pool.query(query, [nom, email, hashedPassword, role, profil, bio]);
  
      res.status(201).json({ message: 'Utilisateur inscrit avec succès.' });
    } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
      res.status(500).json({ error: 'Erreur interne du serveur.' });
    }
  }


// Connexion
async function login(req, res) {
  const { email, mot_de_passe } = req.body;

  try {
    // Vérifier si l'utilisateur existe
    const [rows] = await pool.query('SELECT * FROM utilisateurs WHERE email = ?', [email]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Utilisateur non trouvé.' });
    }

    const user = rows[0];

    // Vérifier le mot de passe
    const isPasswordValid = await bcrypt.compare(mot_de_passe, user.mot_de_passe);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Mot de passe incorrect.' });
    }

    // Générer un token JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || 'secret_key',
      { expiresIn: '1h' }
    );

    res.status(200).json({
      token,
      user: { id: user.id, email: user.email, nom: user.nom, role: user.role },
    });
  } catch (error) {
    console.error('Erreur lors de la connexion :', error);
    res.status(500).json({ error: 'Erreur interne du serveur.' });
  }
}

module.exports = { register, login };
