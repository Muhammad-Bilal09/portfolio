import React from 'react'
import '../../scss/_about.scss'
import "animate.css"
import img from  '../../Assets/WhatsApp Image 2023-10-04 at 08.55.51 (2).jpeg'
export default function index() {
  return (
    <>
    <div className="container" id="about">
      <div className="row">
        <div className="col">
        <h2 className='text-center text-warning'>About</h2>
         <div className='about animate__animated animate__backInRight'>
        
          <div className=''>
            {/* <img src={img} style={{height:"400px", width:"450px",backgroundColor:"none"}} alt="" /> */}
          </div> 
          <h6 className='w-50 text-white mt-5'>
Hello my name is Muhammad-Bilal.
 I'm a MERN stack developer and i work with MongoDB, Express.js, React, and Node.js to create user-friendly and responsive solutions and Node.js.
  I enjoy creating web pages that look good and work smoothly. I'm always learning new stuff to improve my skills and make better websites. Even though I'm a beginner,
   I'm eager to take on challenges and grow in the world of MERN stack development.
          </h6>
          </div>  
        </div>
      </div>
    </div>
    </>
  )
}






























// import React from 'react'

// export default function index() {
//   const projects = [
//     {
//       title: 'Project 1',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//       link: 'https://example.com/project1',
//     },
//     {
//       title: 'Project 2',
//       description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//       link: 'https://example.com/project2',
//     },
//     // Add more projects as needed
//   ];
//   return (
//     <>
//     <h2 className='text-center text-warning'>My Portfolio</h2>
//         <div className="portfolio  text-white m-5">
//       <div className="projects">
//         {projects.map((project, index) => (
//           <div key={index} className="card">
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//             <a href={project.link} target="_blank" rel="noopener noreferrer">
//               View Project
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   )
// }



