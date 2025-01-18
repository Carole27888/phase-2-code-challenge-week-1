import React, { useState, useEffect } from "react";
import { products } from "./data";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import logo from "./assets/Shopping Cart.jpeg"; // Import the logo file

function App() {
    const [cart, setCart] = useState([]);

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

    const addToCart = (product) => {
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
    };

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
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
