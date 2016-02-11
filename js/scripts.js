var pingPong = function(input) {
  if( (input % 5 === 0) && (input % 3 === 0) ) {
    return "pingpong";
  }
  else if(input % 5 === 0) {
    return "pong";
  }
  else if(input % 3 === 0) {
    return "ping";
  } else {
    return input;
  }
};

var playPingPong = function(userInput) {
  if (userInput % 1 != 0) {
    return "Oops! That’s not an integer. Please input an integer.";
  }
};

$(function() {
  $('#start-ping-pong').click(function() {
    alert("jQuery working with button!");
  });
});
