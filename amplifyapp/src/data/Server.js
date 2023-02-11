const express = require('express');
const mysql = require('mysql2');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost:3306',
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
  console.log('Express server is running on http://localhost:3000');
});


app.use(express.json());

app.post('/api/data', (req, res) => {
  const { id, name, phone, email, department, position, manager } = req.body;

  const query = `
    INSERT INTO employees (id, name, phone, email, department, position, manager)
    VALUES (?, ?, ?, ?, ?, ?,?);
  `;

  connection.query(query, [id, name, phone, email, department, position, manager], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error saving data to database');
    } else {
      res.send('Data saved to database');
    }
  });
});

app.get('/api/data', (req, res) => {
  connection.query('SELECT * FROM employees', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error retrieving data from database');
    } else {
      res.json(results);
    }
  });
});

