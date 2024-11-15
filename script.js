// script.js
console.log("Website Loaded");
// Initialize cart from localStorage
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

function updateCartDisplay() {
    const cartItemsList = document.getElementById('cart-items-list');
    cartItemsList.innerHTML = '';  // Clear current cart display
    let totalPrice = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'mb-3');
        
        cartItemElement.innerHTML = `
            <div class="d-flex align-items-center">
                <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px;   border-radius: 50px;  box-shadow: 0 4px 10px rgba(0, 0.1, 0.2, 0.5); margin-right: 10px;">
                <div>
                    <h6>${item.name} (x${item.quantity})</h6>
                    <p>$${(item.price * item.quantity).toFixed(2)}</p>
                </div>
            </div>
            <button class="btn btn-danger btn-sm remove-item" data-product-id="${item.id}">Remove</button>
        `;
        cartItemsList.appendChild(cartItemElement);
        totalPrice += item.price * item.quantity;
    });

    document.getElementById('cart-total-price').textContent = totalPrice.toFixed(2);
    updateCartCount();  // Update cart count at the top
}
