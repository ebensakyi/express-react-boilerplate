var express = require("express");
var router = express.Router();


router.get("/", function (req, res, next) {
  const users = [
    { id: 1, name: "Bobby Firmino", age: 26 },
    { id: 2, name: "Mo Salah", age: 25 },
    { id: 3, name: "Sadio Mane", age: 27 },
    { id: 4, name: "Jordan Henderson", age: 28 },
  ];
  res.json(users);
});

module.exports = router;
