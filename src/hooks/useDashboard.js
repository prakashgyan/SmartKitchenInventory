// useDashboard.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useDashboard = () => {
    const [inventory, setInventory] = useState([]);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchInventory = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('/items', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setInventory(response.data);
            } catch (error) {
                console.error('Error fetching inventory:', error);
                navigate('/login');
            }
        };

        fetchInventory();
    }, [navigate]);

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
            setInventory([...inventory, response.data]);
            setName('');
            setQuantity('');
            setExpirationDate('');
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    return {
        inventory,
        name,
        setName,
        quantity,
        setQuantity,
        expirationDate,
        setExpirationDate,
        handleSubmit,
    };
};

export default useDashboard;
