
var redSpan = document.getElementById("redValue");
var greenSpan = document.getElementById("greenValue");
var blueSpan = document.getElementById("blueValue");

function getRandomColor() {
  return Math.floor(Math.random() * 256);
}

function changeColor() {
  var bodyElement = document.getElementsByTagName("body");
  var outputElement = document.getElementById("randomColorOutput");
  var redValue = getRandomColor();
  var greenValue = getRandomColor();
  var blueValue = getRandomColor();
  bodyElement[0].style.background = "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
  redSpan.innerHTML = redValue + ",";
  greenSpan.innerHTML = greenValue + ",";
  blueSpan.innerHTML = blueValue;
  // Invert the background color values and apply it to the output text color for contrast
  outputElement.style.color = "rgb(" + (255 - redValue) + "," + (255 - greenValue) + "," + (255 - blueValue) + ")";
}

function copyColor() {
  var colorElement = document.getElementById("randomColorOutput");
  console.log(colorElement.innerText);
}
