// **************************************************************

   // listening to the document 
        $(document).ready(function () {
            console.log("app.js connected");

// ******************************************************************************
    
    // on click CALLBACKS button
    $("#callback").on("click", function () {
        event.preventDefault();
        // empty textbox on click
        $("#textBox").empty();
        // display some text describing what's going on
        $("#what").text("This callback demonstrates the saySomething function"); 
        // display image of code that's doing the stuff
        $("#code").attr("src", "../images/callback.png");
        // ************************ here's the callback
        // here is where the function is stated
            // it takes in the anything param and callback is passed
        function saySomething(anything, callback) {
            // the textbox is appended with what will be said
            $("#textBox").append("I'm going to say " + anything + "! ");
            // the callback is... called
            callback();
          }
        // the callback function is defined here in the second argument
        saySomething('poop', function() {
            // I set a timeout for 500ms to visibly show when it happened
            setTimeout(function(){
            $("#textBox").append("There, I said it.");
            }, 500);
          });
    });

// ******************************************************************************
    
    // on click PROMISES button
    $("#promise").on("click", function () {
        event.preventDefault();
        // empty textbox on click
        $("#textBox").empty();
        // display some text describing what's going on
        $("#what").text("promises");
        // display image of code that's doing the stuff
        $("#code").attr("src", "../images/promise.png");
        // here's the promise, don't break it plz
    });

// **************************************************************
    
    // on click ASYNC/AWAIT button
    $("#asyncAwait").on("click", function () {
        event.preventDefault();
        // empty textbox on click
        $("#textBox").empty();
        // display some text describing what's going on
        $("#what").text("async / await");
        // display image of code that's doing the stuff
        $("#code").attr("src", "../images/asyncAwait.png");
        // here's the async/await
    });

// **************************************************************
    
    // on click GENERATORS button
    $("#generator").on("click", function () {
        event.preventDefault();
        // empty textbox on click
        $("#textBox").empty();
        // display some text describing what's going on
        $("#what").text("generator");
        // display image of code that's doing the stuff
        $("#code").attr("src", "../images/generator.png");
        // here's the generator
    });

// **************************************************************
});