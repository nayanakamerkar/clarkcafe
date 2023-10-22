import React, { useState } from 'react';
import './ProductCard.css'

function ProductCard({ product }) {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="product-card">
            <h2>{product.productName}</h2>
            <img src={product.productImage} alt={product.productName} width="200" />
            <div className="tags">
                {product.tags.map((tag, index) => (
                    <span key={index} className="tag">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="progress-bars">
                <div className="progress-bar">
                    <div className="filled" style={{ width: `${product.progress1}%` }}></div>
                </div>
                <div className="progress-bar">
                    <div className="filled" style={{ width: `${product.progress2}%` }}></div>
                </div>
                <div className="progress-bar">
                    <div className="filled" style={{ width: `${product.progress3}%` }}></div>
                </div>
            </div>
            <div className="quantity-control">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>

            <button className="add-to-cart-btn">Add to Cart</button>
        </div>
    );
}

export default ProductCard;
