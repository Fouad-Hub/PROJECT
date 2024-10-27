document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent actual form submission

        const messageDiv = document.getElementById("submission-message");
        messageDiv.textContent = "Form submitted! We will get back to you shortly.";
        messageDiv.classList.add("show");

        event.target.reset(); // Clear the form fields
        // Hide the message after 7 seconds and remove padding
        setTimeout(() => {
            messageDiv.classList.remove("show");
            messageDiv.textContent = ""; // Clear the message text
        }, 4000);
    });
});
