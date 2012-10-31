define [
  "backbone"
], (Backbone) ->
  "use strict"
  class Tweets extends Backbone.Collection 
    url: 'http://search.twitter.com/search.json?q=towelie&rpp=5&include_entities=true&result_type=mixed&callback=?'

    parse: (response) ->
      return response.results
