// hover 
    // Add a hover event listener to the parent element
    document.addEventListener('mouseover', event => {

        // Check if the hovered element has the 'hover' class
        if (event.target.classList.contains('hover')) {
          increaseSize(event.target); // Increase size on hover
        }
      });
  
      document.addEventListener('mouseout', event => {
  
        // Check if the element losing hover has the 'hover' class
        if (event.target.classList.contains('hover')) {
          resetSize(event.target); // Reset size when mouse leaves
        }      
      });
  

      //functions
          // Function to increase the size of the element
    function increaseSize(element) {
        element.style.transform = 'scale(1.2)'; // Increase size by 20%
        element.style.transition = 'transform 0.3s ease'; // Smooth transition
      }
  
      // Function to reset the size of the element
      function resetSize(element) {
        element.style.transform = 'scale(1)'; // Reset to original size
      }