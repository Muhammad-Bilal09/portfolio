import React from 'react'
import "../../scss/project.scss"
import resturante from "../../Assets/resturant web.png"
import weather from "../../Assets/weather web.png"
import Ecommerce from "../../Assets/Ecommerce web.png"
import todo from "../../Assets/todo web.png"
export default function index() {

  return (
<div className='project'>
<div className="card ">
<img src={weather} className="card-img-top" alt="..."/>
  <div className="card-body">
  <p className="card-title text-center" style={{fontWeight:"bolder"}}>weather</p>
    <h6 className="card-text">React based website with efficient and attractive user-interface Technologies React.js,Bootstrap,Sass,Firebase</h6>
    <div className='text-center'>
  <a href="https://weather-tan-delta.vercel.app/"><button className='btn btn-secondary w-100 text-center'>Live Demo</button></a>
  </div>
  </div>
</div>
<div className="card ">
  <img src={resturante} className="card-img-top" alt="..." />
  <div className="card-body">
  <p className="card-title text-center" style={{fontWeight:"bolder"}}>Resturante</p>
    <h6 className="card-text">React based website with efficient and attractive user-interface Technologies React.js,Bootstrap,Sass,Firebase</h6>
  <div className='text-center'>
  <a href="https://restaurant-6x1w.vercel.app/"><button className='btn btn-warning w-100 text-center'>Live Demo</button></a>
  </div>
  </div>
</div>
<div className="card ">
<img src={Ecommerce} className="card-img-top" alt="..."/>
  <div className="card-body">
  <p className="card-title text-center" style={{fontWeight:"bolder"}}>Shopping</p>
    <h6 className="card-text">React based website with efficient and attractive user-interface Technologies React.js,Bootstrap,Sass,Firebase</h6>
    <div className='text-center'>
  <a href="https://ecommerce-mu-murex-38.vercel.app/"><button className='btn btn-info w-100 text-center'>Live Demo</button></a>
  </div>
  </div>
</div>
<div className="card">
  <img src={todo} className="card-img-top" alt="..."/>
  <div className="card-body">
  <p className="card-title text-center" style={{fontWeight:"bolder"}}>Todo</p>
    <h6 className="card-text">React based website with efficient and attractive user-interface Technologies React.js,Bootstrap,Sass,Firebase</h6>
    <div className='text-center'>
  <button className='btn btn-danger w-100 text-center'>Live Demo</button>
  </div>
  </div>
</div>

</div>
    )
}
