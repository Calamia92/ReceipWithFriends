const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    nom: {
      type: String,
      required: true,
    },
    ingredient: {
      type: String,
      required: true,
    },
    recette_detail: {
      type: String,
      required: true,
    },
    nmbrDePersonne: {
      type: Number,
      required: true,
    },
    tempsDePreparation: {
      type: String,
      required: true,
    },
    difficulte: {
      type: String,
      required: true,
      enum: ['facile', 'moyen', 'difficile'],
    },
    type: {
      type: String,
      required: true,
      enum: ['entrée', 'plat', 'dessert'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Recipe', RecipeSchema);
