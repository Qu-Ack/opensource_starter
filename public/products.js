async function getOrders() {
    try {
        const response = await fetch("http://localhost:3000/api/product")
        const data = await response.json()
        console.log(data)
    } catch(err) {
        console.log(err)
    }
}

getOrders()