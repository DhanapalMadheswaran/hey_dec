const mongoose = require("mongoose");

const BannerSchema = mongoose.Schema({
  image: {
    type: Object,
    required: true,
  },

  redirectUrl: {
    type: String,
  },
  bannerText: {
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

module.exports = mongoose.model("banners", BannerSchema);
