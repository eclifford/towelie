{% if(require) { %}
define([], function() {
  describe("Test Example", function() {
    it("should work", function() {
      expect(true).to.equal(true);
    });
  });
});
{% } else { %}
describe("Test Example", function() {
  it("should work", function() {
    expect(true).to.equal(true);
  });
});
{% } %}
