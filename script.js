let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
      strings: ['Web Developer', 'Front-end Developer', 'Back-end Developer'],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1200,
      loop: true,
    });

// =============================
// EmailJS Contact Form
// =============================

emailjs.init({
    publicKey: "voR8oK4cAeibqk_zO",
});

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_k8baoxa",
        "template_p1gsi8c",
        this
    )
    .then(() => {

        contactForm.reset();

        document.getElementById("success-modal").classList.add("show");

    })
    .catch((error) => {
        alert("❌ Failed to send message.");
        console.error(error);
    });
});

const modal = document.getElementById("success-modal");
const closeModal = document.getElementById("close-modal");

closeModal.onclick = () => {
    modal.classList.remove("show");
}

// Optional: Click outside the card to close
modal.onclick = (e) => {
    if(e.target === modal){
        modal.classList.remove("show");
    }
}