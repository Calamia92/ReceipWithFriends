const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favorite.controller');

router.post('/', favoriteController.createFavorite);
router.delete('/:id', favoriteController.deleteFavorite);

module.exports = router;
