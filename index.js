var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var started = false;

var currentScore = 0;


$(document).on("keypress", function() {

  if (!started) {
    setTimeout(function() {
      nextSequence();
    }, 500);
    started = true;
  }

})


$(".btn").on("click", function() {

  var name = $(this).attr("id")

  userClickedPattern.push(name);
  playsound(name);
  animatePress(name);

  checkAnsert(userClickedPattern.length - 1);

})


function checkAnsert(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
    currentScore += level;
    $(".score").text("Score:" + currentScore);

  } else {
    playsound("wrong");

    $("body").addClass("game-over");

    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");

    startOver();

  }

}

function startOver() {

  currentScore = 0;
  level = 0;
  gamePattern = [];
  started = false;
}


function nextSequence() {

  userClickedPattern = [];
  $("h1").text("Level " + level);
  level++;

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);


  $("#" + randomChosenColour).fadeOut("fast").fadeIn("fast");
  playsound(randomChosenColour)

}

function playsound(key) {
  var audio = new Audio("sounds/" + key + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  var z = $("#" + currentColour);
  z.addClass("pressed");
  setTimeout(function() {
    z.removeClass("pressed");
  }, 100);
}







function myFunction(x) {
  if (x.matches) { 


    $(document).on("click", function() {

      if (!started) {
        setTimeout(function() {
          nextSequence();
        }, 500);
        started = true;
      }

    })

    


  }
}

var x = window.matchMedia("(max-width: 1000px)");
myFunction(x);          // Call listener function at run time
x.addListener(myFunction);  // Attach listener function on state changes
