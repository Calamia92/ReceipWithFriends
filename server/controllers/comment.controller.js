const CommentModel = require('../models/Comment');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.createComment = async (req, res) => {
  if (!ObjectID.isValid(req.params.recipeId))
    return res.status(400).send('ID unknown: ' + req.params.recipeId);

  const newComment = new CommentModel({
    recipeId: req.params.recipeId,
    commenterId: req.body.commenterId,
    commenterPseudo: req.body.commenterPseudo,
    text: req.body.text,
  });

  try {
    const comment = await newComment.save();
    return res.status(201).json(comment);
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.editComment = async (req, res) => {
  if (!ObjectID.isValid(req.params.recipeId))
    return res.status(400).send('Recipe ID unknown: ' + req.params.recipeId);

  if (!ObjectID.isValid(req.params.commentId))
    return res.status(400).send('Comment ID unknown: ' + req.params.commentId);

  try {
    const comment = await CommentModel.findById(req.params.commentId).exec();
    if (!comment) return res.status(404).send('Comment not found');

    comment.text = req.body.text;

    const updatedComment = await comment.save();
    return res.status(200).send(updatedComment);
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.deleteComment = async (req, res) => {
  if (!ObjectID.isValid(req.params.recipeId))
    return res.status(400).send('Recipe ID unknown: ' + req.params.recipeId);

  if (!ObjectID.isValid(req.params.commentId))
    return res.status(400).send('Comment ID unknown: ' + req.params.commentId);

  try {
    const deletedComment = await CommentModel.findByIdAndRemove(req.params.commentId).exec();
    return res.status(200).send(deletedComment);
  } catch (err) {
    return res.status(400).send(err);
  }
};
