var newRequest = new XMLHttpRequest()

function productsList(e) {
  var productData = JSON.parse(e.target.responseText);
  // console.log (productData);
  // console.log (productData.products[0].name);
  for (var i = 0; i < productData.products.length; i++) {
    console.log(productData.products[i].name);
    console.log(productData.products[i].price);
  }
}




newRequest.addEventListener("load", productsList);
newRequest.open("GET", "products.json");
newRequest.send();
