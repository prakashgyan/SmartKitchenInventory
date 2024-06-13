// src/hooks/useLogin.js
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('username', username);
            formData.append('password', password);

            const response = await axios.post('/token', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            localStorage.setItem('token', response.data.access_token);
            navigate('/dashboard'); // Navigate to dashboard after successful login
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return {
        username,
        setUsername,
        password,
        setPassword,
        handleSubmit,
    };
};

export default useLogin;
