const express = require("express");
const router = express.Router();
const { Makeup } = require("../models");

// base url === /camera

// index
router.get("/", function (req, res) {
    Camera.find({}, function (error, foundCameras) {
        if (error) {
            console.log(error);
        }
        return res.send({
            message: "Index Cameras",
            data: foundCameras,
        });
    });
});

module.exports = router;