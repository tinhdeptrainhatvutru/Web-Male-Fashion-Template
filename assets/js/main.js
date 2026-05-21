//js của trần quốc tuấn
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
document.querySelectorAll('.navbar .dropdown').forEach(function(dropdown) {
    dropdown.addEventListener('mouseenter', function() {
        this.querySelector('.dropdown-menu').classList.add('show');
        this.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'true');
    });
    dropdown.addEventListener('mouseleave', function() {
        this.querySelector('.dropdown-menu').classList.remove('show');
        this.querySelector('.dropdown-toggle').setAttribute('aria-expanded', 'false');
    });
});
//js của nguyễn khương tịnh
//time countdown

const deadline = new Date('2026-05-31T23:59:59');

function updateCountdown() {
    const diff = deadline - new Date();

    if (diff <= 0) {
        clearInterval(timer);
        return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
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

// tab sản phẩm
const allCards = Array.from(document.querySelectorAll('.mf-product__grid [data-tab]'));

allCards.forEach(card => {
    const tabs = card.dataset.tab.split(' ');
    card.style.display = tabs.includes('best-sellers') ? '' : 'none';
});

function showTab(tab) {
    const grid = document.querySelector('.mf-product__grid');
    grid.style.transition = 'opacity 0.3s ease';
    grid.style.opacity = '0';

    setTimeout(() => {
        allCards.forEach(card => {
            const tabs = card.dataset.tab.split(' ');
            card.style.display = tabs.includes(tab) ? '' : 'none';
        });
        grid.style.opacity = '1';
    }, 300);
}

document.querySelectorAll('.mf-tabs__link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.mf-tabs__item').forEach(i => i.classList.remove('active'));
        this.closest('.mf-tabs__item').classList.add('active');
        showTab(this.dataset.tab);
    });
});

//js của võ văn huy
document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    const newsletterBtn = document.querySelector('.mf-newsletter__btn');
    const newsletterInput = document.querySelector('.mf-newsletter__input');

    if (newsletterBtn && newsletterInput) {
        newsletterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const email = newsletterInput.value.trim(); 
            if (email === "") {
                alert("Vui lòng nhập email của bạn!");
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert("Email không hợp lệ! Vui lòng kiểm tra lại định dạng.");
            } else {
                alert("Đăng ký thành công! Cảm ơn bạn đã quan tâm đến Male Fashion.");
                newsletterInput.value = ""; 
            }
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId !== "#") {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});