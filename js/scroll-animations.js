// Scroll-triggered animations for pricing and testimonial sections
document.addEventListener('DOMContentLoaded', function() {
    
    // Animation configuration
    const animationConfig = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                triggerAnimation(entry.target);
            }
        });
    }, animationConfig);

    // Animation functions
    function triggerAnimation(element) {
        const animationType = element.getAttribute('data-animation');
        
        switch (animationType) {
            case 'fade-in':
                element.style.opacity = '1';
                element.style.transform = 'translate3d(0, 0, 0) scale3d(1, 1, 1)';
                break;
                
            case 'slide-up':
                element.style.opacity = '1';
                element.style.transform = 'translate3d(0, 0, 0) scale3d(1, 1, 1)';
                break;
                
            case 'slide-up-stagger':
                element.style.opacity = '1';
                element.style.transform = 'translate3d(0, 0, 0) scale3d(1, 1, 1)';
                break;
                
            case 'scale-in':
                element.style.opacity = '1';
                element.style.transform = 'translate3d(0, 0, 0) scale3d(1, 1, 1)';
                break;
        }
        
        // Stop observing this element
        observer.unobserve(element);
    }

    // Wait for pricing section to be injected
    setTimeout(() => {
        setupAnimations();
    }, 100);

    function setupAnimations() {
        // Pricing section animations
        const pricingSection = document.querySelector('#pricing');
        if (pricingSection) {
            // Animate pricing heading
            const pricingHeading = pricingSection.querySelector('.pricing-heading');
            if (pricingHeading) {
                pricingHeading.setAttribute('data-animation', 'slide-up');
                pricingHeading.style.opacity = '0';
                pricingHeading.style.transform = 'translate3d(0, 5vw, 0) scale3d(1, 1, 1)';
                pricingHeading.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                observer.observe(pricingHeading);
            }

            // Animate pricing tabs
            const pricingTabs = pricingSection.querySelectorAll('.pricing-tab');
            pricingTabs.forEach((tab, index) => {
                tab.setAttribute('data-animation', 'fade-in');
                tab.style.opacity = '0';
                tab.style.transform = 'translate3d(0, 3vw, 0) scale3d(1, 1, 1)';
                tab.style.transition = `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s`;
                observer.observe(tab);
            });

            // Animate pricing cards
            const pricingCards = pricingSection.querySelectorAll('.pricing-card');
            pricingCards.forEach((card, index) => {
                card.setAttribute('data-animation', 'slide-up-stagger');
                card.style.opacity = '0';
                card.style.transform = 'translate3d(0, 4vw, 0) scale3d(0.95, 0.95, 1)';
                card.style.transition = `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.2}s`;
                observer.observe(card);
            });

            // Animate custom section
            const customSection = pricingSection.querySelector('.pricing-custom');
            if (customSection) {
                customSection.setAttribute('data-animation', 'scale-in');
                customSection.style.opacity = '0';
                customSection.style.transform = 'translate3d(0, 2vw, 0) scale3d(0.9, 0.9, 1)';
                customSection.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s';
                observer.observe(customSection);
            }
        }

        // Testimonial section animations
        const testimonialSection = document.querySelector('#testimonial');
        if (testimonialSection) {
            // Animate testimonial heading
            const testimonialHeading = testimonialSection.querySelector('h2[data-w-id="bf9b42c9-a8fc-3f3a-0206-3fc495f16551"]');
            if (testimonialHeading && !testimonialHeading.hasAttribute('data-animated')) {
                testimonialHeading.setAttribute('data-animation', 'slide-up');
                testimonialHeading.setAttribute('data-animated', 'true');
                testimonialHeading.style.opacity = '0';
                testimonialHeading.style.transform = 'translate3d(0, 5vw, 0) scale3d(1, 1, 1)';
                testimonialHeading.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                observer.observe(testimonialHeading);
            }

            // Animate testimonial number
            const testimonialNumber = testimonialSection.querySelector('.head-number');
            if (testimonialNumber && !testimonialNumber.hasAttribute('data-animated')) {
                testimonialNumber.setAttribute('data-animation', 'slide-up');
                testimonialNumber.setAttribute('data-animated', 'true');
                testimonialNumber.style.opacity = '0';
                testimonialNumber.style.transform = 'translate3d(0, 5vw, 0) scale3d(1, 1, 1)';
                testimonialNumber.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s';
                observer.observe(testimonialNumber);
            }

            // Animate "What They're Saying" text
            const whatTheyreSaying = testimonialSection.querySelector('.text-medium');
            if (whatTheyreSaying && !whatTheyreSaying.hasAttribute('data-animated')) {
                whatTheyreSaying.setAttribute('data-animation', 'fade-in');
                whatTheyreSaying.setAttribute('data-animated', 'true');
                whatTheyreSaying.style.opacity = '0';
                whatTheyreSaying.style.transform = 'translate3d(0, 3vw, 0) scale3d(1, 1, 1)';
                whatTheyreSaying.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s';
                observer.observe(whatTheyreSaying);
            }

            // Animate testimonial cards
            const testimonialCards = testimonialSection.querySelectorAll('.testimonial-card');
            testimonialCards.forEach((card, index) => {
                if (!card.hasAttribute('data-animated')) {
                    card.setAttribute('data-animation', 'slide-up-stagger');
                    card.setAttribute('data-animated', 'true');
                    card.style.opacity = '0';
                    card.style.transform = 'translate3d(0, 4vw, 0) scale3d(0.95, 0.95, 1)';
                    card.style.transition = `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${0.6 + (index * 0.15)}s`;
                    observer.observe(card);
                }
            });
        }
    }

    // Additional smooth scroll behavior for better animation timing
    let ticking = false;
    
    function updateAnimations() {
        // This could be used for more complex scroll-based animations
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateAnimations);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
});
