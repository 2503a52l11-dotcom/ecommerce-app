const products = [];

function addProduct(name, price) {
    const product = {
        id: products.length + 1,
        name: name,
        price: price
    };

    products.push(product);
    console.log("Product added:", product);
}

function removeProduct(productId) {
    const index = products.findIndex(product => product.id === productId);

    if (index !== -1) {
        products.splice(index, 1);
        console.log("Product removed:", productId);
    }
}

function updateProduct(productId, newName, newPrice) {
    const product = products.find(product => product.id === productId);

    if (product) {
        product.name = newName;
        product.price = newPrice;
        console.log("Product updated:", product);
    }
}
