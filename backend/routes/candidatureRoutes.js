const express = require('express');
const { getAllApplications, createApplication, getApplicationById, updateApplication, deleteApplication } = require('../controllers/candidatureController');

const router = express.Router();

// Routes pour les candidatures
router.get('/', getAllApplications); // Récupérer toutes les candidatures
router.post('/', createApplication); // Créer une candidature
router.get('/:id', getApplicationById); // Récupérer une candidature par son ID
router.put('/:id', updateApplication); // Mettre à jour une candidature
router.delete('/:id', deleteApplication); // Supprimer une candidature

module.exports = router;
