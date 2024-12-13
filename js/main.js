// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 182, 193, 0.95)'; // Soft pink with transparency
    } else {
        navbar.style.background = 'linear-gradient(to right, var(--primary-color), var(--secondary-color))';
    }
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Form submission animation
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const submitBtn = this.querySelector('.submit-btn');
    submitBtn.innerHTML = 'Message Sent! 💖';
    submitBtn.style.background = 'var(--accent-color)';
    
    // Reset form after animation
    setTimeout(() => {
        form.reset();
        submitBtn.innerHTML = 'Send Message';
        submitBtn.style.background = 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))';
    }, 3000);
});

// Add loading animation for profile image
window.addEventListener('load', function() {
    const profileImage = document.querySelector('.profile-frame img');
    if (profileImage) {
        profileImage.style.opacity = '1';
    }
});

// Create a cute cursor trail effect
function createHeartTrail() {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.left = event.clientX + 'px';
    heart.style.top = event.clientY + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.animation = 'float-away 1s forwards';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 1000);
}

// Add the heart trail animation style
const style = document.createElement('style');
style.textContent = `
    @keyframes float-away {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-20px) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add the heart trail effect with throttling
let isThrottled = false;
document.addEventListener('mousemove', function(event) {
    if (!isThrottled) {
        createHeartTrail();
        isThrottled = true;
        setTimeout(() => {
            isThrottled = false;
        }, 100);
    }
});
