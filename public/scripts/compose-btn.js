$(document).ready(function(){

    let visible = true;
    // attach an event handler
    $("#compose-btn").on("click", function(event ) {
        if ( visible ) {
         $("#compose-tweet").slideUp('slow',function(){
          });
        } else {
          $("#compose-tweet").slideDown('slow',function(){
            $("#tweet-input").focus();
          });
        }
        visible = ! visible;
  });
});