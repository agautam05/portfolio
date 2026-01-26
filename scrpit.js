   const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.className = navLinks.classList.contains('active') 
                ? 'fas fa-times' 
                : 'fas fa-bars';
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
            });
        });
        
        // Header scroll effect
        const header = document.getElementById('header');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
                header.style.padding = '0.5rem 0';
            } else {
                header.style.boxShadow = 'none';
                header.style.padding = '0';
            }
        });
        
        // Contact form submission
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(contactForm);
            const name = formData.get('name') || contactForm.querySelector('input[type="text"]').value;
            const email = formData.get('email') || contactForm.querySelector('input[type="email"]').value;
            
            // In a real application, you would send this data to a server
            // For this demo, we'll simulate a successful submission
            alert(`Thank you ${name}! Your message has been sent successfully. I'll respond to you at ${email} within 24-48 hours.`);
            
            // Reset form
            contactForm.reset();
        });
        
        // Fade-in animation on scroll
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const fadeInOnScroll = () => {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
        };
        
        // Initialize animations
        window.addEventListener('load', fadeInOnScroll);
        window.addEventListener('scroll', fadeInOnScroll);
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Project details modal simulation
        document.querySelectorAll('.project-links .btn-secondary').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const projectTitle = this.closest('.project-card').querySelector('h3').textContent;
                alert(`More details about "${projectTitle}" would be displayed here. In a full implementation, this would open a modal with detailed project information, screenshots, and additional resources.`);
            });
        });
        
        // Initialize the page
        document.addEventListener('DOMContentLoaded', () => {
            // Trigger initial fade-in for elements in view
            setTimeout(fadeInOnScroll, 300);
            
            // Set current year in footer (optional)
            const yearSpan = document.querySelector('.copyright p');
            if (yearSpan) {
                yearSpan.innerHTML = yearSpan.innerHTML.replace('2023', new Date().getFullYear());
            }
        });