const express = require('express');
const utilisateursRoutes = require('./src/Routes/utilisateurs');
const recettesRoutes = require('./src/Routes/recettes');
const commentairesRoutes = require('./src/Routes/commentaires');
const favorisRoutes = require('./src/Routes/favoris');

const app = express();

app.use(express.json());

app.use('/api/utilisateurs', utilisateursRoutes);
app.use('/api/recettes', recettesRoutes);
app.use('/api/commentaires', commentairesRoutes);
app.use('/api/favoris', favorisRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
