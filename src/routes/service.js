const express = require("express");
const serviceController = require("../controllers/serviceController");

const router = express.Router();

//Create User
// router.post("/services", serviceController.createUser);
router.post("/services", serviceController.createService);

//Get All services
router.get("/services", serviceController.findAll);

//Get an user
router.get("/services/:id", serviceController.findOne);

//Update an user
router.put("/services/:id", serviceController.update);

//Delete  an user
router.delete("/services/:id", serviceController.delete);

module.exports = router;
