const mongoose = require("mongoose");

const SliderSchema = mongoose.Schema({
  image: {
    type: Object,
    required: true,
  },

  redirectUrl: {
    type: String,
  },
  sliderText: {
    type: String,
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

module.exports = mongoose.model("sliders", SliderSchema);
