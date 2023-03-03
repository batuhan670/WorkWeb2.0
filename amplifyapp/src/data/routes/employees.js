const express = require('express');

const router = express.Router()
const connection = require('../database/db')

router.get('/', (req, res) => {
    connection.query('SELECT * FROM employees', function (error, results) {
        if (error) {
            res.sendStatus(500);
        } else {
            res.json(results);
        }
    });
})

// Route für das Erstellen eines Benutzers
router.post('/', (req, res) => {
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

// Schichtplan Stundentafel
router.post('/:employeeId/hours', (req, res) => {
    console.log(req.body)
    const { startTime, workDate, stopTime, totalHours } = req.body;

    const employee_id = req.path.employeeId;

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

router.post('/:employeeId/shift_schedule', (req, res) => {
    console.log(req.body)
    const { shift_type, start_date, start_time, end_date, end_time } = req.body;

    const employee_id = req.path.employeeId;

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

module.exports = router