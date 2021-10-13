const router = require("express").Router();
const { Videogames  } = require("../models");

router.get("/", function (req, res) {
    Videogames.find({}, function (error, foundVideogame) {
      if (error) {
        console.log(error);
      }
      return res.send({
        message: "Index Videogames",
        data: foundVideogame,
      });
    });
  });
  
  module.exports = router;
  
