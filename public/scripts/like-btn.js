$(document).ready(function(){

  // set clicked parameter to be false
  let clicked = false;
    // add event handler to heart button
  $("#tweets-container").on("click", "#heart", function( event ) {
    if(!clicked) {
      $("#heart").css("color", "red");
      $("#like-counter").css("visibility", "visible");

    // find hidden userID field and use it as data in post request
    // let userID = $(this).parent().parent().find("#hidden-id").text();
    // //send a post request to /like route
    // $.ajax({
    //   url: "/tweets/like",
    //   method: 'POST',
    //   data: userID,
    //   //what to do when a
    // }).done(console.log(data))
    // .fail(console.error);
    // // do we want to send an ajax call in the else request or just send
    // one call to update the likes counter with jquery
    // } else {
    //   $("#heart").css("color", "green");
    //   $("#like-counter").css("visibility", "visible");
    // }
      clicked = !clicked;
   });
});