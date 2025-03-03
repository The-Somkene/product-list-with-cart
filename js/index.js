import { products } from "./data.js";
const items = document.querySelector(".items");
console.log(items);
console.log("im here ");
let shown;
const showBtn = (num) => {
  console.log(num);

  shown = num;
};

items.innerHTML = products.map((item, index) => {
  return `<div  class="product">
        <div class="imgcontainer">
          <img
            class="product-img"
            src=${item.image.desktop}
            alt=""
          />
          <button onclick="return ${showBtn(index)}" class="product-btn">
            <img src="./res/icon-add-to-cart.svg" alt="add to cart" />Add to
            cart
          </button>
        </div>
        <div class="products-texts">
          <p class="grey">${item.category}</p>
          <h4 class="darkGrey">${item.name}</h4>
          <p class="red"><b> $${item.price}</b></p>
        </div>
            
            </div>`;
});

console.log(products);
