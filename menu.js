// Select all span elements 
const dots = document.querySelectorAll('.catalog_dots span');

//Function to handle the click event

function handleDotClick(event) {
    // Remove 'active' class from all dots
    dots.forEach(dot => 
        dot.classList.remove('active')
    );

    // Add 'active' class to the clicked dot 
    event.target.classList.add('active');
}

// Add Event Listener to Each Dot 

dots.forEach(dot => {
    dot.addEventListener('click', handleDotClick);
})