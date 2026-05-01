//js của trần quốc tuấn
const slides = document.querySelectorAll('.hero-slide');
const nextBtn = document.querySelector('.next-slide');
const prevBtn = document.querySelector('.prev-slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});
//js của nguyễn khương tịnh
//time countdown

const deadline = new Date('2026-05-31T23:59:59');

function updateCountdown() {
    const diff = deadline - new Date();

    const days    = Math.max(0, Math.floor(diff / 86400000));
    const hours   = Math.max(0, Math.floor((diff % 86400000) / 3600000));
    const minutes = Math.max(0, Math.floor((diff % 3600000) / 60000));
    const seconds = Math.max(0, Math.floor((diff % 60000) / 1000));

    const spans = document.querySelectorAll('.mf-countdown__numbers span:not(.sep)');

    if (spans.length === 0) return;

    spans[0].textContent = String(days).padStart(2, '0');
    spans[1].textContent = String(hours).padStart(2, '0');
    spans[2].textContent = String(minutes).padStart(2, '0');
    spans[3].textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

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
