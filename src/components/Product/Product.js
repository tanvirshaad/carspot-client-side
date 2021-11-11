import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from '@mui/material';
import React from 'react';

const Product = ({ product }) => {
    const { img, name, description, price } = product;
    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea sx={{ height: '30vw' }}>
                    <CardMedia component="img" height="140" image={img} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" size="small" color="primary">
                        BUY FOR ${price}
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;
