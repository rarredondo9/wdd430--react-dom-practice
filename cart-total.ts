// Each item in the cart must have a price and quantity
interface CartItem {
    name?: string; 
    price: number;
    qty: number;
}

// What the function gives back: three numbers
interface CartSummary {
    subtotal: number;
    tax: number;
    total: number;
}

//items is a list of CartItems, taxRate is a number and it returns a CartSummary
export function formatCartTotal(items: CartItem[], taxRate: number): CartSummary {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
    const tax = subtotal * taxRate;
    return {
        subtotal,
        tax,
        total: subtotal + tax
    };
}
