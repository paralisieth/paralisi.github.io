// Initialize GSAP ScrollTrigger and ScrollTo
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Navigation Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Enhanced smooth scroll with GSAP
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            // First fade out all sections slightly
            gsap.to('section', {
                duration: 0.3,
                opacity: 0.3,
                ease: "power2.inOut"
            });

            // Scroll to target with animation
            gsap.to(window, {
                duration: 1.5,
                scrollTo: {
                    y: target,
                    offsetY: 70,
                    autoKill: false
                },
                ease: "power4.inOut",
                onComplete: () => {
                    // Fade in all sections, but make target section more prominent
                    gsap.to('section', {
                        duration: 0.5,
                        opacity: 0.6,
                        ease: "power2.inOut"
                    });
                    gsap.to(target, {
                        duration: 0.5,
                        opacity: 1,
                        ease: "power2.inOut",
                        onComplete: () => {
                            // Reset all sections to full opacity
                            gsap.to('section', {
                                duration: 0.3,
                                opacity: 1,
                                ease: "power2.inOut"
                            });
                        }
                    });
                }
            });
        }
    });
});

// Animations
function initAnimations() {
    // Hero section animations
    gsap.from('.hero-content', {
        duration: 1.2,
        y: 100,
        opacity: 0,
        ease: 'power4.out',
    });

    // About section animations
    gsap.from('.about-content', {
        scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power4.out',
    });

    // Skills list animation
    gsap.from('.skills-list li', {
        scrollTrigger: {
            trigger: '.skills-list',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 20,
        opacity: 0,
        stagger: 0.1,
        ease: 'power4.out',
    });

    // Project cards animation
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power4.out',
    });

    // Contact section animation
    gsap.from('.contact-content', {
        scrollTrigger: {
            trigger: '.contact-content',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power4.out',
    });
}

// Glitch effect
function initGlitchEffect() {
    const glitchText = document.querySelector('.glitch');
    if (!glitchText) return;

    const originalText = glitchText.textContent;
    glitchText.setAttribute('data-text', originalText);

    let isGlitching = false;
    
    function startGlitch() {
        if (isGlitching) return;
        isGlitching = true;
        
        const duration = 50;
        const iterations = 5;
        let i = 0;
        
        const glitchInterval = setInterval(() => {
            const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
            let glitchedText = '';
            
            for (let char of originalText) {
                if (Math.random() < 0.3) {
                    glitchedText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
                } else {
                    glitchedText += char;
                }
            }
            
            glitchText.textContent = glitchedText;
            i++;
            
            if (i >= iterations) {
                clearInterval(glitchInterval);
                glitchText.textContent = originalText;
                isGlitching = false;
            }
        }, duration);
    }

    // Start glitch effect on hover
    glitchText.addEventListener('mouseenter', startGlitch);
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
    initGlitchEffect();
});

// Typing animation
const typingText = document.querySelector('.typing-text');
const phrases = ['I build things for the web', 'I create developer tools', 'I love open source'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    setTimeout(typeText, typingSpeed);
}

// Start typing animation
typeText();

// Navigation highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.side-nav a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Active section highlighting
const sections2 = document.querySelectorAll('section');
const navLinks2 = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections2.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks2.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#ffffff';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Theme toggle
const themeToggle = document.querySelector('.theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const icon = themeToggle.querySelector('i');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-moon');
}

themeToggle.addEventListener('click', toggleTheme);

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.hero-content, .about-content, .project-card, .contact-content').forEach(el => {
    observer.observe(el);
});

// Scroll Reveal Animation
window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    
    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.5s ease-out';
        sectionObserver.observe(section);
    });
});

// Form Validation (if you add a contact form later)
const validateForm = (formElement) => {
    const emailInput = formElement.querySelector('input[type="email"]');
    const messageInput = formElement.querySelector('textarea');
    
    let isValid = true;
    
    if (emailInput && !isValidEmail(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email address');
        isValid = false;
    }
    
    if (messageInput && messageInput.value.trim() === '') {
        showError(messageInput, 'Please enter a message');
        isValid = false;
    }
    
    return isValid;
};

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const showError = (input, message) => {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    input.parentElement.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
};

// Interactive features with jQuery
$(document).ready(function(){
    // Toggle Menu/Navbar Script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing Animation
    var typed = new Typed(".typing", {
        strings: ["Developer", "Python Expert", "UI Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Smooth Scrolling
    $('a[href*="#"]').on('click', function(e){
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
        
        // Close mobile menu after clicking a link
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });

    // Make all sections visible immediately
    $('section').css({
        'opacity': '1',
        'transform': 'none'
    });
});
