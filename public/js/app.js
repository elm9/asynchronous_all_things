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

// ***********************************************************************************
    
    // on click PROMISES button
    $("#promise").on("click", function () {
        event.preventDefault();
        // empty textbox on click
        $("#textBox").empty();
        // display some text describing what's going on
        $("#what").text("The promise function calls the first value, then returns the second value");
        // display image of code that's doing the stuff
        $("#code").attr("src", "../images/promise.png");
        // here's the promise, don't break it plz
        // let's promise to practice simple math
        let promise = new Promise(function(resolve, reject) {
            // here this states the first value as 1
            resolve(1);
          });
        // the new promise function is called
                // then a function with the value 1 is called
        promise.then(function(val) {
            // the first value is sent to the text box
            $("#textBox").text("first number: " + val);
            // the value is to be returned and added 2 
            return val + 2;
        // then the function with the new value is called
        }).then(function(val) {
            // the new value is sent to the text box
            $("#textBox").append(" <br> second number: " + val);
        })
            
    });

// **********************************************************************************
    
    // on click ASYNC/AWAIT button
    $("#asyncAwait").on("click", function () {
        event.preventDefault();
        // empty textbox on click
        $("#textBox").empty();
        // display some text describing what's going on
        $("#what").text("The waitForIt function shows how an async function uses await.");
        // display image of code that's doing the stuff
        $("#code").attr("src", "../images/asyncAwait.png");
        // here's the async/await
        // async function waitForIt is called
        async function waitForIt() {
            // text box is appended to show the function has started
            $("#textBox").append("Wait for it... <br>");
            // let the new promise function begin
            let promise = new Promise(function(resolve, reject) {
              // set a timeout to give it a second to complete 
                setTimeout(function(){
                resolve("done!")}, 1000)
            });
            // let the result wait for the promise before it is posted
            let result = await promise;
            $("#textBox").append(result);
          }
          waitForIt();
    });

// *******************************************************************************
    
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