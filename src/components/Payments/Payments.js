import { Button, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Payments = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant="h3" component="div" gutterBottom>
                Payment system coming soon..
            </Typography>
            <Button>
                <Link to="/home">Back to Home</Link>
            </Button>
        </Box>
    );
};

export default Payments;
