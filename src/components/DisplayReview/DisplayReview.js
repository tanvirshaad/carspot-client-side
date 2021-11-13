import React from 'react';
import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Grid,
    Typography,
} from '@mui/material';
import { blue } from '@mui/material/colors';

const DisplayReview = ({ review }) => {
    const { name, comment } = review;
    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345, textAlign: 'left', height: '10vw' }}>
                <CardHeader
                    sx={{ display: 'flex' }}
                    avatar={
                        <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
                            {name[0]}
                        </Avatar>
                    }
                    title={name}
                />
                <CardContent>
                    <Typography variant="body2">{comment}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default DisplayReview;
