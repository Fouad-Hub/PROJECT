document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    if (!this.checkValidity()) {
        event.stopPropagation();
        this.classList.add('was-validated');
    } else {
        alert('Form submitted successfully!');
    }
});
