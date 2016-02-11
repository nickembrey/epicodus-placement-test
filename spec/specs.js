describe('pingPong', function() {
  it("returns the input number when the number is not divisible by 3 or 5", function() {
    expect(pingPong(16)).to.equal(16);
  });

  it("returns ping when the number is divisible by 3 but not 5", function() {
    expect(pingPong(9)).to.equal("ping");
  });
});
