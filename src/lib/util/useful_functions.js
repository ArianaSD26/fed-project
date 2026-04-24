export function calculateSubtotal(items) {
    let subtotal = 0;
    
    items.forEach(item => {
        subtotal += item.price * item.quantity;
    });
    
    return subtotal;
}

export function calculateTax(subtotal) {
    return subtotal * 0.1;
}

export function calculateTotal(subtotal, tax) {
    return subtotal + tax;
}