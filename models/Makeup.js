const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Makeup",
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        min: 0,
        required: true,
      },
    },
    { timestamps: true }
  )
);
