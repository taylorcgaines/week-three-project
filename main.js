
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
  if(event.target.textContent==='c'){
// this will save over calcequation with an empty string
    calcequation = ""
    calcfield.textContent = calcequation
  }else if(event.target.textContent==='='){
// this will use eval on calcequation and save it to calcequation
    calcequation = eval(calcequation)
    calcfield.textContent = calcequation
  }else{
// this will get the textcontent of the buttons and send it to calcequation
    calcequation = calcequation + event.target.textContent
    calcfield.textContent = calcequation;
  }
  return event;
}
