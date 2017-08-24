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
      'speed': '+=12%',
    },
    {
      'player': 3,
      'name': 'michael',
      'img': 'assets/img/michael_1.png',
      'speed': '+=50%',
    },
    {
      'player': 4,
      'name': 'ralph',
      'img': 'assets/img/ralph_1.png',
      'speed': '+=25%',
    },
  ];

$(document).ready(function(){
  $("body").fadeIn(2000);

  // DOM is fully loaded (this is jQuery)
  let playerOne, playerTwo;
  console.log(playerOne);
  let playerOneWinCounter = 0;
  console.log('P1 Win Counter: ', playerOneWinCounter);
  let playerTwoWinCounter = 0;
  console.log('P2 Win Counter: ', playerTwoWinCounter);


  const winCounter = function () {
    $('.middleleft').html(`Player One Wins: ${playerOneWinCounter}`);
    $('.middleright').html(`Player Two Wins: ${playerTwoWinCounter}`);
  }

  const restart = function() {
    console.log('clicked')
    $('#p1, #p2').remove();
    selectPlayer();
    gameOver = false;
  }

  //---------------- players move ----------------
  const movePlayer = function(event) {
    // '39' => keypress => ' OR keyup => 222
    if ( gameOver === false ) {
      if ( event.which === 222 ) {
        $('#p1').finish().animate({
          'margin-left': `${players[playerOne].speed}`
        });;
        winner();
        // a = 65 => which for keydown /keyup or 97 for keypress //
        // .finish then makes all animation stop so it does goes off screen
      } else if ( event.which === 65 ) {
        $('#p2').finish().animate({
          'margin-left': `${players[playerTwo].speed}`
        });;
        winner();
      }
    }
  }

    //---------------- select characters move ----------------
  // const selectPlayer = function () {
  //   console.log('selectPlayer function')
  //   $('#start1').html(`<img id='p1' src=${players[playerOne].img}>`);
  //   $('#start2').html(`<img id='p2' src=${players[playerTwo].img}>`);
  // }

  const selectPlayerOne = function () {
    console.log('selectPlayer function 1')
    $('#start1').html(`<img id='p1' src=${players[playerOne].img}>`);
    $("#overlay").hide();
    $("#overlay2").show();
    selectPlayerTwoImage();
    // $('#start1').html(`<p id=p1><img src=${players[0].img}></p>`)
    // $('#start2').html(`<p id=p2><img src=${players[1].img}></p>`)
  }

  const selectPlayerTwo = function () {
    console.log('selectPlayer function 2')
    $('#start2').html(`<img id='p2' src=${players[playerTwo].img}>`);
    $("#overlay2").hide();
    // $('#start1').html(`<p id=p1><img src=${players[0].img}></p>`)
    // $('#start2').html(`<p id=p2><img src=${players[1].img}></p>`)
  }

  const selectPlayerOneImage = function () {
    $("#overlay").show();
    $('.don1').on('click', function(){
      playerOne = 0;
      selectPlayerOne();
    })
    $('.leo1').on('click', function(){
      playerOne = 1;
      selectPlayerOne();
    })
    $('.michael1').on('click', function(){
      playerOne = 2;
      selectPlayerOne();
    })
    $('.ralph1').on('click', function(){
      playerOne = 3;
      selectPlayerOne();
    })
  }
  selectPlayerOneImage();


  const selectPlayerTwoImage = function () {
      $('.don2').on('click', function(){
        playerTwo = 0;
        selectPlayerTwo();
      })
      $('.leo2').on('click', function(){
        playerTwo = 1;
        selectPlayerTwo();
      })
      $('.michael2').on('click', function(){
        playerTwo = 2;
        selectPlayerTwo();
      })
      $('.ralph2').on('click', function(){
        playerTwo = 3;
        selectPlayerTwo();
      })
  }

  //---------------- setting beginning position NOT USED ANYWHERE ----------------
  // let startPlayerOnePosition = $('#p1').offset().left;
  //   console.log('P1 Starting Postion: ', startPlayerOnePosition);
  // let startPlayerTwoPosition = $('#p2').offset().left;
  //   console.log('P2 Starting Postion: ', startPlayerOnePosition)

  //---------------- winners ----------------
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


  const resetScore = function() {
    playerOneWinCounter = 0;
    playerTwoWinCounter = 0;
    winCounter();
  }

  //---------------- Creation of overlay ----------------
  $(".create-overlay").on("click", function() {
    // $("#overlay").css("display", "block");
    $("#overlay").show();
  });
  $(".close-overlay").on("click", function() {
    // $("#overlay").css("display", "none");
    $("#overlay").hide();
    $("#overlay2").show();
  });
  $(".close-overlay2").on("click", function() {
    // $("#overlay").css("display", "none");
    $("#overlay2").hide();
  });



  $(window).on('keyup', movePlayer);
  $('.reset-game').on('click', restart)
  $('.change-char').on('click', selectPlayerOneImage)
  $('.reset-score').on('click', resetScore)
  winCounter();

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
