const mongoose = require("mongoose");

module.exports = mongoose.model(
    "Rock",
    new mongoose.Schema (
        {
            color: {
                type: String,
                default: "brown",
            },
            size: {
                type: String,
                required: true,
            },
        },
        { timestamps: true }
    )
);