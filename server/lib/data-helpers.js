"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      db.collection("tweets").insertOne(newTweet, (err, result) => {
        if(err) {
            return callback(err);
          }
          callback(null, true);
      })
    },

    // likeTweets: function(tweetId, callback) {
    //   db.collection("tweets").update()
    // }

    // Get all tweets in `db' in an array
    getTweets: function(callback) {
      db.collection("tweets").find().toArray((err, tweetsArr) => {
        if(err) {
          return callback(err);
        }
        callback(null, tweetsArr);
      });
    }
  };
}

