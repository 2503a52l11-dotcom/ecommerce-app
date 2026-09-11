const orders = [];

function createOrder(cart) {
    const order = {
        id: orders.length + 1,
        items: cart,
        status: "Pending"
    };

    orders.push(order);
    return order;
}
