
import React from 'react';
import Searchbar from './Components/Searchbar';
import './App.css';
import Home from './Pages/Home';
import signUp from './Pages/signUp';
import Payments from './Pages/Payments';
import Order_Details from './Pages/Order_Details';
import Help from './Pages/Help';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Berymo_selected from './Pages/Berymo_selected';
import Dish from './Pages/Dish';
import Your_favorites from './Pages/Your_favorites';
import Happy_hours from './Pages/Happy_hours';
const App =()=>{

  return(
    <div>
    <BrowserRouter>
    
  
  
    <Switch>
    <Route path='/' exact component={Home}/>
        <Route path='/signUp'  component={signUp}/>
        <Route path='/Payments' component={Payments}/>
        <Route path='/Order_Details' component={Order_Details}/>
        <Route path='/Help' component={Help}/>
        <Route path='/Berymo_selected' component={Berymo_selected}/>
        <Route path='/Searchbar' component={Searchbar}/>
        <Route path='/Dish' component={Dish}/>
        <Route path='/Your_favorites' component={Your_favorites}/>
        <Route path='/Happy_hours' component={Happy_hours}/>
      
      </Switch>
    
    </BrowserRouter>
     
     </div>
  )
}
export default App;
