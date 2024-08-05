import mysql2 from "mysql2"

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'tasks_db'
})

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id ' + connection.threadId);
});