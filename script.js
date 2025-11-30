// CV Dashboard JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Smooth scroll function
    const smoothScroll = (target) => {
        const element = document.querySelector(target);
        if (element) {
            const headerOffset = 100; // Account for fixed header/navbar
            const elementPosition = element.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    // Add click event to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Hide all sections first
                sections.forEach(section => {
                    section.classList.remove('expanded');
                });

                // Show only the target section
                targetSection.classList.add('expanded');

                // Smooth scroll to the section
                smoothScroll(targetId);

                // Update active link
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Function to update active navigation link based on visible section
    const updateActiveNavLink = () => {
        // Since only one section is visible at a time, find the expanded section
        const expandedSection = document.querySelector('section.expanded');
        if (expandedSection) {
            const sectionId = expandedSection.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    };

    // Set initial state - show only the first section (About)
    const firstSection = document.querySelector('#profile');
    if (firstSection) {
        firstSection.classList.add('expanded');
        // Set first nav link as active
        const firstNavLink = document.querySelector('a[href="#profile"]');
        if (firstNavLink) {
            firstNavLink.classList.add('active');
        }
    }

    // Update active navigation link on scroll (modified for single section view)
    window.addEventListener('scroll', updateActiveNavLink);

    // Set initial active link (first section)
    updateActiveNavLink();

    // Add hover effects for cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
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

    // Add mobile navigation toggle (for future enhancement)
    const createMobileNav = () => {
        if (window.innerWidth <= 768) {
            const navbar = document.querySelector('.navbar');
            const navList = document.querySelector('.nav-list');

            // Add toggle functionality for mobile
            navbar.addEventListener('click', function(e) {
                if (e.target === navbar || e.target.closest('.nav-container')) {
                    navList.classList.toggle('mobile-open');
                }
            });
        }
    };

    // Initialize mobile navigation
    createMobileNav();
    window.addEventListener('resize', createMobileNav);

    // Contact Form Functionality
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

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

            // Simulate form submission (in a real application, you'd send this to a server)
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

            // Simulate API call delay
            setTimeout(() => {
                showFormMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon!', 'success');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;

                // Hide success message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }, 2000);
        });
    }

    function showFormMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';

        // Scroll to form message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    console.log('CV Dashboard with Navigation and Contact Form loaded successfully!');
});
