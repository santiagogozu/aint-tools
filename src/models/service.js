const mongoose = require("mongoose");

const serviceSchema = mongoose.Schema({
  id: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  modification_date: {
    type: Date,
    require: true,
  },
  modification_user: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("Service", serviceSchema);
