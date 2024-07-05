const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');
const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).send('Access Denied');
  
    try {
      const verified = jwt.verify(token, process.env.TOKEN_SECRET);
      req.user = verified;
      next();
    } catch (err) {
      res.status(400).send('Invalid Token');
    }
  };

//auth
router.post("/register", authController.signUp);
router.post("/login", authController.signIn);
router.get("/logout", authController.logout);

// user DB
router.get('/',/*verifyToken;*/ userController.getAllUsers);
router.get('/:id',/*verifyToken;*/ userController.userInfo);
router.put('/:id',/*verifyToken;*/ userController.updateUser);
router.delete('/:id',/*verifyToken;*/ userController.deleteUser);

module.exports = router; 