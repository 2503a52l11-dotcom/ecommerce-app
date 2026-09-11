const products = [];

function addProduct(name, price) {
    products.push({
        name: name,
        price: price
    });
}

function removeProduct(name) {
    console.log("Removing product:", name);
}
