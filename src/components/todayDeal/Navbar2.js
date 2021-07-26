import React, { useState } from 'react';
import logo from '../assets/favicon.jpg'; // Tell webpack this JS file uses this image
import { Link } from 'react-router-dom';
import './Navbar2.css';
import { HelpItems } from './MenuItems.js';
import { MenuItems } from './MenuItems.js';
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
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { About } from './MenuItems.js';


function Navbare({currentUser, hidden, signOutStart }) {
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
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"> <Link to='/' className='navbar-logo' >
                    <img className='logo' src={logo} alt="Logo" />
                    <div id='logo'>
                        CARDING<br />
                       DRILL
                    </div>
                    
              
                </Link>
            </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link > <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                       
                       HOME
                   </Link></Nav.Link>
   
                <NavDropdown title="SHOP AND CATEGORIES" id="collasible-nav-dropdown">
                  {MenuItems.map((item, index) => {
                    return (
        <NavDropdown.Item  >
        
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          
                      </NavDropdown.Item>
                      );
      })}
      
        <NavDropdown.Divider />
     
                </NavDropdown>
                <NavDropdown title="HELP AND SUPPORT" id="collasible-nav-dropdown">
                {HelpItems.map((item, index) => {
                  return (
                    <NavDropdown.Item >  <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li></NavDropdown.Item>
                  
                          );
      })}
      
        
                </NavDropdown>
                <NavDropdown title="About" id="collasible-nav-dropdown">
                {About.map((item, index) => {
                  return (
                    <NavDropdown.Item > <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li></NavDropdown.Item>
           );
        })}
      
        
                </NavDropdown>
                <Nav.Link >   {currentUser ? (
                            <div className='nav-links' id="signinout"  onClick={signOutStart}>
                                SIGN OUT
                            </div>
                        ) : (
                            <Link className='nav-links' to='/signin'>
                                SIGN IN
                            </Link>
                        )}</Nav.Link>
              </Nav>
              <li className='nav-itemw'>
            <Cost className='carticon'/>
              <CartIcon className='carticon' />
              {
                hidden ? null :
                <CartDropdown/>
              }
              
            </li>
    <Nav>
    
   
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
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
)(Navbare);