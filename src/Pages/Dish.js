
import React from 'react';
import {useHistory} from 'react-router-dom';
import * as Icon from "react-icons/io";
import "./Dish.css";
import Button from './Button';
const Dish =()=>{
    let history =useHistory();
    return(
        <div>
        <div className="dish">
           <Icon.IoIosArrowBack size={25}  onClick={()=>{history.push("/")}}/> 
          <span>Cream Stone</span>
        </div>
        <div className="dish-con" >
                 <div className="dish-1">
                     <img src={require('../assets/icecream.jpg').default} alt=""/>
                     <div className="font">strawberry icecream</div>
                      <div className="rating">4.2</div>
                 </div>
                 </div>
                 <div className="ridebutton">
           <Button
       border="black"
       color="pink"
       height = "60px"
       onClick={() =>{history.push("/Berymo_selected")}}
       radius = "20"
       width = "350px"
       fontSize ="20px"
       children = " FREE RIDE > >"
      
      />
      </div>
        
        </div>
    )
}
export default Dish;