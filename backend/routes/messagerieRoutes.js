const express = require('express');
const { getAllMessages, createMessage, getMessagesByProject } = require('../controllers/messagerieController');

const router = express.Router();

// Routes pour la messagerie
router.get('/', getAllMessages); // Récupérer tous les messages
router.post('/', createMessage); // Créer un message
router.get('/projet/:projet_id', getMessagesByProject); // Récupérer les messages d'un projet spécifique

module.exports = router;
