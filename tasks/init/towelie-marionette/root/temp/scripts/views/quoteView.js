(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["marionette", "text!templates/quoteTemplate.tmpl"], function(Marionette, QuoteTemplate) {
    "use strict";

    var QuoteView;
    return QuoteView = (function(_super) {

      __extends(QuoteView, _super);

      function QuoteView() {
        return QuoteView.__super__.constructor.apply(this, arguments);
      }

      QuoteView.prototype.template = QuoteTemplate;

      QuoteView.prototype.tagName = 'li';

      QuoteView.prototype.className = 'media';

      return QuoteView;

    })(Marionette.ItemView);
  });

}).call(this);
