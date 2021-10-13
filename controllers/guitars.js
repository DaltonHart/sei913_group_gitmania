// const express = require 
// const router  express.Router()
// shorthand 

const router = require("express").Router();
const { guitars } = require(".");
const {Guitars} = require("../models");

//base url === guitars
//index db

router.get("/.", function (req, res){
   Guitars.find({}, function(error, foundGuitar ){})
});