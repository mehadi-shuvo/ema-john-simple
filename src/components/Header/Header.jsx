import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <img src={logo} alt="" />
                <div className="nav-items">
                    <Link to="/">Shop</Link>
                    <Link to="/orders">Order Review</Link>
                    <Link to="/inventory">Manage Inventory</Link>
                    <Link to="/login">Login</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;