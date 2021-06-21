import React ,{useState}from 'react';
import ReactDOM from 'react-dom';
import './Searchbar.css';
import * as Icon from "react-icons/bi";
import {useHistory} from 'react-router-dom';
const Searchbar =()=>{
  let history=useHistory();
  const [inputValue,setInputValue] = useState("");
  const handleUserInput =(e) => {
    setInputValue(e.target.value);
    
  };
  const resetvalue =()=> {
    setInputValue("");
  }
    return(
      <div>
        <div className="container">
        <Icon.BiArrowBack size={30} onClick={() =>{history.push("/")}}/>
          <input type="text"placeholder="search" value={inputValue} onChange={handleUserInput}className="search"/>
          
          <button type="button" class="clear" onClick={resetvalue}>cancel</button>
          
 </div>
         
        </div>
        )
}
export default Searchbar;

  


