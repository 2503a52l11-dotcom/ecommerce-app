let cart = [];
function addToCart(product) { cart.push(product); }
function removeFromCart(productName) { cart = cart.filter(product => product.name !== productName); }
