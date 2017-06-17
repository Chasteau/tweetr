
// Client-side JS logic
$(document).ready(function(){

  function createTweetElement(tweet) {
    let $tweet = $(
      `<article class="flex-container">
        <header class ="header-flex">
          <img src=${tweet.user.avatars.small}></i>
          <h2>${tweet.user.name}</h2>
          <h3>${tweet.user.handle}</h3>
          <span id="hidden-id" hidden="hidden">${tweet._id}</span>
        </header>
        <div class ="tweet-body"><p>${tweet.content.text}</p></div>
        <footer class="footer-flex" >
          <span class="date">${new Date(tweet.created_at)}</span>
          <i id="like-counter" aria-hidden="true">${tweet.like}</i>
          <i id="heart" class="fa fa-heart" aria-hidden="true"></i>
          <i class="fa fa-retweet" aria-hidden="true"></i>
          <i class="fa fa-flag" aria-hidden="true"></i>
        </footer>
      </article> `
    );
    return $tweet;
  }

  function renderTweets(tweetsArr){
     // loops through tweets in reverse
     let tweets = tweetsArr.reverse();
     for (var i = tweets.length -1; i >= 0; i--) {
      let currTweet = tweets[i];
      // calls createTweetElement for each tweet and prependTo to tweets container
      $(createTweetElement(currTweet)).prependTo("#tweets-container");
     }
  }

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
      $("#error-message").css({"visibility": "hidden"});
      $.ajax({
        data: form.serialize(),
        url: form.attr('action'),
        type: form.attr('method'),
        })
        .done((data) => {
          renderTweets(data);
        })
        .fail(console.error);
      // check if the length of the input is greater than max char counter
      // then render an error message by creating the html string
      } else if($("#tweet-input").val().length >= 140) {
          $("#error-message").css({"visibility": "visible"});
          $("#error-message").html("To many words in this tweet!");
      } else {
          $("#error-message").css({"visibility": "visible"});
          $("#error-message").html("Add some words to this tweet!");
      }
  }));
}

// call the functions to run
loadTweets(renderTweets);
submitTweet();

});

