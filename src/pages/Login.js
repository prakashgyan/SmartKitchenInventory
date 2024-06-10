// Login.js
import React from 'react';
import useLogin from '../hooks/useLogin';
import LoginForm from '../components/LoginForm';

const Login = () => {
    const { username, setUsername, password, setPassword, handleSubmit } = useLogin();
    return (
        <LoginForm
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
        />
    );
};

export default Login;
