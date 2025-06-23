// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initNavbar();
    initSmoothScrolling();
    initScrollAnimations();
    initContactForm();
    initNewsletterForm();
    initGalleryLightbox();
    initTestimonialsSlider();
    initWhatsAppButton();
});

// Navbar functionality
function initNavbar() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .gallery-item, .testimonial, .contact-item, .about-text, .about-image');
    animateElements.forEach(el => observer.observe(el));
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Basic validation
            if (!validateForm(data)) {
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Form validation
function validateForm(data) {
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Nome deve ter pelo menos 2 caracteres');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Email inválido');
    }
    
    if (!data.phone || data.phone.trim().length < 10) {
        errors.push('Telefone inválido');
    }
    
    if (!data.service) {
        errors.push('Selecione um serviço');
    }
    
    if (!data.message || data.message.trim().length < 10) {
        errors.push('Mensagem deve ter pelo menos 10 caracteres');
    }
    
    if (errors.length > 0) {
        showNotification(errors.join('\n'), 'error');
        return false;
    }
    
    return true;
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Newsletter form
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            if (!isValidEmail(email)) {
                showNotification('Email inválido', 'error');
                return;
            }
            
            // Show success message
            showNotification('Inscrição realizada com sucesso!', 'success');
            this.reset();
        });
    }
}

// Gallery lightbox functionality
function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const overlay = this.querySelector('.gallery-overlay');
            
            if (img && overlay) {
                openLightbox(img.src, overlay.querySelector('h4').textContent);
            }
        });
    });
}

// Lightbox functionality
function openLightbox(imageSrc, title) {
    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img src="${imageSrc}" alt="${title}">
            <h3>${title}</h3>
        </div>
    `;
    
    // Add lightbox styles
    const style = document.createElement('style');
    style.textContent = `
        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .lightbox.active {
            opacity: 1;
        }
        .lightbox-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
        }
        .lightbox-content img {
            width: 100%;
            height: auto;
            border-radius: 10px;
        }
        .lightbox-content h3 {
            color: white;
            text-align: center;
            margin-top: 1rem;
        }
        .lightbox-close {
            position: absolute;
            top: -40px;
            right: 0;
            color: white;
            font-size: 2rem;
            cursor: pointer;
            background: none;
            border: none;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(lightbox);
    
    // Show lightbox
    setTimeout(() => lightbox.classList.add('active'), 10);
    
    // Close lightbox functionality
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        setTimeout(() => {
            document.body.removeChild(lightbox);
            document.head.removeChild(style);
        }, 300);
    };
    
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
}

// Testimonials slider
function initTestimonialsSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentIndex = 0;
    
    if (testimonials.length > 1) {
        // Create navigation dots
        const sliderContainer = document.querySelector('.testimonials-slider');
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'slider-dots';
        
        testimonials.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = 'slider-dot';
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        
        sliderContainer.appendChild(dotsContainer);
        
        // Add slider styles
        const style = document.createElement('style');
        style.textContent = `
            .testimonials-slider {
                position: relative;
            }
            .slider-dots {
                display: flex;
                justify-content: center;
                gap: 0.5rem;
                margin-top: 2rem;
            }
            .slider-dot {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: #ddd;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            .slider-dot.active {
                background: var(--primary-color);
            }
            @media (max-width: 768px) {
                .testimonial {
                    display: none;
                }
                .testimonial.active {
                    display: block;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Auto-slide functionality
        function nextSlide() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            updateSlider();
        }
        
        function goToSlide(index) {
            currentIndex = index;
            updateSlider();
        }
        
        function updateSlider() {
            testimonials.forEach((testimonial, index) => {
                testimonial.classList.toggle('active', index === currentIndex);
            });
            
            document.querySelectorAll('.slider-dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
        
        // Auto-slide every 5 seconds
        setInterval(nextSlide, 5000);
    }
}

// WhatsApp button functionality
function initWhatsAppButton() {
    const whatsappBtn = document.querySelector('.whatsapp-button a');
    
    if (whatsappBtn) {
        // Add hover effect
        whatsappBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        whatsappBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
        
        // Add click tracking (optional)
        whatsappBtn.addEventListener('click', function() {
            // You can add analytics tracking here
            console.log('WhatsApp button clicked');
        });
    }
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add notification styles
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10001;
            max-width: 400px;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
            transform: translateX(100%);
            transition: transform 0.3s ease;
        }
        .notification.show {
            transform: translateX(0);
        }
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem;
        }
        .notification-success {
            background: #4caf50;
            color: white;
        }
        .notification-error {
            background: #f44336;
            color: white;
        }
        .notification-info {
            background: #2196f3;
            color: white;
        }
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            margin-left: 1rem;
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Auto-hide after 5 seconds
    setTimeout(() => hideNotification(notification, style), 5000);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        hideNotification(notification, style);
    });
}

function hideNotification(notification, style) {
    notification.classList.remove('show');
    setTimeout(() => {
        if (document.body.contains(notification)) {
            document.body.removeChild(notification);
        }
        if (document.head.contains(style)) {
            document.head.removeChild(style);
        }
    }, 300);
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Performance optimization
function optimizePerformance() {
    // Preload critical resources
    const criticalImages = [
        'images/hero-image.jpg',
        'images/about-salon.jpg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Initialize performance optimizations
initLazyLoading();
optimizePerformance();

// Service Worker registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
} 