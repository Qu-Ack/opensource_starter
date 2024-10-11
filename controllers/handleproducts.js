const fs = require("node:fs").promises
const path = require("node:path")



async function handleGetOrders(req,res,next) {
    try {
        const filePath = path.join(__dirname, '../db', 'products.json');
        
        const data = await fs.readFile(filePath, 'utf-8');
        
        const products = JSON.parse(data);

        res.json(products);
    }catch(err) {
        console.log(err)
        res.status(500).json({"error": "Internal Server Error"})
    }
}


module.exports = {
    handleGetOrders
}