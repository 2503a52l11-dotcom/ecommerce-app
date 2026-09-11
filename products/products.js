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
