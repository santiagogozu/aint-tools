const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

//Create User
// router.post("/users", userController.createUser);
router.post("/users", userController.createUser);

//Get All Users
router.get("/users", userController.findAll);

//Get an user
router.get("/users/:id", userController.findOne);

//Update an user
router.put("/users/:id", userController.update);

//Delete  an user
router.delete("/users/:id", userController.delete);

module.exports = router;
