const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

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



const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).send('Vous n\'etes pas connecté');
  
    try {
      const verified = jwt.verify(token, process.env.TOKEN_SECRET);
      req.user = verified;
      console.log(verified);
      next();
    } catch (err) {
      res.status(400).send('Invalid Token');
    }
  };
  

//Routes

app.use(cors());
app.use('/api/user', userRoutes);



// Use routes
app.use('/api/recipes',/*verifyToken;*/ recipeRoutes);
app.use('/api/comments',/*verifyToken;*/ commentRoutes);
app.use('/api/favorites',/*verifyToken;*/ favoriteRoutes);



//server
app.listen(process.env.PORT, () => {
    console.log(`Écoute sur le port ${process.env.PORT}`);
});
