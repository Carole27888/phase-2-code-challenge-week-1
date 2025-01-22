function Cart({ cart, updateCart, removeFromCart }) { //defining the cart functional components and also destrucring the props passed to the component.
    //cart is an array of the cart items, updateCart is a function to update the quantity of items in the cart, remeoveFromCart is a function to remove item from the cart.

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0); //here it is simply calculating the total price of all items in the cart.sum is an accumulator that keeps a running total.

    return (
        <div>
            <h2>Cart</h2>
            {cart.length === 0 ? ( //checks if the cart is empty..if true then show the below message.
                <p>Your cart is empty. Start shopping now!</p>
            ) : ( //conditional rendering of content
                <ul> 
                    {cart.map((item) => (//maps(iterates) through the cart array to display each item
                        <li key={item.id}>
                            {item.name} - ${item.price} x {item.quantity}
                            <button onClick={() => updateCart(item.id, item.quantity - 1)}>-</button>
                            <button onClick={() => updateCart(item.id, item.quantity + 1)}>+</button>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${total.toFixed(2)}</h3>
        </div>
    );
}

export default Cart;
//The buttons above decrease quantity, increase quantity and remove an item from a cart. The last button calls the removeFromCart functional component with the item's id to remove it from the cart.
//<h3> displays the total price and converts it to two decimal places for currency display.
