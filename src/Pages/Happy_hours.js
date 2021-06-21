import React from 'react';
import Slider from '../Components/Slider';
import './Berymo_selected.css';
import * as Icon from "react-icons/fa";
import {useHistory} from 'react-router-dom';

const Happy_hours =()=>{
    let history=useHistory();
    return(
        <div>
            <div>
          <Icon.FaAngleLeft className="back" onClick={() =>{history.push("/")}}/>
          </div>
         
           <Slider/>
           <div className="label">
               Happy Hour's
           </div>
            <div className="Container" >
                 <div className="item1">
                     <img src={require('../assets/restaurant.jpg').default} alt=""/>
                     <div className="font">Pizza Place</div>
                 </div>
                 </div>
                 <div className="Container" >
                 <div className="item1">
                     <img src={require('../assets/item2.jpg').default} alt=""/>
                     <div className="font">American Restaurant</div>
                 </div>
                 </div>
                 <div className="Container" >
                 <div className="item1">
                     <img src={require('../assets/item3.jpg').default} alt=""/>
                     <div className="font">Dark wines</div>
                 </div>
                 </div>
             
             
        </div>
         
    )
    }
export default Happy_hours;