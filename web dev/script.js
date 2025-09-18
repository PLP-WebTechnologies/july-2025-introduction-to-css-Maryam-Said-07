document.addEventListener('DOMContentLoaded', function() {
    // Feature 1: Button click to toggle background color (About section)
    const toggleBtn = document.getElementById('toggle-bg-btn');
    let isToggled = false;
    const aboutDetails = document.querySelector('#about div');
    aboutDetails.style.display = "none";
    toggleBtn.addEventListener('click', function() {
        if (aboutDetails.style.display === "none") {
            aboutDetails.style.display = "block";
            toggleBtn.textContent = "Show Less";
        } else {
            aboutDetails.style.display = "none";
            toggleBtn.textContent = "Show More";
        }
    });

    // Feature 2: Input live character counter
    const nameInput = document.getElementById('name-input');
    const charCount = document.getElementById('char-count');
    nameInput.addEventListener('input', function() {
        charCount.textContent = "Characters: " + nameInput.value.length;
    });

    // Feature 3: Custom form validation
    const form = document.getElementById('custom-form');
    const emailInput = document.getElementById('email-input');
    const errorMsg = document.getElementById('error-msg');
    form.addEventListener('submit', function(e) {
        errorMsg.textContent = "";
        if (!emailInput.value.includes('@')) {
            e.preventDefault();
            errorMsg.textContent = "Please enter a valid email address.";
        }
    });

    // Feature 4: FAQ Show/Hide
    const faqBtn = document.querySelector('#faq button');
    const faqList = document.querySelector('#faq ul');
    faqList.style.display = "none";
    faqBtn.addEventListener('click', function() {
        if (faqList.style.display === "none") {
            faqList.style.display = "block";
            faqBtn.textContent = "Hide FAQ";
        } else {
            faqList.style.display = "none";
            faqBtn.textContent = "Show FAQ";
        }
    });
});