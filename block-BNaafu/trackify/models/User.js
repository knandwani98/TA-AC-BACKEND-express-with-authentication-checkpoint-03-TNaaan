var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  phone: {
    type: Number,
  },
  country: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
