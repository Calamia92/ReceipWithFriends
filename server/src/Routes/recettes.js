const express = require('express');
const router = express.Router();
const { creerRecette, getAllRecettes, getRecetteById, updateRecette, deleteRecette } = require('../Controllers/recetteController');

router.post('/', creerRecette);
router.get('/', getAllRecettes);
router.get('/:id', getRecetteById);
router.put('/:id', updateRecette);
router.delete('/:id', deleteRecette);

module.exports = router;
