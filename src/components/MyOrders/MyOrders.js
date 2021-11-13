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
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

const MyOrders = () => {
    const { user, isLoading } = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        const url = `https://hidden-temple-83787.herokuapp.com/orders`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setMyOrders(data));
    }, [user?.email]);
    const orders = myOrders.filter((order) => order.email === user?.email);

    const handleDelete = (id) => {
        const url = `https://hidden-temple-83787.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                let result = window.confirm('Are you sure to delete?');
                if (result) {
                    alert('Order deleted');
                    const remaining = myOrders.filter(
                        (order) => order._id !== id
                    );
                    setMyOrders(remaining);
                }
            });
    };
    if (isLoading) {
        return <CircularProgress />;
    }
    return (
        <div>
            <h3>My Orders: {orders.length}</h3>
            <Grid container spacing={2}>
                {orders.map((order) => (
                    <Grid item xs={12} md={4} key={order._id}>
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
                                        {order.order.name}
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

export default MyOrders;
