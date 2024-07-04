const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'AngularProjet';
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
app.use(express.json());


app.get('/recette_liste', async (_req, res) => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db(dbName);
    const collection = db.collection('Cook');
    const result = await collection.find({}).toArray();
    console.log(result);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  } finally {
    await client.close();
  }
});

app.put('/recette/:id', async (req, res) => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db(dbName);
    const collection = db.collection('Cook');

    const filter = { _id: new ObjectId(req.params.id) };
    const updateDoc = { $set: req.body }; // Utilisation du corps de la requête pour mettre à jour les données

    console.log('Voici updateDoc doit contenir', updateDoc);
    const result = await collection.updateOne(filter, updateDoc);
    
    if (result.matchedCount === 1) {
      res.json({ message: `Item with id ${req.params.id} updated successfully` });
    } else {
      res.status(404).json({ message: `Item with id ${req.params.id} not found` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  } finally {
    await client.close();
  }
});

app.put('/recette/:id', async (req, res) => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db(dbName);
    const collection = db.collection('Cook');

    const filter = { _id: new ObjectId(req.params.id) };
    const updateDoc = { $set: 
      {
      "nom": "Nouveau nom de la recette",
      "ingredient": "Farine, sucre, etc.",
      "recette_detail": "Nouvelle description de la recette",
      "nmbrDePersonne": 4,
      "tempsDePreparation": "45 minutes",
      "difficulte": "Moyenne",
      "type": "Plat principal"}
      
     }; // Utilisation du corps de la requête pour mettre à jour les données
    console.log('Voici updateDoc doit contenir',updateDoc);
    const result = await collection.updateOne(filter, updateDoc);
    
    
    if (result.matchedCount === 1) {
      res.json({ message: `Item with id ${req.params.id} updated successfully` });
    } else {
      res.status(404).json({ message: `Item with id ${req.params.id} not found` });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');

  } finally {
    await client.close();
  }
});

app.post('/recette', async (req, res) => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db(dbName);
    const collection = db.collection('Cook');

    const newRecette = req.body; // Les données de la nouvelle recette sont dans le corps de la requête

    const result = await collection.insertOne(newRecette);
    console.log(`Recette ajoutée avec l'ID: ${result.insertedId}`);
    res.status(201).json({ message: 'Recette ajoutée avec succès', recetteId: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  } finally {
    await client.close();
  }
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
