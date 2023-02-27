const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Alperen5858',
  database: 'workwebdb'
});

connection.connect((error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Connected to MySQL database!');
  }
});

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

// Middleware für Routen-Präfix
const router = express.Router();

// Route für Login
router.post('/', passport.authenticate('local'), (req, res) => {
  // Weiterleitung zur Startseite, falls das Login erfolgreich war
  res.json(req.session.passport.user)
});

// Middleware für die Startseite, nur zugänglich wenn der Benutzer eingeloggt ist
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.sendStatus(401)
}

// Route für die Startseite
router.get('/home', ensureAuthenticated, (req, res) => {
  res.render('home', { user: req.user });
});

// Route für das Erstellen eines Benutzers
router.post('/api/signup', (req, res) => {
  const { email, password, name, phone, department, position, manager_IDemployees } = req.body;

  // Hash des Passworts generieren
  bcrypt.hash(password, 10, function (error, hash) {
    if (error) {
      console.error(error);
      res.status(500).send('Error saving data to database');
      return;
    }

    // Benutzer in der Datenbank speichern
    const query = `
      INSERT INTO employees (email, password, name, phone, department, position, manager_IDemployees)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    connection.query(query, [email, hash, name, phone, department, position, manager_IDemployees], function (error, results) {
      if (error) {
        console.error(error);
        res.status(500).send('Error saving data to database');
        return;
      }
      res.status(201).send('User created successfully');
    });
  });
});

// Route für das Abmelden
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

// Middleware für unbekannte URLs
router.use((req, res) => {
  res.status(404).render('404');
});

// Anwendung starten
const port = 3000;
app.use('/', router);
app.listen(port, () => console.log(`Server started on port ${port}`));
