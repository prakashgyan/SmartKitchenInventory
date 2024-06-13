import React from 'react';  
import { AppBar, Toolbar, Typography, Button } from '@mui/material';  
import { Link } from 'react-router-dom';  
import Logo from '../assets/logo.svg';
  
const NavBar = ({ loggedIn }) => {  
    return (  
        <AppBar position="static">  
            <Toolbar>  
                <img src={Logo} alt="logo" height="20" /> 
                <Typography variant="h6" style={{ flexGrow: 1 }}>  
                    <Button color="inherit" component={Link} to="/">Smart Kitchen Inventory</Button>  
                </Typography>  
                {!loggedIn ? (  
                    <>  
                        <Button color="inherit" component={Link} to="/login">Login</Button>  
                        <Button color="inherit" component={Link} to="/signup">Signup</Button>  
                    </>  
                ) : (  
                    <Button color="inherit" component={Link} to="/profile">My Profile</Button>  
                )}  
            </Toolbar>  
        </AppBar>  
    );  
};  
  
export default NavBar;  
