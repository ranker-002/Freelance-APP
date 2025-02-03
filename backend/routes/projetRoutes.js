const express = require('express');
const { getAllProjects, createProject, getProjectById, updateProject, deleteProject } = require('../controllers/projetController');

const router = express.Router();

// Routes pour les projets
router.get('/', getAllProjects); // Récupérer tous les projets
router.post('/', createProject); // Créer un projet
router.get('/:id', getProjectById); // Récupérer un projet par son ID
router.put('/:id', updateProject); // Mettre à jour un projet
router.delete('/:id', deleteProject); // Supprimer un projet

module.exports = router;
