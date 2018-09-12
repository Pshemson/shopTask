const settings = {
  visibleProducts: 4
};

const renderProduct = (product, ul, isVisible) => {
  const productContainer = document.createElement(`li`);
productContainer.classList.add('singleProduct');

if (isVisible) {
  productContainer.classList.add('visible');
} else {
  productContainer.classList.remove('visible');
}

productContainer.innerHTML = `
<div class="cartBox">
            <img src="img/cart_icon.png">
            <span>sztuk: ${product.stockId}</span>
          </div>
          <div class="saveAmount">
            <p>oszczędzasz:
              <span class="savePrice">2000,00 zł </span>
            </p>
            <div class="prodImage">
              <a href="#"><img src="https://outletmeblowy.pl/environment/cache/images/300_300_productGfx_${product.main_image}.jpg"></a>
            </div>
            <div class="productInfo">
<span class="priceNew">${product.price.gross.final}</span>
              <span class="priceOld">5690 zł</span>
              <a href="#"><h2>${product.name}</h2></a> 
              <span class="nameBrand"><a href="#">${product.producer.name}</a></span>
            </div>
          </div>`;

ul.appendChild(productContainer)

};



document.addEventListener("DOMContentLoaded", function(event) {
  console.log(data);

const productList = document.querySelector('#products');
const buttons = [...document.querySelectorAll('#productsMenu b')];

buttons.map(button => button.addEventListener("click", () => {
  settings.visibleProducts = Number(button.innerText);
  return renderProducts();
}));

const renderProducts = () => {
  return data.list.map((item, i) => {
    if (i+1 <= settings.visibleProducts) {
      return renderProduct(item, productList, true)
    }

    return renderProduct(item, productList, false)
  });
};

  renderProducts()


});
