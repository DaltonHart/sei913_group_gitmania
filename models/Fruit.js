const mongoose = require("mongoose");

module.exports = mongoose.model("Fruit",
new mongoose.Schema(
    {
        name: {
            type:String,
            Required: true,
        },
        color: {
            type: String,
        },
        juicy: {
            type: Boolean,
            required: true,
        },
    },
        { timestamps: true }
    )
);