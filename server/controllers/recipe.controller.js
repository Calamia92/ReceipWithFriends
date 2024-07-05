const RecipeModel = require('../models/Recipe');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.readRecipe = async (req, res) => {
  try {
    const recipes = await RecipeModel.find().sort({ createdAt: -1 }).exec();
    res.status(200).send(recipes);
  } catch (err) {
    console.log('Error to get data: ' + err);
    res.status(500).send(err);
  }
};

module.exports.createRecipe = async (req, res) => {
  const newRecipe = new RecipeModel({
    userId: req.body.userId,
    nom: req.body.nom,
    ingredient: req.body.ingredient,
    recette_detail: req.body.recette_detail,
    nmbrDePersonne: req.body.nmbrDePersonne,
    tempsDePreparation: req.body.tempsDePreparation,
    difficulte: req.body.difficulte,
    type: req.body.type,
  });

  try {
    const recipe = await newRecipe.save();
    return res.status(201).json(recipe);
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.updateRecipe = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknown: ' + req.params.id);

  const updatedRecord = {
    nom: req.body.nom,
    ingredient: req.body.ingredient,
    recette_detail: req.body.recette_detail,
    nmbrDePersonne: req.body.nmbrDePersonne,
    tempsDePreparation: req.body.tempsDePreparation,
    difficulte: req.body.difficulte,
    type: req.body.type,
  };

  try {
    const updatedRecipe = await RecipeModel.findByIdAndUpdate(
      req.params.id,
      { $set: updatedRecord },
      { new: true }
    ).exec();
    res.status(200).send(updatedRecipe);
  } catch (err) {
    console.log('Update error: ' + err);
    res.status(500).send(err);
  }
};

module.exports.deleteRecipe = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID unknown: ' + req.params.id);

  try {
    const deletedRecipe = await RecipeModel.findByIdAndRemove(req.params.id).exec();
    res.status(200).send(deletedRecipe);
  } catch (err) {
    console.log('Delete error: ' + err);
    res.status(500).send(err);
  }
};
