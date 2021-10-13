const mongoose = require("mongoose");

module.exports = mongoose.model(
    "Guitar",
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
      pickups: {
        type: String,
        required: true,
      
      },
      color: {
        type: String,
        require: true,
      },
    },
      { timestamps: true }
    )

);

