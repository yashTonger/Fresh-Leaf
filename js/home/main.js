// click 
document.getElementById('content').addEventListener('click', event => {
    
    //salad page
    if (event.target.classList.contains('goToSalad')) {
      goTo('htmls/items/greenSalad.html'); 
    }
    //peanut page
    if (event.target.classList.contains('goToPeanut')) {
      goTo('htmls/items/peanut.html'); 
    }
    //sprourtsChaat page
    if (event.target.classList.contains('goToSprourts')) {
      goTo('htmls/items/sprourtsChaat.html'); 
    }
  });

// hover 
    // Add a hover event listener to the parent element
    document.getElementById('content').addEventListener('mouseover', event => {

      // Check if the hovered element has the 'goToSalad' class
      if (event.target.classList.contains('goToSalad')) {
        increaseSize(event.target); // Increase size on hover
      }
      // Check if the hovered element has the 'goTopeanut' class
      if (event.target.classList.contains('goToPeanut')) {
        increaseSize(event.target); // Increase size on hover
      }
      // Check if the hovered element has the 'goToSprourts' class
      if (event.target.classList.contains('goToSprourts')) {
        increaseSize(event.target); // Increase size on hover
      }

    });

    document.getElementById('content').addEventListener('mouseout', event => {

      // Check if the element losing hover has the 'goToSalad' class
      if (event.target.classList.contains('goToSalad')) {
        resetSize(event.target); // Reset size when mouse leaves
      }
      
      // Check if the element losing hover has the 'goTopeanut' class
      if (event.target.classList.contains('goToPeanut')) {
        resetSize(event.target); // Reset size when mouse leaves
      }
      // Check if the element losing hover has the 'goToSprourts' class
      if (event.target.classList.contains('goToSprourts')) {
        resetSize(event.target); // Reset size when mouse leaves
      }
      
    });



  //functions
    function goTo(url) {
      window.location.href = url;
    }

    // Function to increase the size of the element
    function increaseSize(element) {
      element.style.transform = 'scale(1.2)'; // Increase size by 20%
      element.style.transition = 'transform 0.3s ease'; // Smooth transition
    }

    // Function to reset the size of the element
    function resetSize(element) {
      element.style.transform = 'scale(1)'; // Reset to original size
    }