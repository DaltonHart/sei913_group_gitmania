const mongoose = require("mongoose");

module.exports = mongoose.model(
    "Videogames",
    new mongoose.Schema (
        {
            name: {
                type: String,
                required: true,
            },
            year: {
                type: Number,
                require: true,
            },
            studio: {
                type: String,
                required: true,
            },
            

        },
        
        {timestamp: true},
    )
);

