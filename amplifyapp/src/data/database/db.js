const mysql = require('mysql2');

if (!process.env.DB_URL || !process.env.DB_USERNAME || !process.env.DB_PASSWORD || !process.env.DB_DATABASE) {
    console.log("Create .env file: with DB_URL=..., DB_USERNAME=..., DB_PASSWORD=..., DB_DATABASE=...")
    process.exit(1)
}

const connection = mysql.createConnection({
    host: process.env.URL,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect((error) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Connected to MySQL database!');
    }
});

module.exports = connection;