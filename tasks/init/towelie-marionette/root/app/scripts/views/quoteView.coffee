define [
  "marionette",
  "text!templates/quoteTemplate.tmpl"
], (Marionette, QuoteTemplate) ->
  "use strict"
  class QuoteView extends Marionette.ItemView
    # @property [Object] The template to render for this view
    template: QuoteTemplate

    # @property [String] $el container for this view
    tagName: 'li'

    className: 'media'
