const { createUtilisateurTable } = require('../migrations/utilisateurTable');
const { createProjetTable } = require('./projet');
const { createCandidatureTable } = require('./candidature');
const { createMessagerieTable } = require('./messagerie');
const { createPaiementTable } = require('./paiement');
const { createEvaluationTable } = require('./evaluation');

// Fonction pour créer toutes les tables
async function createAllTables() {
  try {
    // Appeler les fonctions de création des tables
    await createUtilisateurTable();
    await createProjetTable();
    await createCandidatureTable();
    await createMessagerieTable();
    await createPaiementTable();
    await createEvaluationTable();

    console.log('Toutes les tables ont été créées avec succès.');
  } catch (error) {
    console.error('Erreur lors de la création des tables :', error);
  }
}

// Exécuter la création des tables automatiquement
(async function init() {
  await createAllTables();
})();
