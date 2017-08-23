console.log('loaded properly');

let gameOver = false;

const players = [
    {
      'player': 1,
      'name': 'don',
      'img': 'assets/img/don_1.png',
      'speed': '+=10%',
    },
    {
      'player': 2,
      'name': 'leo',
      'img': 'assets/img/leo_1.png',
      'speed': '+=15%',
    },
    {
      'player': 3,
      'name': 'michael',
      'img': 'assets/img/michael_1.png',
      'speed': '+=5%',
    },
    {
      'player': 4,
      'name': 'ralph',
      'img': 'assets/img/ralph_1.png',
      'speed': '+=8%',
    },
  ];
let playerOneWinCounter = 0;
console.log(playerOneWinCounter);
let playerTwoWinCounter = 0;
console.log(playerTwoWinCounter);
$(document).ready(function(){

  // DOM is fully loaded (this is jQuery)

  const winCounter = function () {
    $('.middleleft').html(`Player One Wins: ${playerOneWinCounter}`);
    $('.middleright').html(`Player Two Wins: ${playerTwoWinCounter}`);
  }
  winCounter();
  const restart = function() {
    console.log('clicked')
    $('#p1, #p2').remove();
    selectPlayer();
    gameOver = false;
  }

  const selectPlayer = function () {
    console.log('selectPlayer function')
    $('#start1').html(`<img id='p1' src=${players[0].img}>`);
    $('#start2').html(`<img id='p2' src=${players[1].img}>`);
    // $('#start1').html(`<p id=p1><img src=${players[0].img}></p>`)
    // $('#start2').html(`<p id=p2><img src=${players[1].img}></p>`)
  }

  selectPlayer();

  let startPlayerOnePosition = $('#p1').offset().left;
  console.log('P1 Starting Postion: ', startPlayerOnePosition);
  let startPlayerTwoPosition = $('#p2').offset().left;
  console.log('P2 Starting Postion: ', startPlayerOnePosition)

  const movePlayer = function(event) {
    // '39' => keypress => ' OR keyup => 222
    if ( gameOver === false ) {
      if ( event.which === 222 ) {
        $('#p1').finish().animate({
          'margin-left': `${players[0].speed}`
        });;
        winner();
        // a = 65 => which for keydown /keyup or 97 for keypress //
        // .finish then makes all animation stop so it does goes off screen
      } else if ( event.which === 65 ) {
        $('#p2').finish().animate({
          'margin-left': `${players[1].speed}`
        });;
        winner();
      }
    }
  }

  const winner = function() {
    let winScreenSize = $(window).width() - ($(window).width()*.2)
    let currentPlayerOnePosition = $('#p1').offset().left;
    let currentPlayerTwoPosition = $('#p2').offset().left;
    console.log('winner function is running');
    // offset will tell you current position of an element and the .left is one attribute
    console.log('value of p1offset: ', $('#p1').offset().left);
      // window.width tells you the current screen size of the window
      // https://www.w3schools.com/JSREF/prop_screen_width.asp
    // console.log('current screen size of the window: ', $(window).width());
    // console.log('current screen size of the window with a percentage off: ', ($(window).width()*.20));
    console.log('Winning screen size: ', winScreenSize)
    if ( currentPlayerOnePosition >= winScreenSize ) {
      gameOver = true;
      playerOneWinCounter++;
      winCounter();
      console.log('Player 1 is the winner');
    } else if ( currentPlayerTwoPosition >= winScreenSize ) {
      gameOver = true;
      playerTwoWinCounter++;
      winCounter();
      console.log('Player 2 is the winner');
    }
  }

  $(window).on('keyup', movePlayer);

  $('.reset').on('click', restart)


});



/*
$(window).on("keypress", function moveRight(event) {
  console.log(event);
  if (event.which === 47) {
    console.log("key is pressed");
    $(".character").animate({
              "margin-left": "+=100px"
      });
  };
});

monitor events:
monitorEvents(window, ["click", "keypress", "resize", "scroll"]);
monitorEvents(window, ["keydown", "keypress"]);
*/
