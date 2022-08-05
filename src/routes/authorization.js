const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
// const multer = require("multer");
const path = require("path");

//LOGIN
router.get("/", authController.renderLogin);
router.get("/home", authController.renderHome);
router.get("/search", authController.renderSearch);
router.get("/quote", authController.renderQuote);
router.get("/record", authController.renderRecord);

// router.post("/login", autorizacionController.procesarLogin);

// //LOGOUT
// router.get("/logout", autorizacionController.cerrarSesion);

// router.get(
//   "/register",
//   proteccionRutasAutorizacionMiddleware,
//   autorizacionController.renderRegistro
// );

module.exports = router;
