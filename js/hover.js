//hover functions
    // Function to increase the size of the element
    function increaseSize(element) {
        element.style.transform = 'scale(1.15)'; // Increase size by 20%
        element.style.transition = 'transform 0.3s ease'; // Smooth transition
      }
  
      // Function to reset the size of the element
      function resetSize(element) {
        element.style.transform = 'scale(1)'; // Reset to original size
      }

    // hover 
    // Add a hover event listener to elements with the 'hover' class
    document.querySelectorAll('.hover').forEach(element => {
        element.addEventListener('pointerenter', () => {
          increaseSize(element);
        });
      
        element.addEventListener('pointerleave', () => {
          resetSize(element);
        });
      });