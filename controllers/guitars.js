// const express = require("express");
// const router = express.Router();


const router = require("express").Router();
const {Guitars} = require("../models");

//base url === guitars


//index 

router.get("/", function (req, res){
   Guitars.find({}, function(error, foundGuitar){
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

