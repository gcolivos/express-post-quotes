var express = require('express');

var router = express.Router();

router.get('/reallyGreat', function(req, res){
    res.send("this is a great string");
});

module.exports = router;