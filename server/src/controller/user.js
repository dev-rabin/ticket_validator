const database = require("../connection");

const UserController = {
    createUser : (req, res)=>{
        const {name,email,password} = req.body;
        const query = "insert into user (name,email,password) values (?,?,?)";
        database.query(query,[name,email,password],(err,result)=>{
            if (err) {
                console.log("Error! user not created");
                res.json({success : false, message : "Error! while registering user"});
            } else {
                console.log("User created!");
                res.json({success : true, message : "User Created!", result : result.insertId})
            }
        })
    }
}

module.exports = UserController;