var clear = document.querySelector('#clear');
var colorMode = document.querySelector('#colorMode');
var erase = document.querySelector('#erase');
var rainbow = document.querySelector('#rainbowMode');



//----------------------------------------------------------------
//change all td to white
clear.addEventListener('click', () =>{
    const tdElements = document.querySelectorAll('td');
    tdElements.forEach(td => {
        td.style.backgroundColor = 'white';
      });
});

//----------------------------------------------------------------
//change color of td to black
    function changeColor() {
        let currentElement;
  let mouseIsDown = false;

  // Add mousemove event listener
  document.addEventListener('mousemove', e => {
    currentElement = document.elementFromPoint(e.clientX, e.clientY);
    if (mouseIsDown && currentElement.tagName === 'TD') {
      currentElement.style.backgroundColor = "black";
    }
  }, {passive: true});

  // Add mousedown event listener
  document.addEventListener('mousedown', e => {
    mouseIsDown = true;

  });

  // Add mouseup event listener
  document.addEventListener('mouseup', e => {
    mouseIsDown = false;
  });
}


//----------------------------------------------------------------
//Erase function. white TD
function changeColorWhite() {
    let currentElement;
let mouseIsDown = false;

// Add mousemove event listener
document.addEventListener('mousemove', e => {
currentElement = document.elementFromPoint(e.clientX, e.clientY);
if (mouseIsDown && currentElement.tagName === 'TD') {
  currentElement.style.backgroundColor = "white";
}
}, {passive: true});

// Add mousedown event listener
document.addEventListener('mousedown', e => {
mouseIsDown = true;

});

// Add mouseup event listener
document.addEventListener('mouseup', e => {
mouseIsDown = false;
});
}


//----------------------------------------------------------------
//rainbow colors
function changeColorRandom() {
    let currentElement;
    let mouseIsDown = false;
    
    


// Add mousemove event listener
document.addEventListener('mousemove', e => {
currentElement = document.elementFromPoint(e.clientX, e.clientY);
var random = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
if (mouseIsDown && currentElement.tagName === 'TD') {
  currentElement.style.backgroundColor = random;
}

}, {passive: true});

// Add mousedown event listener
document.addEventListener('mousedown', e => {
mouseIsDown = true;

});

// Add mouseup event listener
document.addEventListener('mouseup', e => {
mouseIsDown = false;
});
}

//----------------------------------------------------------------
//function calls
colorMode.addEventListener("click", () => {
    changeColor();
});
    
erase.addEventListener("click", () => {
    changeColorWhite();
});

rainbow.addEventListener("click", () => {
    changeColorRandom();
});

    


