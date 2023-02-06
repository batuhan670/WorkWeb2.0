import React, { useState, useEffect } from 'react';
import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'database_name'
});

const DatabaseComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const [rows] = await connection.query('SELECT * FROM table_name');
            setData(rows);
        };
        loadData();
    }, []);

    return (
        <ul>
            {data.map(item => (
                <li key={item.id}>{item.column_name}</li>
            ))}
        </ul>
    );
};

export default DatabaseComponent;
