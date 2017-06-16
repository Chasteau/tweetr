$(document).ready(function(){
    // add event handler to heart button
  $("#tweets-container").on("click", "#heart", function( event ) {
    $("#heart").css("color", "yellow");
    $("#like-counter").css("visibility", "visible");

    // find hidden userID field and use it as data in post request
    let userID = $(this).parent().parent().find("#hidden-id").text();
    //send a post request to /like route
    $.ajax({
      url: "/tweets/like",
      method: 'POST',
      data: userID,
    })

   });
});