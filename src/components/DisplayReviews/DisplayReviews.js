import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import DisplayReview from '../DisplayReview/DisplayReview';

const DisplayReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <div>
            <Container sx={{ textAlign: 'center', py: 5 }}>
                <h1>Reviews</h1>
                <Grid container spacing={2}>
                    {reviews.map((review) => (
                        <DisplayReview
                            key={review._id}
                            review={review}
                        ></DisplayReview>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default DisplayReviews;
