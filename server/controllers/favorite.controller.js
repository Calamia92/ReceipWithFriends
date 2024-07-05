const FavoriteModel = require('../models/Favorite');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.createFavorite = async (req, res) => {
  const newFavorite = new FavoriteModel({
    userId: req.body.userId,
    recipeId: req.body.recipeId,
  });

  try {
    const favorite = await newFavorite.save();
    return res.status(201).json(favorite);
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.deleteFavorite = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknown: ' + req.params.id);

  try {
    const deletedFavorite = await FavoriteModel.findByIdAndRemove(req.params.id).exec();
    res.status(200).send(deletedFavorite);
  } catch (err) {
    console.log('Delete error: ' + err);
    res.status(500).send(err);
  }
};
