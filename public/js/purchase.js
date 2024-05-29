var productName= localStorage["productName"] 

document.addEventListener('DOMContentLoaded', function() {
  let storedShoppingCart= localStorage["shoppingCart"];
   
  if(storedShoppingCart===undefined){
    return;
  }
  let shoppingCart=JSON.parse(storedShoppingCart);



  const table=document.getElementById('product-details');
  let total=0
  let totalUnits=0
  for (let i = 0; i < shoppingCart.length; i++) {
    const product=shoppingCart[i]
    let productName=product.productName;
    console.log("alo+aaaa"+productName)
    fetch('client/product?productName='+productName)
      .then(response => response.json())
      .then(data => {
        console.log(data.name);
        console.log(data.price);
        console.log(data.quantity);
        let tableRow=table.insertRow();
        let cell1Name=tableRow.insertCell();

        let cell2Image=tableRow.insertCell();
        let cell3Description=tableRow.insertCell();
        let cell4UnitPrice=tableRow.insertCell();
        let cell5Units=tableRow.insertCell();
        let cell6Subtotal=tableRow.insertCell();

        cell1Name.innerHTML=data.name;
        cell3Description.innerHTML=data.description
        cell4UnitPrice.innerHTML=data.price
        cell5Units.innerHTML=product.productQuantity
        totalUnits+=product.productQuantity

        let subtotal=data.price*product.productQuantity
        total+=subtotal

        cell6Subtotal.innerHTML=subtotal         


        console.log("ESTE ES EL TOTAL"+total)

      }).catch(error => console.error('Error fetching products:', error));

  }
  const totalDiv=document.getElementById('total-div');
  console.log("NOMELOCROE"+total)
  totalDiv.innerHTML=total
});
