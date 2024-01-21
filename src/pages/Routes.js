import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'

//components
import Header from '../components/Header'
import Footer from '../components/Footer'
//pages
import Contact from './Contact/index'
import Home from './Home/index'
import About from './About/index'
import Skills from './Skills/index'
import Education from './Education/index'
import Projects from './Projects/index'
import Resuma from './Resuma/index'

export default function index() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <main>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/project' element={<Projects/>}/>
        <Route path='/resuma' element={<Resuma/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
    </>
  )
}
