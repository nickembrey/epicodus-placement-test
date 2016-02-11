var pingPong = function(userInput) {
  if (userInput % 1 != 0) {
    return "Oops! That’s not an integer. Please input an integer.";
  }
  else if( (userInput % 5 === 0) && (userInput % 3 === 0) ) {
    return "pingpong";
  }
  else if(userInput % 5 === 0) {
    return "pong";
  }
  else if(userInput % 3 === 0) {
    return "ping";
  } else {
    return userInput;
  }
}

 var playPingPong = function(userInput) {

 }

$(function() {
  $('#start-ping-pong').click(function() {
    alert("jQuery working with button!");
  });
});
