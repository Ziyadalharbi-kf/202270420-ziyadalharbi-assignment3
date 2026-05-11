// ==========================================
// FEATURE 1: Dark/Light Theme with localStorage
// ==========================================

const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check localStorage to see if user previously saved a theme
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeToggleBtn.innerText = '☀️ Light Mode';
}

// Listen for clicks on the toggle button
themeToggleBtn.addEventListener('click', () => {
    const isDarkMode = body.getAttribute('data-theme') === 'dark';

    if (isDarkMode) {
        // Switch to Light Mode
        body.removeAttribute('data-theme');
        themeToggleBtn.innerText = '🌙 Dark Mode';
        localStorage.setItem('portfolio-theme', 'light');
    } else {
        // Switch to Dark Mode
        body.setAttribute('data-theme', 'dark');
        themeToggleBtn.innerText = '☀️ Light Mode';
        localStorage.setItem('portfolio-theme', 'dark');
    }
});

// ==========================================
// FEATURE 2: Form Validation & User Feedback
// ==========================================

const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

contactForm.addEventListener('submit', function(event) {
    // Stop the page from reloading when the form is submitted
    event.preventDefault(); 

    // Grab the values typed into the inputs
    const nameValue = document.getElementById('name').value.trim();
    const emailValue = document.getElementById('email').value.trim();
    const messageValue = document.getElementById('message').value.trim();

    // Remove old classes
    formFeedback.classList.remove('hidden', 'success', 'error');

    // Check if any fields are empty (Error Handling)
    if (nameValue === '' || emailValue === '' || messageValue === '') {
        formFeedback.textContent = 'Error: Please fill out all fields before submitting.';
        formFeedback.classList.add('error');
    } else {
        // If everything is filled out (Success Feedback)
        formFeedback.textContent = `Thank you, ${nameValue}! Your message has been sent successfully.`;
        formFeedback.classList.add('success');
        
        // Clear the form fields after successful submission
        contactForm.reset();
    }
});