(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["backbone"], function(Backbone) {
    "use strict";

    var Tweets;
    return Tweets = (function(_super) {

      __extends(Tweets, _super);

      function Tweets() {
        return Tweets.__super__.constructor.apply(this, arguments);
      }

      Tweets.prototype.url = 'http://search.twitter.com/search.json?q=towelie&rpp=5&include_entities=true&result_type=mixed&callback=?';

      Tweets.prototype.parse = function(response) {
        return response.results;
      };

      return Tweets;

    })(Backbone.Collection);
  });

}).call(this);
