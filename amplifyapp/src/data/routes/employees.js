const express = require('express');
const router = express.Router()
const connection = require('../database/db')
const multer = require('multer');
const nodemailer = require('nodemailer');
const mysql = require('mysql2/promise');
const app = express();
const bcrypt = require('bcrypt');



router.get('/', (req, res) => {
    connection.query('SELECT * FROM employees', function (error, results) {
        if (error) {
            res.sendStatus(500);
        } else {
            res.json(results);
        }
    });
})

router.get('/:employee_id', (req, res) => {
    connection.query('SELECT * FROM employees where id = ?', [req.params.employee_id], function (error, results) {
        if (error) {
            res.sendStatus(500);
        } else {
            if (results.length > 0) {
                res.json(results[0]);
            } else {
                res.sendStatus(404);
            }
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
            console.log(req.body)
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
router.post('/:employeeId/employee_hours', (req, res) => {
    const employeeId = req.params.employeeId;
    const { workDate, startTime, stopTime, totalHours } = req.body;
    console.log(req.body)

    const query = `
      INSERT INTO employee_hours (employee_id, work_date, start_time, stop_time, total_hours)
      VALUES (?, ?, ?, ?, ?)
    `;

    connection.query(query, [employeeId, workDate, startTime, stopTime, totalHours], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error saving data to database');
        } else {
            res.status(201).send('Shift added successfully');
        }
    });
});

router.get('/:employeeId/shift_schedule', (req, res) => {
    const employee_id = req.params.employeeId;

    const query = `
      SELECT * FROM shift_schedule WHERE employee_id = ?
    `;

    connection.query(query, [employee_id], function (error, results) {
        if (error) {
            res.status(500).send('Error saving data to database');
            return;
        }
        res.json(results);
    });
});

router.post('/:employeeId/shift_schedule', (req, res) => {
    console.log(req.body)
    const { shift_type, start_date, start_time, end_date, end_time } = req.body;

    const employee_id = req.params.employeeId;

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