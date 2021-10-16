import React from 'react';
//css
import styels from './Navbar.module.css';

const Navbar = ({logoutHandler}) => {
    return (
        <div className={styels.container} >
            <div className={styels.name}>
               MP APP 
            </div>
            <div className={styels.logout } onClick={logoutHandler}>
                Logout
            </div>
        </div>
    );
};

export default Navbar;
