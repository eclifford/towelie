(function() {

  define(['scripts/views/tweetsView'], function(TweetsView) {
    return describe("TweetsView", function() {
      before(function() {
        return this.view = new TweetsView();
      });
      return it("should create the appopriate DOM element", function() {
        return expect(this.view.render().el.nodeName).to.equal("DIV");
      });
    });
  });

}).call(this);
