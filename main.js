
var calcequation = ""
// sets the name of .calcfield to calcfield
var calcfield = document.querySelector(".calcfield")

calcfield.textContent = calcequation;

// sets the name of all buttons with class .calcbutt to button
var buttonList = document.querySelectorAll(".calcbutt")

// adds a listener to each button that waits for a click
for (i = 0; i<buttonList.length; i++){
  buttonList[i].addEventListener('click',buttonPress)
}

function buttonPress(event){
  if(event.target.textContent=='c'){
    calcequation = ""
    calcfield.textContent = calcequation
  }else if(event.target.textContent=='='){
    calcequation = eval(calcequation)
    calcfield.textContent = calcequation
  }else{
    calcequation = calcequation + event.target.textContent
    calcfield.textContent = calcequation;
  }
  return event;
}
