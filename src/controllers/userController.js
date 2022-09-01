const e = require("express");
const bcrypt = require("bcryptjs");
// const Usuario = require("../helpers/Usuario");
const userSchema = require("../models/user");

const userController = {
  createUser: (req, res) => {
    const user = userSchema(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  },
  findAll: (req, res) => {
    userSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  },
  findOne: (req, res) => {
    const { id } = req.params;
    userSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  },
  update: (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body;
    userSchema
      .updateOne({ _id: id }, { $set: { name, age, email } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  },
  delete: (req, res) => {
    const { id } = req.params;
    userSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  },
};

module.exports = userController;
