const express = require('express');

// Import routes
const recipeRoutes = require('./routes/recipes.routes');
const commentRoutes = require('./routes/comments.routes');
const favoriteRoutes = require('./routes/favorites.routes');
const userRoutes = require('./routes/user.routes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config({ path: './config/.env' })
require('./config/db');

const {checkUser, requireAuth} = require('./middleware/auth.middleware');
const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

// jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id)
});




//Routes
app.use('/api/user', userRoutes);



// Use routes
app.use('/api/recipes', recipeRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/favorites', favoriteRoutes);



//server
app.listen(process.env.PORT, () => {
    console.log(`Écoute sur le port ${process.env.PORT}`);
});
