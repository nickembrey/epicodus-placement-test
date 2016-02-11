describe('pingPong', function() {
  it("returns 'ping' for a number divisible by 3, 'pong' for a number divisible by 5, and 'pingpong' for a number divisible by both, otherwise returns the input number", function() {
    expect(pingPong(16)).to.equal(16);
  });
});
