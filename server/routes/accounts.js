const express = require('express');
const signInAccount = require('../controllers/AccountController/signIn');
const signUpAccount = require('../controllers/AccountController/signUp');

const router = express.Router();

router.get('/login', (req, res) => {
    res.send("method GET is login");
});
router.post('/login', signInAccount);
router.get('/register', (req, res) => {
    res.send("method GET is register");
});
router.post('/register', signUpAccount);

module.exports = router;