const express = require('express');
const { getAllEvaluations, createEvaluation, getEvaluationsByProject, getEvaluationsForUser } = require('../controllers/evaluationController');

const router = express.Router();

// Routes pour les évaluations
router.get('/', getAllEvaluations); // Récupérer toutes les évaluations
router.post('/', createEvaluation); // Créer une évaluation
router.get('/projet/:projet_id', getEvaluationsByProject); // Récupérer les évaluations d'un projet
router.get('/user/:user_id', getEvaluationsForUser); // Récupérer les évaluations pour un utilisateur

module.exports = router;
