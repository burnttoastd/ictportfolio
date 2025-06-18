// Enhanced Typing Animation for Header
function typeWriter(element, text, delay = 100) {
    let i = 0;
    element.innerHTML = '';
    element.style.borderRight = '2px solid #00ff88';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, delay + Math.random() * 50); // Add slight randomness for realism
        } else {
            // Blinking cursor effect
            setInterval(() => {
                element.style.borderRight = element.style.borderRight === 'none' ? 
                    '2px solid #00ff88' : 'none';
            }, 500);
        }
    }
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {    const headerElement = document.getElementById('typed-header');
    if (headerElement) {
        typeWriter(headerElement, 'Cybersecurity Aspirant', 80);
    }
    
    // Continue with other initialization code...
});

// Matrix Background
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = 'アァイゥエオカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }).fill(1);

// Define section mappings for keyboard navigation
const sections = {
    '1': 'whoiam',
    '2': 'achievements',
    '3': 'why', 
    '4': 'projects',
    '5': 'goals',
    '6': 'contact',
    '7': 'achievement-gallery'
};

document.addEventListener('keydown', (e) => {
    // Navigate to sections using number keys
    if (sections[e.key]) {
        document.getElementById(sections[e.key]).scrollIntoView({ behavior: 'smooth' });
    }
});

// Smooth scrolling for footer links only
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for footer links
    document.querySelectorAll('.footer-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            console.log(`Clicking footer link for section: ${targetId}`, targetSection); // Debug log
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error(`Section with id "${targetId}" not found!`);
            }
        });
    });
});

    // Improved Fade-In Animation for Sections
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.fade-section').forEach(section => {
        fadeInObserver.observe(section);
    });

    // Enhanced Modal Animation
    modalOpenBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        modal.classList.add('fade-in');
    });

    modalCloseBtn.addEventListener('click', () => {
        modal.classList.remove('fade-in');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); // Match the fade-out duration
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('fade-in');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    });

    // Enhanced Carousel with Smooth Transitions
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
            slide.style.transition = 'opacity 0.5s ease-in-out';
        });
    }    // Achievement Gallery Carousel Functionality
let currentSlideIndex = 0;
const carouselSlides = document.querySelectorAll('.carousel-slide');
const carouselDots = document.querySelectorAll('.dot');
const carouselContainer = document.querySelector('.carousel-container');
let autoPlayInterval;
let isAutoPlaying = true;

// Function to show a specific slide with fade effect
function showCarouselSlide(index) {
    // Remove active class from all slides and dots
    carouselSlides.forEach(slide => {
        slide.classList.remove('active');
        // Add fade-out animation
        slide.style.opacity = '0';
    });
    carouselDots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current slide and dot with delay for smooth transition
    setTimeout(() => {
        if (carouselSlides[index]) {
            carouselSlides[index].classList.add('active');
            carouselSlides[index].style.opacity = '1';
        }
        if (carouselDots[index]) {
            carouselDots[index].classList.add('active');
        }
    }, 150);
}

// Function to change slide (next/previous)
function changeSlide(direction) {
    currentSlideIndex += direction;
    
    // Loop around if we go past the last slide
    if (currentSlideIndex >= carouselSlides.length) {
        currentSlideIndex = 0;
    }
    
    // Loop around if we go before the first slide
    if (currentSlideIndex < 0) {
        currentSlideIndex = carouselSlides.length - 1;
    }
    
    showCarouselSlide(currentSlideIndex);
    resetAutoPlay(); // Reset auto-play timer when manually navigating
}

// Function to go to a specific slide
function currentSlide(index) {
    currentSlideIndex = index - 1; // Convert to 0-based index
    showCarouselSlide(currentSlideIndex);
    resetAutoPlay(); // Reset auto-play timer when manually navigating
}

// Auto-advance carousel every 6 seconds
function startAutoCarousel() {
    if (isAutoPlaying) {
        autoPlayInterval = setInterval(() => {
            changeSlide(1);
        }, 6000); // 6 seconds - slower for better UX
    }
}

// Function to stop auto-play
function stopAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
    }
}

// Function to reset auto-play timer
function resetAutoPlay() {
    stopAutoPlay();
    startAutoCarousel();
}

// Pause auto-play when hovering over carousel
function setupCarouselHoverEvents() {
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            stopAutoPlay();
        });
        
        carouselContainer.addEventListener('mouseleave', () => {
            if (isAutoPlaying) {
                startAutoCarousel();
            }
        });
    }
}

// Keyboard navigation for carousel
function setupCarouselKeyboardEvents() {
    document.addEventListener('keydown', (e) => {
        // Only handle if carousel is visible
        if (carouselSlides.length > 0) {
            switch(e.key) {
                case 'ArrowLeft':
                    e.preventDefault();
                    changeSlide(-1);
                    break;
                case 'ArrowRight':
                    e.preventDefault();
                    changeSlide(1);
                    break;
                case ' ': // Spacebar to toggle auto-play
                    e.preventDefault();
                    isAutoPlaying = !isAutoPlaying;
                    if (isAutoPlaying) {
                        startAutoCarousel();
                    } else {
                        stopAutoPlay();
                    }
                    break;
            }
        }
    });
}

// Initialize carousel when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Start the auto-carousel if slides exist
    if (carouselSlides.length > 0) {
        showCarouselSlide(0); // Show first slide
        setupCarouselHoverEvents(); // Setup hover events
        setupCarouselKeyboardEvents(); // Setup keyboard navigation
        
        // Start auto-play after a short delay
        setTimeout(() => {
            startAutoCarousel();
        }, 2000);
    }
});

    // Smooth Parallax Effect
    window.addEventListener('scroll', () => {
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach(el => {
            const speed = el.dataset.speed || 0.5;
            const offset = window.scrollY * speed;
            el.style.transform = `translateY(${offset}px)`;
            el.style.transition = 'transform 0.2s ease-out';
        });
    });

    // Enhanced Lazy Loading with Smooth Fade-In
    lazyImages.forEach(img => {
        lazyObserver.observe(img);
    });

    lazyObserver.disconnect();
    lazyImages.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
            img.style.transition = 'opacity 0.5s ease-in-out';
        });
    });

    // Tooltip with Smooth Fade-In and Out
    document.querySelectorAll('[data-tooltip]').forEach(el => {
        el.addEventListener('mouseenter', () => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = el.dataset.tooltip;
            document.body.appendChild(tooltip);

            const rect = el.getBoundingClientRect();
            tooltip.style.left = `${rect.left + window.scrollX + rect.width / 2 - tooltip.offsetWidth / 2}px`;
            tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 10}px`;
            tooltip.style.opacity = '0';
            tooltip.style.transition = 'opacity 0.3s ease-in-out';
            setTimeout(() => tooltip.style.opacity = '1', 10);

            el.addEventListener('mouseleave', () => {
                tooltip.style.opacity = '0';
                setTimeout(() => tooltip.remove(), 300);
            }, { once: true });
        });
    });

    // Smooth Back to Top Button Animation
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        backToTopBtn.style.transition = 'opacity 0.3s ease-in-out';
    });

// Additional key bindings for extended navigation
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case '6':
            window.open('portfolio.html', '_blank');
            break;
        case '7':
            window.open('testimonials.html', '_blank');
            break;
        case '8':
            window.open('blog.html', '_blank');
            break;
        case '9':
            window.open('services.html', '_blank');
            break;
        case '0':
            window.open('home.html', '_blank');
            break;
        default:
            break;
    }
});

// Ensure smooth scrolling for additional sections
document.addEventListener('keydown', (e) => {
    const extendedSections = {
        'q': 'portfolio',
        'w': 'testimonials',
        'e': 'blog',
        'r': 'services',
        't': 'home'
    };

    if (extendedSections[e.key]) {
        document.getElementById(extendedSections[e.key]).scrollIntoView({ behavior: 'smooth' });
    }
});

// Example of handling more keys for future-proofing
document.addEventListener('keydown', (e) => {
    const futureSections = {
        'a': 'section-a',
        's': 'section-b',
        'd': 'section-c',
        'f': 'section-d',
        'g': 'section-e'
    };

    if (futureSections[e.key]) {
        document.getElementById(futureSections[e.key]).scrollIntoView({ behavior: 'smooth' });
    }
});

// Placeholder for additional key bindings
document.addEventListener('keydown', (e) => {
    const extraKeys = {
        'z': 'extra-section-1',
        'x': 'extra-section-2',
        'c': 'extra-section-3',
        'v': 'extra-section-4',
        'b': 'extra-section-5'
    };

    if (extraKeys[e.key]) {
        document.getElementById(extraKeys[e.key]).scrollIntoView({ behavior: 'smooth' });
    }
});
function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff88';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 33);

// Typing Header
const phrases = ["ICT Portfolio", "Cybersecurity Enthusiast", "Welcome"];
const header = document.getElementById("typed-header");
let i = 0, j = 0, currentPhrase = [], isDeleting = false;

function typeLoop() {
    header.innerHTML = currentPhrase.join("");

    if (!isDeleting && j <= phrases[i].length) {
        currentPhrase.push(phrases[i][j]);
        j++;
    }

    if (isDeleting && j >= 0) {
        currentPhrase.pop();
        j--;
    }

    if (j === phrases[i].length) {
        isDeleting = true;
        setTimeout(typeLoop, 1500);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % phrases.length;
    }

    const speed = isDeleting ? 50 : 150;
    setTimeout(typeLoop, speed);
}

typeLoop();

// Keyboard Navigation (using existing sections mapping from top of file)
document.addEventListener('keydown', (e) => {
    if (sections[e.key]) {
        document.getElementById(sections[e.key]).scrollIntoView({ behavior: 'smooth' });
    }
});

document.querySelectorAll('.key-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const key = btn.dataset.key;
        if (sections[key]) {
            document.getElementById(sections[key]).scrollIntoView({ behavior: 'smooth' });
        }
    });
});
// Responsive Canvas Resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drops.length = Math.floor(canvas.width / fontSize);
    drops.fill(1);
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    darkModeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
});

// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animated Section Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Dynamic Footer Year
const footerYear = document.getElementById('footer-year');
footerYear.textContent = new Date().getFullYear();

// Contact Form Validation
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Thank you for your message!');
    contactForm.reset();
});

// Parallax Scrolling Effect
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(el => {
        const speed = el.dataset.speed || 0.5;
        const offset = window.scrollY * speed;
        el.style.transform = `translateY(${offset}px)`;
    });
});

// Lazy Loading Images
const lazyImages = document.querySelectorAll('img[data-src]');
const lazyObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
});

lazyImages.forEach(img => lazyObserver.observe(img));

// Modal Popup
const modal = document.getElementById('modal');
const modalOpenBtn = document.getElementById('open-modal');
const modalCloseBtn = document.getElementById('close-modal');

modalOpenBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

modalCloseBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Carousel Slider
const carousel = document.getElementById('carousel');
const slides = carousel.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

document.getElementById('carousel-prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

document.getElementById('carousel-next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

showSlide(currentSlide);

// Tooltip Hover Effect
document.querySelectorAll('[data-tooltip]').forEach(el => {
    el.addEventListener('mouseenter', () => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = el.dataset.tooltip;
        document.body.appendChild(tooltip);

        const rect = el.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.scrollX + rect.width / 2 - tooltip.offsetWidth / 2}px`;
        tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 10}px`;

        el.addEventListener('mouseleave', () => {
            tooltip.remove();
        }, { once: true });
    });
});