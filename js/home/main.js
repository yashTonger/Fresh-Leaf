// click 
document.getElementById('content').addEventListener('click', event => {
    
    //submit button
    if (event.target.classList.contains('sub')) {
      SubmitEvent();
    }
    if (event.target.classList.contains('goToPlan')) {
      goTo('htmls/bookNow/bookNow.html'); 
    }

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
      if (event.target.classList.contains('hover2')) {
        increase(event.target); // Increase size on hover
      }
    });

    document.getElementById('content').addEventListener('mouseout', event => {

      // Check if the element losing hover has the 'hover' class
      if (event.target.classList.contains('hover')) {
        resetSize(event.target); // Reset size when mouse leaves
      }      
      if (event.target.classList.contains('hover2')) {
        resetSize(event.target); // Reset size when mouse leaves
      }      
    });



//functions
    function SubmitEvent() {
              // Get the email value and remove any extra spaces
        var num = document.querySelector('.enter-your-email').value.trim();

        // If the email field is not empty, send the email via EmailJS
        if (num !== "") {
          var templateParams = {
            number: num
            // You can add other parameters here if needed
          };
          
          emailjs.send('service_56mbahv', 'template_95xcx3a', templateParams)
            .then(function(response) {
              console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
              console.error('FAILED...', error);
            });
        }
        
        // Redirect the user to the bookNow page
        setTimeout(() => {
          window.location.href = "htmls/bookNow/bookNow.html";
        }, 1200); // Wait for 1 second (1000 milliseconds) before executing
        
    }

    function goTo(url) {
      window.location.href = url;
    }

    // Function to increase the size of the element
    function increaseSize(element) {
      element.style.transform = 'scale(1.2)'; // Increase size by 20%
      element.style.transition = 'transform 0.3s ease'; // Smooth transition
    }
    function increase(element) {
      element.style.transform = 'scale(1.05)'; // Increase size by 20%
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