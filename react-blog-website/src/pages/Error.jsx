import React from 'react'
import { useNavigate } from 'react-router-dom'


const Error = () => {
  const navigate=useNavigate()
  
  const handleError=()=>{
    {
      navigate("/")
    }
  }
  return (
    <>
    <div className='d-flex d-center px-20'>
    <button onClick={handleError} style={{height:"50px",width:"150px",backgroundColor:"red",marginTop:"20px",borderRadius:"50px",color:"white"}} >  Back to Home</button>
    <img src='src\assets\error_page.jpg' style={{height:"650px",width:"80%"}}></img>
    </div>
   
   
    </>
    
    
  )
}

export default Error