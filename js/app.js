'use strict';

function AppState() {
  this.allProducts = [];
}

AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'))
    } else {
      this.allProducts.push(new Product(productNames[i]))
    }
  }

}

AppState.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save product data to local storage
  let savedProducts = JSON.stringify(this.allProducts);
  localStorage.setItem('products', savedProducts);
  console.log(savedProducts);
}

AppState.prototype.loadItems = function () {

  // TODO: Update this instance method to retrieve data from local storage instead of creating new Products on each page load
  let retrievedProducts = localStorage.getItem('products');
  retrievedProducts = JSON.parse(retrievedProducts);
  this.instantiateProducts();
  if (retrievedProducts) {
    for (let i = 0; i < this.allProducts.length; i++) {
      this.allProducts[i].timesClicked = retrievedProducts[i].timesClicked;
      this.allProducts[i].timesShown = retrievedProducts[i].timesShown;
    }
  }
}


function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}
