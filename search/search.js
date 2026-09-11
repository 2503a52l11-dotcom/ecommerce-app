function searchProducts(products, keyword) { return products.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase())); }
function filterByPrice(products, maxPrice) { return products.filter(product => product.price <= maxPrice); }
