
var productRequest = new XMLHttpRequest();
productRequest.addEventListener("load", productsList);
productRequest.open("GET", "products.json");
productRequest.send();

var catRequest = new XMLHttpRequest();
catRequest.addEventListener("load", categoriesList);
catRequest.open("GET", "categories.json");
catRequest.send();

var productData;
var catData;


function productsList(e) {
  productData = JSON.parse(e.target.responseText);

  for (i = 0; i < productData.products.length; i++) {
    var productParse = productData.products[i];
    console.log(productParse.name);
    console.log(productParse.price);
    console.log(productParse.category_id)
  }

}

function categoriesList(e) {
    catData = JSON.parse(e.target.responseText);
    for (j = 0; j < catData.categories.length; j++) {
      var catParse = catData.categories[j];
      console.log(catParse.id);
      console.log(catParse.name);


    }
}
