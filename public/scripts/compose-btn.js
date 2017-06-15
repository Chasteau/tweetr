$(document).ready(function(){

    let visible = true;
    // attach an event handler
    $("#compose-btn").on("click", function(event ) {
        if ( visible ) {
         $("#compose-tweet").slideUp('slow',function(){
            $("#compose-tweet").addClass('hide')
          });
        } else {
          $("#compose-tweet").slideUp(0,function(){
            $("#compose-tweet").removeClass('hide')
                 .slideDown('fast');
          });
        }
        visible = ! visible;
  });
});