const express = require('express');
const { authenticateToken } = require('../middlewares/authMiddleware');
const { authorizeRoles } = require('../middlewares/roleMiddleware');

const router = express.Router();

// Route protégée accessible uniquement aux utilisateurs authentifiés
router.get('/', authenticateToken, (req, res) => {
  res.json({ message: 'Accès autorisé à la route protégée.', user: req.user });
});

// Route accessible uniquement aux administrateurs
router.get('/admin', authenticateToken, authorizeRoles('admin'), (req, res) => {
  res.json({ message: 'Accès autorisé pour les administrateurs.', user: req.user });
});

module.exports = router;
