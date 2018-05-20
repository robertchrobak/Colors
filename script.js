
var redSpan = document.getElementById("redValue");
var greenSpan = document.getElementById("greenValue");
var blueSpan = document.getElementById("blueValue");

function getRandomColor() {
  return Math.floor(Math.random() * 256);
}

function changeColor() {
  var bodyElement = document.getElementsByTagName("body");
  var redValue = getRandomColor();
  var greenValue = getRandomColor();
  var blueValue = getRandomColor();
  bodyElement[0].style.background = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
  redSpan.innerHTML = redValue + ",";
  greenSpan.innerHTML = greenValue + ",";
  blueSpan.innerHTML = blueValue;
}
