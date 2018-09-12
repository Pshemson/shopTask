const settings = {
  visibleProducts: 3
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
            <span>sztuk: 1</span>
          </div>
          <div class="saveAmount">
            <p>oszczędzasz:
              <span class="savePrice">2000,00 zł </span>
            </p>
            <div class="prodImage">
              <img src="https://outletmeblowy.pl/environment/cache/images/300_300_productGfx_${product.main_image}.jpg">
            </div>
            <div class="productInfo">
<span class="priceNew">3690 zł</span>
              <span class="priceOld">5690 zł</span>
              <h2>Kanapa 3 firmy Kler kolekcja Canone W001</h2>
              <span class="nameBrand"><a href="#">Grupa Kler</a></span>
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
