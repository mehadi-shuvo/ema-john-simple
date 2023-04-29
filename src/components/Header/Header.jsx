import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/UserProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    const logOutHandler =()=>{
        logOut().then(()=>{}).catch(error=>{console.log(error)});
    }
    return (
        <div>
            <nav>
                <img src={logo} alt="" />
                <div className="nav-items">
                    <Link to="/">Shop</Link>
                    <Link to="/orders">Order Review</Link>
                    <Link to="/inventory">Manage Inventory</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                    {
                        user&&<span>{user.email}<button onClick={logOutHandler}>Log Out</button></span>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;