var pingPong = function(input) {
  if( (input % 5 === 0) && (input % 3 === 0) ) {
    return 'pingpong';
  }
  else if(input % 5 === 0) {
    return 'pong';
  }
  else if(input % 3 === 0) {
    return 'ping';
  } else {
    return input;
  }
};

var playPingPong = function(userInput) {
    $('#main').append('<ul id="ping-pong-list"></ul>');
    for(inputCounter = 1; inputCounter <= userInput; inputCounter++) {
      $('#ping-pong-list').append('<li>' + pingPong(inputCounter) + '</li>');
  }
};

$(function() {
  $('#ping-pong-form').submit(function(event) {
    $('#ping-pong-list').remove();
    playPingPong( $('#ping-pong-number').val() );
    event.preventDefault();
  });
});
