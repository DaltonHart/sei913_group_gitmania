/* === External Modules === */
const express = require('express');

/* === Internal Modules === */

/* === System Variables === */
const router = express.Router();
const Pet = require('../models/Pet.js');

/* === Routes === */

// LEARN: IT ALREADY ASSUMES PETS

// INDEX for Pets
router.get("/", (req, res) => {
    // res.send({message: "You're seeing pets!"})
    Pet.find({}, (err, petsFound) => {
        if (err) console.log(err);
        return res.send({
            message: "PETssss",
            data: petsFound,
        });
    });
});

// SHOW for Pets
router.get("/:id", (req, res) => {

    data = req.params.id

    res.send({ 
        message: "You're seeing a pet!", 
        id: data 
    })
})


/* === Exports === */
module.exports = router;