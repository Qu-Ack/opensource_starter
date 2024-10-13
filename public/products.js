let cart = JSON.parse(localStorage.getItem("cart")) || []; // Initialize cart from localStorage
const productContainer = document.querySelector(".product_container");

async function getOrders() {
  try {
    const response = await fetch("http://localhost:3000/api/product");
    const data = await response.json();
    console.log(data);
    renderProducts(data.products);
  } catch (err) {
    console.log(err);
  }
}

function pushCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addtoCartListener(addtocartbutton) {
  addtocartbutton.addEventListener("click", () => {
    let productId = addtocartbutton.className.split("-")[1];
    console.log(productId, "was clicked");

    cart.push(productId);
    pushCart();
    console.log("Added product:", productId, "Cart:", cart);
  });
}

function renderProducts(products) {
  productContainer.innerHTML = "";
  products.forEach((product) => {
    productContainer.innerHTML += `
      <div class="product">
        <p class="product-name">${product.name}</p>
        <p>${product.price}</p>
        <button class="addtocart-${product.id}">Add To Cart</button>
      </div>
    `;
  });

  products.forEach((product) => {
    const addtocart = document.querySelector(`.addtocart-${product.id}`);
    addtoCartListener(addtocart);
  });
}

getOrders();
