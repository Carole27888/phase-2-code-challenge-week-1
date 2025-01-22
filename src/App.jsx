import React, { useState, useEffect } from "react";
import { products } from "./data";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import logo from "./assets/Shopping Cart.jpeg"; // Import the logo file

function App() {
    const [cart, setCart] = useState([]); //state is data that is dynamically stored in a component.useState enables re-rendering of data dynamically of the parent component.
   //setCart will be used to invoke a function that has another state variable (cart)

    // Load cart from localStorage on first render
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        if (savedCart) {
            setCart(savedCart);
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => { // product here is used as a parameter-a set of values(can be any data type)
        const existingItem = cart.find((item) => item.id === product.id);
        if (existingItem) {
            setCart(
                cart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const updateCart = (id, quantity) => {
        setCart(
            cart.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(quantity, 0) } : item
            )
        );
    }; //this function will updte the quantity of a specific item in the cart . Here the cart state will create a new array with the updated quantity for the matching item.
    //.map method creates a new array by applying a function to each element of an existing array.

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id)); //creates a new array containing only the elements  existing array that satisfy a certain condition3h
    };

    return (
        <div>
            {/* Add logo and align it at the top */}
            <header style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <img src={logo} alt="Shopping Cart Logo" style={{ height: "60px", borderRadius: "8px" }} />
                <h1>E-Commerce Cart</h1>
            </header>

            {/* Product List and Cart Components */}
            <ProductList products={products} addToCart={addToCart} />
            <Cart cart={cart} updateCart={updateCart} removeFromCart={removeFromCart} />
        </div>
    );
}

export default App;
