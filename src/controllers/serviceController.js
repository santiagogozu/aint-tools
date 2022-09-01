const e = require("express");
const bcrypt = require("bcryptjs");
// const Usuario = require("../helpers/Usuario");
const serviceSchema = require("../models/service");

const serviceController = {
  createService: (req, res) => {
    const service = serviceSchema(req.body);
    service
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  },
  findAll: (req, res) => {
    serviceSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  },
  findOne: (req, res) => {
    const { id } = req.params;
    serviceSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  },
  update: (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body;
    serviceSchema
      .updateOne({ _id: id }, { $set: { name, age, email } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  },
  delete: (req, res) => {
    const { id } = req.params;
    serviceSchema
      .remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  },
};

module.exports = serviceController;
