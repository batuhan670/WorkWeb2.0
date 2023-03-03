const express = require("express");
const { passport } = require('../auth/auth')

const router = express.Router()

// Route für Login
router.post('/', passport.authenticate('local'), (req, res) => {
    // Weiterleitung zur Startseite, falls das Login erfolgreich war
    res.json(req.session.passport.user)
});

// Route für das Abmelden
router.delete('/', (req, res) => {
    req.logout();
    res.sendStatus(200);
});

module.exports = router;