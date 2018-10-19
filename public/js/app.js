// **************************************************************
   
   // listening to the document 
        $(document).ready(function () {
            console.log("app.js connected");

// **************************************************************
    
    // on click CALLBACKS button
    $("#callback").on("click", function () {
        event.preventDefault();
        //display some text describing what's going on
        $("#what").text("This is a callback demonstrating "); 
    // here's the callback
        // the callback code image is the second image in the html 
        console.log(document.code);
        let image = document.image[0];
        // let downloadImage programatically create a new image
        let downloadImage = new Image();
        // set the handler for the onload event
        // once the new image is loaded it will trigger a function
        downloadImage.onload = function(){
            // here the image source destination is named as this
            image.src = this.src;   
        };
        // this is where the new image source is actually named
        downloadImage.src = "https://media.giphy.com/media/l0HlOhvOqvyhudoWY/giphy.gif";

    });

// **************************************************************
    
    // on click PROMISES button
    $("#promise").on("click", function () {
        event.preventDefault();
        //display some text describing what's going on
        $("#what").text("promises");
    });

// **************************************************************
    
    // on click ASYNC/AWAIT button
    $("#asyncAwait").on("click", function () {
        event.preventDefault();
        //display some text describing what's going on
        $("#what").text("async / await");
    });

// **************************************************************
    
    // on click GENERATORS button
    $("#generator").on("click", function () {
        event.preventDefault();
        //display some text describing what's going on
        $("#what").text("generator");
    });

// **************************************************************
});