// === External Modules === //
const mongoose = require('mongoose');

// === Internal Modules === //

// === Schema === //
const PetSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        }, 
        species: {
            type: String,
            required: true,
        }
    },
    {
        timestamp: true
    },
)

// === Model === //
const Pets = mongoose.model('Pets', PetSchema);

// === Exports === //
module.exports = Pets