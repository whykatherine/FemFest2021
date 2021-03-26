// /*
// Submitted by Marcin Wojtowicz [one_spook@hotmail.com] 
// Featured on JavaScript Kit (http://javascriptkit.com)
// Modified by JK to be IE7+/ Firefox compatible
// For this and over 400+ free scripts, visit http://javascriptkit.com
// */

// var trailLength = 15 // The length of trail (8 by default; put more for longer "tail")
// var path = "/img/cursor_trail.gif" // URL of your image

// var standardbody=(document.compatMode=="CSS1Compat")? document.documentElement : document.body //create reference to common "body" across doctypes
// var i,d = 0

// function initTrail() { // prepares the script
//   images = new Array() // prepare the image array
//   for (i = 0; i < parseInt(trailLength); i++) {
//     images[i] = new Image()
//     images[i].src = path
//   }
//   storage = new Array() // prepare the storage for the coordinates
//   for (i = 0; i < images.length*3; i++) {
//     storage[i] = 0
//   }
//   for (i = 0; i < images.length; i++) { // make divs for IE and layers for Navigator
//     document.write('<div id="obj' + i + '" style="position: absolute; z-Index: 100; height: 0; width: 0"><img width="50" height="50" src="' + images[i].src + '"></div>')
//   }
//   trail()
// }
// function trail() { // trailing function
//   for (i = 0; i < images.length; i++) { // for every div/layer
//     document.getElementById("obj" + i).style.top = storage[d]+'px' // the Y-coordinate
//     document.getElementById("obj" + i).style.left = + storage[d+1]+'px' // the X-coordinate
//     d = d+2
//   }
//   for (i = storage.length; i >= 2; i--) { // save the coordinate for the div/layer that's behind
//     storage[i] = storage[i-2]
//   }
//   d = 0 // reset for future use
//   // var timer = setTimeout("trail()",10) // call recursively 
//   var timer = setTimeout("trail()",30) // call recursively 
// }
// function processEvent(e) { // catches and processes the mousemove event 
//   if (window.event) { // for IE
//     // storage[0] = window.event.y+standardbody.scrollTop+10
//     // storage[1] = window.event.x+standardbody.scrollLeft+10
//     storage[0] = window.event.y+standardbody.scrollTop+30
//     storage[1] = window.event.x+standardbody.scrollLeft+30
//   } else {
//     storage[0] = e.pageY+12
//     storage[1] = e.pageX+12
//   }
// }

//   initTrail() 
//   document.onmousemove = processEvent // start capturing

// //-->

// <![CDATA[
var colour="#ffffff";
var sparkles=120;

/****************************
*  Tinkerbell Magic Sparkle *
* (c) 2005 mf2fm web-design *
*  http://www.mf2fm.com/rv  *
* DON'T EDIT BELOW THIS BOX *
****************************/
var x=ox=400;
var y=oy=300;
var swide=800;
var shigh=600;
var sleft=sdown=0;
var tiny=new Array();
var star=new Array();
var starv=new Array();
var starx=new Array();
var stary=new Array();
var tinyx=new Array();
var tinyy=new Array();
var tinyv=new Array();

window.onload=function() { if (document.getElementById) {
  var i, rats, rlef, rdow;
  for (var i=0; i<sparkles; i++) {
    var rats=createDiv(3, 3);
    rats.style.visibility="hidden";
    document.body.appendChild(tiny[i]=rats);
    starv[i]=0;
    tinyv[i]=0;
    var rats=createDiv(5, 5);
    rats.style.backgroundColor="transparent";
    rats.style.visibility="hidden";
    var rlef=createDiv(1, 5);
    var rdow=createDiv(5, 1);
    rats.appendChild(rlef);
    rats.appendChild(rdow);
    rlef.style.top="2px";
    rlef.style.left="0px";
    rdow.style.top="0px";
    rdow.style.left="2px";
    document.body.appendChild(star[i]=rats);
  }
  set_width();
  sparkle();
}}

function sparkle() {
  var c;
  if (x!=ox || y!=oy) {
    ox=x;
    oy=y;
    for (c=0; c<sparkles; c++) if (!starv[c]) {
      star[c].style.left=(starx[c]=x)+"px";
      star[c].style.top=(stary[c]=y)+"px";
      star[c].style.clip="rect(0px, 5px, 5px, 0px)";
      star[c].style.visibility="visible";
      starv[c]=50;
      break;
    }
  }
  for (c=0; c<sparkles; c++) {
    if (starv[c]) update_star(c);
    if (tinyv[c]) update_tiny(c);
  }
  setTimeout("sparkle()", 40);
}

function update_star(i) {
  if (--starv[i]==25) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
  if (starv[i]) {
    stary[i]+=1+Math.random()*3;
    if (stary[i]<shigh+sdown) {
      star[i].style.top=stary[i]+"px";
      starx[i]+=(i%5-2)/5;
      star[i].style.left=starx[i]+"px";
    }
    else {
      star[i].style.visibility="hidden";
      starv[i]=0;
      return;
    }
  }
  else {
    tinyv[i]=50;
    tiny[i].style.top=(tinyy[i]=stary[i])+"px";
    tiny[i].style.left=(tinyx[i]=starx[i])+"px";
    tiny[i].style.width="2px";
    tiny[i].style.height="2px";
    star[i].style.visibility="hidden";
    tiny[i].style.visibility="visible"
  }
}

function update_tiny(i) {
  if (--tinyv[i]==25) {
    tiny[i].style.width="1px";
    tiny[i].style.height="1px";
  }
  if (tinyv[i]) {
    tinyy[i]+=1+Math.random()*3;
    if (tinyy[i]<shigh+sdown) {
      tiny[i].style.top=tinyy[i]+"px";
      tinyx[i]+=(i%5-2)/5;
      tiny[i].style.left=tinyx[i]+"px";
    }
    else {
      tiny[i].style.visibility="hidden";
      tinyv[i]=0;
      return;
    }
  }
  else tiny[i].style.visibility="hidden";
}

document.onmousemove=mouse;
function mouse(e) {
  set_scroll();
  y=(e)?e.pageY:event.y+sdown;
  x=(e)?e.pageX:event.x+sleft;
}

function set_scroll() {
  if (typeof(self.pageYOffset)=="number") {
    sdown=self.pageYOffset;
    sleft=self.pageXOffset;
  }
  else if (document.body.scrollTop || document.body.scrollLeft) {
    sdown=document.body.scrollTop;
    sleft=document.body.scrollLeft;
  }
  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleft=document.documentElement.scrollLeft;
  sdown=document.documentElement.scrollTop;
  }
  else {
    sdown=0;
    sleft=0;
  }
}

window.onresize=set_width;
function set_width() {
  if (typeof(self.innerWidth)=="number") {
    swide=self.innerWidth;
    shigh=self.innerHeight;
  }
  else if (document.documentElement && document.documentElement.clientWidth) {
    swide=document.documentElement.clientWidth;
    shigh=document.documentElement.clientHeight;
  }
  else if (document.body.clientWidth) {
    swide=document.body.clientWidth;
    shigh=document.body.clientHeight;
  }
}

function createDiv(height, width) {
  var div=document.createElement("div");
  div.style.position="absolute";
  div.style.height=height+"px";
  div.style.width=width+"px";
  div.style.overflow="hidden";
  div.style.backgroundColor=colour;
  return (div);
}
// ]]>