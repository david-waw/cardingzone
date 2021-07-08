import React,{ useContext ,useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import styled from "styled-components"
import { Link } from 'react-router-dom';
import  MenuItems from './MenuItems.js'
import * as AiIcons from 'react-icons/ai';

const Sidebarlink = styled(Link)`
display:flex;
color:white;
justify-content:space-between;
align-items:center;
padding:20px;
list-style:none;
height:40px;
text-decoration:none;
font-size:18px;
&:hover{
    background:#79aaf1;
cursor:pointer;
}
`
const DropDownLink = styled(Link)`
padding-left:3rem;
display:flex;
align-items:center;
text-decoration:none;
font-size:18px;
background: darkgrey;
`

const SidebarLabel= styled.span`
margin-left:16px;
font-size:18px;
font-family: 'Font Awesome 5 Pro';
&:hover{
color:grey;
}
`

const Submenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false)
    const showSubnav = () => setSubnav(!subnav)
    return (
        <>
            <Sidebarlink to={"#"} onClick={item.subNav && showSubnav}>
                <div>
                <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav ? item.iconOpened :item.subNav ? item.iconClosed : null}
                </div>
                   
               
            </Sidebarlink>
            {subnav && item.subNav.map((item, index) => {
                return (
                    <DropDownLink to={item.path} key={index}>
                        <SidebarLabel>{ item.title}</SidebarLabel>
                    </DropDownLink>
                )
            })}
        </> 
   ) 
}
export default Submenu