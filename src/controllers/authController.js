const e = require("express");
const bcrypt = require("bcryptjs");
// const Usuario = require("../helpers/Usuario");

const authController = {
  renderLogin: function (req, res) {
    return res.render("login");
  },
  renderHome: function (req, res) {
    return res.render("home");
  },
  renderSearch: function (req, res) {
    return res.render("search");
  },
  renderQuote: function (req, res) {
    return res.render("quote");
  },
  renderRecord: function (req, res) {
    return res.render("record");
  },
};

module.exports = authController;
