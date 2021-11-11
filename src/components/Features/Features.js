import React from 'react';
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
} from '@mui/material';

const Features = () => {
    return (
        <>
            <Container>
                <h1 style={{ textAlign: 'center' }}>Our Features</h1>
                <Grid container spacing={2} sx={{ mt: 5, py: 5 }}>
                    <Grid item xs={12} md={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        height: '70px',
                                        width: '70px',
                                        mx: 'auto',
                                    }}
                                    image="https://carspot.scriptsbundle.com/wp-content/uploads/2019/01/turbo.png"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Turbo installation
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Our CarSure experts inspect the car on
                                        over 200 checkpoints so you get complete
                                        satisfaction and peace.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        height: '70px',
                                        width: '70px',
                                        mx: 'auto',
                                    }}
                                    image="https://carspot.scriptsbundle.com/wp-content/uploads/2019/01/steering-wheel.png"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Steering
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Our CarSure experts inspect the car on
                                        over 200 checkpoints so you get complete
                                        satisfaction and peace.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        height: '70px',
                                        width: '70px',
                                        mx: 'auto',
                                    }}
                                    image="https://carspot.scriptsbundle.com/wp-content/uploads/2019/01/suspension.png"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Vehicle Suspension
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Our CarSure experts inspect the car on
                                        over 200 checkpoints so you get complete
                                        satisfaction and peace.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        height: '70px',
                                        width: '70px',
                                        mx: 'auto',
                                    }}
                                    image="https://carspot.scriptsbundle.com/wp-content/uploads/2019/01/lifter.png"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Engine diagnostic
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Our CarSure experts inspect the car on
                                        over 200 checkpoints so you get complete
                                        satisfaction and peace.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Features;
