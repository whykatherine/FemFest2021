// Create container for animation
var animContainer = document.createElement("div");
animContainer.setAttribute("id", "animationContainer");
document.body.appendChild(animContainer);

// SAMPLE ARRAY OF 20 AVATARS
var avatars = [];
for (var i = 0; i < 20; i++) {

  // create img tag with ".avatar" style
  avatars[i] = document.createElement("IMG");
  avatars[i].setAttribute("class", "avatar");

  // randomize image
  var coin = getRandomInt(2);
  if (coin == 0) {
    avatars[i].setAttribute("src", "testAvatar2.png");
    // https://lagreenw.github.io/femfest/testAvatar2.png
  } else {
    avatars[i].setAttribute("src", "testAvatar.png");
    // https://lagreenw.github.io/femfest/testAvatar.png
  }
  avatars[i].setAttribute("alt", "test avatar");

  // randomize background
  var spin = getRandomInt(6);
  if (spin == 0) {
    avatars[i].style.background = "red";
  } else if (spin == 1) {
    avatars[i].style.background = "blue";
  } else if (spin == 2) {
    avatars[i].style.background = "pink";
  } else if (spin == 3) {
    avatars[i].style.background = "orange";
  } else if (spin == 4) {
    avatars[i].style.background = "purple";
  } else {
    avatars[i].style.background = "black";
  }
}

// append avatars from array to the container at a specified rate
var timer = setInterval(releaseAvatar, 1500);
var counter = 0;

function releaseAvatar() {
  // uncomment to add randomness to rate
  clearInterval(timer);
  timer = setInterval(releaseAvatar, ((getRandomInt(1000))+500));

  if (counter >= avatars.length) {
    counter = 0;
  } else {
    animContainer.appendChild(avatars[counter]);
    animate(counter);
    counter = counter + 1;
  }
}

// Starts an avatar's animation when called with its index
function animate(i) {
  // Set xPos equal to negative width of avatar
  //var pos = -1*(avatars[i].getBoundingClientRect().width);
  var xPos = -100;
  var yPos = 0;
  var yDir = "down";

  // animate X position
  var xTimer = setInterval(frameX, 10);
  function frameX() {
    if (xPos >= 1920) {
      clearInterval(xTimer);
      animContainer.removeChild(avatars[i]);
    } else {
      xPos += 1;
      avatars[i].style.left = xPos + 'px';
    }
  }

  // low frame rate bounce
  // var yTimer = setInterval(frameY, 1000);
  // function frameY() {
  //   if (yPos == 0) {
  //     yPos = 50;
  //     avatars[i].style.top = yPos + "px";
  //     console.log("down");
  //   } else {
  //     console.log("up");
  //     yPos = 0;
  //     avatars[i].style.top = yPos + "px";
  //   }
  // }

  // tweened bounce
  // var yTimer = setInterval(frameY, 10);
  // function frameY() {
  //   if (yDir == "down") {
  //     yPos++;
  //     avatars[i].style.top = yPos + "px";
  //     if (yPos >= 50) {
  //       yDir = "up";
  //     }
  //   } else {
  //     yPos--;
  //     avatars[i].style.top = yPos + "px";
  //     if (yPos <= 0) {
  //       yDir = "down";
  //     }
  //   }
  // }

  // eased bounce
  var yTimer = setInterval(frameY, 10);
  var inc = 0;
  var yPos = 50;
  function frameY() {
    yPos -= (1 + inc);
    avatars[i].style.top = yPos + "px";
    inc -= .02;
    if (yPos > 50) {
      inc = 0;
    }
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
