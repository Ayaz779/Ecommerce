const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    address: { type: String, required: true},
    contact: { type: Number, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", PaymentSchema);