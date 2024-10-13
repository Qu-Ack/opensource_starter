const express = require("express");
const path = require("path");
const fs = require("fs");
const {
  handleGetOrders,
  handleGetOrderByID,
} = require("./controllers/handleproducts");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/product", handleGetOrders);
app.get("/api/product/:productid", handleGetOrderByID);


app.listen(PORT, () => {
  console.log("Server has started ...");
  console.log(`URL : http://localhost:${PORT}`);
});


// doing the changes below for the issue #19
app.post('/api/products', async (req, res) => {  
  

  

  fs.promses.writefile("/db/products.json", req);
});


fs.promises.readFile("/db/products.json");
