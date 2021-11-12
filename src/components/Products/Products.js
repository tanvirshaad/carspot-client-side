import { CircularProgress, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import Product from '../Product/Product';

const Products = () => {
    let [products, setProducts] = useState([]);
    const { isLoading } = useAuth();
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);
    if (isLoading) {
        return <CircularProgress />;
    }
    return (
        <Container sx={{ py: 5 }}>
            <h1 style={{ textAlign: 'center' }}>Our Products</h1>
            <Grid container spacing={2} sx={{ mt: 5 }}>
                {products.slice(0, 6).map((product) => (
                    <Product key={product._id} product={product}></Product>
                ))}
            </Grid>
        </Container>
    );
};

export default Products;
