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
                            <div class="pricing-plans" id="desarrollo-web-content">
                                <h3 class="pricing-section-title">Desarrollo web:</h3>
                                <div class="pricing-grid">
                                    <div class="pricing-card">
                                        <div class="pricing-card-header">
                                            <h4 class="pricing-plan-title">Pago Único</h4>
                                            <div class="pricing-badge">✅ Incluye todo lo que necesitas:</div>
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
                                            <li>Sitio web responsivo & PWA</li>
                                            <li>Catálogo digital de productos/servicios</li>
                                            <li>Formulario de contacto integrado con WhatsApp</li>
                                            <li>Gestión de promociones y galería</li>
                                            <li>Google My Business configurado y optimizado</li>
                                            <li>Analytics & reportes básicos</li>
                                            <li>SEO on-page optimizado</li>
                                            <li>Integración con redes sociales</li>
                                            <li>Mantenimiento web mensual</li>
                                            <li>Conexión a base de datos</li>
                                            <li>Sección 'Novedades' actualizable</li>
                                            <li>Actualización de Google My Business</li>
                                            <li>Soporte técnico</li>
                                            <li>Gestión completa de contenido web</li>
                                            <li>Optimización continua de Google My Business</li>
                                            <li>Reportes mensuales de rendimiento</li>
                                            <li>Actualizaciones de productos/servicios</li>
                                            <li>Estrategia de presencia digital</li>
                                            <li>Soporte prioritario</li>
                                        </ul>
                                        <button class="pricing-button">Elegir Plan</button>
                                    </div>
                                    <div class="pricing-card">
                                        <div class="pricing-card-header">
                                            <h4 class="pricing-plan-title">Básico</h4>
                                            <div class="pricing-badge">✅ Todo del plan anterior MÁS:</div>
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
                                            <li>Sitio web responsivo & PWA</li>
                                            <li>Catálogo digital de productos/servicios</li>
                                            <li>Formulario de contacto integrado con WhatsApp</li>
                                            <li>Gestión de promociones y galería</li>
                                            <li>Google My Business configurado y optimizado</li>
                                            <li>Analytics & reportes básicos</li>
                                            <li>SEO on-page optimizado</li>
                                            <li>Integración con redes sociales</li>
                                            <li>Mantenimiento web mensual</li>
                                            <li>Conexión a base de datos</li>
                                            <li>Sección 'Novedades' actualizable</li>
                                            <li>Actualización de Google My Business</li>
                                            <li>Soporte técnico</li>
                                            <li>Gestión completa de contenido web</li>
                                            <li>Optimización continua de Google My Business</li>
                                            <li>Reportes mensuales de rendimiento</li>
                                            <li>Actualizaciones de productos/servicios</li>
                                            <li>Estrategia de presencia digital</li>
                                            <li>Soporte prioritario</li>
                                        </ul>
                                        <button class="pricing-button">Elegir Plan</button>
                                    </div>
                                    <div class="pricing-card featured">
                                        <div class="pricing-card-header">
                                            <h4 class="pricing-plan-title">Crecimiento</h4>
                                            <div class="pricing-badge">✅ Todo del plan anterior MÁS:</div>
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
                                            <li>Sitio web responsivo & PWA</li>
                                            <li>Catálogo digital de productos/servicios</li>
                                            <li>Formulario de contacto integrado con WhatsApp</li>
                                            <li>Gestión de promociones y galería</li>
                                            <li>Google My Business configurado y optimizado</li>
                                            <li>Analytics & reportes básicos</li>
                                            <li>SEO on-page optimizado</li>
                                            <li>Integración con redes sociales</li>
                                            <li>Mantenimiento web mensual</li>
                                            <li>Conexión a base de datos</li>
                                            <li>Sección 'Novedades' actualizable</li>
                                            <li>Actualización de Google My Business</li>
                                            <li>Soporte técnico</li>
                                            <li>Gestión completa de contenido web</li>
                                            <li>Optimización continua de Google My Business</li>
                                            <li>Reportes mensuales de rendimiento</li>
                                            <li>Actualizaciones de productos/servicios</li>
                                            <li>Estrategia de presencia digital</li>
                                            <li>Soporte prioritario</li>
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
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                tabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                this.classList.add('active');
                
                // Here you can add logic to show/hide content based on the tab
                const tabType = this.getAttribute('data-tab');
                console.log('Tab clicked:', tabType);
                
                // For now, we only show the desarrollo-web content
                // You can extend this to show different content for automatizacion
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
    }
});
