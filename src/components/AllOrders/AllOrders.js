import React, { useEffect, useState } from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    CircularProgress,
    Grid,
    Link,
    Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import useAuth from '../hooks/useAuth';

const AllOrders = () => {
    const { user, isLoading } = useAuth();
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/orders`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setAllOrders(data));
    }, [user?.email]);
    const handleDelete = (id) => {
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                let result = window.confirm('Are you sure to delete?');
                if (result) {
                    alert('Order deleted');
                    const remaining = allOrders.filter(
                        (order) => order._id !== id
                    );
                    setAllOrders(remaining);
                }
            });
    };
    if (isLoading) {
        return <CircularProgress />;
    }
    return (
        <div>
            <h3>Total Orders: {allOrders.length}</h3>
            <Grid container spacing={2}>
                {allOrders.map((order) => (
                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={order.order.img}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Ordered By: {order.name}
                                    </Typography>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                    >
                                        {order.order.name}
                                    </Typography>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                    >
                                        Address: {order.address}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        $ {order.order.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Link
                                    style={{ textDecoration: 'none' }}
                                    to={`/orders/${order.order._id}`}
                                >
                                    <Button
                                        onClick={() => handleDelete(order._id)}
                                        variant="outlined"
                                        startIcon={<DeleteIcon />}
                                    >
                                        Delete
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default AllOrders;
