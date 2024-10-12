# OPEN SOURCE STARTER 

## GDG OPEN SOURCE 2024 LIVE SESSION

## Overview

This project is a JavaScript-based shopping cart system that allows users to:
1. View a list of products fetched from an API.
2. Add products to their cart and store the cart contents in `localStorage`.
3. View the cart and place an order.
4. Clear the cart when needed.

Upon placing an order, the user will receive an alert indicating the order was placed successfully, and the cart will be cleared.

## Features

- **Add to Cart**: Users can add products to their cart by clicking the "Add to Cart" button.
- **View Cart**: The cart dynamically updates to display all the products added.
- **Clear Cart**: Users can clear the cart with a button click.
- **Place Order**: Upon clicking "Place Order", users are notified that their order is placed, and the cart is reset.

## Technologies

- **Frontend**: HTML, CSS, JavaScript (Vanilla)
- **API**: Fetches products from a local API endpoint (e.g., `http://localhost:3000/api/product`)
- **Storage**: Cart data is persisted using the browser's `localStorage`.

