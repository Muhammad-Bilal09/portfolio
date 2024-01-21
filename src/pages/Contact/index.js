import React from 'react'

export default function index() {
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col">
                <h1 className='text-warning text-center '>Contact</h1>
           
                <div className="card w-75 mt-5 " style={{marginLeft:"auto",marginRight:"auto"}}>
                    <h2 className='text-center '>Contact Us</h2>
                    <abbr className='text-center' title="Muhammadbilal0729@gmail.com">Contact Email</abbr>
                    <input type="text"  placeholder='Name' className='form-control mt-2'/>
                    <input type="email" placeholder='Email' className='form-control mt-2' />
                    <textarea name="" id="" cols="30" rows="5" placeholder='Message' className=' mt-2 form-control'></textarea>
                <div className='text-center'>
                <button className='btn btn-primary w-75 mt-3'  >Send Message</button>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
