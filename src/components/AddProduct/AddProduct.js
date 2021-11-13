import { Button, Container } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                alert('New Product Added');
                reset();
            });
    };
    return (
        <Container sx={{ width: '70%' }}>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register('name', {
                        required: true,
                        maxLength: 20,
                    })}
                    placeholder="Product Name"
                />
                <textarea
                    {...register('description')}
                    placeholder="Description"
                />
                <input {...register('img')} placeholder="Image link" />
                <input
                    type="number"
                    {...register('price')}
                    placeholder="price"
                />

                <Button sx={{ width: '20%' }} type="submit" variant="contained">
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default AddProduct;
