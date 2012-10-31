(function() {

  define(['jquery', 'underscore', 'backbone', 'marionette', 'scripts/views/quotesView', 'scripts/views/tweetsView', 'scripts/collections/quotes', 'scripts/collections/tweets'], function($, _, Backbone, Marionette, QuotesView, TweetsView, Quotes, Tweets) {
    this.app = new Marionette.Application();
    this.app.addInitializer(function(options) {
      var quotes, tweets, view;
      quotes = new Quotes();
      tweets = new Tweets();
      view = new QuotesView({
        el: '#quotes .media-list',
        collection: quotes
      });
      view = new TweetsView({
        el: '#tweets .media-list',
        collection: tweets
      });
      quotes.fetch();
      tweets.fetch();
      return view.render();
    });
    return this.app.start();
  });

}).call(this);
