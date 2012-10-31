(function() {

  define(['scripts/views/tweetView'], function(TweetView) {
    return describe("TweetView", function() {
      return before(function() {
        return this.view = new TweetView();
      });
    });
  });

}).call(this);
