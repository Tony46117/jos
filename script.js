const products = [
    { id: 1, name: "Wa-Jose Pro Max", description: "Flagship smartwatch with titanium case and sapphire crystal", price: "KES 2,850", badge: "Best Seller", image: "images/product-1.jpeg" },
    { id: 2, name: "Wa-Jose Elite", description: "Premium fitness tracker with advanced health monitoring", price: "KES 2,200", badge: "New", image: "images/product-2.jpeg" },
    { id: 3, name: "Wa-Jose Ultra", description: "Rugged outdoor smartwatch with 30-day battery", price: "KES 2,650", badge: "Popular", image: "images/product-3.jpeg" },
    { id: 4, name: "Wa-Jose Lite", description: "Lightweight everyday smartwatch with essential features", price: "KES 1,200", badge: "", image: "images/product-4.jpeg" },
    { id: 5, name: "Wa-Jose Sport", description: "Sports-focused wearable with GPS and HR monitoring", price: "KES 1,650", badge: "Sale", image: "images/product-5.jpeg" },
    { id: 6, name: "Wa-Jose Classic", description: "Timeless design meets modern technology", price: "KES 1,950", badge: "", image: "images/product-6.jpeg" },
    { id: 7, name: "Wa-Jose Mini", description: "Compact smartwatch for smaller wrists", price: "KES 1,350", badge: "New", image: "images/product-7.jpeg" },
    { id: 8, name: "Wa-Jose Hybrid", description: "Analog-digital hybrid with smart features", price: "KES 1,800", badge: "", image: "images/product-8.jpeg" },
    { id: 9, name: "Wa-Jose Kids", description: "Safe and fun smartwatch for children", price: "KES 950", badge: "", image: "images/product-9.jpeg" },
    { id: 10, name: "Wa-Jose Solar", description: "Solar-powered smartwatch with unlimited battery", price: "KES 2,400", badge: "Eco", image: "images/product-10.jpeg" },
    { id: 11, name: "Wa-Jose Dive", description: "Professional dive computer and smartwatch", price: "KES 2,750", badge: "Pro", image: "images/product-11.jpeg" },
    { id: 12, name: "Wa-Jose Golf", description: "Golf-specific smartwatch with course maps", price: "KES 2,100", badge: "", image: "images/product-12.jpeg" },
    { id: 13, name: "Wa-Jose Trek", description: "Adventure smartwatch with topographic maps", price: "KES 2,300", badge: "New", image: "images/product-13.jpeg" },
    { id: 14, name: "Wa-Jose Pulse", description: "Health-focused tracker with ECG and SpO2", price: "KES 1,750", badge: "", image: "images/product-14.jpeg" },
    { id: 15, name: "Wa-Jose Air", description: "Ultra-light titanium smartwatch at 28g", price: "KES 2,050", badge: "Lightweight", image: "images/product-15.jpeg" },
    { id: 16, name: "Wa-Jose Steel", description: "Surgical-grade stainless steel with ceramic bezel", price: "KES 2,500", badge: "", image: "images/product-16.jpeg" },
    { id: 17, name: "Wa-Jose Fit", description: "Fitness band with 14-day battery life", price: "KES 750", badge: "Bestseller", image: "images/product-17.jpeg" },
    { id: 18, name: "Wa-Jose Pro", description: "Professional multisport GPS watch", price: "KES 2,700", badge: "Pro", image: "images/product-18.jpeg" },
    { id: 19, name: "Wa-Jose Wave", description: "Swim-proof tracker with stroke detection", price: "KES 1,250", badge: "", image: "images/product-19.jpeg" },
    { id: 20, name: "Wa-Jose Zen", description: "Mindfulness-focused wearable with stress tracking", price: "KES 1,450", badge: "Wellness", image: "images/product-20.jpeg" }
];

let displayedProducts = 8;
const productsPerLoad = 4;

function createProductCard(product) {
    return `
        <article class="product-card" style="animation-delay: ${Math.random() * 0.3}s">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" decoding="async">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">${product.price}</span>
                    <a href="#" class="product-link">
                        View Details
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </a>
                </div>
            </div>
        </article>
    `;
}

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const productsToShow = products.slice(0, displayedProducts);
    grid.innerHTML = productsToShow.map(createProductCard).join('');

    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (displayedProducts >= products.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
    }
}

function loadMoreProducts() {
    displayedProducts += productsPerLoad;
    renderProducts();
}

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.querySelector('.nav');

    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });
}

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;

        btn.textContent = 'Sending...';
        btn.disabled = true;

        setTimeout(() => {
            btn.textContent = 'Message Sent!';
            btn.style.backgroundColor = '#28a745';

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
                btn.disabled = false;
                form.reset();
            }, 2000);
        }, 1500);
    });
}

function initHeroImageRotation() {
    const heroImage = document.getElementById('heroImage');
    if (!heroImage) return;

    const heroImages = Array.from({ length: 5 }, (_, i) => `images/product-${i + 1}.jpeg`);
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % heroImages.length;
        heroImage.style.opacity = '0';
        setTimeout(() => {
            heroImage.src = heroImages[currentIndex];
            heroImage.style.opacity = '1';
        }, 300);
    }, 5000);
}

function initScrollAnimations() {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-header, .contact-form, .contact-info, .info-item, .footer-column').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

function initHeaderScroll() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

function initCallButton() {
    const callBtn = document.querySelector('.call-float');
    if (!callBtn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            callBtn.classList.add('visible');
        } else {
            callBtn.classList.remove('visible');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    initMobileMenu();
    initSmoothScroll();
    initContactForm();
    initHeroImageRotation();
    initScrollAnimations();
    initHeaderScroll();
    initCallButton();

    document.getElementById('loadMoreBtn').addEventListener('click', loadMoreProducts);
});