'user strict';

// const {MongoClient} = require("mongodb");
const MongoClient= require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if(err) {
    console.err('Failed to connect: ${MONGODB_URI}');
    throw err;
  }

  // ==> We have a connection to the "test-tweets" db
  // starting here.
  console.log('Conenected to mongodb: &{MongoClient}');


  //
  function getTweets(callback) {
    // db.collection("tweets").find().toArray(callback);
    db.collection("tweets").find().toArray((err, tweets) => {
      if(err) {
        return callback(err);
      }
      callback(null, tweets);
    })
  }


  getTweets((err, tweets) => {
    if(err) throw err;

    console.log("looging each tweet:");
    for(let tweet of tweets) {
      console.log(tweet.content.text);
    }

    db.close();

  });
});
