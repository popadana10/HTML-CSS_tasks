document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

nameInput.addEventListener('input', function() {
    nameInput.placeholder = '';
    console.log("Name input field value changed: " + nameInput.value);
});

emailInput.addEventListener('input', function() {
    emailInput.placeholder = '';
    console.log("Email input field value changed: " + emailInput.value);
});

messageInput.addEventListener('input', function() {
    messageInput.placeholder = '';
    console.log("Message input field value changed: " + messageInput.value);
});
