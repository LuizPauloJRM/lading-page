// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartTotal = document.createElement('p');
    let total = 0;

    cartItems.parentElement.appendChild(cartTotal);

    function updateTotal() {
        cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentElement;
            const productName = product.querySelector('h2').innerText;
            const productPriceText = product.querySelector('p').innerText;
            const productPrice = parseFloat(productPriceText.replace('Price: $', ''));

            const li = document.createElement('li');
            li.textContent = `${productName} - $${productPrice.toFixed(2)}`;

            // Botão de remover item
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remover';
            removeBtn.style.marginLeft = '10px';
            removeBtn.addEventListener('click', () => {
                cartItems.removeChild(li);
                total -= productPrice;
                updateTotal();
            });

            li.appendChild(removeBtn);
            cartItems.appendChild(li);

            total += productPrice;
            updateTotal();
        });
    });

    updateTotal();
});
