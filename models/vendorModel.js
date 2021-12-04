const mongoose = require("mongoose");

const VendorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
  },
  contact_person: {
    type: String,
  },
  email: {
    type: Object,
  },
  contact_number: {
    type: Object,
  },
  website: {
    type: String,
  },
  facebook: {
    type: String,
  },
  instagram: {
    type: String,
  },
  youtube: {
    type: String,
  },
  city: {
    type: String,
  },
  address: {
    type: String,
  },
  category: {
    type: String,
  },
  amenties: {
    type: String,
  },
  established_year: {
    type: String,
  },
  experience: { type: String },
  price: { type: Number },
  accomodation: { type: String },
  accessability: { type: String },
  cleaness: { type: String },
  food_served: { type: String },
  venu: {
    type: Array,
  },
  image: {
    type: Array,
  },
  dimension: { type: String },
  area: { type: String },
  height: { type: String },
  guest_entry_point: { type: String },
  hall_type: { type: String },
  about: {
    type: String,
  },
  createdTime: {
    type: Date,
    default: Date.now,
  },
  ratting: {
    type: Number,
  },
  total_amount: {
    type: Number,
  },
  advance: {
    type: Number,
  },
  profile_image: {
    type: String,
  },
  document_image: {
    type: String,
  },
  idproof_image: {
    type: String,
  },
  account_number: {
    type: Number,
  },
  ifsc_code: {
    type: String,
  },
  bank_name: {
    type: String,
  },
  pan_number: {
    type: String,
  },
  gst_number: {
    type: String,
  },

  businessproof_document_name: {
    type: String,
  },
});

module.exports = mongoose.model("Vendor", VendorSchema);
