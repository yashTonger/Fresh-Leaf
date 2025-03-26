// Variable to store the currently selected plan
let selectedPlan = null;

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



