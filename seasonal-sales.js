var newRequest = new XMLHttpRequest()

function productsList(e) {
  var productData = JSON.parse(e.target.responseText);
  console.log (productData);
}

newRequest.addEventListener("load", productsList);
newRequest.open("GET", "products.json");
newRequest.send();
