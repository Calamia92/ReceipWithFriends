const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipe.controller');

router.get('/', recipeController.readRecipe);
router.post('/', recipeController.createRecipe);
router.put('/:id', recipeController.updateRecipe);
router.delete('/:id', recipeController.deleteRecipe);

module.exports = router;
