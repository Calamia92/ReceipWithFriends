const db = require('../Config/db');

// Create a new recipe
exports.creerRecette = async (req, res) => {
  try {
    const { id_utilisateur, titre, ingredients, instructions, temps_preparation, temps_cuisson } = req.body;
    const [result] = await db.execute(
      'INSERT INTO Recettes (id_utilisateur, titre, ingredients, instructions, temps_preparation, temps_cuisson) VALUES (?, ?, ?, ?, ?, ?)',
      [id_utilisateur, titre, ingredients, instructions, temps_preparation, temps_cuisson]
    );
    res.status(201).json({ id: result.insertId, message: 'Recette créée avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de la recette', error });
  }
};

// Get all recipes
exports.getAllRecettes = async (req, res) => {
  try {
    const [recettes] = await db.query('SELECT * FROM Recettes');
    res.json(recettes);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des recettes', error });
  }
};

// Get a recipe by ID
exports.getRecetteById = async (req, res) => {
  try {
    const { id } = req.params;
    const [recette] = await db.execute('SELECT * FROM Recettes WHERE id = ?', [id]);
    if (recette.length === 0) {
      return res.status(404).json({ message: 'Recette non trouvée' });
    }
    res.json(recette[0]);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de la recette', error });
  }
};

// Update a recipe
exports.updateRecette = async (req, res) => {
  try {
    const { id } = req.params;
    const { titre, ingredients, instructions, temps_preparation, temps_cuisson } = req.body;
    const [result] = await db.execute(
      'UPDATE Recettes SET titre = ?, ingredients = ?, instructions = ?, temps_preparation = ?, temps_cuisson = ? WHERE id = ?',
      [titre, ingredients, instructions, temps_preparation, temps_cuisson, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Recette non trouvée' });
    }
    res.json({ message: 'Recette mise à jour avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour de la recette', error });
  }
};

// Delete a recipe
exports.deleteRecette = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.execute('DELETE FROM Recettes WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Recette non trouvée' });
    }
    res.json({ message: 'Recette supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de la recette', error });
  }
};
