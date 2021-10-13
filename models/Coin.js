const mongoose = require("mongoose");

module.exports = mongoose.model ("Coin", new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    year: {
      type: Date,
      required: true,
    },
    design: {
      type: String,
      required: true,
    },
  },
 { timestamps: true },
  )
);