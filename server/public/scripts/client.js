console.log("client.js has been loaded!");
var clickCounter=-1;
$(document).ready(function () {
    console.log("jQuery has been loaded!");
    $.ajax({
        method: 'GET',
        url: '/quote/all',
        success: function (response) {
            console.log('random quote response', response);
            $('p').append(response.quoteText);
        },
        error: function (error) {
            console.log('There was an error getting a random quote!!!', error);
        }
        // success is a 'callback' function. As soon as we run line of code
        // 
    })

    $.ajax({
        method: 'GET',
        url: '/quote/first',
        success: function (response) {
            console.log('first quote response', response);
            $('p').append(response.quoteText);
        }
    })



    $('#newQuoteButton').on('click', function () {
        console.log("Log something");
        $.ajax({
            method: 'POST',
            url: '/quote/new',
            data: { quote_to_add: $("#newQuote").val() }, //data should always be an object
            success: function (response) {
                console.log('new quote post response:', response);
                clickCounter++;
                getAllQuotes();
            }
        })
    })

    function getAllQuotes() {
        $.ajax({
            method: 'GET',
            url: 'quote/all',
            success: function (response) {
                console.log('all quotes array', response);
                if (clickCounter == 0){
                    for (i=0; i<response.length; i++) {
                        $('ul').append('<li>'+response[i].quoteText+'</li>');
                    }
                }
                else{
                    $('ul').append('<li>'+response[response.length-1].quoteText+response.length+'</li>');
                }
                
            }
        });
        // response parameter is whatever we res.send back 

        // single page application, gmail is a good example
        // small request to server, server sends back array of emails,
        // not reloading entire page

    }
});
// AJAX is being able to make these requests once we are already on the site
