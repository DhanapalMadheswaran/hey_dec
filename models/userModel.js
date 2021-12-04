const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  role: {
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
  phone: {
    type: String,
  },
});

module.exports = mongoose.model("users", UserSchema);
