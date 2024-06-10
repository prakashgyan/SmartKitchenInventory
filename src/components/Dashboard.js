import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Box, List, ListItem, ListItemText, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [inventory, setInventory] = useState([]);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchInventory = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:8000/items', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setInventory(response.data);
            } catch (error) {
                console.error('Error fetching inventory:', error);
                // Redirect to login page if there's an error or user is not authenticated
                navigate('/login');
            }
        };

        fetchInventory();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:8000/items/', {
                name,
                quantity: parseInt(quantity),
                expiration_date: expirationDate,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // Update inventory state with the new item
            setInventory([...inventory, response.data]);
            // Clear form fields after successful submission
            setName('');
            setQuantity('');
            setExpirationDate('');
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box mt={5}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Inventory
                </Typography>
                <List>
                    {inventory.map((item) => (
                        <ListItem key={item.id}>
                            <ListItemText primary={`${item.name} - ${item.quantity}`} />
                        </ListItem>
                    ))}
                </List>
                <Typography variant="h5" component="h2" gutterBottom>
                    Add Item
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        label="Quantity"
                        type="number"
                        fullWidth
                        margin="normal"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <TextField
                        label="Expiration Date"
                        type="date"
                        fullWidth
                        margin="normal"
                        value={expirationDate}
                        onChange={(e) => setExpirationDate(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Add Item
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Dashboard;
