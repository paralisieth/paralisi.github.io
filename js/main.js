// Navigation Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Sticky Navigation Menu
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        document.querySelector('.navbar').classList.add("sticky");
    } else {
        document.querySelector('.navbar').classList.remove("sticky");
    }
});

// Toggle Menu/Navbar
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.navbar .menu').classList.toggle("active");
    document.querySelector('.menu-btn i').classList.toggle("active");
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

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
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
    // Typing animation
    if($(".typing").length) {
        var typed = new Typed(".typing", {
            strings: ["Developer", "Python Expert", "UI Designer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    if($(".typing-2").length) {
        var typed2 = new Typed(".typing-2", {
            strings: ["Developer", "Python Expert", "UI Designer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }

    // Toggle menu/navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Close menu when clicking a link
    $('.navbar .menu li a').click(function(){
        $('.navbar .menu').removeClass("active");
        $('.menu-btn i').removeClass("active");
    });

    // Smooth scroll and section animation
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        
        let target = $($(this).attr('href'));
        
        $('html, body').animate({
            scrollTop: target.offset().top - 100
        }, 800, 'easeInOutQuart', function() {
            target.addClass('active');
        });
    });

    // Section visibility animation
    function handleScroll() {
        let windowHeight = $(window).height();
        let scrollTop = $(window).scrollTop();

        $('section').each(function() {
            let elementTop = $(this).offset().top;
            let elementVisible = 150;

            if (elementTop < (scrollTop + windowHeight - elementVisible)) {
                $(this).addClass('active');
            }
        });
    }

    // Initial check for visible sections
    handleScroll();

    // Check for visible sections on scroll
    $(window).scroll(function() {
        handleScroll();
    });

    // Active navigation highlighting
    $(window).scroll(function(){
        let scrollDistance = $(window).scrollTop() + 300;
        
        $('section').each(function(i) {
            if ($(this).position().top <= scrollDistance) {
                $('.navbar .menu a.active').removeClass('active');
                $('.navbar .menu a').eq(i).addClass('active');
            }
        });
    }).scroll();

    // Scroll to sections
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Highlight active section in navigation
    $(window).scroll(function(){
        var scrollDistance = $(window).scrollTop();
        
        // Assign active class to nav items
        $('section').each(function(i) {
            if ($(this).position().top <= scrollDistance + 200) {
                $('.navbar .menu a.active').removeClass('active');
                $('.navbar .menu a').eq(i).addClass('active');
            }
        });
    }).scroll();

    // Smooth scrolling
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            'linear'
        );
    });
});
