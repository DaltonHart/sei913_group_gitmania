const mongoose = require("mongoose");

module.exports = mongoose.model(
    "Plants", new mongoose.Schema(
    {
        name: {
            type: String,
            variety: String,
        },
        indoor: Boolean,
    },
{ timestamps: true })
);