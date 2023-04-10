


    function changeColor() {
        let currentElement;
  let mouseIsDown = false;

  // Add mousemove event listener
  document.addEventListener('mousemove', e => {
    currentElement = document.elementFromPoint(e.clientX, e.clientY);
    if (mouseIsDown && currentElement && currentElement.tagName === 'TD') {
      currentElement.style.backgroundColor = "black";
    }
  }, {passive: true});

  // Add mousedown event listener
  document.addEventListener('mousedown', e => {
    mouseIsDown = true;
    // Check if the currentElement is a 'td' element
    if (currentElement && currentElement.tagName === 'TD') {
      currentElement.style.backgroundColor = "black";
    }
  });

  // Add mouseup event listener
  document.addEventListener('mouseup', e => {
    mouseIsDown = false;
  });
}
    changeColor();


