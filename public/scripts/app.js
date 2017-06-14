/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary).
// Eventually will get this from the server.
const tweetData = {
  "user": {
  "name": "Newton",
  "avatars": {
  "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
  "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
  "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
  },
    "handle": "@SirIsaac"
  },
    "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
    "created_at": 1461116232227
  }
// <article class = "flex-container">
//           <header class = "header-flex">
//             <i class="fa fa-user-circle-o fa-3x" aria-hidden="true"></i>
//             <h2>Super David</h2>
//             <h3> @SprDavid</h3>
//           </header>
//           <div class ="tweet-body"><p>This is a tweet</p></div>
//           <footer class="footer-flex" >
//             <span class="date">10 days ago</span>
//             <i class="fa fa-flag" aria-hidden="true"></i>
//             <i class="fa fa-retweet" aria-hidden="true"></i>
//             <i class="fa fa-heart" aria-hidden="true"></i>
//           </footer>
//         </article>

$(document).ready(function(){
  // console.log("I am working");
  function createTweetElement(tweet) {
    let $tweet = $(
      `<article class="flex-container">
        <header class ="header-flex">
          <img src=${tweet.user.avatars.small}></i>
          <h2>${tweet.user.name}</h2>
          <h3>${tweet.user.handle}</h3>
        </header>
        <div class ="tweet-body"><p>${tweet.content.text}</p></div>
        <footer class="footer-flex" >
          <span class="date">${tweet.created_at}</span>
          <i class="fa fa-flag" aria-hidden="true"></i>
          <i class="fa fa-retweet" aria-hidden="true"></i>
          <i class="fa fa-heart" aria-hidden="true"></i>
        </footer>
      </article> `
    );
  // .appendTo("section#all-tweets");
    return $tweet;
  }


// Test / driver code (temporary)
let $tweet = createTweetElement(tweetData);
console.log($tweet); // to see what it looks like
$('#all-tweets').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.


});

