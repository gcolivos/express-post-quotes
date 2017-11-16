var express = require('express');
var bodyParser = require('body-parser');
var reallyGreat = require('./routes/reallyGreat');
var quote = require('./routes/quote');
var app = express();
var port = 5000;

console.log("Starting up the server");

app.use(express.static('server/public')); 
app.use(bodyParser.urlencoded({extended: true}));

app.get('/reallyGreat', reallyGreat);

//want /quote/random will res.send a random quote
//want /quote/first will res.send the first quote
//want /quote will res.send "you can find quotes on /quote/random or /quote/first"

app.use('/quote', quote);

app.use('/dinosaur', function(req, res){
    res.send ("Roar");
})

// // use will do get post put delete no matter what it is 
// When would you use .get over .use? maybe specifically in a module if you are posting and getting quotes
// for example, just get/quotes will just return array of quotes, but post/quotes will add to the array...
// so in a specific module, you might use get and post but on the server you'll probably just get use

app.listen(port, function(){
    console.log('listening on port', port)
});