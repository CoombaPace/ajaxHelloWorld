
window.onload = function() {
    
    $(document).on("click", "#getJSON", function (e) {
        e.preventDefault();
        // Make sure the page doesn't reload, losing the response.
        ajaxCall();
        });  

    $(document).on("click", "#getError", function (e) {
        e.preventDefault();
        // Make sure the page doesn't reload, losing the response.
        errorCall();
        });  
}