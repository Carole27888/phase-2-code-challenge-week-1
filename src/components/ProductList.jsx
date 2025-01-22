import React, { useState } from "react";

function ProductList({ products, addToCart }) {
    const [searchTerm, setSearchTerm] = useState("");// in this function we have products which is an array of products obejects passed as prop. The objects are carrying properties like id, name and price.addToCart on the other hand is a function passed as a prop.
     //searchTerm is a state variable to store the user's input in the search bar.setSearch Term on the other hand is a function invoker for the searchTerm. It simply updates it.

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ); //.filter method will ensure that the array only includes the products that match the seachTerm state variable.

    return (
        <div>
            <h2>Products</h2>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredProducts.map((product) => ( // iterating over the filtered array of products in order to render a <li> for each product. the key provides a unique key for each list item.
                    <li key={product.id}>
                        <span>
                            {product.name} - ${product.price}
                        </span>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
