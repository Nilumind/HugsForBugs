import React from 'react'
import './Home.css';
import {useNavigate} from 'react-router-dom';

export default function Home() {
  let navigate= useNavigate();
  return (
    
      <div className='background-image'>
          
          <div className='but'>
            <button type="submit" class="button" align="center" onClick={()=>{navigate("/Todo")}} >Write Your<br/> To-Dos Here</button>
          </div>



      </div>
      
    
    
  )
}

