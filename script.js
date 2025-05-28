// Create floating hearts
function createHearts() {
    const welcome = document.getElementById('welcome');
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    welcome.appendChild(heart);

    // Remove heart after animation
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// Create hearts periodically
setInterval(createHearts, 300);

// Start story function
function startStory() {
    const welcome = document.getElementById('welcome');
    const story = document.getElementById('story');
    const audio = document.getElementById('background-music');

    // Set initial playback speed to 1.5x
    audio.playbackRate = 1.5;
    
    // Start playing audio immediately
    audio.play().catch(error => {
        console.log("Audio play failed:", error);
    });

    // Change speed to normal after 0.28 seconds
    setTimeout(() => {
        audio.playbackRate = 1.0;
    }, 280);

    // Fade out welcome section
    welcome.style.opacity = '0';
    welcome.style.transition = 'opacity 1s ease';

    // Show story section
    setTimeout(() => {
        welcome.style.display = 'none';
        story.style.display = 'block';
        initAnimations();
    }, 1000);
}

// Initialize animations for timeline and photo gallery
function initAnimations() {
    // Timeline animations
    const timelineItems = document.querySelectorAll('.timeline-item');
    const photoCards = document.querySelectorAll('.photo-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe timeline items
    timelineItems.forEach(item => {
        observer.observe(item);
    });

    // Observe photo cards
    photoCards.forEach(card => {
        observer.observe(card);
    });
}

// Video controls
const video = document.getElementById('reel-video');
video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

// Handle audio player visibility
const audio = document.getElementById('background-music');
let audioTimeout;

document.addEventListener('mousemove', () => {
    audio.style.opacity = '0.7';
    clearTimeout(audioTimeout);
    audioTimeout = setTimeout(() => {
        audio.style.opacity = '0.3';
    }, 2000);
}); 