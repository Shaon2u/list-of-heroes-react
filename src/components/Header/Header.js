import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="List of Programming Heroes"/>
            <nav>
                <a href="/home">Home</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;