import React from 'react';
import { Button, Container, Grid, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert('Thanks for you review');
                    reset();
                }
            });
    };
    return (
        <Container>
            <h1 style={{ textAlign: 'center' }}>Add A Review</h1>
            <Grid container spacing={2}>
                <Grid sx={{ m: 'auto' }} item xs={12} md={6}>
                    <form
                        className="shipping-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <TextField
                            defaultValue={user?.displayName}
                            {...register('name')}
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                        />
                        {/* <input
                            placeholder="Name"
                            defaultValue={user?.displayName}
                            {...register('name')}
                        /> */}
                        <TextField
                            sx={{ mt: 1 }}
                            defaultValue={user?.email}
                            {...register('email', { required: true })}
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                        />
                        <br />
                        {/* <input
                            placeholder="Email"
                            defaultValue={user?.email}
                            {...register('email', { required: true })}
                        /> */}
                        {errors.email && (
                            <span className="error">
                                This field is required
                            </span>
                        )}

                        <TextField
                            rows={10}
                            sx={{ mb: 2 }}
                            placeholder="Write Your Review Here"
                            defaultValue=""
                            {...register('comment')}
                            id="outlined-basic"
                            label="Comment"
                            variant="outlined"
                        />
                        {/* <input
                            placeholder="Write Your Review Here"
                            defaultValue=""
                            {...register('comment')}
                        /> */}

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

export default Review;
