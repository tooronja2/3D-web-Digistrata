// Enhanced mobile carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Improve carousel performance on mobile
    const carousels = document.querySelectorAll('.logo-carousel.service');
    
    carousels.forEach(carousel => {
        // Pause animation on hover
        carousel.addEventListener('mouseenter', function() {
            const items = this.querySelectorAll('.carousel-item-wrap');
            items.forEach(item => {
                item.style.animationPlayState = 'paused';
            });
        });
        
        // Resume animation when not hovering
        carousel.addEventListener('mouseleave', function() {
            const items = this.querySelectorAll('.carousel-item-wrap');
            items.forEach(item => {
                item.style.animationPlayState = 'running';
            });
        });
    });
    
    // Touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousels.forEach(carousel => {
        carousel.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        carousel.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleGesture(this);
        });
    });
    
    function handleGesture(carousel) {
        const items = carousel.querySelectorAll('.carousel-item-wrap');
        
        if (touchEndX < touchStartX - 50) {
            // Swipe left - speed up animation
            items.forEach(item => {
                item.style.animationDuration = '10s';
            });
            
            setTimeout(() => {
                items.forEach(item => {
                    item.style.animationDuration = '20s';
                });
            }, 2000);
        }
        
        if (touchEndX > touchStartX + 50) {
            // Swipe right - slow down animation
            items.forEach(item => {
                item.style.animationDuration = '30s';
            });
            
            setTimeout(() => {
                items.forEach(item => {
                    item.style.animationDuration = '20s';
                });
            }, 2000);
        }
    }
    
    // Optimize for mobile viewport
    function optimizeForMobile() {
        if (window.innerWidth <= 768) {
            const serviceSlides = document.querySelectorAll('.service-slide-interaction');
            serviceSlides.forEach(slide => {
                slide.style.width = '100%';
                slide.style.opacity = '1';
            });
            
            const slidingWraps = document.querySelectorAll('.sliding-inner-wrap');
            slidingWraps.forEach(wrap => {
                wrap.style.height = '4rem';
            });
        }
    }
    
    // Run on load and resize
    optimizeForMobile();
    window.addEventListener('resize', optimizeForMobile);
    
    // Improve service details accessibility
    const serviceDetails = document.querySelectorAll('.service-detail-text');
    serviceDetails.forEach(detail => {
        detail.setAttribute('tabindex', '0');
        detail.setAttribute('role', 'button');
        
        detail.addEventListener('click', function() {
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
        
        detail.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                this.click();
            }
        });
    });
});

// Smooth scroll behavior for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
