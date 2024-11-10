// Sticky Header
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    // Add 'sticky' class to the header when scrolled past 50px
    header.classList.toggle('sticky', window.scrollY > 50);
});

// Add smooth scroll to links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 100, // Offset by 100px for better visibility
            behavior: 'smooth'  // Smooth scroll effect
        });
    });
});

// Get the custom cursor element
const cursor = document.getElementById('cursor');

// Function to update the position of the cursor
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    // Move the cursor to the mouse position
    cursor.style.left = `${x - cursor.offsetWidth / 2}px`;
    cursor.style.top = `${y - cursor.offsetHeight / 2}px`;
});

// Modal functionality
const openModalBtn = document.querySelector('.btn'); // Button to open modal
const closeModalBtn = document.querySelector('.close'); // Button to close modal
const modal = document.getElementById('consultation-modal'); // Modal itself

// Open modal when the "Get Consultation" button is clicked
openModalBtn.addEventListener('click', function (e) {
    e.preventDefault();  // Prevent default action
    modal.style.display = 'block';  // Show the modal
});

// Close modal when the 'x' button is clicked
closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';  // Hide the modal
});

// Close modal when clicking outside the modal content
window.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.style.display = 'none';  // Hide the modal if clicked outside
    }
});
