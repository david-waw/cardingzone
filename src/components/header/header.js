import React from 'react';
import './header.scss'
import { Link } from 'react-router-dom';
import  Logo from '.././assets/favicon.jpg'
const Header = () => (
    
    <div className='header'>
        <Link className='logoContainer' to='/'>
        <img className="img-responsive" src={Logo} alt="logo"/>
        </Link>
        <div className='options'>
            <Link className='option' to='/ShopPage'>Shop</Link>
        </div>
    </div>
    
    
)
export default Header