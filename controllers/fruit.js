const express = require("express");

const router = express.Router();

/* base url --> /fruits */

// index 
router.get("/", function(req, res){
    Fruit.find({}, function (error, foundFruit){
        if(error) {
            console.log(error);
        }
        return res.send({
            message: "fruits go here!",
            data: foundFruit,
        });
    });
});

module.exports = router;