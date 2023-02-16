const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

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

app.listen(3000, () => {
  console.log('Express server is running on http://localhost:3000/');
});

app.use(express.json());

app.post('/api/employees', (req, res) => {
  const { name, phone, email, department, position, manager } = req.body;

  const query = `
    INSERT INTO employees (name, phone, email, department, position, manager)
    VALUES (?, ?, ?, ?, ?, ?);
  `;

  connection.query(query, [name, phone, email, department, position, manager], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error saving data to database');
    } else {
      res.send('Data saved to database');
    }
  });
});

app.get('/api/employees', (req, res) => {
  connection.query('SELECT * FROM employees', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error retrieving data from database');
    } else {
      res.json(results);
    }
  });
});

app.get('/api/employees/:id', (req, res) => {
  connection.query('SELECT * FROM employees where id = ' + req.params["id"], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error retrieving data from database');
    } else {
      if (results.length == 0) {
        res.sendStatus(404)
      } else {
        res.json(results[0]);
      }
    }
  });
});



app.post('/api/employee_hours', (req, res) => {
  const { employeeId, workDate, startTime, stopTime, totalHours } = req.body;

  const query = `
    INSERT INTO employee_hours (employee_id, work_date, start_time, stop_time, total_hours)
    VALUES (?, ?, ?, ?, ?);
  `;

  connection.query(query, [employeeId, workDate, startTime, stopTime, totalHours], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error saving data to database');
    } else {
      res.send('Data saved to database');
    }
  });
});

app.get('/api/employee_hours/:employeeId', (req, res) => {
  const employeeId = req.params.employeeId;

  const query = `
    SELECT employee_hours.id, employees.name, employee_hours.work_date, employee_hours.start_time, employee_hours.stop_time, employee_hours.total_hours
    FROM employee_hours
    JOIN employees ON employee_hours.employee_id = employees.id
    WHERE employees.id = ?
  `;

  connection.query(query, [employeeId], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error retrieving data from database');
    } else {
      res.json(results);
    }
  });
});


