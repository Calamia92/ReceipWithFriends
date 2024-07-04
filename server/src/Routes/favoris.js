const express = require('express');
const router = express.Router();
const { creerFavoris, getAllFavoris, getFavorisById, deleteFavoris } = require('../Controllers/favorisController');

router.post('/', creerFavoris);
router.get('/', getAllFavoris);
router.get('/:id', getFavorisById);
router.delete('/:id', deleteFavoris);

module.exports = router;
