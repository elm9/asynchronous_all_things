// listening to the document 
$(document).ready(function () {
    console.log("app.js connected");
    // constant variables for the different jQuery button listeners
    const cb = $("#callback");
    const pr = $("#promise");
    const aa = $("#asyncAwait");
    const gn = $("#generator");
    const what = $("#what");

    // on click CALLBACKS button
    cb.on("click", function () {
        
        console.log("clicked CALLBACK");
        event.preventDefault();
        //display some text describing what's going on
        what.text("callbacks");

        // here's the callback
        //*************************************************** 
            //  getPhoto will find the image and then run the callback 
            getPhoto("../")
    });

    // on click PROMISES button
    pr.on("click", function () {
        console.log("clicked PROMISES");
        event.preventDefault();
        //display some text describing what's going on
        what.text("promises");
    });

    // on click ASYNC/AWAIT button
    aa.on("click", function () {
        console.log("clicked ASYNC/AWAIT");
        event.preventDefault();
        //display some text describing what's going on
        what.text("async / await");
    });
    
    // on click GENERATORS button
    gn.on("click", function () {
        console.log("clicked GENERATOR");
        event.preventDefault();
        //display some text describing what's going on
        what.text("generator");
    });
});