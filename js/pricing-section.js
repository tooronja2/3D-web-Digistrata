// Pricing Section Dynamic Injection
document.addEventListener('DOMContentLoaded', function() {
    // Find the FAQ section
    const faqSection = document.querySelector('#faq');

    if (faqSection) {
        // Create the pricing section HTML
        const pricingHTML = `
            <section class="section pricing" id="pricing">
                <div class="w-layout-blockcontainer container w-container">
                    <div class="pricing-wrap">
                        <div class="pricing-content">
                            <div class="pricing-title">
                                <div class="inner-head-wrap">
                                    <h2 class="pricing-heading">¿En qué estás interesado?</h2>
                                    <div class="pricing-tabs">
                                        <div class="pricing-tab active" data-tab="desarrollo-web">Desarrollo Web</div>
                                        <div class="pricing-tab" data-tab="automatizacion">Automatización</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Development Web Plans -->
                            <div class="pricing-plans active" id="desarrollo-web-content">
                                <h3 class="pricing-section-title">Desarrollo web:</h3>
                                <div class="pricing-grid development-web">
                                    <div class="pricing-card">
                                        <div class="pricing-card-header">
                                            <h4 class="pricing-plan-title">Pago Único</h4>
                                            <div class="pricing-badge">Incluye todo lo que necesitas:</div>
                                            <div class="pricing-subtitle">Sitio web profesional sin mensualidad</div>
                                        </div>
                                        <div class="pricing-amount">
                                            <div class="setup-price">
                                                <span class="price-label">Setup:</span>
                                                <span class="price-value">$110</span>
                                            </div>
                                            <div class="monthly-price">
                                                <span class="price-label">Mensual:</span>
                                                <span class="price-value">$0/mes</span>
                                            </div>
                                        </div>
                                        <ul class="pricing-features">
                                            <li class="included">Sitio web responsivo & PWA</li>
                                            <li class="included">Catálogo digital de productos/servicios</li>
                                            <li class="included">Formulario de contacto integrado con WhatsApp</li>
                                            <li class="included">Gestión de promociones y galería</li>
                                            <li class="included">Google My Business configurado y optimizado</li>
                                            <li class="included">Analytics & reportes básicos</li>
                                            <li class="included">SEO on-page optimizado</li>
                                            <li class="included">Integración con redes sociales</li>
                                            <li class="excluded">Mantenimiento web mensual</li>
                                            <li class="excluded">Conexión a base de datos</li>
                                            <li class="excluded">Sección 'Novedades' actualizable</li>
                                            <li class="excluded">Actualización de Google My Business</li>
                                            <li class="excluded">Soporte técnico</li>
                                            <li class="excluded">Gestión completa de contenido web</li>
                                            <li class="excluded">Optimización continua de Google My Business</li>
                                            <li class="excluded">Reportes mensuales de rendimiento</li>
                                            <li class="excluded">Actualizaciones de productos/servicios</li>
                                            <li class="excluded">Estrategia de presencia digital</li>
                                            <li class="excluded">Soporte prioritario</li>
                                        </ul>
                                        <button class="pricing-button">Elegir Plan</button>
                                    </div>
                                    <div class="pricing-card">
                                        <div class="pricing-card-header">
                                            <h4 class="pricing-plan-title">Básico</h4>
                                            <div class="pricing-badge">Todo del plan anterior MÁS:</div>
                                            <div class="pricing-subtitle">Sitio web con mantenimiento incluido</div>
                                        </div>
                                        <div class="pricing-amount">
                                            <div class="setup-price">
                                                <span class="price-label">Setup:</span>
                                                <span class="price-value">$110</span>
                                            </div>
                                            <div class="monthly-price">
                                                <span class="price-label">Mensual:</span>
                                                <span class="price-value">$40/mes</span>
                                            </div>
                                        </div>
                                        <ul class="pricing-features">
                                            <li class="included">Sitio web responsivo & PWA</li>
                                            <li class="included">Catálogo digital de productos/servicios</li>
                                            <li class="included">Formulario de contacto integrado con WhatsApp</li>
                                            <li class="included">Gestión de promociones y galería</li>
                                            <li class="included">Google My Business configurado y optimizado</li>
                                            <li class="included">Analytics & reportes básicos</li>
                                            <li class="included">SEO on-page optimizado</li>
                                            <li class="included">Integración con redes sociales</li>
                                            <li class="included">Mantenimiento web mensual</li>
                                            <li class="included">Conexión a base de datos</li>
                                            <li class="included">Sección 'Novedades' actualizable</li>
                                            <li class="included">Actualización de Google My Business</li>
                                            <li class="included">Soporte técnico</li>
                                            <li class="excluded">Gestión completa de contenido web</li>
                                            <li class="excluded">Optimización continua de Google My Business</li>
                                            <li class="excluded">Reportes mensuales de rendimiento</li>
                                            <li class="excluded">Actualizaciones de productos/servicios</li>
                                            <li class="excluded">Estrategia de presencia digital</li>
                                            <li class="excluded">Soporte prioritario</li>
                                        </ul>
                                        <button class="pricing-button">Elegir Plan</button>
                                    </div>
                                    <div class="pricing-card featured">
                                        <div class="pricing-card-header">
                                            <h4 class="pricing-plan-title">Crecimiento</h4>
                                            <div class="pricing-badge">Todo del plan anterior MÁS:</div>
                                            <div class="pricing-subtitle">Solución completa para hacer crecer tu negocio</div>
                                        </div>
                                        <div class="pricing-amount">
                                            <div class="setup-price">
                                                <span class="price-label">Setup:</span>
                                                <span class="price-value">$135</span>
                                            </div>
                                            <div class="monthly-price">
                                                <span class="price-label">Mensual:</span>
                                                <span class="price-value">$80/mes</span>
                                            </div>
                                        </div>
                                        <ul class="pricing-features">
                                            <li class="included">Sitio web responsivo & PWA</li>
                                            <li class="included">Catálogo digital de productos/servicios</li>
                                            <li class="included">Formulario de contacto integrado con WhatsApp</li>
                                            <li class="included">Gestión de promociones y galería</li>
                                            <li class="included">Google My Business configurado y optimizado</li>
                                            <li class="included">Analytics & reportes básicos</li>
                                            <li class="included">SEO on-page optimizado</li>
                                            <li class="included">Integración con redes sociales</li>
                                            <li class="included">Mantenimiento web mensual</li>
                                            <li class="included">Conexión a base de datos</li>
                                            <li class="included">Sección 'Novedades' actualizable</li>
                                            <li class="included">Actualización de Google My Business</li>
                                            <li class="included">Soporte técnico</li>
                                            <li class="included">Gestión completa de contenido web</li>
                                            <li class="included">Optimización continua de Google My Business</li>
                                            <li class="included">Reportes mensuales de rendimiento</li>
                                            <li class="included">Actualizaciones de productos/servicios</li>
                                            <li class="included">Estrategia de presencia digital</li>
                                            <li class="included">Soporte prioritario</li>
                                        </ul>
                                        <button class="pricing-button">Elegir Plan</button>
                                    </div>
                                </div>
                                <div class="pricing-custom">
                                    <h3 class="custom-title">¿Necesitas algo personalizado?</h3>
                                    <p class="custom-description">Integramos todo en un solo ecosistema digital para que ganes tiempo, clientes y control sin depender de múltiples proveedores.</p>
                                    <button class="custom-button">Solicitar Custom</button>
                                </div>
                            </div>

                            <!-- Automation Plans -->
                            <div class="pricing-plans" id="automatizacion-content">
                                <h3 class="pricing-section-title">Automatización:</h3>
                                <div class="pricing-grid automation">
                                    <div class="pricing-card">
                                        <div class="pricing-card-header">
                                            <h4 class="pricing-plan-title">Básico</h4>
                                            <div class="pricing-subtitle">Automatización básica para pequeñas empresas</div>
                                        </div>
                                        <div class="pricing-amount">
                                            <div class="setup-price">
                                                <span class="price-label">Setup:</span>
                                                <span class="price-value">$150</span>
                                            </div>
                                            <div class="monthly-price">
                                                <span class="price-label">Mensual:</span>
                                                <span class="price-value">$85/mes</span>
                                            </div>
                                        </div>
                                        <ul class="pricing-features">
                                            <li class="included">Dashboards visuales simples</li>
                                            <li class="included">Automatización de tareas diarias</li>
                                            <li class="included">Integraciones con herramientas populares</li>
                                            <li class="included">Reportes automáticos por email</li>
                                            <li class="included">Scripts personalizados</li>
                                            <li class="excluded">Web scraping automático</li>
                                            <li class="excluded">Análisis de datos básico</li>
                                            <li class="excluded">Notificaciones automáticas</li>
                                        </ul>
                                        <button class="pricing-button">Elegir Plan</button>
                                    </div>
                                    <div class="pricing-card featured">
                                        <div class="pricing-card-header">
                                            <h4 class="pricing-plan-title">Avanzado</h4>
                                            <div class="pricing-subtitle">Automatización completa con análisis de datos</div>
                                        </div>
                                        <div class="pricing-amount">
                                            <div class="setup-price">
                                                <span class="price-label">Setup:</span>
                                                <span class="price-value">$180</span>
                                            </div>
                                            <div class="monthly-price">
                                                <span class="price-label">Mensual:</span>
                                                <span class="price-value">$135/mes</span>
                                            </div>
                                        </div>
                                        <ul class="pricing-features">
                                            <li class="included">Dashboards visuales simples</li>
                                            <li class="included">Automatización de tareas diarias</li>
                                            <li class="included">Integraciones con herramientas populares</li>
                                            <li class="included">Reportes automáticos por email</li>
                                            <li class="included">Scripts personalizados</li>
                                            <li class="included">Web scraping automático</li>
                                            <li class="included">Análisis de datos básico</li>
                                            <li class="included">Notificaciones automáticas</li>
                                        </ul>
                                        <button class="pricing-button">Elegir Plan</button>
                                    </div>
                                </div>
                                <div class="pricing-custom">
                                    <h3 class="custom-title">¿Necesitas algo personalizado?</h3>
                                    <p class="custom-description">Integramos todo en un solo ecosistema digital para que ganes tiempo, clientes y control sin depender de múltiples proveedores.</p>
                                    <button class="custom-button">Solicitar Custom</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;

        // Insert the pricing section before the FAQ section
        faqSection.insertAdjacentHTML('beforebegin', pricingHTML);

        // Add event listeners for tab switching
        const tabs = document.querySelectorAll('.pricing-tab');
        const planSections = document.querySelectorAll('.pricing-plans');

        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                tabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                this.classList.add('active');

                // Hide all plan sections
                planSections.forEach(section => section.classList.remove('active'));

                // Show the corresponding plan section
                const tabType = this.getAttribute('data-tab');
                const targetSection = document.querySelector(`#${tabType}-content`);
                if (targetSection) {
                    targetSection.classList.add('active');
                }
            });
        });

        // Add smooth scrolling for pricing link
        const pricingLink = document.querySelector('a[href="#pricing"]');
        if (pricingLink) {
            pricingLink.addEventListener('click', function(e) {
                e.preventDefault();
                const pricingSection = document.querySelector('#pricing');
                if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }

        // Auto-scroll animation for development web plans
        function autoScrollPlans() {
            const developmentGrid = document.querySelector('.pricing-grid.development-web');
            if (developmentGrid && window.innerWidth > 768) {
                let scrollAmount = 0;
                const scrollStep = 1;
                const maxScroll = developmentGrid.scrollWidth - developmentGrid.clientWidth;

                const scroll = () => {
                    scrollAmount += scrollStep;
                    if (scrollAmount >= maxScroll) {
                        scrollAmount = 0;
                    }
                    developmentGrid.scrollLeft = scrollAmount;
                };

                // Start auto-scroll when development web tab is active
                const developmentTab = document.querySelector('[data-tab="desarrollo-web"]');
                if (developmentTab && developmentTab.classList.contains('active')) {
                    const scrollInterval = setInterval(scroll, 50);

                    // Stop auto-scroll on user interaction
                    developmentGrid.addEventListener('mouseenter', () => clearInterval(scrollInterval));
                    developmentGrid.addEventListener('touchstart', () => clearInterval(scrollInterval));
                }
            }
        }

        // Initialize auto-scroll after a delay
        setTimeout(autoScrollPlans, 3000);
    }
});
