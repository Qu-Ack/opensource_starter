const fs = require("fs").promises;
const path = require("path");

async function handleGetOrders(req, res, next) {
  try {
    const filePath = path.join(__dirname, "../db", "products.json");

    const data = await fs.readFile(filePath, "utf-8");

    const products = JSON.parse(data);

    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function handleGetOrderByID(req, res) {
  try {
    const filePath = path.join(__dirname, "../db", "products.json");
    const data = await fs.readFile(filePath, "utf-8");
    const products = JSON.parse(data);

    const product = products.products.find(
      (product) => product.id == req.params.productid,
    );

    if (product) {
      return res.json(product);
    }

    res.status(404).json({ error: "No such product exists" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
module.exports = {
  handleGetOrders,
  handleGetOrderByID,
};

