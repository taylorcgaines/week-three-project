
var calcequation = ""

// sets the name of .calcfield to calcfield
var calcfield = document.querySelector(".calcfield")

calcfield.textContent = calcequation;

// sets the name of all buttons with class .calcbutt to button
var buttonList = document.querySelectorAll(".calcbutt")

for (i = 0; i<buttonList.length; i++){
  buttonList[i].addEventListener('click',buttonPress)
}

// function to get the textcontent of the buttons and send it to calcequation
function buttonPress(event){
if ((event.target.textContent!=='c')||(event.target.textContent!=='=')){
  calcequation = calcequation + event.target.textContent
  calcfield.textContent = calcequation;
  return event;
}}
