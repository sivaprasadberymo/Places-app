import React from 'react';
import Slider from '../Components/Slider';
import './Berymo_selected.css';
import * as Icon from "react-icons/fa";
import {useHistory} from 'react-router-dom';

const Your_favorites =()=>{
    let history=useHistory();
    return(
        <div>
            <div>
          <Icon.FaAngleLeft className="back" onClick={() =>{history.push("/")}}/>
          </div>
         
           <Slider/>
           <div className="label">
               Your Favorites
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
export default Your_favorites;