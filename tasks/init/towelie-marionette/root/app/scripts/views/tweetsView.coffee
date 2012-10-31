define [
  "marionette",
  "scripts/views/tweetView"
], (Marionette, TweetView) ->
  "use strict"
  class TweetsView extends Marionette.CollectionView
    # @property [Object] The ItemView to render inside the collection
    itemView: TweetView
