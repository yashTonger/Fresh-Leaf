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
      // Scroll to a specific section when clicking on a div with a certain id
    if (event.target.id === 'menuLink') {
      scrollToSection('menu'); // Scroll to the section with id 'targetSection'
    }
    if (event.target.id === 'planLink') {
      scrollToSection('plan'); // Scroll to the section with id 'targetSection'
    }
  });

// hover 
    // Add a hover event listener to the parent element
    document.getElementById('content').addEventListener('mouseover', event => {

      // Check if the hovered element has the 'hover' class
      if (event.target.classList.contains('hover')) {
        increaseSize(event.target); // Increase size on hover
      }
    });

    document.getElementById('content').addEventListener('mouseout', event => {

      // Check if the element losing hover has the 'hover' class
      if (event.target.classList.contains('hover')) {
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

    // Function to scroll to a specific section
    function scrollToSection(sectionId) {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
      } else {
        console.error(`Element with id "${sectionId}" not found.`);
      }
    }