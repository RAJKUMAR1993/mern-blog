const mongoose = require("mongoose");

const planSchema = new mongoose.Schema(
  {
    planeName: { type: String, required: true },
    features: [String],
    limitations: [String],
    price: { type: Number, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Plan", planSchema);
