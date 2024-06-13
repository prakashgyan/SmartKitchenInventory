import React, { useState, useEffect } from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Signup from './components/Signup';
import NavBar from './components/NavBar';



function App() {

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {  
        const token = localStorage.getItem('token');  
        if (token) {  
            setLoggedIn(true);  
        }  
    }, []);

    return (
        <Router>
            <NavBar loggedIn={loggedIn} />  
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
