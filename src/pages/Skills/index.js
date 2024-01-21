import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
export default function index() {
  
  // const skillsList = [
  //   'JavaScript',
  //   'React',
  //   'HTML',
  //   'CSS',
  //   'bootstrape',
  //   'firebase',
  //   'Maongodb',
  //   'Node.js',
  //   'Git',
  //   'Responsive Design',
  //   'Problem Solving',
  // ];
  return (
    <div>   
      <div className="skills-container text-white">
    <h2 className='text-warning text-center '>Skills</h2>
    <div className='d-flex animate__animated animate__slideInLeft'>
      
      <div className="container">
        <div className="row">
          <div className=" col">
          <div className='skillcard'>
      <div className="card" style={{width :"100%" ,height:"150px"}}>
  <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1HVNHQmF6XqXS0xqpvfcJFY3cQIAQEB3XmJ_edOZdMQ&s" alt="Card image cap"/>
</div> 
<div className="card" style={{width :"100%" ,height:"150px"}}>
  <img style={{height:"120px"}} className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="Card image cap"/>
</div>
<div className="card" style={{width :"100%" ,height:"150px"}}>
  <img className="card-img-top" src="https://e7.pngegg.com/pngimages/247/917/png-clipart-java-script-logo-web-development-javascript-logo-java-plum-web-design-text.png" alt="Card image cap"/>

</div>
<div className="card" style={{width :"100%" ,height:"150px"}}>
  <img className="card-img-top" src="https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png" alt="Card image cap"/>
</div>
<div className="card" style={{width :"100%" ,height:"150px"}}>
  <img className="card-img-top" src="https://devtop.io/wp-content/uploads/2022/10/react-native-1.png" alt="Card image cap"/>
</div>
<div className="card" style={{width :"100%" ,height:"150px"}}>
  <img className="card-img-top" src="https://cdn-media-1.freecodecamp.org/images/0*CPTNvq87xG-sUGdx.png" alt="Card image cap"/>
</div>
<div className="card" style={{width :"100%" ,height:"150px"}}>
  <img className="card-img-top" src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="Card image cap"/>
</div>
<div className="card" style={{width :"100%" ,height:"150px"}}>
  <img className="card-img-top" src="https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png" alt="Card image cap"/>
</div>
</div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div className='progress1'>
     <h2 className='text-white'>Html,css,bootstrap</h2>
  <div><ProgressBar animated now={85} style={{width:"80%"}} /></div>
      <h2 className='text-white'>JavaScript</h2>
      <div><ProgressBar animated now={70} style={{width:"75%"}} /></div>
      <h2 className='text-white'>React.js</h2>
      <div><ProgressBar animated now={80} style={{width:"80%"}} /></div>
      <h2 className='text-white'>Firebase</h2>
      <div><ProgressBar animated now={75} style={{width:"70%"}} /></div>
      <h2 className='text-white'>MongoDB</h2>
      <div><ProgressBar animated now={60} style={{width:"60%"}} /></div>
      <h2 className='text-white'>Next.js</h2>
      <div><ProgressBar animated now={65} style={{width:"50%"}} /></div>
      <h2 className='text-white'>React Native</h2>
      <div><ProgressBar animated now={70} style={{width:"70%"}} /></div>
  </div>

  </div>
)
}
