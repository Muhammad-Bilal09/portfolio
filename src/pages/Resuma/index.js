import React from 'react'
import resuma from "../../Assets/Bilal_cv.png"
import "animate.css"
export default function index() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col">
        <div className='text-center text-warning mb-3 mt-5'>
          <h1>Resuma</h1></div>
        

        <div className='text-center animate__animated animate__heartBeat'>
          <button className='btn btn-warning mb-2'> <a href={resuma} download='Resuma'> Download Resuma </a></button>
        </div> 
        <div>
        <img className='image' style={{height:"30%",width:"50%", display:"block",marginLeft:"auto",marginRight:"auto"}} src={resuma} alt="" />
        </div>
       


       
      
        
        </div>
        </div>
      </div>
    </>
  )
}
