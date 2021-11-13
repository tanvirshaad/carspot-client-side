import React, { useState } from 'react';
import {
    Alert,
    Button,
    CircularProgress,
    Container,
    Grid,
    TextField,
    Typography,
} from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState();
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };
    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    };

    return (
        <Container sx={{ mt: 5 }}>
            <Grid container spacing={2}>
                <Grid sx={{ m: 'auto' }} item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ my: 3 }}
                            fullWidth
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <TextField
                            sx={{ my: 3 }}
                            fullWidth
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <Button fullWidth type="submit" variant="contained">
                            Login
                        </Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register"
                        >
                            <Button variant="text">
                                New User? Please Register
                            </Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && (
                            <Alert severity="success">
                                User created successfully!
                            </Alert>
                        )}
                        {authError && (
                            <Alert severity="error">{authError}</Alert>
                        )}
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
