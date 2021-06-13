import React from 'react';
import './card.css';
import Button from './Button';
import * as Icons from "react-icons/io";
import {useHistory} from 'react-router-dom';

const Home =()=>{
  let history=useHistory();
return(
       <div>
           <div className="button">
           <Button
       border="black"
       color="white"
       height = "60px"
       onClick={() =>{history.push("/restaurants")}}
       radius = "20"
       width = "300px"
       fontSize ="20px"
       children = " BERYMO SELECTED >"
      
      />
      
         </div>
         
         
         <div className="card">
             <div className="header">
             <img src={require('../assets/download.jpeg').default} alt=""></img>
             </div>
                <div className="card-body">
                  <div className="item-data">
                      Cream Stone
                  </div>
                </div>
                
                </div>
                <div className="button2">
           <Button
       border="none"
       color="white"
       height = "60px"
       onClick={() => console.log("You clicked on the pink circle!")}
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
             <div className="button3">
           <Button
       border="none"
       color="white"
       height = "60px"
       onClick={() => console.log("You clicked on the pink circle!")}
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
                      Shawarma House
                  </div>
                </div>
             
             </div>
             <div className="button3">
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