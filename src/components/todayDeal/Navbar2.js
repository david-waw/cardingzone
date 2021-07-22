import React, { useState } from 'react';
import logo from '../assets/favicon.jpg'; // Tell webpack this JS file uses this image
import { Link } from 'react-router-dom';
import './Navbar2.css';
import Dropdown from './Dropdown';
import { connect } from 'react-redux';
import Help from './Helpandsupport.js'
import AboutData from './About'
import { auth } from '../Config/config';
import CartIcon from '../cart-icon/cart-icon';
import Cost from '../cart-icon/cost'
import CartDropdown from "../cart/cart"
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';




function Navbar({currentUser, hidden, signOutStart }) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);
    
    const [dropdown, setDropdown] = useState(false);
    const [help, setHelp] = useState(false);
    const [about, setAboutData] = useState(false);
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
    };
    const onMouseArrive = () => {
        if (window.innerWidth < 960) {
          setHelp(false);
        } else {
          setHelp(true);
        }
      };
    
      const onMouseExit = () => {
        if (window.innerWidth < 960) {
          setHelp(false);
        } else {
          setHelp(false);
        }
    };
    const onMouseIn = () => {
        if (window.innerWidth < 960) {
          setAboutData(false);
        } else {
          setAboutData(true);
        }
      };
    
      const onMouseOut = () => {
        if (window.innerWidth < 960) {
          setAboutData(false);
        } else {
          setAboutData(false);
        }
      };
    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' >
                    <img className='logo' src={logo} alt="Logo" />
                    <div id='logo'>
                        CARDING<br />
                        BIRD
                    </div>
                    
              
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                       
                            HOME
                        </Link>
                    </li>
                    <li
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link
                            to='#'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            SHOP AND CATEGORIS <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                        
                    </li>
                    <li
                        className='nav-item'
                        onMouseEnter={onMouseArrive}
                        onMouseLeave={onMouseExit}
                    >
                        <Link
                            to='#'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            HELP AND SUPPORT <i className='fas fa-caret-down' />
                        </Link>
                        {help && <Help />}
                        
                    </li>
                    <li
                        className='nav-item'
                        onMouseEnter={onMouseIn}
                        onMouseLeave={onMouseOut}
                    >
                        <Link
                            to='#'
                            className='nav-links'
                            onClick={closeMobileMenu}
                        >
                            About <i className='fas fa-caret-down' />
                        </Link>
                        {about && <AboutData />}
                        
                    </li>
                  
                  
                    <li className='nav-item' >
                        {currentUser ? (
                            <div className='nav-links' id="signinout"  onClick={signOutStart}>
                                SIGN OUT
                            </div>
                        ) : (
                            <Link className='nav-links' to='/signin'>
                                SIGN IN
                            </Link>
                        )}
            </li>
            <li className='nav-item'>
              <Cost className='carticon'/>
              <CartIcon className='carticon' />
              {
                hidden ? null :
                <CartDropdown/>
              }
              
            </li>
                   
                </ul>
            </nav>
        </>
    );

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);