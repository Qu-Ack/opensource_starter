const productContainer = document.querySelector(".product_container");

async function getOrders() {
  try {
    const response = await fetch("http://localhost:3000/api/product");
    const data = await response.json();
    renderProducts(data.products);
  } catch (err) {
    console.log(err);
  }
}

async function pushCart(productId) {
  try {
  } catch (err) {}
}

function addtoCartListener(addtocartbutton) {
  addtocartbutton.addEventListener("click", async () => {
    let productId = addtocartbutton.className.split("-")[1];
  });
}

function renderProducts(products) {
  products.forEach((product) => {
    productContainer.innerHTML += `<div class="product"><p class="product-name">${product.name}</p><p>${product.price}</p><button class="addtocart-${product.id}">Add To Cart</button></div>`;
    const addtocart = document.querySelector(`.addtocart-${product.id}`);
    addtoCartListener(addtocart);
  });
}

getOrders();

