var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("Welcome to the CarliDroid Web Service");
});

module.exports = router;