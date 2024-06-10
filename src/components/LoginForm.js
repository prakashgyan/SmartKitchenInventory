// LoginForm.js
import React from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const LoginForm = ({ username, setUsername, password, setPassword, handleSubmit }) => (
    <Container maxWidth="sm" className="frosted-background">
        <Box mt={5}>
            <Typography variant="h4" component="h1" gutterBottom>
                Login
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Login
                </Button>
            </form>
        </Box>
    </Container>
);

export default LoginForm;
