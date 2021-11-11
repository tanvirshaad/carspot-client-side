import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/banner.jpg';
const Banner = () => {
    const bannerBg = {
        background: `url(${banner})`,
    };
    return (
        <Grid sx={{ p: 5, my: 'auto' }} style={bannerBg}>
            <Container>
                <Grid
                    style={{ textAlign: 'left', padding: '170px 0px' }}
                    item
                    xs={12}
                    md={7}
                >
                    <Box>
                        <Typography
                            sx={{ fontWeight: 'bold', color: 'white' }}
                            variant="h2"
                        >
                            Find Your Dream Car
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: 14,
                                color: 'white',
                                fontWeight: 300,
                                my: 3,
                            }}
                        >
                            Our CarSpot experts inspect the car on over 200
                            checkpoints so you get complete satisfaction and
                            peace.
                        </Typography>
                        <Link to="/products" style={{ textDecoration: 'none' }}>
                            <Button variant="contained">Explore</Button>
                        </Link>
                    </Box>
                </Grid>
            </Container>
        </Grid>
    );
};

export default Banner;
