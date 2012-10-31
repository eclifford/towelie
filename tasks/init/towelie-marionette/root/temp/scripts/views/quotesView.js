(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["marionette", "scripts/views/quoteView"], function(Marionette, QuoteView) {
    "use strict";

    var QuotesView;
    return QuotesView = (function(_super) {

      __extends(QuotesView, _super);

      function QuotesView() {
        return QuotesView.__super__.constructor.apply(this, arguments);
      }

      QuotesView.prototype.itemView = QuoteView;

      return QuotesView;

    })(Marionette.CollectionView);
  });

}).call(this);
