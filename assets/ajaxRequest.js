/*
3) Create a node.js module that will respond to a browser request with 
“hello world” in a json response.
The raw json response must be viewable by the browser. 
Also respond with a json formatted error if the url contains an invalid path. 
Use any available npm libraries and provide a list of npm install commands if needed 
to allow the module to run. 
Set up the server to respond to localhost:3009.
Extra credit - Create a browser ajax function that performs the above node.js request 
and decodes/displays the response. Serve the browser code or any other content from node.js.
*/

// An AJAX request in 2 ways:
// With and Without jQuery.

// Wait for DOM to load before running script.
window.onload = function() {
    // 1. Without jQuery
    // Grab the content div (where the AJAX response will be displayed) and set equal to a variable.
    const content = document.getElementById("content")
    // Listen for click on getJSON button
    const getJSON = this.document.getElementById("getJSON");
    // const new AJAX request object
    const xhr = new XMLHttpRequest();
    // add lstener for click on getJSON button, on click, run the function
    getJSON.addEventListener("click", function() {
        // if readyState makes a successful request...
        xhr.addEventListener('readystatechange', function(){
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                // ...display response in content div.
                content.innerHTML = xhr.responseText;    
            }
        });
        // Initialize request...
        xhr.open("GET", "assets/info.json", true);
        // and send it off.
        xhr.send();
    });

    // 2. With jQuery:
    $(document).on("click", "#getError", function (e) {
        // Make sure the page doesn't reload, losing the response.
        e.preventDefault();
        // Standard jQuery/AJAX declaration:
        $.ajax({
          method: "GET",
          // The path /home/ does not exist
          url: "/home/"
        }).then(function(res) {
            content.innerHTML = res;
        }).catch((err) => content.innerHTML = `Error: ${err.status}, ${err.statusText}`);
      });  
}