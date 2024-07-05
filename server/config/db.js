// db.js
const mongoose = require('mongoose');
require('dotenv').config();

const uri = `mongodb+srv://${process.env.DB_USER_PASS}@cluster0.bi7yhrq.mongodb.net/RWF?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000, // 10 seconds
    connectTimeoutMS: 10000,         // 10 seconds
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB', err));
