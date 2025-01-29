let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";
    cart.forEach((product, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = `${product.item} - $${product.price}`;
        cartList.appendChild(listItem);
    });

    document.getElementById("total").textContent = total.toFixed(2);
}
