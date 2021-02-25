import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>{

    const navContainer = {
        width: '100%',
        display: 'flex',
        flexDirection: 'space-between'
    }

    const linkOffset = {
        paddingRight: '10px'
    }

    return(
        <nav className="nav-wrapper">
                <div className="container">
                        <ul style={navContainer} className="right">
                            <li><Link style={linkOffset} to="/">Products</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                        </ul>
                </div>
        </nav>
    )
}

export default Navbar;
