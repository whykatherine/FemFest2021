// Set to add space between window edge and divider line
const margin = 100;

resizeLine();
window.addEventListener("resize", resizeLine);

function resizeLine(){
  // Remove all tiles
  document.querySelectorAll('.dividerTile').forEach(e => e.remove());

  // Get window size & calculate number of middle tiles
  var width = window.innerWidth;
  var lineSpace = width - (margin*2);
  var midSpace = lineSpace - 200;
  var midNum = Math.floor(midSpace / 100); // ex: midNum = 2 means there are 4 total mid tiles

  // Create and add tiles to DOM
  addLeft();
  for (var i = 0; i < midNum; i++) {
    addMid();
  }
  addCenter();
  for (var i = 0; i < midNum; i++) {
    addMid();
  }
  addRight();
}

function addLeft() {
  var left = document.createElement("img");
  left.setAttribute("src", "img/divider/divider_left.png");
  left.setAttribute("class", "dividerTile");
  document.getElementById("dividerLine").appendChild(left);
}

function addMid() {
  var mid = document.createElement("img");
  mid.setAttribute("src", "img/divider/divider_mid.png");
  mid.setAttribute("class", "dividerTile");
  document.getElementById("dividerLine").appendChild(mid);
}

function addCenter() {
  var center = document.createElement("img");
  center.setAttribute("src", "img/divider/divider_center.png");
  center.setAttribute("class", "dividerTile");
  document.getElementById("dividerLine").appendChild(center);
}

function addRight() {
  var right = document.createElement("img");
  right.setAttribute("src", "img/divider/divider_right.png");
  right.setAttribute("class", "dividerTile");
  document.getElementById("dividerLine").appendChild(right);
}
