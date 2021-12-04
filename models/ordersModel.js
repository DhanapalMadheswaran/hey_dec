const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  vendorID: {
    type: mongoose.ObjectId,

    required: true,
  },
  booking_date: {
    type: String,
  },
  event_date: {
    type: String,
    required: true,
  },
  total_amount: {
    type: String,
  },
  amount_received: {
    type: String,
  },
  status: {
    type: String,
  },
  payment_status: {
    type: String,
  },
  customer_id: {
    type: String,
  },
  session: {
    type: String,
  },
  seating: {
    type: String,
  },
});

module.exports = mongoose.model("orders", OrderSchema);
