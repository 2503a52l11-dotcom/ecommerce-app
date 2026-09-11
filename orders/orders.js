const orders = [];
function createOrder(cart) { const order = { id: orders.length + 1, items: cart, status: "Pending" }; orders.push(order); return order; }
function updateOrderStatus(orderId, status) { const order = orders.find(order => order.id === orderId); if (order) order.status = status; }
