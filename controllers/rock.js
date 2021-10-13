const router = require("express").Router();
const { Makeup } = require("../models");

router.get("/", function (req, res) {
  Rock.find({}, function (error, foundRocks) {
    if (error) {
      console.log(error);
    }
    return res.send({
      message: "Index Rock",
      data: foundRocks,
    });
  });
});

module.exports = router;
