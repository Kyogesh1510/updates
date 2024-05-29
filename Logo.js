import React from 'react';
import logo from '../assets/logo.png'; // Ensure the path is correct

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt="Aaha Technology Logo" style={{ width: '100px', height: 'auto' }} />
        </div>
    );
};

export default Logo;

