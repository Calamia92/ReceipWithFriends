const db = require('../Config/db');

// Create a new favorite
exports.creerFavoris = async (req, res) => {
  try {
    const { id_recette, id_utilisateur } = req.body;
    const [result] = await db.execute(
      'INSERT INTO Favoris (id_recette, id_utilisateur) VALUES (?, ?)',
      [id_recette, id_utilisateur]
    );
    res.status(201).json({ id: result.insertId, message: 'Favori créé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création du favori', error });
  }
};

// Get all favorites
exports.getAllFavoris = async (req, res) => {
  try {
    const [favoris] = await db.query('SELECT * FROM Favoris');
    res.json(favoris);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des favoris', error });
  }
};

// Get a favorite by ID
exports.getFavorisById = async (req, res) => {
  try {
    const { id } = req.params;
    const [favori] = await db.execute('SELECT * FROM Favoris WHERE id = ?', [id]);
    if (favori.length === 0) {
      return res.status(404).json({ message: 'Favori non trouvé' });
    }
    res.json(favori[0]);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du favori', error });
  }
};

// Delete a favorite
exports.deleteFavoris = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.execute('DELETE FROM Favoris WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Favori non trouvé' });
    }
    res.json({ message: 'Favori supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du favori', error });
  }
};
