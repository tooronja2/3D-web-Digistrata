// Update images with relevant Digistrata content
document.addEventListener('DOMContentLoaded', function() {
    
    // Wait for content to be loaded
    setTimeout(() => {
        updateImages();
    }, 1000);
    
    function updateImages() {
        
        // Images for the main pillars section
        const pillarImages = {
            // Presencia Digital - Web development
            'presencia': 'https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg',
            // Automatización - Automation/robotics
            'automatizacion': 'https://images.pexels.com/photos/9242852/pexels-photo-9242852.jpeg',
            // Inteligencia - Data analytics
            'inteligencia': 'https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg'
        };
        
        // Technology section images (formerly testimonials)
        const techImages = [
            'https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg', // React & TypeScript
            'https://images.pexels.com/photos/17489163/pexels-photo-17489163.jpeg', // Python & Node.js
            'https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg', // PostgreSQL & MongoDB
            'https://images.pexels.com/photos/17489163/pexels-photo-17489163.jpeg'  // AWS & Docker
        ];
        
        // Update portfolio/pillar images
        updatePillarImages(pillarImages);
        
        // Update technology section images (testimonials)
        updateTechnologyImages(techImages);
    }
    
    function updatePillarImages(images) {
        // Update first portfolio image (Presencia Digital)
        const firstPortfolioImage = document.querySelector('._1st-portfolio-card .portfolio-image._1');
        if (firstPortfolioImage) {
            firstPortfolioImage.src = images.presencia;
            firstPortfolioImage.alt = 'Desarrollo web moderno y interfaces digitales profesionales';
            firstPortfolioImage.style.filter = 'none'; // Remove grayscale
            
            // Update srcset if exists
            firstPortfolioImage.removeAttribute('srcset');
        }
        
        // Update second portfolio image (Automatización)
        const secondPortfolioImage = document.querySelector('._2nd-portfolio-card .portfolio-image._2');
        if (secondPortfolioImage) {
            secondPortfolioImage.src = images.automatizacion;
            secondPortfolioImage.alt = 'Automatización de procesos y robótica empresarial';
            secondPortfolioImage.style.filter = 'none';
            secondPortfolioImage.removeAttribute('srcset');
        }
        
        // Update third portfolio image (Inteligencia)
        const thirdPortfolioImage = document.querySelector('._3rd-portfolio-card .portfolio-image._3');
        if (thirdPortfolioImage) {
            thirdPortfolioImage.src = images.inteligencia;
            thirdPortfolioImage.alt = 'Análisis de datos e inteligencia empresarial';
            thirdPortfolioImage.style.filter = 'none';
            thirdPortfolioImage.removeAttribute('srcset');
        }
        
        // Update remaining portfolio images in works2 section
        const fourthPortfolioImage = document.querySelector('._4th-portfolio-card .portfolio-image._4');
        if (fourthPortfolioImage) {
            fourthPortfolioImage.src = 'https://images.pexels.com/photos/7947951/pexels-photo-7947951.jpeg';
            fourthPortfolioImage.alt = 'Desarrollo de aplicaciones móviles responsivas';
            fourthPortfolioImage.style.filter = 'none';
            fourthPortfolioImage.removeAttribute('srcset');
        }
        
        const fifthPortfolioImage = document.querySelector('._5th-portfolio-card .portfolio-image._5');
        if (fifthPortfolioImage) {
            fifthPortfolioImage.src = 'https://images.pexels.com/photos/17489163/pexels-photo-17489163.jpeg';
            fifthPortfolioImage.alt = 'Infraestructura cloud y servidores modernos';
            fifthPortfolioImage.style.filter = 'none';
            fifthPortfolioImage.removeAttribute('srcset');
        }
    }
    
    function updateTechnologyImages(images) {
        // Update testimonial images to represent technologies
        const testimonialImages = document.querySelectorAll('#testimonial .testimonial-image');
        
        testimonialImages.forEach((img, index) => {
            if (images[index]) {
                img.src = images[index];
                
                // Update alt text based on technology
                const altTexts = [
                    'React y TypeScript para interfaces modernas',
                    'Backend escalable con Python y Node.js',
                    'Bases de datos PostgreSQL y MongoDB',
                    'Cloud computing con AWS y Docker'
                ];
                
                img.alt = altTexts[index] || 'Tecnología moderna para desarrollo';
                img.style.borderRadius = '8px';
                img.style.objectFit = 'cover';
            }
        });
    }
    
    // Add hover effects to new images
    function addImageHoverEffects() {
        const portfolioImages = document.querySelectorAll('.portfolio-image');
        portfolioImages.forEach(img => {
            img.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            img.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
        
        const testimonialImages = document.querySelectorAll('.testimonial-image');
        testimonialImages.forEach(img => {
            img.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            img.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }
    
    // Initialize hover effects after images are updated
    setTimeout(addImageHoverEffects, 1500);
});
