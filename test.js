

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
      displayNames += `<h1>${productData.products[i].name}</h1>`
      displayNames += `<h2>${productData.products[i].price}</h1>`
      document.getElementById('namesHere').innerHTML = displayNames;

    }
  }

  function categoriesList(e) {
    categoryData = JSON.parse(e.target.responseText)
    for (var i = 0; i < categoryData.categories.length; i++) {
      console.log(categoryData.categories[i].id)

    }
  }

  function tryToGetThisToWork () {
    for (var i = 0; i < productData.products.length; i++) {
      if (productData.products[i].category_id === categoryData.categories[0].id)
      console.log(productData.products[i].name, categoryData.categories[0].name)
      displayNames = `<h1>${productData.products[i].name}
                      <h2>${categoryData.categories[0].name}`
      document.getElementById('namesHere').innerHTML = displayNames;

    }
  }
