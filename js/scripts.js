var pingPong = function(number) {
  if (number % 1 != 0) {
    return "Oops! That’s not an integer. Please input an integer.";
  }
  else if( (number % 5 === 0) && (number % 3 === 0) ) {
    return "pingpong";
  }
  else if(number % 5 === 0) {
    return "pong";
  }
  else if(number % 3 === 0) {
    return "ping";
  } else {
    return number;
  }
}

$(function() {
  $('#start-ping-pong').click(function() {
    alert("jQuery working with button!");
  });
});
