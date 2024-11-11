// script.js
console.log("Website Loaded");
if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
    updateCartCount();
}

// Function to update cart in localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Modify addToCart to save cart to localStorage after adding an item
function addToCart(productId) {
    cart.push(productId);
    updateCartCount();
    saveCart(); // Save to localStorage
}
