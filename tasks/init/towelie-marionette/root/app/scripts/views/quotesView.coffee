define [
  "marionette",
  "scripts/views/quoteView"
], (Marionette, QuoteView) ->
  "use strict"
  class QuotesView extends Marionette.CollectionView
    # @property [Object] The ItemView to render inside the collection
    itemView: QuoteView


  