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
  } else {
    avatars[i].setAttribute("src", "testAvatar.png");
  }
  avatars[i].setAttribute("alt", "test avatar");

  // randomize background
  var spin = getRandomInt(6);
  console.log(spin);
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
  console.log("ARRAY LENGTH: " + avatars.length);
  console.log("COUNTER: " + counter);
  if (counter >= avatars.length) {
    console.log("end of avatar array");
    counter = 0;
  } else {
    console.log("AVATAR RELEASED");
    animContainer.appendChild(avatars[counter]);
    animate(counter);
    counter = counter + 1;
  }
}

// Starts an avatar's animation when called with its index
function animate(i) {
  // Set equal to negative width of avatar
  //var pos = -1*(avatars[i].getBoundingClientRect().width);
  var pos = -100;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos >= 1920) {
      clearInterval(id);
      animContainer.removeChild(avatars[i]);
    } else {
      pos++;
      avatars[i].style.left = pos + 'px';
    }
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
