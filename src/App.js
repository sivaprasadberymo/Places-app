
import React from 'react';
import Searchbar from './Components/Searchbar';
import Menu from './Components/Sidebar/Menu';
import './App.css';
import Home from './Pages/Home';
import signUp from './Pages/signUp';
import Payments from './Pages/Payments';
import Order_Details from './Pages/Order_Details';
import Help from './Pages/Help';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Restaurants from './Pages/Restaurants';
const App =()=>{
  return(
    <div>
    <BrowserRouter>
    <Menu/>
  
  <Searchbar/>
    <Switch>
    <Route path='/' exact component={Home}/>
        <Route path='/signUp'  component={signUp}/>
        <Route path='/Payments' component={Payments}/>
        <Route path='/Order_Details' component={Order_Details}/>
        <Route path='/Help' component={Help}/>
        <Route path='/restaurants' component={Restaurants}/>
      
      </Switch>
    
    </BrowserRouter>
     
     </div>
  )
}
export default App;
