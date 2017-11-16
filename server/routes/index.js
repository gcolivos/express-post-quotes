var express = require('express');
var siteVisits = 0;
var router = express.Router();

router.get('/', function(req, res){
    res.send("Welcome home!");
    // res.send("Bobby!");
    // Note: You can't do two res.send's, one request, one Response. You get this
    // error: Error: Can't set headers after they are sent.
    siteVisits += 1;
    console.log("There have been ", siteVisits, " so far.");
});

module.exports = router;