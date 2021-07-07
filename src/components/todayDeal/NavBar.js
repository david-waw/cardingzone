import React,{ useContext ,useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SidebarData from './SidebarData'
import * as AiIcons from 'react-icons/ai';
import { CategoryContext } from "../Data/CategoryContents/CategoryContents.js"
import './Navbar.css'

const NavBar = () => {
    const { category } = useContext(CategoryContext)
   
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                        <AiIcons.AiOutlineClose />
                        </Link>
                        
                    </li>
                    {category.map((item) => {
              return (
                <li className={item.category}>
                 
                </li>
              );
            })}
                    
            </ul>
            </nav>
        </>
    )
}
export default NavBar