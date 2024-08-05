const express = require('express');
const app = express();
const port = 1001;
const database = require("./src/connection");

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})

app.get("/", (req, res) => {
    database.ping((err) => {
        if (err) {
            console.log("Server Down!");

            res.send("Server Down!");
        } else {
            console.log("Server is Online...");
            res.send("Server is Online...");
        }
    })
})