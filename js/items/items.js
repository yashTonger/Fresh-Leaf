// Add a click event listener to the element with id 'mainImage'
document.getElementById('mainImage').addEventListener('click', () => {
    // Find the target element to scroll to
    const targetElement = document.getElementById('buy'); // Replace 'menu-section' with the id of your target element
  
    if (targetElement) {
      // Scroll to the target element smoothly
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Target element not found!');
    }
  });