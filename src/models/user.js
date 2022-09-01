const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: Number,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("User", userSchema);
