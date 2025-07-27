// Digistrata Content Localization and Updates
document.addEventListener('DOMContentLoaded', function() {
    
    // Wait for all elements to be loaded
    setTimeout(() => {
        updatePageContent();
    }, 500);
    
    function updatePageContent() {
        
        // Update page title and meta
        document.title = "Digistrata - Desarrollo Web y Automatización para Empresas";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = "Llevamos tu empresa al siguiente nivel tecnológico, desde tu primera web hasta automatización completa. Soluciones modulares, accesibles y a medida.";
        }
        
        // Update Hero Section
        updateHeroSection();
        
        // Update About Section (¿Qué hacemos?)
        updateAboutSection();
        
        // Update Works Section (Nuestros Pilares)
        updateWorksSection();
        
        // Update Service Section (Nuestros Servicios)
        updateServiceSection();
        
        // Update Testimonials Section (Tecnologías)
        updateTestimonialsSection();
        
        // Update FAQ Section
        updateFAQSection();
        
        // Update Contact Section
        updateContactSection();
    }
    
    function updateHeroSection() {
        // Update hero heading words
        const heroWords = document.querySelectorAll('.h1');
        if (heroWords.length >= 3) {
            heroWords[0].textContent = 'transformación.';
            heroWords[1].textContent = 'digital.';
            heroWords[2].textContent = 'integral.';
            
            // Update all sets
            const allWords = document.querySelectorAll('.single-h1-wrap .h1');
            if (allWords.length >= 9) {
                allWords[0].textContent = 'transformación.';
                allWords[1].textContent = 'digital.';
                allWords[2].textContent = 'integral.';
                allWords[3].textContent = 'transformación.';
                allWords[4].textContent = 'digital.';
                allWords[5].textContent = 'integral.';
                allWords[6].textContent = 'transformación.';
                allWords[7].textContent = 'digital.';
                allWords[8].textContent = 'integral.';
            }
        }
        
        // Update hero description
        const heroDescription = document.querySelector('.hero-paragraph p');
        if (heroDescription) {
            heroDescription.innerHTML = `Llevamos tu empresa al siguiente nivel tecnológico, desde tu primera web hasta automatización completa.<br/>
            Soluciones modulares, accesibles y a medida que te hacen vender más, trabajar mejor y ahorrar tiempo.`;
        }
        
        // Update hero number
        const heroNumber = document.querySelector('.hero-left-column .head-number');
        if (heroNumber) {
            heroNumber.textContent = '01.';
        }
    }
    
    function updateAboutSection() {
        // Update about section content
        const aboutBigText = document.querySelector('.about-wrap .big-text');
        if (aboutBigText) {
            aboutBigText.textContent = 'Acompañamos a empresas a modernizar su tecnología y procesos. Desde su primer sitio web hasta automatización avanzada y ciberseguridad. Integramos todo en un ecosistema cohesivo para que ganes tiempo, clientes y control sin depender de múltiples proveedores.';
        }
        
        // Update number
        const aboutNumber = document.querySelector('.about-wrap .head-number');
        if (aboutNumber) {
            aboutNumber.textContent = '02.';
        }
        
        // Update stats
        const projectText = document.querySelector('.about-tag .text-medium');
        if (projectText) {
            projectText.textContent = 'Empresas Transformadas';
        }
        
        const statsNumber = document.querySelector('.underline-lnk-text.very-big');
        if (statsNumber) {
            statsNumber.textContent = '150+';
        }
    }
    
    function updateWorksSection() {
        // Update works section number and title
        const worksNumber = document.querySelector('#works .head-number');
        if (worksNumber) {
            worksNumber.textContent = '03.';
        }
        
        const worksTitle = document.querySelector('#works h2');
        if (worksTitle) {
            worksTitle.textContent = 'nuestros pilares';
        }
        
        // Update portfolio cards to show our 3 pillars
        const portfolioCards = document.querySelectorAll('.portfolio-card');
        
        if (portfolioCards[0]) {
            const firstCard = portfolioCards[0].closest('._1st-portfolio-card');
            if (firstCard) {
                const title = firstCard.querySelector('.port-card-title');
                const tag = firstCard.querySelector('.port-card-tag');
                if (title) title.textContent = 'Presencia Digital';
                if (tag) tag.textContent = 'Tu primer paso hacia la digitalización completa';
            }
        }
        
        if (portfolioCards[1]) {
            const secondCard = portfolioCards[1].closest('._2nd-portfolio-card');
            if (secondCard) {
                const title = secondCard.querySelector('.port-card-title');
                const tag = secondCard.querySelector('.port-card-tag');
                if (title) title.textContent = 'Automatización';
                if (tag) tag.textContent = 'Eliminá tareas repetitivas y ganá tiempo valioso';
            }
        }
        
        const worksTwoCards = document.querySelectorAll('#works2 .portfolio-card');
        if (worksTwoCards[0]) {
            const thirdCard = worksTwoCards[0].closest('._3rd-portfolio-card');
            if (thirdCard) {
                const title = thirdCard.querySelector('.port-card-title');
                const tag = thirdCard.querySelector('.port-card-tag');
                if (title) title.textContent = 'Business Intelligence';
                if (tag) tag.textContent = 'Dashboards y reportes para decisiones basadas en datos';
            }
        }
    }
    
    function updateServiceSection() {
        // Update service section
        const serviceNumber = document.querySelector('#service .head-number');
        if (serviceNumber) {
            serviceNumber.textContent = '04.';
        }
        
        const serviceTitle = document.querySelector('#service h2');
        if (serviceTitle) {
            serviceTitle.textContent = 'nuestros servicios';
        }
        
        // Update service items
        const serviceItems = document.querySelectorAll('.single-service');
        
        if (serviceItems[0]) {
            const webDev = serviceItems[0];
            const title = webDev.querySelector('h3');
            if (title) title.textContent = 'desarrollo web';
            
            // Update service details
            const details = webDev.querySelectorAll('.service-detail-text');
            if (details[0]) details[0].textContent = 'React & JavaScript';
            if (details[1]) details[1].textContent = 'Diseño Responsive';
            if (details[2]) details[2].textContent = 'Optimización de Rendimiento';
            if (details[3]) details[3].textContent = 'PWA & Mobile First';
            if (details[4]) details[4].textContent = 'SEO Optimizado';
        }
        
        if (serviceItems[1]) {
            const automation = serviceItems[1];
            const title = automation.querySelector('h3');
            if (title) title.textContent = 'automatización';
            
            const details = automation.querySelectorAll('.service-detail-text');
            if (details[0]) details[0].textContent = 'Scripts Personalizados';
            if (details[1]) details[1].textContent = 'Automatización de Tareas';
            if (details[2]) details[2].textContent = 'Integraciones con APIs';
            if (details[3]) details[3].textContent = 'Reportes Automáticos';
            if (details[4]) details[4].textContent = 'Python & Node.js';
        }
        
        if (serviceItems[2]) {
            const optimization = serviceItems[2];
            const title = optimization.querySelector('h3');
            if (title) title.textContent = 'optimización';
            
            const details = optimization.querySelectorAll('.service-detail-text');
            if (details[0]) details[0].textContent = 'Optimización de Sitios';
            if (details[1]) details[1].textContent = 'Mejora de Procesos';
            if (details[2]) details[2].textContent = 'Reportes por Email';
            if (details[3]) details[3].textContent = 'Análisis de Datos';
        }
    }
    
    function updateTestimonialsSection() {
        // Change testimonials to technologies section
        const testimonialNumber = document.querySelector('#testimonial .head-number');
        if (testimonialNumber) {
            testimonialNumber.textContent = '05.';
        }
        
        const testimonialTitle = document.querySelector('#testimonial h2');
        if (testimonialTitle) {
            testimonialTitle.textContent = 'tecnologías que dominamos';
        }
        
        const whatsTheyAreSaying = document.querySelector('#testimonial .text-medium');
        if (whatsTheyAreSaying) {
            whatsTheyAreSaying.textContent = 'Stack moderno y confiable para impulsar tu negocio';
        }
        
        // Update testimonial cards to show technologies
        const testimonialCards = document.querySelectorAll('#testimonial .testimonial-card');
        
        const technologies = [
            { name: 'React & TypeScript', role: 'Interfaces Modernas', desc: 'Desarrollo robusto con las tecnologías más avanzadas del mercado.' },
            { name: 'Python & Node.js', role: 'Backend Escalable', desc: 'Sistemas backend potentes para automatización e integraciones.' },
            { name: 'PostgreSQL & MongoDB', role: 'Bases de Datos', desc: 'Gestión eficiente de datos con las mejores bases relacionales y NoSQL.' },
            { name: 'AWS & Docker', role: 'Cloud Computing', desc: 'Infraestructura moderna y escalable en la nube con contenedores.' }
        ];
        
        testimonialCards.forEach((card, index) => {
            if (technologies[index]) {
                const name = card.querySelector('.testimonial-name');
                const designation = card.querySelector('.testimonial-designaton');
                const paragraph = card.querySelector('.testimonial-paragraph em');
                
                if (name) name.textContent = technologies[index].name;
                if (designation) designation.textContent = technologies[index].role;
                if (paragraph) paragraph.textContent = `"${technologies[index].desc}"`;
            }
        });
    }
    
    function updateFAQSection() {
        // Update FAQ section
        const faqNumber = document.querySelector('#faq .head-number');
        if (faqNumber) {
            faqNumber.textContent = '06.';
        }
        
        const faqTitle = document.querySelector('#faq h2');
        if (faqTitle) {
            faqTitle.textContent = 'preguntas frecuentes';
        }
        
        // Update FAQ items
        const faqItems = document.querySelectorAll('#faq .accordion-item');
        
        const faqData = [
            {
                question: '¿Puedo empezar de a poco?',
                answer: 'Sí, absolutamente. Nuestras soluciones son modulares. Podés comenzar con un sitio web básico y luego ir agregando automatización, integraciones y más funcionalidades según tu crecimiento y necesidades.'
            },
            {
                question: '¿Qué pasa si no sé de tecnología?',
                answer: 'No te preocupes, ese es nuestro trabajo. Te acompañamos en todo el proceso con capacitación personalizada y soporte continuo. Explicamos todo en términos simples y te enseñamos a usar las herramientas de manera efectiva.'
            },
            {
                question: '¿Los precios están en pesos o dólares?',
                answer: 'Nuestros precios están en dólares americanos. Aceptamos pagos en pesos argentinos al tipo de cambio oficial del día de la facturación, y también transferencias internacionales.'
            },
            {
                question: '¿Qué incluye el diagnóstico gratuito?',
                answer: 'Analizamos tu negocio actual, identificamos oportunidades de digitalización, revisamos tu presencia online existente y te entregamos un reporte personalizado con recomendaciones específicas y un plan de acción.'
            },
            {
                question: '¿Dan soporte después de la implementación?',
                answer: 'Sí, incluimos soporte técnico continuo. Además del soporte incluido en cada plan, ofrecemos capacitación, actualizaciones y estamos disponibles para resolver cualquier consulta o problema que puedas tener.'
            },
            {
                question: '¿Con qué tipos de empresas trabajan?',
                answer: 'Trabajamos con empresas de todos los tamaños: desde emprendimientos que necesitan su primera web hasta empresas establecidas que buscan automatizar procesos. Nos especializamos en PyMEs y empresas en crecimiento.'
            }
        ];
        
        faqItems.forEach((item, index) => {
            if (faqData[index]) {
                const question = item.querySelector('.accordion-title');
                const answer = item.querySelector('.faq-paragraph');
                
                if (question) question.textContent = faqData[index].question;
                if (answer) answer.textContent = faqData[index].answer;
            }
        });
    }
    
    function updateContactSection() {
        // Update contact section
        const contactNumber = document.querySelector('#contact .head-number');
        if (contactNumber) {
            contactNumber.textContent = '07.';
        }
        
        const contactTitle = document.querySelector('#contact h2');
        if (contactTitle) {
            contactTitle.innerHTML = 'hablemos de tu<br/>proyecto tecnológico';
        }
        
        // Update contact info
        const phoneInfo = document.querySelector('#contact .contact-info:first-of-type .text-medium');
        if (phoneInfo) {
            phoneInfo.textContent = '+54 9 11 xxxx-xxxx';
        }
        
        const emailInfo = document.querySelector('#contact .contact-info:last-of-type .text-medium');
        if (emailInfo) {
            emailInfo.textContent = 'hola@digistrata.com';
        }
        
        // Update form labels
        const formLabels = document.querySelectorAll('#contact .form-label');
        const formPlaceholders = document.querySelectorAll('#contact .form-text-field');
        
        if (formLabels[0] && formPlaceholders[0]) {
            formLabels[0].textContent = 'Nombre';
            formPlaceholders[0].placeholder = 'Tu nombre';
        }
        if (formLabels[1] && formPlaceholders[1]) {
            formLabels[1].textContent = 'Apellido';
            formPlaceholders[1].placeholder = 'Tu apellido';
        }
        if (formLabels[2] && formPlaceholders[2]) {
            formLabels[2].textContent = 'Email';
            formPlaceholders[2].placeholder = 'tu@empresa.com';
        }
        if (formLabels[3] && formPlaceholders[3]) {
            formLabels[3].textContent = 'Teléfono';
            formPlaceholders[3].placeholder = '+54 9 11 xxxx-xxxx';
        }
        if (formLabels[4] && formPlaceholders[4]) {
            formLabels[4].textContent = 'Mensaje';
            formPlaceholders[4].placeholder = 'Contanos sobre tu proyecto y qué necesitás...';
        }
        
        const submitText = document.querySelector('#contact .contact-text');
        if (submitText) {
            submitText.textContent = 'Enviar Mensaje';
        }
        
        // Update success and error messages
        const successMessage = document.querySelector('#contact .success-message-text');
        if (successMessage) {
            successMessage.textContent = '��Gracias! Hemos recibido tu mensaje y te contactaremos pronto.';
        }
        
        const errorMessage = document.querySelector('#contact .error-message div');
        if (errorMessage) {
            errorMessage.textContent = 'Ups! Hubo un error al enviar el formulario. Por favor intentá nuevamente.';
        }
    }
});
