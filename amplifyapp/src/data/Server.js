const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

if (!process.env.DB_URL || !process.env.DB_USERNAME || !process.env.DB_PASSWORD || !process.env.DB_DATABASE) {
  console.log("Create .env file: with DB_URL=..., DB_USERNAME=..., DB_PASSWORD=..., DB_DATABASE=...")
  process.exit(1)
}

const connection = mysql.createConnection({
  host: process.env.URL,
  user: process.env.DB_USERNAME,
  password: process.env.DB_USERNAME,
  database: process.env.DB_PASSWORD
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

router.get('/api/employees', (req, res) => {
  connection.query('SELECT * FROM employees', function (error, results) {
    if (error) {
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
})

// Route für die Startseite
router.get('/home', ensureAuthenticated, (req, res) => {
  res.render('home', { user: req.user });
});

// Route für das Erstellen eines Benutzers
router.post('/api/employees', (req, res) => {
  const { email, password, name, phone, department, position, manager_IDemployees } = req.body;
  console.log('text', req.body)
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

    if (manager_IDemployees === '') {
      manager_IDemployees = null
    }

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


// Schichtplan Eintragen
router.post('/api/shift_schedule', (req, res) => {
  console.log(req.body)
  const { employee_id, shift_type, start_date, start_time, end_date, end_time } = req.body;

  const query = `
    INSERT INTO shift_schedule (employee_id, shift_type, start_date, start_time, end_date, end_time)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  console.log(employee_id)

  connection.query(query, [employee_id, shift_type, start_date, start_time, end_date, end_time], function (error, results) {
    if (error) {
      console.error(error);
      console.log(req.body)
      res.status(500).send('Error saving data to database');
      return;
    }
    res.status(201).send('Shift added successfully');
  });
});

// Schichtplan Stundentafel
router.post('/api/employee_hours', (req, res) => {
  console.log(req.body)
  const { employee_id, startTime, workDate, stopTime, totalHours } = req.body;

  const query = `
    INSERT INTO employee_hours (employee_id, work_date, start_time, stop_time, total_hours)
    VALUES (?, ?, ?, ?, ?)
  `;

  console.log(employee_id)

  connection.query(query, [employee_id, workDate, startTime, stopTime, totalHours], function (error, results) {
    if (error) {
      console.error(error);
      res.status(500).send('Error saving data to database');
      return;
    }
    res.status(201).send('Shift added successfully');
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
