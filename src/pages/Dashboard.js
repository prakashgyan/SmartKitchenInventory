// Dashboard.js
import React from 'react';
import useDashboard from '../hooks/useDashboard';
import DashboardView from '../components/DashboardView';

const Dashboard = () => {
    const {
        inventory,
        name,
        setName,
        quantity,
        setQuantity,
        expirationDate,
        setExpirationDate,
        handleSubmit,
    } = useDashboard();
    
    return (
        <DashboardView
            inventory={inventory}
            name={name}
            setName={setName}
            quantity={quantity}
            setQuantity={setQuantity}
            expirationDate={expirationDate}
            setExpirationDate={setExpirationDate}
            handleSubmit={handleSubmit}
        />
    );
};

export default Dashboard;
