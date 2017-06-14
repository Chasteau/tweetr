// changes css styles to display incons on hover
$(document).ready( function(){
  $("article.flex-container")
    .on("mouseover", (() => {
       $("article.flex-container")
       .css({"border": "1px solid black", });
       $("header h2")
       .css({"color": "black"});
       $("header img")
       .css({"opacity": "1"});
       $("footer i")
       .css({"visibility": "visible", });
    }))// reset changes css styles to display off hover
   .on("mouseout", (() => {
     $("article.flex-container")
       .css({"border": "1px solid #ddd", });
       $("header h2")
       .css({"color": "gray"});
       $("header img")
       .css({"opacity": "0.5"});
       $("footer i")
       .css({"visibility": "hidden", });
   }))
});
