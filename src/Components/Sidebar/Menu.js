import React,{useState} from 'react';
import * as Icons from "react-icons/hi";
import {Link} from 'react-router-dom';
import {Sidebardata} from './Sidebardata';
import './Navbar.css';
import Searchbar from '../Searchbar';

function Menu(){
    const [sidebar,setSidebar] = useState(false);
    const showSidebar =()=> setSidebar(!sidebar);

    return(
    <>
    <div className='navbar'>
        <Link to='#' className='menu-bars'>
            <Icons.HiMenuAlt1 size={35} color='black' onClick={showSidebar}/>
        </Link>
        <Searchbar/>
        </div>
        <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
         <ul className="nav-menu-items" onClick={showSidebar}>
           <li className="navbar-toggle">
               <Link to="#" className="menu-bars">
                   <Icons.HiOutlineX  size={30}/>
               </Link>
               </li> 
                {Sidebardata.map((item,index) =>{
                   return(
                       <li key={index} className={item.cName}>
                         <Link to={item.path}>
                             {item.icon}
                             <span>{item.title}</span>
                         </Link>
                       </li>
                        
                       )
                 })}
             </ul>     
             
        </nav>
       
    </>
    );
}
export default Menu;