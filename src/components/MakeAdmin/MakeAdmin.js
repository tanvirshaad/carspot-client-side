import { Alert, Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleAdminSubmit = (e) => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            });
        e.preventDefault();
    };
    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    };

    return (
        <Container sx={{ width: '50%' }}>
            <h2>Make An Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    onBlur={handleOnBlur}
                    type="email"
                    label="Email"
                    variant="standard"
                />
                <br />
                <Button type="submit" variant="contained">
                    Make Admin
                </Button>
            </form>
            {success && (
                <Alert severity="success">Admin Made Successfully.</Alert>
            )}
        </Container>
    );
};

export default MakeAdmin;
