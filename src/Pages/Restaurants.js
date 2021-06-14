import React from 'react';
import './Restaurant.css';
const Restaurants =()=>{
    return(
        <div>
             <div className="container">
                 <div className="item1">
                     <img src={require('../assets/restaurant.jpg').default} alt=""/>
                     <div className="font">Pizza Place</div>
                 </div>
                 </div>
             
             <div className="container"> 
                 <div className="item2">
                     <img src={require('../assets/item2.jpg').default} alt=""/>
                     <div className="font2">Italian Cuisine</div>
                 </div>
             </div>
             <div className="container"> 
                 <div className="item3">
                     <img src={require('../assets/item3.jpg').default} alt=""/>
                     <div className="font2">MoonBean</div>
                 </div>
             </div>
        </div>
         
    )
    }
    export default Restaurants;