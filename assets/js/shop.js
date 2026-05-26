$(document).ready(function () {
    let products = [
        {
            id: 1,
            name: "Piqué Biker Jacket",
            price: 67.24,
            image: "uploads/shop/g2.jpg",
            badge: "",
            stars: 0,
            colors: ["#5e64d1", "#404a47", "#d5a667"]
        },
        {
            id: 2,
            name: "Multi-pocket Chest Bag",
            price: 43.48,
            image: "uploads/shop/g3.jpg",
            badge: "sale",
            stars: 4,
            colors: ["#5e64d1", "#404a47", "#d5a667"]
        },
        {
            id: 3,
            name: "Diagonal Textured Cap",
            price: 60.9,
            image: "uploads/shop/g4.jpg",
            badge: "",
            stars: 0,
            colors: ["#5e64d1", "#404a47", "#d5a667"]
        },
        {
            id: 4,
            name: "Ankle Boots",
            price: 98.49,
            image: "uploads/shop/g6.jpg",
            badge: "sale",
            stars: 4,
            colors: ["#5e64d1", "#404a47", "#d5a667"]
        },
        {
            id: 5,
            name: "T-shirt Contrast Pocket",
            price: 49.66,
            image: "uploads/shop/g7.jpg",
            badge: "",
            stars: 0,
            colors: ["#5e64d1", "#404a47", "#d5a667"]
        },
        {
            id: 6,
            name: "Basic Flowing Scarf",
            price: 26.28,
            image: "uploads/shop/g8.jpg",
            badge: "",
            stars: 0,
            colors: ["#5e64d1", "#404a47", "#d5a667"]
        },
        {
            id: 7,
            name: "Piqué Biker Jacket",
            price: 67.24,
            image: "uploads/shop/g10.jpg",
            badge: "sale",
            stars: 0,
            colors: ["#5e64d1", "#404a47", "#d5a667"]
        },
        {
            id: 8,
            name: "Multi-pocket Chest Bag",
            price: 43.48,
            image: "uploads/shop/g11.jpg",
            badge: "sale",
            stars: 4,
            colors: ["#5e64d1", "#404a47", "#d5a667"]
        },
        {
            id: 9,
            name: "Diagonal Textured Cap",
            price: 60.9,
            image: "uploads/shop/g12.jpg",
            badge: "",
            stars: 0,
            colors: ["#5e64d1", "#404a47", "#d5a667"]
        },
        {
            id: 10,
            name: "Ankle Boots",
            price: 98.49,
            image: "uploads/shop/g13.jpg",
            badge: "sale",
            stars: 4,
            colors: ["#5e64d1", "#404a47", "#d5a667"]
        },
        {
            id: 11,
            name: "T-shirt Contrast Pocket",
            price: 49.66,
            image: "uploads/shop/g14.jpg",
            badge: "",
            stars: 0,
            colors: ["#5e64d1", "#404a47", "#d5a667"]
        },
        {
            id: 12,
            name: "Basic Flowing Scarf",
            price: 26.28,
            image: "uploads/shop/g15.jpg",
            badge: "",
            stars: 0,
            colors: ["#5e64d1", "#404a47", "#d5a667"]
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
            let border = (c === '#ffffff') ? 'border:1px solid #ccc;' : '';
            return `<span class="mf-product__color" style="background:${c};${border}"></span>`;
        }).join('');
    }

    function buildCard(p) {
        return `
<div class="col-lg-4 col-md-6 col-sm-6 col-12">
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

    function renderProducts(list) {
        let html = '';
        list.forEach(p => { html += buildCard(p); });
        $(".shop-product-grid").html(html);
    }

    renderProducts(products);

    $(document).on('click', '.sort-dropdown__selected', function (e) {
        e.stopPropagation();
        $('.sort-dropdown').toggleClass('open');
    });
    $(document).on('click', function () {
        $('.sort-dropdown').removeClass('open');
    });
    $(document).on('click', '.sort-dropdown__item', function () {
        let selected = $(this).text().trim();
        $('.sort-dropdown__item').removeClass('active');
        $(this).addClass('active');
        $('.sort-dropdown__selected-text').text(selected);
        $('.sort-dropdown').removeClass('open');
    });

    $(document).on('click', '.sidebar-block__header', function () {
        $(this).closest('.sidebar-block').toggleClass('collapsed');
    });
    $(document).on('click', '.sidebar-size-btn', function () {
        $('.sidebar-size-btn').removeClass('active');
        $(this).addClass('active');
    });
    $(document).on('click', '.sidebar-color-dot', function () {
        $('.sidebar-color-dot').removeClass('active');
        $(this).addClass('active');
    });
    $(document).on('click', '.sidebar-cat-list a', function (e) {
        e.preventDefault();
        $('.sidebar-cat-list a').removeClass('active');
        $(this).addClass('active');
    });
    $(document).on('click', '.sidebar-price-list a', function (e) {
        e.preventDefault();
        $('.sidebar-price-list a').removeClass('active');
        $(this).addClass('active');
    });
    $(document).on('click', '.sidebar-tag', function (e) {
        e.preventDefault();
        $('.sidebar-tag').removeClass('active');
        $(this).addClass('active');
        window.location.href = 'shop.html';
    });
    $(document).on('click', '.sidebar-brand-list a', function (e) {
        e.preventDefault();
        $('.sidebar-brand-list a').removeClass('active');
        $(this).addClass('active');
    });

    $(document).on('click', '.shop-pagination__btn', function (e) {
        e.preventDefault();
        $('.shop-pagination__btn').removeClass('active');
        $(this).addClass('active');
    });

    $(document).on('mouseenter', '.sidebar-cat-list', function () {
        let $el = $(this);
        $el.addClass('show-scroll');
        setTimeout(function () {
            $el.removeClass('show-scroll');
        }, 500);
    });

});