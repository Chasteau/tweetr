$(document).ready(function(){
  // console.log("I am working");
  $( ".new-tweet textarea" ).keyup(function(event ) {
    let textInput = this.value;
    let counter = 140;
      counter -= textInput.length;
       $(this).nextAll(".counter").text(`${counter}`);

       // if counter is less than 5 warn user with red css
       if(counter <= 3) {
        $(this).nextAll(".counter")
        .css("color", "red");
       } else {
        $(this).nextAll(".counter")
        .css("color", "black");
      }
  });
});