(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["marionette", "scripts/views/tweetView"], function(Marionette, TweetView) {
    "use strict";

    var TweetsView;
    return TweetsView = (function(_super) {

      __extends(TweetsView, _super);

      function TweetsView() {
        return TweetsView.__super__.constructor.apply(this, arguments);
      }

      TweetsView.prototype.itemView = TweetView;

      return TweetsView;

    })(Marionette.CollectionView);
  });

}).call(this);
