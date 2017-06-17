$(document).ready(function(){
    //set var to be a boolean true before click
    let visible = true;
    $("#compose-btn").on("click", function(event ) {
        if (visible) {
         $("#compose-tweet").slideUp('slow',function(){
          });
        } else {
          $("#compose-tweet").slideDown('slow',function(){
            //auto focus on input area
            $("#tweet-input").focus();
          });
        }
        //change the to opposite value after click
        visible = !visible;
  });
});