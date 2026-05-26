// =============================================
// js của trần quốc tuấn
// =============================================
document.addEventListener('DOMContentLoaded', function () {
 
    const heroSwiper = new Swiper('.hero-swiper', {
        loop: true,
        speed: 1000,
        grabCursor: true,
        simulateTouch: true,
        touchRatio: 0.8,
        resistanceRatio: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
 
    heroSwiper.on('slideChangeTransitionStart', function () {
        const activeSlide = heroSwiper.slides[heroSwiper.activeIndex];
        const content = activeSlide.querySelector('.hero-content');
        if (content) {
            content.style.transition = 'none';
            content.style.opacity = '0';
            content.style.transform = 'translateY(30px)';
        }
    });
 
    heroSwiper.on('slideChangeTransitionEnd', function () {
        const activeSlide = heroSwiper.slides[heroSwiper.activeIndex];
        const content = activeSlide.querySelector('.hero-content');
        if (content) {
            content.style.transition = 'all 0.5s ease-out';
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
        }
    });
});
 
// Dropdown hover
document.querySelectorAll('.navbar .dropdown').forEach(function (dropdown) {
    dropdown.addEventListener('mouseenter', function () {
        this.querySelector('.dropdown-menu').classList.add('show');
        this.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'true');
    });
    dropdown.addEventListener('mouseleave', function () {
        this.querySelector('.dropdown-menu').classList.remove('show');
        this.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
    });
});
 
// =============================================
// js của nguyễn khương tịnh
// =============================================
const deadline = new Date('2026-05-31T23:59:59');
 
function updateCountdown() {
    const diff = deadline - new Date();
    if (diff <= 0) {
        clearInterval(timer);
        return;
    }
    const days    = Math.floor(diff / 86400000);
    const hours   = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
 
    const spans = document.querySelectorAll('.mf-countdown__numbers span:not(.sep)');
    if (!spans.length) return;
 
    spans[0].textContent = String(days).padStart(2, '0');
    spans[1].textContent = String(hours).padStart(2, '0');
    spans[2].textContent = String(minutes).padStart(2, '0');
    spans[3].textContent = String(seconds).padStart(2, '0');
}
 
updateCountdown();
const timer = setInterval(updateCountdown, 1000);
$(function () {
    const products = [
        {
            id: 1,
            name: "Piqué Biker Jacket",
            price: 67.24,
            image: "uploads/shop/g1.jpg",
            badge: "new",
            stars: 0,
            colors: ["#5e64d1", "#404a47", "#d5a667"],
            tabs: "best-sellers new-arrivals"
        },
        {
            id: 2,
            name: "Piqué Biker Jacket",
            price: 67.24,
            image: "uploads/shop/g2.jpg",
            badge: "",
            stars: 0,
            colors: ["#5e64d1", "#404a47", "#d5a667"],
            tabs: "best-sellers hot-sales"
        },
        {
            id: 3,
            name: "Multi-pocket Chest Bag",
            price: 43.48,
            image: "uploads/shop/g3.jpg",
            badge: "sale",
            stars: 4,
            colors: ["#5e64d1", "#404a47", "#d5a667"],
            tabs: "best-sellers new-arrivals"
        },
        {
            id: 4,
            name: "Diagonal Textured Cap",
            price: 60.9,
            image: "uploads/shop/g4.jpg",
            badge: "",
            stars: 0,
            colors: ["#5e64d1", "#404a47", "#d5a667"],
            tabs: "best-sellers hot-sales"
        },
        {
            id: 5,
            name: "Lether Backpack",
            price: 31.37,
            image: "uploads/shop/g5.jpg",
            badge: "",
            stars: 0,
            colors: ["#5e64d1", "#404a47", "#d5a667"],
            tabs: "best-sellers new-arrivals"
        },
        {
            id: 6,
            name: "Ankle Boots",
            price: 98.49,
            image: "uploads/shop/g6.jpg",
            badge: "sale",
            stars: 4,
            colors: ["#5e64d1", "#404a47", "#d5a667"],
            tabs: "best-sellers hot-sales"
        },
        {
            id: 7,
            name: "T-shirt Contrast Pocket",
            price: 49.66,
            image: "uploads/shop/g7.jpg",
            badge: "",
            stars: 0,
            colors: ["#5e64d1", "#404a47", "#d5a667"],
            tabs: "best-sellers new-arrivals"
        },
        {
            id: 8,
            name: "Basic Flowing Scarf",
            price: 26.28,
            image: "uploads/shop/g8.jpg",
            badge: "",
            stars: 0,
            colors: ["#5e64d1", "#404a47", "#d5a667"],
            tabs: "best-sellers hot-sales"
        }
    ];
    function buildStars(count) {
        let html = '';
        for (let i = 1; i <= 5; i++) {
            html += i <= count
                ? '<i class="fa-solid fa-star"></i>'
                : '<i class="fa-regular fa-star"></i>';
        }
        return html;
    }
    function buildBadge(badge) {
        if (badge === 'new')  return '<span class="mf-product__badge mf-product__badge--new">New</span>';
        if (badge === 'sale') return '<span class="mf-product__badge mf-product__badge--sale">Sale</span>';
        return '';
    }

    function buildColors(colors) {
        return colors.map(function (c) {
            const border = (c === '#ffffff') ? 'border:1px solid #ccc;' : '';
            return `<span class="mf-product__color" style="background:${c};${border}"></span>`;
        }).join('');
    }

    function buildCard(p) {
        return `
<div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12" data-tab="${p.tabs}">
    <div class="mf-product__card">
        <div class="mf-product__img-wrap">
            <a href="shop-details.html?id=${p.id}"><img src="${p.image}" alt="${p.name}" class="mf-product__img"></a>
            ${buildBadge(p.badge)}
            <div class="mf-product__actions">
                <a href="#" class="mf-product__action-btn" title="Wishlist">
                    <img src="assets/img/heart.png" alt="Wishlist">
                </a>
                <a href="#" class="mf-product__action-btn" title="Compare">
                    <img src="assets/img/compare.png" alt="Compare">
                </a>
                <a href="#" class="mf-product__action-btn" title="Quick View">
                    <img src="assets/img/search.png" alt="Quick View">
                </a>
            </div>
        </div>
        <div class="mf-product__info">
            <div class="mf-product__name-wrap">
                <h6 class="mf-product__name">${p.name}</h6>
                <a href="#" class="mf-btn mf-btn--cart-hover">+ Add To Cart</a>
            </div>
            <div class="mf-product__stars">
                ${buildStars(p.stars)}
            </div>
            <div class="mf-product__bottom">
                <div class="mf-product__price">$${p.price}</div>
                <div class="mf-product__colors">
                    ${buildColors(p.colors)}
                </div>
            </div>
        </div>
    </div>
</div>`;
    }

    let html = '';
    products.forEach(function (p) { html += buildCard(p); });
    $('.mf-product__grid').html(html);

    const allCards = Array.from(document.querySelectorAll('.mf-product__grid [data-tab]'));
 
  
    allCards.forEach(function (card) {
        const tabs = card.dataset.tab.split(' ');
        card.style.display = tabs.includes('best-sellers') ? '' : 'none';
    });
 
    function showTab(tab) {
        const grid = document.querySelector('.mf-product__grid');
        grid.style.transition = 'opacity 0.3s ease';
        grid.style.opacity = '0';
 
        setTimeout(function () {
            allCards.forEach(function (card) {
                const tabs = card.dataset.tab.split(' ');
                card.style.display = tabs.includes(tab) ? '' : 'none';
            });
            grid.style.opacity = '1';
        }, 300);
    }
 
    document.querySelectorAll('.mf-tabs__link').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelectorAll('.mf-tabs__item').forEach(function (i) {
                i.classList.remove('active');
            });
            this.closest('.mf-tabs__item').classList.add('active');
            showTab(this.dataset.tab);
        });
    });
 
});
 
// =============================================
// js của võ văn huy
// =============================================
document.addEventListener('DOMContentLoaded', function () {
    'use strict';
 
    const newsletterBtn   = document.querySelector('.mf-newsletter__btn');
    const newsletterInput = document.querySelector('.mf-newsletter__input');
 
    if (newsletterBtn && newsletterInput) {
        newsletterBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const email = newsletterInput.value.trim();
            if (email === '') {
                alert('Vui lòng nhập email của bạn!');
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Email không hợp lệ! Vui lòng kiểm tra lại định dạng.');
            } else {
                alert('Đăng ký thành công! Cảm ơn bạn đã quan tâm đến Male Fashion.');
                newsletterInput.value = '';
            }
        });
    }
 
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});