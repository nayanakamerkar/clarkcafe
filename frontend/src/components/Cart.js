import React from 'react'

const Cart = ({ cart, removeFromCart }) => (
    <div>
        <h2>Shopping Cart</h2>
        <ul>
            {/* {cart.map((product, index) => (
                <li key={index}>
                    {product.name} - ${product.price}
                    <button onClick={() => removeFromCart(index)}>Remove</button>
                </li>
            ))} */}
        </ul>
    </div>
);

export default Cart

