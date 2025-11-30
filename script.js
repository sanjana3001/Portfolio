// CV Dashboard JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize - show only the first section (About)
    showSection('profile');

    // Section navigation function
    window.showSection = function(sectionId) {
        // Hide all sections
        const sections = document.querySelectorAll('.card');
        sections.forEach(section => {
            section.classList.remove('expanded');
        });

        // Show selected section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('expanded');
        }

        // Update active nav link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Find and activate the corresponding nav link
        const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Add hover effects for cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click effects for project items
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('click', function() {
            // You can add functionality here later, like expanding project details
            console.log('Project clicked:', this.querySelector('h3').textContent);
        });
    });

    // Simple animation for skill tags on load
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(20px)';

        setTimeout(() => {
            tag.style.transition = 'all 0.5s ease';
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Contact Form Functionality with EmailJS
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    // Initialize EmailJS
    if (typeof emailjs !== 'undefined') {
        emailjs.init('yKYgOaI9zAhxBNUca'); // Replace with your EmailJS public key
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(this);
            const name = formData.get('name').trim();
            const email = formData.get('email').trim();
            const subject = formData.get('subject').trim();
            const message = formData.get('message').trim();

            // Basic validation
            if (!name || !email || !subject || !message) {
                showFormMessage('Please fill in all required fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Prepare form data for EmailJS
            const templateParams = {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message,
                to_email: 'sanjanas.3001@gmail.com' // Your email address
            };

            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

            // Send email using EmailJS
            emailjs.send('service_nmhik0m', 'template_i6kmwzn', templateParams)
                .then(function(response) {
                    console.log('Email sent successfully!', response);
                    showFormMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon!', 'success');
                    contactForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;

                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        formMessage.style.display = 'none';
                    }, 5000);
                })
                .catch(function(error) {
                    console.error('Email sending failed:', error);
                    showFormMessage('Sorry, there was an error sending your message. Please try again later.', 'error');
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                });
        });
    }

    // Form message display function
    function showFormMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';

        // Scroll to form message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    console.log('CV Dashboard loaded successfully!');
});