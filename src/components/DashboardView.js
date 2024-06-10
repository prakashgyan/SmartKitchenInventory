// DashboardView.js
import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, TextField, Button } from '@mui/material';

const DashboardView = ({
    inventory,
    name,
    setName,
    quantity,
    setQuantity,
    expirationDate,
    setExpirationDate,
    handleSubmit,
}) => (
    <Container maxWidth="sm" className="frosted-background">
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

export default DashboardView;
