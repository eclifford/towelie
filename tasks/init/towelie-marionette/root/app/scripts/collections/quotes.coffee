define [
  "backbone"
], (Backbone) ->
  "use strict"
  class Quotes extends Backbone.Collection 
    url: 'data/quotes.json'
