
var calcequation = "test"

// sets the name of .calcfield to calcfield
var calcfield = document.querySelector(".calcfield")

// sets the name of all buttons with class .calcbutt to button
var button = document.querySelectorAll(".calcbutt")

// function to get the textcontent of the buttons and send it to calcequation
button.addEventListener('click', function buttonPress(event) {
  calcequation = calcequation + event.target.textContent
  calcfield.textContent = calcequation;
  return event;
}
