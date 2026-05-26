$(document).ready(function () {
    const originProduct = {
        name: "Hooded thermal anorak",
        reviews: " - 5 Reviews",
        priceHtml: "$270.00 <span>70.00</span>",
        description: "Coat with quilted lining and an adjustable hood...",
        sizes: [
            { id: "xxl", text: "XXL" },
            { id: "xl",  text: "XL"  },
            { id: "l",   text: "L"   },
            { id: "sm",  text: "S"   }
        ],
        colors: [
            { id: "sp-1", class: "c-1" },
            { id: "sp-2", class: "c-2" },
            { id: "sp-3", class: "c-3" },
            { id: "sp-4", class: "c-4" },
            { id: "sp-9", class: "c-9" }
        ],
        images: [
            { thumb: "uploads/product/thumb-1.png", big: "uploads/product/product-big-2.png", isVideo: false },
            { thumb: "uploads/product/thumb-2.png", big: "uploads/productproduct-big-3.png", isVideo: false },
            { thumb: "uploads/product/thumb-3.png", big: "uploads/productproduct-big.png",   isVideo: false },
            {
                thumb: "uploads/product/productthumb-4.png",
                big: "uploads/product/product-big-4.png",
                isVideo: true,
                videoUrl: "https://www.youtube.com/watch?v=8PJ3_p7VqHw"
            }
        ]
    };

    const relatedProducts = [
        { name: "Piqué Biker Jacket",     price: "$67.24", img: "uploads/shop/g1.jpg", badge: "New",  badgeClass: "new",  stars: 0, colors: ["#5e64d1", "#404a47", "#d5a667"] },
        { name: "Piqué Biker Jacket",     price: "$67.24", img: "uploads/shop/g2.jpg", badge: "",     badgeClass: "",     stars: 0, colors: ["#5e64d1", "#404a47", "#d5a667"] },
        { name: "Multi-pocket Chest Bag", price: "$43.48", img: "uploads/shop/g3.jpg", badge: "Sale", badgeClass: "sale", stars: 4, colors: ["#5e64d1", "#404a47", "#d5a667"] },
        { name: "Diagonal Textured Cap",  price: "$60.9",  img: "uploads/shop/g4.jpg", badge: "",     badgeClass: "",     stars: 0, colors: ["#5e64d1", "#404a47", "#d5a667"] }
    ];

    function buildStarsHtml(starCount) {
        let html = '';
        for (let i = 1; i <= 5; i++) {
            html += i <= starCount
                ? '<i class="fa-solid fa-star"></i>'
                : '<i class="fa-regular fa-star"></i>';
        }
        return html;
    }

    function renderGallery(images) {
        $.each(images, function (index, img) {
            const tabId       = `gallery-tab-${index}`;
            const isFirst     = index === 0;
            const activeClass = isFirst ? "active" : "";
            const showClass   = isFirst ? "active show" : "";
            const thumbHtml = `
                <li class="thumb-item ${activeClass}" data-target="${tabId}">
                    <img src="${img.thumb}" alt="Thumbnail ${index + 1}">
                    ${img.isVideo ? '<i class="fa fa-play"></i>' : ''}
                </li>`;
            $("#js-thumb-list").append(thumbHtml);
            const bigImgHtml = `
                <div class="tab-pane ${showClass}" id="${tabId}">
                    <div class="product__details__pic__item position-relative">
                        <img src="${img.big}" alt="Product Image ${index + 1}" class="w-100">
                        ${img.isVideo
                            ? `<a href="${img.videoUrl}" class="video-popup"><i class="fa fa-play"></i></a>`
                            : ''}
                    </div>
                </div>`;
            $("#js-gallery-content").append(bigImgHtml);
        });
    }

    function renderProductDetails(product) {
        $("#js-product-name").text(product.name);
        $("#js-product-reviews").text(product.reviews);
        $("#js-product-price").html(product.priceHtml);
        $("#js-product-desc").text(product.description);

        $.each(product.sizes, function (index, item) {
            $("#js-size-wrapper").append(
                `<label for="${item.id}">${item.text}<input type="radio" name="size" id="${item.id}"></label>`
            );
        });
        $.each(product.colors, function (index, item) {
            $("#js-color-wrapper").append(
                `<label class="${item.class}" for="${item.id}"><input type="radio" name="color" id="${item.id}"></label>`
            );
        });
    }

    function renderRelatedProducts(products) {
        $.each(products, function (index, prod) {
            const starsHtml = buildStarsHtml(prod.stars);
            let colorsHtml = '';
            $.each(prod.colors, function (i, colorHex) {
                colorsHtml += `<span class="mf-product__color" style="background:${colorHex};"></span>`;
            });
            const cardHtml = `
                <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                    <div class="mf-product__card">
                        <div class="mf-product__img-wrap">
                            <img src="${prod.img}" alt="${prod.name}" class="mf-product__img">
                            ${prod.badge
                                ? `<span class="mf-product__badge mf-product__badge--${prod.badgeClass}">${prod.badge}</span>`
                                : ''}
                            <div class="mf-product__actions">
                                <a href="#" class="mf-product__action-btn"><img src="assets/icon/heart.png"   alt="Wishlist"></a>
                                <a href="#" class="mf-product__action-btn"><img src="assets/icon/compare.png" alt="Compare"></a>
                                <a href="#" class="mf-product__action-btn"><img src="assets/icon/search.png"  alt="Quick View"></a>
                            </div>
                        </div>
                        <div class="mf-product__info">
                            <div class="mf-product__name-wrap">
                                <h6 class="mf-product__name">${prod.name}</h6>
                                <a href="#" class="mf-btn mf-btn--cart-hover">+ Add To Cart</a>
                            </div>
                            <div class="mf-product__stars">${starsHtml}</div>
                            <div class="mf-product__bottom">
                                <div class="mf-product__price">${prod.price}</div>
                                <div class="mf-product__colors">${colorsHtml}</div>
                            </div>
                        </div>
                    </div>
                </div>`;
            $("#js-related-grid").append(cardHtml);
        });
    }

    $(document).on("click", "#js-thumb-list .thumb-item", function () {
        $(this).addClass("active").siblings().removeClass("active");
        const targetId = $(this).attr("data-target");
        $(`#${targetId}`).addClass("active show").siblings().removeClass("active show");
    });
    $(document).on("click", ".product-details-option-size label, .product-details-option-color label", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    $(document).on("click", ".custom-nav-tabs .custom-nav-link", function (e) {
        e.preventDefault();
        $(".custom-nav-tabs .custom-nav-link").removeClass("active");
        $(this).addClass("active");
        const targetId = $(this).attr("data-target");
        $(`#${targetId}`).addClass("active show").siblings().removeClass("active show");
    });

    renderGallery(originProduct.images);
    renderProductDetails(originProduct);
    renderRelatedProducts(relatedProducts);

});