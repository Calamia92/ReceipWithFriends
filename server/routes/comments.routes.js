const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment.controller');

router.post('/:id', commentController.createComment);
router.put('/:recipeId/:commentId', commentController.editComment);
router.delete('/:recipeId/:commentId', commentController.deleteComment);

module.exports = router;
