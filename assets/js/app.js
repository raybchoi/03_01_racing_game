console.log('loaded properly');

let gameOver = false;

const players = [
    {
      'player': 1,
      'name': 'don',
      'img': 'assets/img/don_1.png',
    },
    {
      'player': 2,
      'name': 'leo',
      'img': 'assets/img/leo_1.png',
    },
    {
      'player': 3,
      'name': 'michael',
      'img': 'assets/img/michael_1.png',
    },
    {
      'player': 4,
      'name': 'ralph',
      'img': 'assets/img/ralph_1.png',
    },
  ];
$(document).ready(function(){

  // DOM is fully loaded (this is jQuery)
  // const selectPlayer =
  const selectPlayer = function () {
    console.log('selectPlayer function')
    $('#p1').html(`<img src=${players[0].img}>`);
    $('#p2').html(`<img src=${players[1].img}>`);
  }
  selectPlayer();


  const movePlayer = function(event) {
    // one space bar #p1 moves to the right when pushing '
    if ( gameOver === false ) {
      if ( event.which === 39 ) {
        $('#p1').animate({
          'margin-left': '+=10%'
        });
        winner();
        // a = 97
      } else if ( event.which === 97 ) {
        $('#p2').animate({
          'margin-left': '+=10%'
        });
        winner();
      }
    }
  }

  const winner = function() {
    let winScreenSize = $(window).width()- ($(window).width()*.2)
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
      console.log('Player 1 is the winner');
    } else if ( currentPlayerTwoPosition >= winScreenSize ) {
      gameOver = true;
      console.log('Player 2 is the winner');
    }
  }

  $(window).on('keydown', movePlayer);


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

*/
