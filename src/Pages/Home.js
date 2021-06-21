import React, { Fragment } from 'react';
import './card.css';
import Button from './Button';
import * as Icons from "react-icons/io";
import {useHistory} from 'react-router-dom';

import Menu from '../Components/Sidebar/Menu';

const Home =()=>{
  let history=useHistory();
  let cardhistory1 =useHistory();
  let favorites=useHistory();
  let happy = useHistory();
return(
       <div>
         <Menu/>
           <div className="button">
           <Button
       border="black"
       color="white"
       height = "60px"
       onClick={() =>{history.push("/Berymo_selected")}}
       radius = "20"
       width = "300px"
       fontSize ="20px"
       children = " BERYMO SELECTED >"
      
      />
      </div>
        
         <div className="card" onClick={()=>{cardhistory1.push("/Dish")}}>
             <div className="card-header2" >
             <img src={require('../assets/download.jpeg').default} alt="" ></img>
             </div>
                <div className="card-body">
                  <div className="item-data">
                      Cream Stone
                  </div>
                </div>
                </div>
                
                <div className="button">
           <Button
       border="none"
       color="white"
       height = "60px"
       onClick={() =>{favorites.push("/Your_favorites")}}
       
       radius = "20"
       width = "300px"
       fontSize ="20px"
       children = " Your Favorites >"
      />
      
           </div>
             <div className="card">
             <div className="card-header2">
             <img src={require('../assets/burger.jpeg').default} alt=""></img>
             </div>
                <div className="card-body">
                  <div className="item-data">
                      Burger King
                  </div>
                </div>
             
             </div>
             <div className="button">
           <Button
       border="none"
       color="white"
       height = "60px"
       onClick={() =>{happy.push("/Happy_hours")}}
       
       radius = "20"
       width = "300px"
       fontSize ="20px"
       children = " Happy Hours >"
      />
      
           </div>
             <div className="card">
             <div className="card-header2">
             <img src={require('../assets/sha.jpeg').default} alt=""></img>
             </div>
                <div className="card-body">
                  <div className="item-data">
                      Frankie House
                  </div>
                </div>
             
             </div>
             <div className="button">
           <Button
       border="none"
       color="white"
       height = "60px"
       onClick={() => console.log("You clicked on the pink circle!")}
       radius = "20"
       width = "300px"
       fontSize ="20px"
       children = " Near BY >"
      />
      
           </div>
             <div className="card">
             <div className="card-header2">
             <img src={require('../assets/drinks.jpeg').default} alt=""></img>
             </div>
                <div className="card-body">
                  <div className="item-data">
                    Drinks
                  </div>
                </div>
             
</div>

  </div>
        
        
)
}
export default Home;