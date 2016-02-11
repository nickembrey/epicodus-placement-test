describe('pingPong', function() {
  it("returns the input number when the number is not divisible by 3 or 5", function() {
    expect(pingPong(16)).to.equal(16);
  });

  it("returns 'ping' when the number is divisible by 3 but not 5", function() {
    expect(pingPong(9)).to.equal("ping");
  });

  it("returns 'pong' when the number is divisible by 5 but not 3", function() {
    expect(pingPong(20)).to.equal("pong");
  });

  it("returns 'pingpong' when the number is divisible by both 5 and 3", function() {
    expect(pingPong(30)).to.equal("pingpong");
  });

  it("returns an error message if the input is not an integer", function() {
    expect(pingPong("cabbage cabbage")).to.equal("Oops! That’s not an integer. Please input a number.");
  });
});
