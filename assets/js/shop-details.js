$(document).ready(function () {
    const relatedProducts = [
        {
            id: 1,
            name: "Piqué Biker Jacket",
            price: 67.24,
            image: "uploads/shop/g1.jpg",
            badge: "new",
            stars: 0,
            colors: ["#5e64d1", "#404a47", "#d5a667"]
        },
        {
            id: 2,
            name: "Piqué Biker Jacket",
            price: 67.24,
            image: "uploads/shop/g2.jpg",
            badge: "",
            stars: 0,
            colors: ["#5e64d1", "#404a47", "#d5a667"]
        },
        {
            id: 3,
            name: "Multi-Pocket Chest Bag",
            price: 43.48,
            image: "uploads/shop/g3.jpg",
            badge: "sale",
            stars: 4,
            colors: ["#5e64d1", "#404a47", "#d5a667"]
        },
        {
            id: 4,
            name: "Diagonal Textured Cap",
            price: 60.9,
            image: "uploads/shop/g4.jpg",
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
        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="mf-product__card">
                <div class="mf-product__img-wrap">
                    <a href="shop-details.html?id=${p.id}">
                        <img src="${p.image}" alt="${p.name}" class="mf-product__img">
                    </a>
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
 
    function renderRelatedProducts(list) {
        let html = '';
        list.forEach(function (p) { html += buildCard(p); });
        $(".mf-product__grid").html(html);
    }
 
    renderRelatedProducts(relatedProducts);
    $(document).on('click', '.thumb-item', function () {
        $('.thumb-item').removeClass('active');
        $(this).addClass('active');
 
        const targetId = $(this).data('target');
        const $target = $('#' + targetId);
 
        if ($target.length) {
            $target.closest('.tab-content').find('.tab-pane').removeClass('active show');
            $target.addClass('active show');
        }
    });

    $(document).on('click', '.product-details-option-size label', function () {
        $('.product-details-option-size label').removeClass('active');
        $(this).addClass('active');
    });
    $(document).on('click', '.custom-nav-link', function (e) {
        e.preventDefault();
        $('.custom-nav-link').removeClass('active');
        $(this).addClass('active');
 
        const targetId = $(this).data('target');
        const $target = $('#' + targetId);
 
        if ($target.length) {
            $target.closest('.tab-content').find('.tab-pane').removeClass('active show');
            $target.addClass('active show');
        }
    });
 
});