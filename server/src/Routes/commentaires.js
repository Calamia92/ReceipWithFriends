const express = require('express');
const router = express.Router();
const { creerCommentaire, getAllCommentaires, getCommentaireById, updateCommentaire, deleteCommentaire } = require('../Controllers/commentairesController');

router.post('/', creerCommentaire);
router.get('/', getAllCommentaires);
router.get('/:id', getCommentaireById);
router.put('/:id', updateCommentaire);
router.delete('/:id', deleteCommentaire);

module.exports = router;
