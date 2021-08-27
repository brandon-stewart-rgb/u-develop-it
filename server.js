const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to the db
const db = mysql.createConnection(
    {
        host: 'localhost',
        // username,
        user: 'root',
        password: '',
        database: 'election'
    },
    console.log('Connected to the election database.')
);


// select all from candidates
db.query(`SELECT* FROM candidates`, (err, rows) => {
    console.log(rows);
})


// get a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(row);
// });

// delete a candidate with a (?) that makes it a prepared statement.
// A prepared statement can execute the same SQL statements repeatedly using different values in place of the placeholder.
// db.query(`DELETED FROM candidates WHERE id = ?`, 1, (err, result) => {
//         if(err){
//             console.log(err);
//         }
//         console.log(result);
// });

// create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
//                 VALUES (?,?,?,?)`;
//                 // array must match placeholders
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params,(err, result) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(result);
// });

// default response for any other request (not found) make sure it's the last route
app.use((req, res)=>{
    res.status(404).end();
})

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});