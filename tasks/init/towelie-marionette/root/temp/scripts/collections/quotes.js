(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["backbone"], function(Backbone) {
    "use strict";

    var Quotes;
    return Quotes = (function(_super) {

      __extends(Quotes, _super);

      function Quotes() {
        return Quotes.__super__.constructor.apply(this, arguments);
      }

      Quotes.prototype.url = 'data/quotes.json';

      return Quotes;

    })(Backbone.Collection);
  });

}).call(this);
