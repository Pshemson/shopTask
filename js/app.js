const settings = {
  visibleProducts: 4
};

const renderProduct = (product, ul) => {
  const productContainer = document.createElement(`li`);
  productContainer.classList.add('singleProduct');
  const saveAmount = product.price.gross.base_float - product.price.gross.promo_float;
  productContainer.innerHTML = `
<div class="cartBox">
            <img src="img/cart_icon.png">
            <span>sztuk: ${product.stockId}</span>
          </div>
          <div class="saveAmount">
            <p>oszczędzasz:
              <span class="savePrice">${saveAmount} zł </span>
            </p>
            <div class="prodImage">
              <a href="#"><img src="https://outletmeblowy.pl/environment/cache/images/300_300_productGfx_${product.main_image}.jpg"></a>
            </div>
            <div class="productInfo">
<span class="priceNew">${product.price.gross.final}</span>
              <span class="priceOld">${product.price.gross.base}</span>
              <a href="#"><h2>${product.name}</h2></a> 
              <span class="nameBrand"><a href="#">${product.producer.name}</a></span>
            </div>
          </div>`;

  return ul.appendChild(productContainer)
};

const toggleProductsVisibility = () => {
  const [...allProducts] = document.querySelectorAll('#products li');
  allProducts.map((product, index) => {

      if (index+1 <= settings.visibleProducts) {
        return product.classList.add('visible');
      }

      return product.classList.remove('visible');
  })
};

document.addEventListener("DOMContentLoaded", function (event) {
  console.log(data);

  const productList = document.querySelector('#products');

 // pseudo-tablica z elementami <b></b>
  const buttons = document.querySelectorAll('#productsMenu b');

  // zamieniam na zwykla tablice
  const buttonsArray = [...buttons];

  buttonsArray.map(button => button.addEventListener("click", () => {
    settings.visibleProducts = Number(button.innerText);
    return toggleProductsVisibility();
  }));

  const renderProducts = () => data.list.map(item => renderProduct(item, productList));

  renderProducts();
  return toggleProductsVisibility();

});
