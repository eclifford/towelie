define [
  'scripts/views/tweetView'
], (TweetView) ->

  describe "TweetView", ->
    before ->
      @view = new TweetView()

    # it "should create the appopriate DOM element", ->  
    #   expect(@view.render().el.tagName).to.equal("LI")
