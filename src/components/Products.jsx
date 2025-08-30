import React from 'react';
import Product from './Product';

const premiumItems = [
    { id: 1, name: 'Designer Sunglasses', price: '₹499', img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400' },
    { id: 2, name: 'Laptop Bag', price: '₹199', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400' },
    { id: 3, name: 'Running Shoes Pro', price: '₹499', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400' },
    { id: 4, name: 'Wireless Headphones', price: '₹599', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400' }
];

export default function Products() {
    return (
        <section className="products-section">
            <h2 className="section-title">Products</h2>
            <div className="products-grid">
                {premiumItems.map(product => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </section>
    );
}
