// Sticky Header
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 50);
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 100, // Offset for visibility
            behavior: 'smooth'
        });
    });
});

// Custom Cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Modal Functionality
const modal = document.getElementById('consultationModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

if (openModalBtn && closeModalBtn) {
    // Open the modal
    openModalBtn.addEventListener('click', function () {
        modal.classList.add('show');
    });

    // Close the modal
    closeModalBtn.addEventListener('click', function () {
        modal.classList.remove('show');
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
}
// Careers Modal Functionality
const careersModal = document.getElementById('careersModal');
const openCareersModalBtn = document.getElementById('openCareersModalBtn');
const closeCareersModalBtn = document.getElementById('closeCareersModalBtn');

if (openCareersModalBtn && closeCareersModalBtn) {
    // Open the Careers modal
    openCareersModalBtn.addEventListener('click', function () {
        careersModal.classList.add('show');
    });

    // Close the Careers modal
    closeCareersModalBtn.addEventListener('click', function () {
        careersModal.classList.remove('show');
    });

    // Close Careers modal when clicking outside of it
    window.addEventListener('click', function (e) {
        if (e.target === careersModal) {
            careersModal.classList.remove('show');
        }
    });
}
