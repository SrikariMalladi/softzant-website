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

// Modal elements
const modal = document.getElementById('consultationModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

// Open the modal when the button is clicked
openModalBtn.addEventListener('click', function () {
    modal.classList.add('show');
});

// Close the modal when the close button is clicked
closeModalBtn.addEventListener('click', function () {
    modal.classList.remove('show');
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});
