const mongoose = require("mongoose");
const SlotsSchema = mongoose.Schema({
  vendorID: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  slots: {
    type: Array,
    required: true,
  },
});
module.exports = mongoose.model("slots", SlotsSchema);
