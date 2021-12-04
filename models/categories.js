const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: Object,
    required: true,
  },

  status: {
    type: String,
    enum: ["Active", "Inactive"],

    default: "Active",
  },
  createdTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("categories", CategorySchema);
