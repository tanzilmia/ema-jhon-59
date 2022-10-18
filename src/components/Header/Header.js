import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { mycontext } from '../../contextApi/UseContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const naviget = useNavigate()
    const {user,logout} = useContext(mycontext)
    const manageLogout = () =>{
        logout()
        naviget('/login')
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
               
                
                {
                    user?.email ? 
                    <button onClick={manageLogout}>Logout</button>
                    :
                    <>
                     <Link to='/login'>Login</Link>
                    <Link to='/signup'>signup</Link>
                    </>

                }
            </div>
        </nav>
    );
};

export default Header;