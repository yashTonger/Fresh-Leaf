// Variable to store the currently selected plan
let selectedPlan = null;

//get form data
// Attach click event listeners to both buttons
  // Attach event listeners to both buttons
document.getElementById("COD").addEventListener("click", function() {
    sendAndRedirect("htmls/thank/ThankYou.html");////////////////////////////
  });
  
  document.getElementById("paynow").addEventListener("click", function() {
    sendAndRedirect("htmls/thank/qr.html");/////////////////////////////
  });
  
  function sendAndRedirect(redirectUrl) {
    // Retrieve and trim input values
    const phone = document.getElementById("mobile").value.trim();
    const time = document.getElementById("time").value;
    const address = document.getElementById("userInput").value.trim();
  
    // Validate Phone Number: must be more than 8 and less than 14 characters
    if (phone.length < 9 || phone.length > 13) {
      alert("Phone number must be more than 8 and less than 14 characters.");
      clearInputs();
      return;
    }
    
    // Validate Time: must be selected (non-empty)
    if (!time) {
      alert("Please select a delivery time.");
      clearInputs();
      return;
    }
    
    // Validate Address: must be more than 2 and less than 60 characters
    if (address.length < 3 || address.length > 59) {
      alert("Address must be more than 2 and less than 60 characters.");
      clearInputs();
      return;
    }
    
    // Validate Selected Plan: it must not be empty
    if (!selectedPlan) {
      alert("Selected plan must not be empty.");
      clearInputs();
      return;
    }
    
    // If all validations pass, collect the data
    const formData = { phone, time, address, selectedPlan };
    
    // Send the email using EmailJS

      emailjs.send('service_56mbahv', 'template_xsszgzr', formData)
        .then(function(response) {
          console.log("Email sent successfully!", response.status, response.text);
          // On successful email sending, redirect the user
          window.location.href = redirectUrl;
        }, function(error) {
          console.error("Error sending email:", error);
          alert("Error sending email.");
        });
  }
  
  function clearInputs() {
    document.getElementById("mobile").value = "";
    document.getElementById("time").value = "";
    document.getElementById("userInput").value = "";
    document.getElementById("selectedPlan").value = "";
  }
  








// Add event listeners to the divs
document.querySelectorAll('.plan-button').forEach(div => {
    div.addEventListener('click', event => {
        // Deselect all divs
        document.querySelectorAll('.indicator').forEach(d => {
            d.style.backgroundColor = '#fff';
        });

        // Select the clicked div
        const planMap = {
            'Classic': '.form-child5',
            'Premium': '.form-child6',
            'Deluxe': '.form-child7'
        };

        const selectedClass = planMap[event.currentTarget.getAttribute('data-plan')];
        if (selectedClass) {
            document.querySelector(selectedClass).style.backgroundColor = '#006ce8';
        }

        // Update the selectedPlan variable with the value of the clicked div
        selectedPlan = event.currentTarget.getAttribute('data-plan');
        console.log('Selected Plan:', selectedPlan);
    });
});



