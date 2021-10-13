const express = require("express");

const router = express.Router();

const { Coin } = require("../models");

// base url === /coin

// index

router.get("/", function(req, res){
  Coin.find({}, function (error, foundCoin){
    if (error) {
      console.log(error);
    }
    return res.send({
      message: "Index Coin",
      data: foundCoin,
    });
  });
});

module.exports = router;