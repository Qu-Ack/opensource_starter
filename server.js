const express = require("express");
  const path = require("path");
const {
  handleGetOrders,
  handleGetOrderByID,
} = require("./controllers/handleproducts");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const app = express();

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
