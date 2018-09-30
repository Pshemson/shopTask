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
  // map wykonuje daną operacje na kazdym elemencie z tablicy
  allProducts.map((product, index) => {
// index to number danego elementu tablicy (zaczyna sie od 0)
      if (index+1 <= settings.visibleProducts) {
        return product.classList.add('visible');
      }

      return product.classList.remove('visible');
  })
};

const toggleProductsSet = (isListButton) => {
  const allProducts = document.querySelector('#products');

  if (isListButton === true) {
    return allProducts.classList.add('list');
  }
  return allProducts.classList.remove('list');
};

document.addEventListener("DOMContentLoaded", function (event) {
  const productList = document.querySelector('#products');
  const listButton = document.querySelector('#productsSet span:nth-child(2)');
  const gridList = document.querySelector('#productsSet span:nth-child(1)');
 // pseudo-tablica z elementami <b></b>
  const buttons = document.querySelectorAll('#productsMenu b');
  // zamieniam na zwykla tablice
  const buttonsArray = [...buttons];

  buttonsArray.map(button => button.addEventListener("click", () => {
    settings.visibleProducts = Number(button.innerText);
    return toggleProductsVisibility();
  }));

  listButton.addEventListener("click", () => {
    return toggleProductsSet(true);
  });

  gridList.addEventListener("click", () => {
    return toggleProductsSet(false);
  });

  const renderProducts = () => data.list.map(item => renderProduct(item, productList));

  renderProducts();
  return toggleProductsVisibility();
});

function timeReamining(day, hour, min, sec) {
  const actualTime = new Date();
  const eventTime = new Date(day, hour, min, sec);
  const timeLeft = eventTime.getTime() - actualTime.getTime();

  if (timeLeft > 0)
  {

    const s = timeLeft / 1000;   // sekundy

    const min = s / 60;               // minuty

    const h = min / 60;               // godziny



    const secLeft = Math.floor(s  % 60);    // pozostało sekund

    const minLeft = Math.floor(min % 60); // pozostało minut

    const hourLeft = Math.floor(h);          // pozostało godzin


    console.log(hourLeft + " : " + minLeft + " : " + secLeft);

  }
  else {
    console.log("Koniec promocji");
  }

}