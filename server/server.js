const express = require('express');
const app = express();
const port = 1001;
const database = require("./src/connection");
const cors = require("cors")

const corsOptions = {
    origin: 'http://localhost:1001',
    optionsSuccessStatus: 200,
  };
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended : true}));

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

const UserRouter = require("./src/routes/user");
app.use("/api", UserRouter);