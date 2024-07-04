const db = require('../Config/db');

// Create a new comment
exports.creerCommentaire = async (req, res) => {
  try {
    const { id_recette, id_utilisateur, commentaire } = req.body;
    const [result] = await db.execute(
      'INSERT INTO Commentaires (id_recette, id_utilisateur, commentaire) VALUES (?, ?, ?)',
      [id_recette, id_utilisateur, commentaire]
    );
    res.status(201).json({ id: result.insertId, message: 'Commentaire créé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du commentaire', error });
  }
};

// Get all comments
exports.getAllCommentaires = async (req, res) => {
  try {
    const [commentaires] = await db.query('SELECT * FROM Commentaires');
    res.json(commentaires);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des commentaires', error });
  }
};

// Get a comment by ID
exports.getCommentaireById = async (req, res) => {
  try {
    const { id } = req.params;
    const [commentaire] = await db.execute('SELECT * FROM Commentaires WHERE id = ?', [id]);
    if (commentaire.length === 0) {
      return res.status(404).json({ message: 'Commentaire non trouvé' });
    }
    res.json(commentaire[0]);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du commentaire', error });
  }
};

// Update a comment
exports.updateCommentaire = async (req, res) => {
  try {
    const { id } = req.params;
    const { commentaire } = req.body;
    const [result] = await db.execute(
      'UPDATE Commentaires SET commentaire = ? WHERE id = ?',
      [commentaire, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Commentaire non trouvé' });
    }
    res.json({ message: 'Commentaire mis à jour avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du commentaire', error });
  }
};

// Delete a comment
exports.deleteCommentaire = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.execute('DELETE FROM Commentaires WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Commentaire non trouvé' });
    }
    res.json({ message: 'Commentaire supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du commentaire', error });
  }
};
