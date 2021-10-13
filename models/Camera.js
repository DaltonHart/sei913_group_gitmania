const mongoose = require("mongoose");

const CameraSchema = new mongoose.Schema(
    {
        brand: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
    },
    {
        timestamps: true,
    }
);

const Camera = mongoose.model("Camera", CameraSchema);

module.exports = Camera;