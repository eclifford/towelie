{% if(require) { %}
define [], () ->
  describe "Test Example", ->
    it "should work", ->
      expect(true).to.equal(true)
{% } else { %}
describe "Test Example", ->
  it "should work", ->
    expect(true).to.equal(true)
{% } %}