const express = require('express');
const router = express.Router();
const passport = require('passport');

// Login-Formular anzeigen
router.get('/login', (req, res) => {
    res.render('login');
});

// Login-Formular verarbeiten
router.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/auth/login',
    failureFlash: true
}));

module.exports = router;
