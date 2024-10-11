const express = require("express");
const path = require("node:path");
const { handleGetOrders } = require("./controllers/handleproducts");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.get("/api/product",handleGetOrders )

app.listen(PORT, () => {
  console.log("Server has started ...");
  console.log(`URL : http://localhost:${PORT}`);
});
