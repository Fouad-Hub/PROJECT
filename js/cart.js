document.addEventListener('DOMContentLoaded', () => {
    const cart = [];

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product-id');
            const productName = button.getAttribute('data-product-name');
            const productPrice = parseFloat(button.getAttribute('data-product-price'));

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

            updateCartUI();
        });
    });

    function updateCartUI() {
        const cartCountElement = document.getElementById('cart-count');
        const cartItemsElement = document.getElementById('cart-items');
        const cartTotalElement = document.getElementById('cart-total');

        // Calculate total quantity of items in the cart
        let totalQuantity = 0;
        let total = 0;

        cartItemsElement.innerHTML = '';
        
        cart.forEach((item) => {
            totalQuantity += item.quantity;
            total += item.price * item.quantity;

            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
            listItem.innerHTML = `
                ${item.name} - $${(item.price * item.quantity).toFixed(2)} (x${item.quantity})
                <i class="bi bi-trash text-danger remove-item" data-product-id="${item.id}"></i>
            `;
            cartItemsElement.appendChild(listItem);
        });

        // Update cart count badge with the total quantity
        cartCountElement.textContent = totalQuantity;

        // Update total price
        cartTotalElement.textContent = total.toFixed(2);

        document.querySelectorAll('.remove-item').forEach(trashIcon => {
            trashIcon.addEventListener('click', () => {
                const productId = trashIcon.getAttribute('data-product-id');
                removeOneItemFromCart(productId);
            });
        });
    }

    function removeOneItemFromCart(productId) {
        const product = cart.find(item => item.id === productId);
        if (product) {
            product.quantity--;
            if (product.quantity === 0) {
                const productIndex = cart.findIndex(item => item.id === productId);
                cart.splice(productIndex, 1);
            }
        }
        updateCartUI();
    }
});
