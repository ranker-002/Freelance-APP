const express = require('express');
const { getAllPayments, createPayment, getPaymentByProject } = require('../controllers/paiementController');

const router = express.Router();

// Routes pour les paiements
router.get('/', getAllPayments); // Récupérer tous les paiements
router.post('/', createPayment); // Créer un paiement
router.get('/projet/:projet_id', getPaymentByProject); // Récupérer le paiement d'un projet spécifique

module.exports = router;
