

  var productRequest = new XMLHttpRequest();
  productRequest.addEventListener("load", productsList);
  productRequest.open("GET", "products.json");
  productRequest.send();

  var categoryRequest = new XMLHttpRequest();
  categoryRequest.addEventListener("load", categoriesList);
  categoryRequest.open("GET", "categories.json");
  categoryRequest.send();

  var productData;
  var categoryData;

  var displayNames = "";

  function productsList(e) {
    productData = JSON.parse(e.target.responseText)
    for (var i = 0; i < productData.products.length; i++) {
      console.log(productData.products[i].name)
      console.log(productData.products[i].price)

    }
  }

  function categoriesList(e) {
    categoryData = JSON.parse(e.target.responseText)
    for (var i = 0; i < categoryData.categories.length; i++) {
      console.log(categoryData.categories[i].id)

    }
  }

  function tryToGetThisToWork () {
    document.getElementById('namesHere').innerHTML = "";
    for (var i = 0; i < productData.products.length; i++) {
      for (var j = 0; j < categoryData.categories.length; j++) {

        if (productData.products[i].category_id === categoryData.categories[j].id){
        console.log(productData.products[i].name, categoryData.categories[j].name)
        displayNames = `<h1>${productData.products[i].name}
                        <h2>${categoryData.categories[j].name}
                        <h3>${productData.products[i].price}`
        document.getElementById('namesHere').innerHTML += displayNames;


      }
    }
  }
}
