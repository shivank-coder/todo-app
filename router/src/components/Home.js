import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate();

    function onchangehandler()
    {
        navigate('/labs');

    }
  return (
    <div>
       
   this is a home page 
   <br>
   </br>  
   <br>
   </br> 
   <button  onClick={onchangehandler}>move to labs page</button> 
    </div>
  )
}

export default Home
