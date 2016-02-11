describe('pingPong', function() {
  it("returns the input number when the number is not divisible by 3 or 5", function() {
    expect(pingPong(16)).to.equal(16);
  });
});
