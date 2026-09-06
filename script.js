const WHATSAPP_NUMBER = '254736671873';

const whatsappIconSVG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>`;

const products = [
    {
        id: 1,
        name: "Airforce Shoes",
        description: "Classic Airforce sneakers, comfortable and durable for everyday wear",
        price: "KES 2,500",
        badge: "Popular",
        image: "images/product-1.jpeg"
    },
    {
        id: 2,
        name: "Adidas Shoes",
        description: "Premium Adidas sneakers with iconic three-stripe design",
        price: "KES 2,500",
        badge: "Trending",
        image: "images/product-2.jpeg"
    },
    {
        id: 3,
        name: "Brown Leather Jacket",
        description: "Genuine brown leather jacket, stylish and rugged",
        price: "KES 1,500",
        badge: "Premium",
        image: "images/product-3.jpeg"
    },
    {
        id: 4,
        name: "Simple Leather Jacket",
        description: "Sleek minimalist leather jacket for a clean look",
        price: "KES 1,500",
        badge: "",
        image: "images/product-4.jpeg"
    },
    {
        id: 5,
        name: "Elite Performance Jersey",
        description: "High-performance sports jersey, breathable and lightweight",
        price: "KES 300",
        badge: "",
        image: "images/product-5.jpeg"
    },
    {
        id: 6,
        name: "Champion Team Jersey",
        description: "Champion-style team jersey, bold design and great fit",
        price: "KES 300",
        badge: "",
        image: "images/product-6.jpeg"
    },
    {
        id: 7,
        name: "Cycling Team Jersey",
        description: "Aerodynamic cycling jersey with moisture-wicking fabric",
        price: "KES 300",
        badge: "",
        image: "images/product-7.jpeg"
    },
    {
        id: 8,
        name: "Soccer Pro Jersey",
        description: "Professional soccer jersey, durable and comfortable on the field",
        price: "KES 300",
        badge: "",
        image: "images/product-8.jpeg"
    },
    {
        id: 9,
        name: "Compression Leggings",
        description: "High-quality compression leggings for sports and training",
        price: "KES 1,200",
        badge: "",
        image: "images/product-9.jpeg"
    },
    {
        id: 10,
        name: "Nike Air Max",
        description: "Iconic Nike Air Max with visible air cushioning",
        price: "KES 2,500",
        badge: "Best Seller",
        image: "images/product-10.jpeg"
    },
    {
        id: 11,
        name: "Puma Sneakers",
        description: "Sporty Puma sneakers, lightweight and comfortable",
        price: "KES 2,500",
        badge: "",
        image: "images/product-11.jpeg"
    },
    {
        id: 12,
        name: "Running Shoes",
        description: "Performance running shoes with responsive cushioning",
        price: "KES 2,500",
        badge: "New",
        image: "images/product-12.jpeg"
    },
    {
        id: 13,
        name: "Formal Leather Shoes",
        description: "Elegant formal leather shoes for office and events",
        price: "KES 1,800",
        badge: "",
        image: "images/product-13.jpeg"
    },
    {
        id: 14,
        name: "Training Shoes",
        description: "Versatile training shoes for gym and outdoor workouts",
        price: "KES 2,500",
        badge: "",
        image: "images/product-14.jpeg"
    },
    {
        id: 15,
        name: "Canvas Sneakers",
        description: "Casual canvas sneakers, perfect for everyday outings",
        price: "KES 1,000",
        badge: "Budget",
        image: "images/product-15.jpeg"
    },
    {
        id: 16,
        name: "Baseball Jacket",
        description: "Classic baseball-style jacket with ribbed cuffs",
        price: "KES 1,500",
        badge: "",
        image: "images/product-16.jpeg"
    },
    {
        id: 17,
        name: "Track Pants",
        description: "Comfortable track pants with zip pockets",
        price: "KES 1,200",
        badge: "",
        image: "images/product-17.jpeg"
    },
    {
        id: 18,
        name: "Sports Hoodie",
        description: "Warm sports hoodie with kangaroo pocket",
        price: "KES 1,000",
        badge: "Cozy",
        image: "images/product-18.jpeg"
    },
    {
        id: 19,
        name: "Training Shorts",
        description: "Lightweight training shorts with built-in liner",
        price: "KES 800",
        badge: "",
        image: "images/product-19.jpeg"
    },
    {
        id: 20,
        name: "Soccer Cleats",
        description: "Professional soccer cleats with superior grip",
        price: "KES 2,500",
        badge: "Pro",
        image: "images/product-20.jpeg"
    }
];

let displayedProducts = 8;
const productsPerLoad = 4;

function createProductCard(product) {
    const waMessage = encodeURIComponent(`Hi! I'm interested in the ${product.name} (${product.price}). Is it available?`);
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;

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
                </div>
                <a href="${waLink}" class="whatsapp-btn" target="_blank" rel="noopener noreferrer">
                    ${whatsappIconSVG}
                    Order on WhatsApp
                </a>
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
