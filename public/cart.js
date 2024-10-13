const cartHolder = document.querySelector(".cart-holder");

function renderCart() {
  const cartContents = JSON.parse(localStorage.getItem("cart"));
  if (!cartContents || cartContents.length === 0) {
    cartHolder.innerHTML = "<p>You haven't added any elements to the cart</p>";
  } else {
    cartHolder.innerHTML = "";
    const productPromises = cartContents.map((productid) =>
      getProductInfo(productid),
    );

    Promise.all(productPromises).then(() => {
      cartHolder.innerHTML += `
        <button class="clear-cart">Clear Cart</button>
        <button class="place-order">Place Order</button>
      `;
      const clearCartbutton = document.querySelector(".clear-cart");
      const placeOrderbutton = document.querySelector(".place-order");

      ClearCartListener(clearCartbutton);
      PlaceOrderListener(placeOrderbutton);
    });
  }
}

async function getProductInfo(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/product/${id}`);
    const data = await response.json();
    renderCartHTML(data);
  } catch (err) {
    console.log(err);
  }
}

function renderCartHTML(data) {
  cartHolder.innerHTML += `
    <div class="product">
      <p class="product-name">${data.name}</p>
      <p class="product-price">${data.price}</p>
    </div>
  `;
}

function ClearCartListener(clearcartbutton) {
  clearcartbutton.addEventListener("click", () => {
    console.log("Clear cart clicked");
    localStorage.clear();
    renderCart();
  });
}

function PlaceOrderListener(placeOrderbutton) {
  placeOrderbutton.addEventListener("click", () => {
    alert("Your order was placed successfully!");
    localStorage.clear();
    renderCart();
  });
}

renderCart();
