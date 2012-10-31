(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["marionette", "text!templates/tweetTemplate.tmpl"], function(Marionette, TweetTemplate) {
    "use strict";

    var TweetView;
    return TweetView = (function(_super) {

      __extends(TweetView, _super);

      function TweetView() {
        return TweetView.__super__.constructor.apply(this, arguments);
      }

      TweetView.prototype.template = TweetTemplate;

      TweetView.prototype.tagName = 'li';

      TweetView.prototype.className = 'media';

      return TweetView;

    })(Marionette.ItemView);
  });

}).call(this);
