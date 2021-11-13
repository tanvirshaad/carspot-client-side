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

const ManageProducts = () => {
    const { isLoading } = useAuth();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = `https://hidden-temple-83787.herokuapp.com/products`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    const handleDelete = (id) => {
        const url = `https://hidden-temple-83787.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                let result = window.confirm('Are you sure to delete?');
                if (result) {
                    alert('Product deleted');
                    const remaining = products.filter(
                        (order) => order._id !== id
                    );
                    setProducts(remaining);
                }
            });
    };
    if (isLoading) {
        return <CircularProgress />;
    }
    return (
        <div>
            <h3>Total Products: {products.length}</h3>
            <Grid container spacing={2}>
                {products.map((product) => (
                    <Grid item xs={12} md={4} key={product._id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
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
                                        $ {product.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Link
                                    style={{ textDecoration: 'none' }}
                                    to={`/orders/${product._id}`}
                                >
                                    <Button
                                        onClick={() =>
                                            handleDelete(product._id)
                                        }
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

export default ManageProducts;
