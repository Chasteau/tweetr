/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // Import counter function from scripts
 // const counter = require(counter);


// Test / driver code (temporary).
// Eventually will get this from the server.
// const tweetData = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": {
//         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": {
//         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//       },
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   },
//   {
//     "user": {
//       "name": "Johann von Goethe",
//       "avatars": {
//         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//       },
//       "handle": "@johann49"
//     },
//     "content": {
//       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
//     },
//     "created_at": 1461113796368
//   }
// ];

$(document).ready(function(){

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
    return $tweet;
  }

  function renderTweets(tweets){
     // loops through tweets
     for (var i = tweets.length -1; i >= 0; i--) {
      let currTweet = tweets[i];
      // calls createTweetElement for each tweet
      // takes return value and appends it to the tweets container
      $(createTweetElement(currTweet)).prependTo("#tweets-container");
      // $("tweets-container").append(createTweetElement(tweet));
     }
  }

  // call render tweets function
 // renderTweets(tweetData);


// fetch tweets from db
 function loadTweets(cb){
    $.ajax({
      method: "GET",
      url: '/tweets/'
      })
      .done(cb)
      .fail(console.error);
    }

//
function submitTweet() {
  let form = $("#new-tweet-form");

  form.on("submit", ((event) => {
    event.preventDefault();
    if($("#tweet-input").val().length > 1
      && (!($("#tweet-input") == null))
      && $("#tweet-input").val().length < 140)  {
      $.ajax({
        data: form.serialize(),
        url: form.attr('action'),
        type: form.attr('method'),
        })
        .done((data) => {
          ;console.log("Sucess this ran");
          renderTweets(data);
        })
        .fail(console.error);
      // check if the length of the input is greater than max char counter
      // then render an error message by creating the html string
      } else if($("#tweet-input").val().length >= 140) {
          console.log("Greater than 140");
          $("#error-message").css({"visibility": "visible"});
        //else condition failed so show error message

        // #error-message {
    //   visibility: hidden;
    //   color:  red;
    //   font-weight: bold;
    //   float: left;
    //   margin-left: 60px;
    // }
      } else {
        console.log("Else");
        // $().appendTo();
      }
  }));
}

loadTweets(renderTweets);
submitTweet();

});

