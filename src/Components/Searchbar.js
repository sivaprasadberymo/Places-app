import React from 'react';
import ReactDOM from 'react-dom';
import './Searchbar.css';
import * as Icons from "react-icons/bs";
const Searchbar =()=>{
    return(
        <div className="container">
      <input placeholder="search.." className="search"></input>
       
        <Icons.BsSearch size={20} className="Icon"/>
        
        </div>
        
        
        
        
    )
}
export default Searchbar;

  


