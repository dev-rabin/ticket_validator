const mysql = require("mysql2");

const database = mysql.createConnection({
    user : "root",
    password : "Robin@123",
    database : "ticket_validator",
    host : "localhost"
});

database.connect((err)=>{
    if (err) {
        console.error("Disconnected from Database!");
        
    } else{
        console.log("Connected to Database!");
    }
})

module.exports = database;