// const express = require("express");
// const router = express.Router();

const router = require("express").Router();
const { Makeup } = require("../models");

// base url === /makeup

// index
router.get("/", function (req, res) {
  Makeup.find({}, function (error, foundMakeup) {
    if (error) {
      console.log(error);
    }
    return res.send({
      message: "Index Guitars",
      data: foundGuitars,
    });
  });
});

module.exports = router;
