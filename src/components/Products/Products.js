import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/products.json')
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div>
            <h2>This is Products: {products.length}</h2>
        </div>
    );
};

export default Products;
