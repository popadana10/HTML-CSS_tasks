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
 

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}


const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});