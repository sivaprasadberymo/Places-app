import React from 'react';
import ReactDOM from 'react-dom';
import './Searchbar.css';
import * as Icons from "react-icons/bs";
const Searchbar =()=>{
    return(
        <div className="container">
        <div className="Icon">
            
            <input placeholder="search.." className="search"></input>
          </div> 
          <div className="Icon">
           <Icons.BsSearch size={20}/>
           </div>
        </div>
        
        
        
        
    )
}
export default Searchbar;

  


