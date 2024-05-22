document.addEventListener('DOMContentLoaded', function() {
    fetch('/client/products')
        .then(response => response.json())
        .then(data => {
            const productList = document.getElementById('product-list');
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.textContent = `${product.name} - ${product.description} - $${product.price} - Qty: ${product.quantity}`;
                productList.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error:', error));
});
