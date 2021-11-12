import React, { useEffect, useState } from 'react';
import './PlaceOrder.css';
import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const { _id } = useParams();
    const [product, setProducut] = useState({});
    const { user } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    useEffect(() => {
        const url = `http://localhost:5000/products/${_id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProducut(data));
    }, []);
    const onSubmit = (data) => {
        const { _id, name, price, img } = product;
        data.order = { _id, name, price, img };

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert('Your order is processing');
                    reset();
                }
            });
    };
    return (
        <Container>
            <h1>Place Your Order</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ maxWidth: 320, p: 5 }}>
                        <CardActionArea sx={{ height: '30vw' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={product.img}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {product.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {product.description}
                                </Typography>
                                <Typography variant="h6" color="primary">
                                    $ {product.price}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <form
                        className="shipping-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input
                            placeholder="Name"
                            defaultValue={user?.name}
                            {...register('name')}
                        />

                        <input
                            placeholder="Email"
                            defaultValue={user?.email}
                            {...register('email', { required: true })}
                        />
                        {errors.email && (
                            <span className="error">
                                This field is required
                            </span>
                        )}
                        <input
                            placeholder="Address"
                            defaultValue=""
                            {...register('address')}
                        />
                        <input
                            placeholder="City"
                            defaultValue=""
                            {...register('city')}
                        />
                        <input
                            placeholder="Phone number"
                            defaultValue=""
                            {...register('phone')}
                        />

                        <Button
                            sx={{ width: '20%' }}
                            type="submit"
                            variant="contained"
                        >
                            Submit
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default PlaceOrder;
