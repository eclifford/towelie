define [
  "marionette",
  "text!templates/tweetTemplate.tmpl"
], (Marionette, TweetTemplate) ->
  "use strict"
  class TweetView extends Marionette.ItemView
    # @property [Object] The template to render for this view
    template: TweetTemplate

    # @property [String] $el container for this view
    tagName: 'li'

    className: 'media'
