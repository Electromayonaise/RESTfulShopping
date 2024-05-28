
function addToCart(quantityInput, productQuantity) {   
  if (!(quantityInput>=1 && quantityInput<=productQuantity)  ){
    alert("Invalid quantity");
    return
  }
  
  alert("Product added")
  //crer un objeto que contenga el nombre del producto y la cantidad
  //luego guardar ese objeto y agregarlo a un arreglo de objetos
  //guardado en el local storage 
  //luego al comprar, enviar el arreglo de obetos al server, validar 
  //antes que las cantidades sirvan seleccionadas por el usuario sigan estando disponibles

  location.href = "/client.html";   
}
var productName= localStorage["productName"] 
console.log(productName)

document.addEventListener('DOMContentLoaded', function() {
  fetch('client/product?productName='+productName)
    .then(response => response.json())
    .then(data => {
      console.log(data.name);
      console.log(data.price);
      console.log(data.quantity);
      const productImage=document.getElementById('product-image')
      const productDescription=document.getElementById('product-description')
      const productPrice=document.getElementById('product-price')
      const productQuantity=document.getElementById('product-quantity')
      
      const productName=document.getElementById('product-name')
      productDescription.innerHTML=data.description
      
      productPrice.innerHTML=data.price
      productQuantity.innerHTML=data.quantity
      productName.innerHTML=data.name
      
      const quantityInput=document.getElementById('quantity-input')
      quantityInput.max=data.quantity
      
      const shoppingCartButton=document.getElementById('shopping-cart-button')
      shoppingCartButton.onclick = function ( ) {addToCart(quantityInput.value,data.quantity)}

   /*   const productList = document.getElementById('product-list');
      productList.innerHTML = '';  // Limpiar la lista de productos antes de agregar los nuevos.
      data.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');

        const nameDiv = document.createElement('div');
        nameDiv.classList.add('product-name');
        nameDiv.textContent = product.name;
        productDiv.appendChild(nameDiv);

        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('product-description');
        descriptionDiv.textContent = product.description;
        productDiv.appendChild(descriptionDiv);

        const priceDiv = document.createElement('div');
        priceDiv.classList.add('product-price');
        priceDiv.textContent = `$${product.price}`;
        productDiv.appendChild(priceDiv);

        const quantityDiv = document.createElement('div');
        quantityDiv.classList.add('product-quantity');
        quantityDiv.textContent = `Unidades disponibles: ${product.quantity}`;
        productDiv.appendChild(quantityDiv);
        
        const addToShoppingCartButton=document.createElement('button')
        addToShoppingCartButton.innerHTML='Add to shopping cart'
        productDiv.appendChild(addToShoppingCartButton)
        productList.appendChild(productDiv);
*/

    
    })

    .catch(error => console.error('Error fetching products:', error));
});
