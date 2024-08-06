const express = require("express");
const UserController = require("../controller/user");
const UserRouter = express.Router();

UserRouter.post("/registerUser",UserController.createUser);



module.exports = UserRouter;