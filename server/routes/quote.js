var express = require('express');
var router = express.Router();
var quotes_data = require('../modules/quotes-data');

router.get('/random', function(req, res){
    var randomIndex = Math.floor(Math.random()*quotes_data.length);
    console.log(randomIndex);
    res.send(quotes_data[randomIndex]);
    // res.sendStatus(500);
});

router.get('/first', function(req, res){
    res.send(quotes_data[0]);
});

router.get('/', function(req, res){
    res.send("you can find quotes on /quote/random or /quote/first");
});

router.get('/all', function(req, res){
    res.send(quotes_data);
});

router.post('/new', function(req, res){
    console.log("we hit the post");
    console.log('req.body in new quote post', req.body);
    quotes_data.push({quoteText: req.body.quote_to_add})
    console.log(quotes_data);
    res.sendStatus(200);
});

module.exports = router;