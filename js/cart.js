document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartCountElement = document.getElementById('cart-count');
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Add event listeners to all 'Add to Cart' buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product-id');
            const productName = button.getAttribute('data-product-name');
            const productPrice = parseFloat(button.getAttribute('data-product-price'));

            // Check if the product is already in the cart
            const existingProduct = cart.find(item => item.id === productId);

            if (existingProduct) {
                if (existingProduct.quantity < 20) {
                    existingProduct.quantity++;
                } else {
                    alert('Maximum quantity of 20 per product reached');
                }
            } else {
                cart.push({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    quantity: 1
                });
            }

            // Update the cart UI
            updateCartUI();
        });
    });

    // Update Cart UI function
    function updateCartUI() {
        // Update cart count badge
        cartCountElement.textContent = cart.length;

        // Update cart items list
        cartItemsElement.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
            listItem.innerHTML = `
                ${item.name} - $${(item.price * item.quantity).toFixed(2)} (x${item.quantity})
                <i class="bi bi-trash text-danger remove-item" data-product-id="${item.id}"></i>
            `;
            cartItemsElement.appendChild(listItem);

            total += item.price * item.quantity;
        });

        // Update total price
        cartTotalElement.textContent = total.toFixed(2);

        // Add event listeners to remove item buttons
        document.querySelectorAll('.remove-item').forEach(trashIcon => {
            trashIcon.addEventListener('click', (event) => {
                const productId = trashIcon.getAttribute('data-product-id');
                removeItemFromCart(productId);
            });
        });
    }

    // Remove item from cart function
    function removeItemFromCart(productId) {
        const productIndex = cart.findIndex(item => item.id === productId);
        if (productIndex > -1) {
            cart.splice(productIndex, 1);
        }
        updateCartUI();
    }
});
