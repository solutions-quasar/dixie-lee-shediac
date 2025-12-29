const CONFIG = {
    business: {
        name: "Dixie Lee",
        location: "Shediac",
        logoIcon: "assets/logo.png",
        logoWordmark: "assets/logo_wordmark.png",
        tagline: "The best fried chicken in town!",
        phone: "(506) 532-8060",
        address: "366 Main Street, Shediac, NB, Canada",
        email: "",
        priceRange: "$$",
        social: {
            facebook: "https://www.facebook.com/dixieleeshediac/",
            messenger: "https://m.me/dixieleeshediac"
        },
        orderingUrl: "https://clover.com/online-ordering/dixie-lee-shediac-shediac",
        mapUrl: "https://www.google.com/maps/dir/?api=1&destination=366%20Main%20Street%2C%20Shediac%2C%20NB",
        hours: [
            { day: "Mon - Thu", time: "11:00 AM - 8:00 PM" },
            { day: "Fri - Sat", time: "11:00 AM - 9:00 PM" },
            { day: "Sun", time: "11:00 AM - 8:00 PM" }
        ]
    },
    hero: {
        title: "Fried chicken in Shediac.",
        subtitle: "Order online for quick pickup on Main Street.",
        ctaLabel: "Order Online",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1920&auto=format&fit=crop" // Premium Fried Chicken Placeholder
    },
    specials: {
        title: "Weekly Specials",
        items: [
            {
                title: "Tuesday Special",
                description: "The classic 2-Piece Snack. Crispy chicken and fries at a special weekly price.",
                icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v20M2 12h20" stroke-linecap="round"/></svg>`
            },
            {
                title: "Family Sunday",
                description: "Feed the whole crew with our Sundy Barrel discount. Perfect for family gatherings.",
                icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`
            },
            {
                title: "Lunch Box",
                description: "Available daily 11am - 2pm. 3 pieces of chicken, small fries, and a 12oz drink.",
                icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
            }
        ]
    },
    reviews: {
        trustBadge: "Recommended by 96% (17 reviews)",
        items: [
            { text: "ADD REAL REVIEW", author: "Verified Customer" },
            { text: "ADD REAL REVIEW", author: "Verified Customer" }
        ],
        accentImage: "assets/reviews_texture.webp"
    },
    whyChooseUs: [
        { title: "Fast pickup", description: "Minimal wait times for your online orders." },
        { title: "Consistent quality", description: "That signature Dixie Lee crunch, every time." },
        { title: "Great value ($$)", description: "Premium fried chicken at a fair price." },
        { title: "Main Street location", description: "Conveniently located in the heart of Shediac." }
    ],
    menu: [
        {
            category: "Family Meal",
            items: [
                { name: "Family Bucket", desc: "12 pcs chicken, Large Fry, 4 Rolls, 12oz Coleslaw, 12oz Macaroni Salad, 2L Pop" },
                { name: "Family Barrel", desc: "20 pcs chicken, Family Fry, 12oz Coleslaw, 12oz Macaroni Salad, 12oz Dixie Sauce, 2L Pop" }
            ]
        },
        {
            category: "Chicken",
            items: [
                { name: "Chicken Dinner", desc: "3pcs, Fries, Salad, Dixie Sauce, Roll" },
                { name: "Econo Chicken Dinner", desc: "2pcs, Fries, Salad, Dixie Sauce, Roll" },
                { name: "Chicken Snack", desc: "2pcs and Fries" },
                { name: "Junior Chicken Snack", desc: "1pc and Fries" },
                { name: "Bucket", desc: "12pcs of Chicken, Large Fry, 4 Rolls" },
                { name: "Barrel", desc: "20pcs of Chicken" },
                { name: "Econo Box", desc: "10pcs of Chicken" },
                { name: "Popcorn Chicken Snack", desc: "5pcs, Fries & Salad" },
                { name: "Chicken Filet Dinner", desc: "5pcs, Fries, Salad, Dixie Sauce, Roll" },
                { name: "Chicken Filet Snack", desc: "3pcs, Fries & Salad" }
            ]
        },
        {
            category: "Fish",
            items: [
                { name: "Dinner", desc: "3pcs, Fries, Salad, Roll" },
                { name: "Junior", desc: "1pc Fish, Fries and Salad" },
                { name: "Snack", desc: "2pc Fish, Fries and Salad" }
            ]
        },
        {
            category: "Seafood",
            items: [
                { name: "Seafood Dinner", desc: "4 Scallops, 4 Shrimp, 2pcs Fish, Fries, Salad, Roll" },
                { name: "Scallop Dinner", desc: "10pcs, Fries, Salad, Roll" },
                { name: "Shrimp Dinner", desc: "10pcs, Fries, Salad, Roll" },
                { name: "Clam Dinner", desc: "Clams, Fries, Salad, Roll" },
                { name: "Seafood Snack", desc: "2 Scallops, 2 Shrimp, 1pc Fish, Fries, Salad" },
                { name: "Scallop Snack", desc: "5pcs, Fries, Salad" },
                { name: "Shrimp Snack", desc: "5pcs, Fries, Salad" }
            ]
        },
        {
            category: "Poutine",
            items: [
                { name: "Regular Poutine", desc: "Classic thick-cut fries with cheese and gravy." },
                { name: "Chicken Poutine", desc: "Poutine topped with crispy chicken pieces." },
                { name: "Popcorn Chicken Poutine", desc: "Poutine topped with popcorn chicken." }
            ]
        },
        {
            category: "Desserts",
            items: [
                { name: "Oh Henry Squares", desc: "Tantalizing chocolate and peanut butter treat." },
                { name: "Nanaimo Bars", desc: "Classic Canadian three-layer dessert." },
                { name: "Cream Cheese Brownie", desc: "Rich brownie with a smooth cream cheese swirl." },
                { name: "Black Forest Cake", desc: "Decadent chocolate cake with cherries and cream." },
                { name: "Cheese Cake", desc: "Smooth and creamy cheesecake slice." },
                { name: "Hello Dolly Squares", desc: "Gooey coconut and chocolate layered bar." },
                { name: "Carrot Cake", desc: "Warmly spiced cake with cream cheese frosting." },
                { name: "Apple Turnover", desc: "Flaky pastry with a sweet apple filling." }
            ]
        },
        {
            category: "Sides & Extra",
            items: [
                { name: "Fries", desc: "Available in Small, Medium, or Large." },
                { name: "Onion Rings", desc: "Golden-brown and extra crispy." },
                { name: "Cheese Sticks", desc: "Stringy mozzarella (5pcs, 10pcs, 20pcs)." }
            ]
        }
    ],
    footer: {
        nav: [
            { label: "Menu", anchor: "#menu-section" },
            { label: "Specials", anchor: "#specials-section" },
            { label: "Reviews", anchor: "#reviews-section" },
            { label: "Contact", anchor: "#contact-info-section" }
        ]
    },
    images: {
        services: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=1920&auto=format&fit=crop", // Premium Fried Chicken
        location: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop" // Restaurant placeholder
    }
};

// --- RENDER ENGINE ---

function init() {
    renderTopBar();
    renderHero();
    renderMenu();
    renderSpecials();
    renderReviews();
    renderWhyChooseUs();
    renderContactForm();
    renderContactInfo();
    renderFooter();
    renderMobileBottomBar();
    renderMobileMenuOverlay();
    injectJSONLD();
    setupEventListeners();
    initMenuScroll();
}

function renderTopBar() {
    const container = document.getElementById('top-bar-container');
    container.innerHTML = `
        <header id="top-bar">
            <div class="container content">
                <a href="/" class="logo">
                    <img src="${CONFIG.business.logoIcon}" alt="Icon" style="height: 55px; width: auto;">
                    <div style="display: flex; flex-direction: column; align-items: flex-start; gap: 0;">
                        <img src="${CONFIG.business.logoWordmark}" alt="${CONFIG.business.name}" class="logo-wordmark" style="height: 38px; width: auto;">
                        <span class="logo-tag" style="font-size: 0.75rem; margin-top: -2px; margin-left: 2px;">${CONFIG.business.location}</span>
                    </div>
                </a>
                <nav class="desktop-nav">
                    ${CONFIG.footer.nav.map(item => `<a href="${item.anchor}">${item.label}</a>`).join('')}
                </nav>
                <div class="top-bar-contact">
                    <a href="tel:${CONFIG.business.phone.replace(/\D/g, '')}" class="phone">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 8px;"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                        ${CONFIG.business.phone}
                    </a>
                </div>
                <button id="menu-trigger-header" class="menu-trigger" aria-label="Open Menu">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
                </button>
            </div>
        </header>
    `;
}

function renderHero() {
    const container = document.getElementById('hero-section');
    container.innerHTML = `
        <div class="container">
            <div id="hero">
                <div class="hero-content">
                    <h1>${CONFIG.hero.title}</h1>
                    <p class="hero-subtitle" style="font-size: 1.25rem; margin: 1.5rem 0 2.5rem;">${CONFIG.hero.subtitle}</p>
                    <a href="${CONFIG.business.orderingUrl}" class="btn primary">${CONFIG.hero.ctaLabel}</a>
                </div>
                <div class="hero-image-wrapper">
                    <img src="${CONFIG.hero.image}" alt="Dixie Lee Fried Chicken" loading="eager" width="1920" height="1080">
                    <div class="mobile-overlay-shadow"></div>
                </div>
            </div>
        </div>
    `;
}

function renderMenu() {
    const container = document.getElementById('menu-section');
    const categories = CONFIG.menu.map(cat => cat.category);

    container.innerHTML = `
        <div class="container">
            <h2 style="text-align: center; margin-bottom: 2rem;">Full Menu</h2>
            
            <div class="menu-nav-wrapper">
                <div class="menu-nav">
                    ${categories.map((cat, index) => `
                        <div class="menu-tab ${index === 0 ? 'active' : ''}" 
                             onclick="scrollToCategory('cat-${cat.toLowerCase().replace(/\s+/g, '-')}')">
                            ${cat}
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="menu-content">
                ${CONFIG.menu.map(cat => `
                    <div class="menu-category" id="cat-${cat.category.toLowerCase().replace(/\s+/g, '-')}">
                        <h3 class="category-title">${cat.category}</h3>
                        <div class="menu-grid">
                            ${cat.items.map(item => `
                                <div class="menu-item">
                                    <div class="menu-item-info">
                                        <h4 class="menu-item-name">${item.name}</h4>
                                        <p class="menu-item-desc">${item.desc}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function scrollToCategory(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function initMenuScroll() {
    const categories = document.querySelectorAll('.menu-category');
    const tabs = document.querySelectorAll('.menu-tab');

    if (!categories.length || !tabs.length) return;

    const observerOptions = {
        root: null,
        rootMargin: '-160px 0px -60% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                tabs.forEach(tab => {
                    tab.classList.remove('active');
                    if (tab.getAttribute('onclick').includes(id)) {
                        tab.classList.add('active');
                        // Center active tab in horizontal scroll
                        tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                    }
                });
            }
        });
    }, observerOptions);

    categories.forEach(cat => observer.observe(cat));
}

function renderSpecials() {
    const container = document.getElementById('specials-section');
    container.innerHTML = `
        <div class="container">
            <h2 style="text-align: center;">${CONFIG.specials.title}</h2>
            <div class="grid">
                ${CONFIG.specials.items.map(item => `
                    <div class="card">
                        <div class="card-icon">${item.icon}</div>
                        <h3>${item.title}</h3>
                        <p style="color: var(--text-muted); margin-top: 1rem;">${item.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderReviews() {
    const container = document.getElementById('reviews-section');
    container.style.backgroundImage = `url(${CONFIG.reviews.accentImage})`;
    container.style.backgroundSize = 'cover';
    container.innerHTML = `
        <div class="container" style="text-align: center;">
            <div class="trust-badge">${CONFIG.reviews.trustBadge}</div>
            <h2>What customers say</h2>
            <div class="grid">
                ${CONFIG.reviews.items.map(review => `
                    <div class="card" style="background: rgba(26,26,26,0.8); backdrop-filter: blur(10px);">
                        <p style="font-style: italic; margin-bottom: 1.5rem;">"${review.text}"</p>
                        <cite style="color: var(--primary); font-weight: 600; font-style: normal;">— ${review.author}</cite>
                    </div>
                `).join('')}
            </div>
            <a href="${CONFIG.business.social.facebook}" style="display: inline-block; margin-top: 3rem; color: var(--text-muted); text-decoration: underline;">Read more on Facebook</a>
        </div>
    `;
}

function renderWhyChooseUs() {
    const container = document.getElementById('why-choose-us-section');
    container.innerHTML = `
        <div class="container">
            <h2 style="text-align: center; margin-bottom: 3rem;">Why choose us</h2>
            <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));">
                ${CONFIG.whyChooseUs.map(item => `
                    <div style="border-left: 3px solid var(--primary); padding-left: 1.5rem;">
                        <h3 style="font-size: 1.25rem;">${item.title}</h3>
                        <p style="color: var(--text-muted); font-size: 0.95rem;">${item.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderContactForm() {
    const container = document.getElementById('contact-form-section');
    container.innerHTML = `
        <div class="container">
            <div class="contact-grid">
                <div>
                    <h2>Get in touch</h2>
                    <p style="color: var(--text-muted); margin: 1.5rem 0;">Have a question about a large order or catering? Send us a message and we'll get back to you.</p>
                    <form action="https://formspree.io/f/placeholder" method="POST">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" name="name" required placeholder="Your name">
                        </div>
                        <div class="form-group">
                            <label>Email or Phone</label>
                            <input type="text" name="contact" required placeholder="How can we reach you?">
                        </div>
                        <div class="form-group">
                            <label>Topic</label>
                            <select name="topic">
                                <option>Large order</option>
                                <option>Feedback</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Message</label>
                            <textarea name="message" rows="4" placeholder="Your message..."></textarea>
                        </div>
                        <input type="text" name="_gotcha" style="display:none">
                        <button type="submit" class="btn primary" style="width: 100%;">Send Message</button>
                    </form>
                </div>
                <div style="position: relative; overflow: hidden; border-radius: var(--radius); height: 100%; min-height: 400px;">
                    <img src="${CONFIG.images.services}" alt="Dixie Lee Fried Chicken" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" width="800" height="1200">
                </div>
            </div>
        </div>
    `;
}

function renderContactInfo() {
    const container = document.getElementById('contact-info-section');
    container.innerHTML = `
        <div class="container">
            <div class="contact-grid" style="align-items: center;">
                <div>
                    <h2>Location & Hours</h2>
                    <div style="margin: 2rem 0; display: flex; flex-direction: column; gap: 1.5rem;">
                        <div>
                            <p style="font-weight: 600; color: var(--primary);">Address</p>
                            <p>${CONFIG.business.address}</p>
                        </div>
                        <div>
                            <p style="font-weight: 600; color: var(--primary);">Hours</p>
                            ${CONFIG.business.hours.map(h => `<p style="display: flex; justify-content: space-between; max-width: 250px;"><span>${h.day}</span><span>${h.time}</span></p>`).join('')}
                        </div>
                        <div style="display: flex; gap: 1rem;">
                            <a href="${CONFIG.business.mapUrl}" class="btn primary" style="padding: 0.8rem 1.5rem;">Get Directions</a>
                            <a href="${CONFIG.business.social.facebook}" class="btn" style="border: 1px solid var(--border); padding: 0.8rem 1.5rem;">Facebook</a>
                        </div>
                    </div>
                </div>
                <div class="map-wrapper">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2757.5678912345!2d-64.532!3d46.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca0a5!2s366%20Main%20St%2C%20Shediac%2C%20NB%20E4P%202B8%2C%20Canada!5e0!3m2!1sen!2sus!4v123456789" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" title="Dixie Lee Shediac Map"></iframe>
                </div>
            </div>
        </div>
    `;
}

function renderFooter() {
    const container = document.getElementById('footer-container');
    container.innerHTML = `
        <footer class="container">
            <div class="footer-grid">
                <div class="footer-col" style="flex: 1.5;">
                    <a href="/" class="logo" style="display: flex; align-items: center; gap: 15px; margin-bottom: 2rem;">
                        <img src="${CONFIG.business.logoIcon}" alt="Icon" style="height: 60px; width: auto;">
                        <div style="display: flex; flex-direction: column; gap: 4px;">
                            <img src="${CONFIG.business.logoWordmark}" alt="${CONFIG.business.name}" style="height: 42px; width: auto;">
                            <span class="logo-tag" style="margin-left: 2px;">${CONFIG.business.location}</span>
                        </div>
                    </a>
                    <p style="color: var(--text-muted); line-height: 1.2;">${CONFIG.business.tagline}</p>
                </div>
                <div class="footer-col">
                    <h4>Navigation</h4>
                    <div class="footer-links">
                        ${CONFIG.footer.nav.map(item => `<a href="${item.anchor}">${item.label}</a>`).join('')}
                    </div>
                </div>
                <div class="footer-col">
                    <h4>Contact</h4>
                    <div class="footer-links">
                        <span>${CONFIG.business.address}</span>
                        <span>${CONFIG.business.phone}</span>
                        <a href="${CONFIG.business.orderingUrl}">Order Online</a>
                    </div>
                </div>
                <div class="footer-col">
                    <h4>Stay Connected</h4>
                    <div class="footer-links">
                        <a href="${CONFIG.business.social.facebook}">Facebook</a>
                        <a href="${CONFIG.business.social.messenger}">Messenger</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 ${CONFIG.business.name} ${CONFIG.business.location}. All rights reserved.</p>
                <a href="privacy.html">Privacy Policy</a>
            </div>
        </footer>
    `;
}

function renderMobileBottomBar() {
    const container = document.getElementById('mobile-bottom-bar');
    container.innerHTML = `
        <div class="bottom-tab" id="menu-trigger">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            <span>Menu</span>
        </div>
        <a href="tel:${CONFIG.business.phone.replace(/\D/g, '')}" class="bottom-tab">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            <span>Call</span>
        </a>
        <a href="${CONFIG.business.social.messenger}" class="bottom-tab">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
            <span>Message</span>
        </a>
    `;
}

function renderMobileMenuOverlay() {
    const container = document.getElementById('mobile-menu-overlay');
    container.innerHTML = `
        <div class="menu-header">
            <button id="menu-close" style="background:none; border:none; color:var(--text-main); cursor:pointer;">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
        </div>
        <div class="menu-links">
            <a href="/" class="menu-link" onclick="toggleMenu()">Home</a>
            ${CONFIG.footer.nav.map(item => `<a href="${item.anchor}" class="menu-link" onclick="toggleMenu()">${item.label}</a>`).join('')}
            <a href="${CONFIG.business.orderingUrl}" class="menu-link" style="color: var(--primary);">Order Online</a>
        </div>
        <div class="menu-info">
            <div style="margin-bottom: 1.5rem;">
                <p style="font-weight: 800; font-size: 1.5rem; margin: 0; color: var(--primary); text-transform: uppercase;">${CONFIG.business.name}</p>
                <p style="font-weight: 700; font-size: 0.9rem; margin: 0; color: var(--text-muted); text-transform: uppercase;">${CONFIG.business.location}</p>
            </div>
            <p style="color: var(--text-muted);">${CONFIG.business.phone}</p>
            <p style="color: var(--text-muted);">${CONFIG.business.address}</p>
        </div>
    `;
}

function toggleMenu() {
    const overlay = document.getElementById('mobile-menu-overlay');
    const isActive = overlay.classList.toggle('active');
    document.body.classList.toggle('scroll-lock', isActive);

    if (isActive) {
        // Focus trap
        const focusableElements = overlay.querySelectorAll('a, button');
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        firstFocusable.focus();

        overlay.addEventListener('keydown', function (e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        e.preventDefault();
                        lastFocusable.focus();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        e.preventDefault();
                        firstFocusable.focus();
                    }
                }
            }
        });
    }
}

function setupEventListeners() {
    // Mobile Menu
    const trigger = document.getElementById('menu-trigger');
    const headerTrigger = document.getElementById('menu-trigger-header');

    if (trigger) trigger.addEventListener('click', toggleMenu);
    if (headerTrigger) headerTrigger.addEventListener('click', toggleMenu);
    document.getElementById('menu-close').addEventListener('click', toggleMenu);

    // Sticky Top Bar Effect
    window.addEventListener('scroll', () => {
        const topBar = document.getElementById('top-bar');
        if (window.scrollY > 20) {
            topBar.classList.add('scrolled');
        } else {
            topBar.classList.remove('scrolled');
        }
    });

    // Close on backdrop click
    document.getElementById('mobile-menu-overlay').addEventListener('click', (e) => {
        if (e.target.id === 'mobile-menu-overlay') toggleMenu();
    });

    // ESC to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.getElementById('mobile-menu-overlay').classList.contains('active')) {
            toggleMenu();
        }
    });

    // Form Handling
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            // Simple success state mock
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Sending...';
            btn.disabled = true;

            // In a real scenario, fetch() would go here.
            setTimeout(() => {
                btn.innerText = 'Sent Successfully!';
                form.reset();
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                }, 3000);
            }, 1000);
        });
    }
}

function injectJSONLD() {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": `${CONFIG.business.name} ${CONFIG.business.location}`,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "366 Main Street",
            "addressLocality": "Shediac",
            "addressRegion": "NB",
            "addressCountry": "CA"
        },
        "telephone": CONFIG.business.phone,
        "priceRange": CONFIG.business.priceRange,
        "url": "https://dixieleeshediac.ca",
        "sameAs": [
            CONFIG.business.social.facebook
        ]
    };
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
}

// Ensure images are reserved size
window.addEventListener('load', () => {
    // Scroll behavior initialization if needed
});

init();
