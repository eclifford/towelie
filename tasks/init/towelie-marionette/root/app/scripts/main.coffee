define [
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'scripts/views/quotesView',
  'scripts/views/tweetsView',
  'scripts/collections/quotes',
  'scripts/collections/tweets'
], ($, _, Backbone, Marionette, QuotesView, TweetsView, Quotes, Tweets) ->

  @app = new Marionette.Application()

  @app.addInitializer (options) ->

    quotes = new Quotes()
    tweets = new Tweets()
    view = new QuotesView
      el: '#quotes .media-list'
      collection: quotes

    view = new TweetsView
      el: '#tweets .media-list'
      collection: tweets

    quotes.fetch()
    tweets.fetch()

    view.render()

  @app.start()

