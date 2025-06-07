const sql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config({path:'src/.env'});

const db = sql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

console.log('Database configuration loaded from .env file');

db.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database as id', connection.threadId);
    connection.release();
});
module.exports = db;