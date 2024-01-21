import React from 'react'
import { Link } from 'react-router-dom'
// css
import "../../scss/_home.scss"
// assets
import resuma from "../../Assets/Bilal_cv.png"
import image from '../../Assets/about imag.png'
import google from '../../Assets/google.png'
import facebook from '../../Assets/facebook.png'
import twitter from '../../Assets/twitter.png'
import  github from '../../Assets/github.png'
import Typewriter from 'typewriter-effect';
// Animation
import "animate.css"
export default function Index() {


  return (
    <>
    <div className="container" id="home">
        <div className="row">
            <div className="col">
                <div className='home text-white'>

          <div className='hometext animate__animated animate__backInLeft'>
            <h2>Hi,</h2>
          <h2 >I'm <span class="text-info">MUHAMMAD BILAL</span></h2>
          <h3><span className="text-primary">
          <Typewriter
  options={{
    strings: [' WEB & MOBILE','APPLICATION DEVELOPER', 'Next.js DEVELOPER','React Native DEVELOPER'],
    autoStart: true,
    loop: true,
  }}
/>
</span></h3>
       <Link to="/resuma"><button class="btn btn-warning"><a href={resuma} download="Resuma"></a> Download CV</button></Link>
         <Link to="/contact"><button class="btn btn-info m-3">contact Us</button></Link>
         <ul className='links d-flex'>
                <li><img href="https://www.google.com/webhp" src={google} alt="" style={{width:30, margin:5}}/></li>
                <li><img src={facebook} alt=""  style={{width:30, margin:5}} /></li>
                <li><img src={twitter} alt=""  style={{width:30, margin:5}}/></li>
                <li><a href=""><img src={github} alt=""  style={{width:30, margin:5,color:"white"}}/></a></li>
            </ul>
         </div>               
          <div>
          {/* <img className='bg-info img' src={image} style={{height:"490px", width:"450px",backgroundColor:"" }}  alt="" srcset="" /> */}
            </div>      
          </div>
       </div>
        </div>
    </div>
    </>
  )
}
