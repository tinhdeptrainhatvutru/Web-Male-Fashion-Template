$(document).ready(function () {
    const cartData = [
        {
            id: 1,
            name: "T-shirt Contrast Pocket",
            price: 98.49,
            image: "uploads/shop/g2.jpg",
            quantity: 1
        },
        {
            id: 2,
            name: "Diagonal Textured Cap",
            price: 98.49,
            image: "uploads/shop/g3.jpg",
            quantity: 1
        },
        {
            id: 3,
            name: "Basic Flowing Scarf",
            price: 98.49,
            image: "uploads/shop/g6.jpg",
            quantity: 1
        },
        {
            id: 4,
            name: "Basic Flowing Scarf",
            price: 98.49,
            image: "uploads/shop/g7.jpg",
            quantity: 1
        },
    ];

    function renderCartItems() {
        let htmlContent = "";
        $.each(cartData, function (index, item) {
            let itemTotal = (item.price * item.quantity).toFixed(2);
            htmlContent += `
                <tr>
                    <td class="product__cart__item">
                        <div class="product__cart__item__pic">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="product__cart__item__text">
                            <h6>${item.name}</h6>
                            <h5>$${item.price}</h5>
                        </div>
                    </td>
                    <td class="quantity__item">
                        <div class="quantity">
                            <div class="pro-qty">
                                <i class="fa-solid fa-angle-left"></i>
                                <input type="text" value="${item.quantity}">
                                <i class="fa-solid fa-angle-right"></i>
                            </div>
                        </div>
                    </td>
                    <td class="cart__price">$ ${itemTotal}</td>
                    <td class="cart__close"><i class="fa-solid fa-xmark"></i></td>
                </tr>
            `;
        });
        $("#cart-item-list").html(htmlContent);
    }
    renderCartItems();
});