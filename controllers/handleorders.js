const fs = require("fs").promises;
const fsnp = require("fs"); // Non-asynchronous File System Package import. 
const path = require("path");



// Description: This function gets called on the "/api/orders/" POST endpoint route.
// Purpose: Create an order internally by file opeartions. 
// Input: This function takes an array of IDS of products
async function handlePostOrders(req, res) {
try {
    
    console.log("DEBUG: Orders api ran"); //TEMP DEBUG CODE || DELETE LATER
    console.log(req.body);  //TEMP DEBUG CODE || DELETE LATER
    
    // File path pointing to the orders.json file
    const ordersJson_filePath = path.join(__dirname, "../db", "orders.json");

    // Checking if the file exists or not, if not then create a orders.json file at the specified path.
    if (fsnp.existsSync(ordersJson_filePath)) {
        // No need to process further regarding file generation.
      } else {
        // The file doesn't exist, so creating the file
        fsnp.closeSync(fsnp.openSync(ordersJson_filePath, 'w')); 
      }
      
    // Sending a test result as response to the call of this route.
    res.json({"status" :"TEST WORKING"});


} catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
}

}

module.exports = {
    handlePostOrders
  };