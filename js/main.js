(function() {
    'use strict';

    const products = [
        { id: 1, name: 'Louis Vuitton', category: 'shoes', price: 2500, image: 'images/louis-vuitton.jpeg', badge: 'Premium' },
        { id: 2, name: 'Nike Air', category: 'shoes', price: 2500, image: 'images/nike-air.jpeg', badge: 'Best Seller' },
        { id: 3, name: 'Adidas', category: 'shoes', price: 2000, image: 'images/adidas.jpeg', badge: 'Trending' },
        { id: 4, name: 'Black Nike Air', category: 'shoes', price: 2500, image: 'images/black-nike-air.jpeg', badge: 'Popular' },
        { id: 5, name: 'White Nike Air', category: 'shoes', price: 2500, image: 'images/white-nike-air.jpeg', badge: 'New' },
        { id: 6, name: 'White Jersey', category: 'jerseys', price: 300, image: 'images/white-jersey.jpeg', badge: null },
        { id: 7, name: 'Black Jersey', category: 'jerseys', price: 300, image: 'images/black-jersey.jpeg', badge: 'Popular' },
        { id: 8, name: 'Red Jersey', category: 'jerseys', price: 300, image: 'images/red-jersey.jpeg', badge: null },
        { id: 9, name: 'Brown Leather Jacket', category: 'jackets', price: 1500, image: 'images/brown-leather-jacket.jpeg', badge: 'Premium' },
        { id: 10, name: 'Marine Leather Jacket', category: 'jackets', price: 1500, image: 'images/marine-leather-jacket.jpeg', badge: null },
        { id: 11, name: 'Black Leather Jacket', category: 'jackets', price: 1500, image: 'images/black-leather-jacket.jpeg', badge: 'Trending' },
        { id: 12, name: 'Fashion Pants (Green)', category: 'clothing', price: 1000, image: 'images/fashion-pants-green.jpeg', badge: null },
        { id: 13, name: 'Fashion Pants (Black)', category: 'clothing', price: 1000, image: 'images/fashion-pants-black.jpeg', badge: null },
        { id: 14, name: 'Fashion Pants (Blue)', category: 'clothing', price: 1000, image: 'images/fashion-pants-blue.jpeg', badge: null },
        { id: 15, name: 'Sweatpants', category: 'clothing', price: 500, image: 'images/sweatpants.jpeg', badge: 'Budget' },
        { id: 16, name: 'Baby Clothes Set', category: 'clothing', price: 1500, image: 'images/baby-clothes-set.jpeg', badge: 'New' },
        { id: 17, name: 'Hoodie', category: 'clothing', price: 1000, image: 'images/hoodie.jpeg', badge: 'Popular' },
        { id: 18, name: 'Hoodie (Red)', category: 'clothing', price: 1000, image: 'images/hoodie-red.jpeg', badge: null },
        { id: 19, name: 'Hoodie (White)', category: 'clothing', price: 1000, image: 'images/hoodie-white.jpeg', badge: null },
        { id: 20, name: 'Hoodie (Black)', category: 'clothing', price: 1000, image: 'images/hoodie-black.jpeg', badge: null }
    ];

    const productsGrid = document.getElementById('products-grid');
    const filterTabs = document.querySelectorAll('.filter-tab');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    const header = document.getElementById('header');

    let currentFilter = 'all';

    function formatPrice(price) {
        return 'KES ' + price.toLocaleString();
    }

    function createProductCard(product) {
        const card = document.createElement('article');
        card.className = 'product-card';
        card.dataset.category = product.category;
        card.setAttribute('role', 'listitem');

        const badgeHtml = product.badge ? `<span class="product-badge">${product.badge}</span>` : '';

        card.innerHTML = `
            <div class="product-image">
                ${badgeHtml}
                <img src="${product.image}" alt="${product.name}" loading="lazy" width="400" height="400">
            </div>
            <div class="product-info">
                <span class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">${formatPrice(product.price)}</div>
            </div>
        `;

        return card;
    }

    function renderProducts(filter = 'all') {
        currentFilter = filter;
        const filteredProducts = filter === 'all' ? products : products.filter(p => p.category === filter);

        productsGrid.innerHTML = '';

        filteredProducts.forEach((product, index) => {
            const card = createProductCard(product);
            card.style.animationDelay = `${index * 50}ms`;
            card.classList.add('fade-in');
            productsGrid.appendChild(card);
        });

        updateFilterTabs(filter);
    }

    function updateFilterTabs(activeFilter) {
        filterTabs.forEach(tab => {
            const isActive = tab.dataset.filter === activeFilter;
            tab.classList.toggle('active', isActive);
            tab.setAttribute('aria-selected', isActive);
        });
    }

    function handleFilterClick(e) {
        const tab = e.target.closest('.filter-tab');
        if (!tab) return;

        const filter = tab.dataset.filter;
        renderProducts(filter);
    }

    function toggleMobileMenu() {
        const isActive = mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        mobileMenuBtn.setAttribute('aria-expanded', isActive);
        document.body.style.overflow = isActive ? 'hidden' : '';
    }

    function closeMobileMenu() {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }

    function handleScroll() {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    function handleNavLinkClick(e) {
        const link = e.target.closest('.nav-link');
        if (!link) return;

        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
            closeMobileMenu();
        }
    }

    function handleFooterLinkClick(e) {
        const link = e.target.closest('a[data-filter]');
        if (!link) return;

        e.preventDefault();
        const filter = link.dataset.filter;
        const productsSection = document.getElementById('products');
        if (productsSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = productsSection.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            setTimeout(() => renderProducts(filter), 300);
        }
    }

    function handleKeyDown(e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    }

    function init() {
        renderProducts('all');

        filterTabs.forEach(tab => {
            tab.addEventListener('click', handleFilterClick);
            tab.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    tab.click();
                }
            });
        });

        mobileMenuBtn.addEventListener('click', toggleMobileMenu);

        navLinks.addEventListener('click', handleNavLinkClick);

        document.querySelectorAll('.footer-links').forEach(el => {
            el.addEventListener('click', handleFooterLinkClick);
        });

        window.addEventListener('scroll', handleScroll, { passive: true });

        document.addEventListener('keydown', handleKeyDown);

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const headerHeight = header.offsetHeight;
                        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
                        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                    }
                }
            });
        });

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in, .product-card, .feature-card').forEach(el => {
            observer.observe(el);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();