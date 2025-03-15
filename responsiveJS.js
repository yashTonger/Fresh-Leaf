// Define media queries for the breakpoints
const mediaQuery900 = window.matchMedia('(max-width: 900px)');
const mediaQuery700 = window.matchMedia('(max-width: 700px)');

function updateContent() {
  const contentDiv = document.getElementById('content');

  // Check for 700px or less first
  if (mediaQuery700.matches) {

    fetch('700.txt')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(text => {
      // Insert the text file content into the div
      contentDiv.innerHTML = text;
    })
    .catch(error => {
      console.error('There was a problem fetching the text file:', error);
      document.getElementById('content').innerHTML = '1Failed to load content.';
    });
  } 
  // Then check for screens between 701px and 900px
  else if (mediaQuery900.matches) {
    fetch('900.txt')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(text => {
      // Insert the text file content into the div
      contentDiv.innerHTML = text;
    })
    .catch(error => {
      console.error('There was a problem fetching the text file:', error);
      document.getElementById('content').innerHTML = '2Failed to load content.';
    });
  } 
  // Otherwise, screens above 900px
  else {
    fetch('1280.txt')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(text => {
      // Insert the text file content into the div
      contentDiv.innerHTML = text;
    })
    .catch(error => {
      console.error('There was a problem fetching the text file:', error);
      document.getElementById('content').innerHTML = '3Failed to load content.';
    });
  }
}

// Add listeners to update when the media query status changes
mediaQuery900.addEventListener('change', updateContent);
mediaQuery700.addEventListener('change', updateContent);

// Initial update on page load
updateContent();