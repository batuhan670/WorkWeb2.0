const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user'); // Annahme, dass du ein "User"-Modell hast



const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('./models/user'); // Benutzermodell, das Sie bereits erstellt haben

passport.use(new LocalStrategy({
    usernameField: 'username', // Name des Benutzernamensfelds in der Anmeldeform
    passwordField: 'password', // Name des Passwortfelds in der Anmeldeform
}, (username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
        if (err) { return done(err); }
        if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
    });
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});
