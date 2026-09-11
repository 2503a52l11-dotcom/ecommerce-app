function processPayment(amount) { if (amount > 0) { return { success: true, message: "Payment successful" }; } return { success: false, message: "Invalid amount" }; }
