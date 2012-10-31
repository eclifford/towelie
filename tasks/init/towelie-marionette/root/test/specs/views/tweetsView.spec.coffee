define [
  'scripts/views/tweetsView'
], (TweetsView) ->

  describe "TweetsView", ->
    before ->
      @view = new TweetsView()

    it "should create the appopriate DOM element", ->  
      expect(@view.render().el.nodeName).to.equal("DIV")