//const express = require("express");
//const router = express.Router();

const router = require("express").Router();
const { Plants } = require("../models");

// base url === /plants

// index
router.get("/", function (req, res){
    Plants.find({}, function (error, foundPlants) {
        if (error) {
            console.log(error);
        }
        return res.send({
            message: "Index Plants",
            data:[]
        })
    })
})

module.exports = router;