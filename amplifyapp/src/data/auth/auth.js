const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

const connection = require('../database/db')

module.exports.passport = passport
module.exports.init = (app) => {
    // Konfiguration für Passport.js
    app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
    app.use(passport.initialize());
    app.use(passport.session());

    // Konfiguration für LocalStrategy
    passport.use(new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        function (email, password, done) {
            connection.query('SELECT * FROM employees WHERE email = ?', [email], function (error, results) {
                console.log("xxx1")
                if (error) {

                    return done(error);
                } console.log("xxx2")
                if (!results || results.length === 0) {
                    return done(null, false, { message: 'Incorrect email or password.' });
                }
                const user = results[0];
                console.log("xxx3" + password + " " + user.password)
                if (password == user.password) {
                    return done(null, user);
                } else {
                    console.log("xxx5")
                    return done(null, false, { message: 'Incorrect email or password.' });
                }

                /* bcrypt.compare(password, user.password, function (error, result) {
                   console.log("xxx4")
                   if (result === true) {
                     return done(null, user);
                   } else {
                     console.log("xxx5")
                     return done(null, false, { message: 'Incorrect email or password.' });
                   }
                 });*/
            });
        }
    ));

    // Konfiguration für passport.serializeUser
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    // Konfiguration für passport.deserializeUser
    passport.deserializeUser(function (id, done) {
        connection.query('SELECT * FROM employees WHERE id = ?', [id], function (error, results) {
            if (error) {
                return done(error);
            }
            const user = results[0];
            done(null, user);
        });
    });

}