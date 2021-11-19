import React,{ useContext ,useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import styled from "styled-components"
import { Link } from 'react-router-dom';
import  MenuItems from './sidebarMenu.js'
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { CategoryContext } from "../Data/CategoryContents/CategoryContents.js"
import { auth } from '../Config/config';
import Submenu from './submenu'

import './Navbar.css'

const NavIcon = styled(Link)`
margin-left:2rem;
font-size:2rem;
height:50px;
display:flex;
justify-content:flex-start;
align-items:center;
`
const SideBarNav = styled.div`
width:250px;
height:86vh;
display:flex;
justify-content:center;
position:fixed;
top:78px;
left:${({ sidebar }) => (sidebar ? '0' : '-100%')};
transition:350ms;
z-index:10;
background: black;
overflow:scroll;
`
const SideBarWrap = styled.div`
width:100%
`
const SideNav = () => {
    const [sidebar, setSidebar] = useState(true)
    const showSidebar=()=>setSidebar(!sidebar)
    return (
        <>
          
                <NavIcon to="#">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </NavIcon>
          
            <SideBarNav sidebar={sidebar}>
                <SideBarWrap>
                <NavIcon to="#">
                    <AiIcons.AiOutlineClose onClick={showSidebar}/>
                    </NavIcon>
                    {MenuItems.map((item,index)=>{
return <Submenu item={item} key={index}/>
                    })}
                </SideBarWrap>
            </SideBarNav>
            </>
    )
}
export default SideNav