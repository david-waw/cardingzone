import React,{ useContext ,useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import styled from "styled-components"
import { Link } from 'react-router-dom';
import  MenuItems from './MenuItems.js'
import * as AiIcons from 'react-icons/ai';
import "./sidemenu.scss"
const Sidebarlinks = styled(Link)`
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
const DropDownLinks = styled(Link)`
padding-left:3rem;
display:flex;
align-items:center;
text-decoration:none;
font-size:18px;
background: darkgrey;
`

const SidebarLabels= styled.span`
margin-left:16px;
font-size:18px;
font-family: 'Font Awesome 5 Pro';
&:hover{
color:grey;
}
`

const Submenu2 = ({ item }) => {
    const [subnavs, setSubnavs] = useState(false)
    const showSubnavs = () => setSubnavs(!subnavs)
   
    return (
        <>
            <Sidebarlinks to={"#"} onClick={item.subNavs && showSubnavs}>
                <div>
                <SidebarLabels>{item.title}</SidebarLabels>
                </div>
                <div>
                    {item.subNavs && subnavs ? item.iconOpened :item.subNavs ? item.iconClosed : null}
                </div>
                   
               
            </Sidebarlinks>
            {subnavs && item.subNavs.map((item, index) => {
                return (
                    <DropDownLinks to={item.path} key={index}>
                        <SidebarLabels>{ item.title}</SidebarLabels>
                    </DropDownLinks>
                  
                )
              
            })}
        </> 
   ) 
}
export default Submenu2