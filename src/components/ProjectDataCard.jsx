import React from 'react'
import Logo from '../assets/react.svg'
import LinkedInImage from '../assets/linkedin.png'
import GitHubImage from '../assets/github.png'




const ProjectDataCard = () => {
  return (
   
   <div className='bg-gray-400 p-10 mx-10 my-8 rounded-xl align-middle items-center w-100 h-60'>
   
   <img src={Logo} className='' />

   <p className='my-5'>Diam nunc lacus lacus aliquam turpis enim. Eget hac 
    velit est euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus sit eu in id.
    </p>

    <div className='flex my-5'>

        <div className='items-center flex'>
        <img src={LinkedInImage} className='h-6 w-6'/>
        <a href="#" className="text-sm font-semibold leading text-gray-900 mx-6 items-center">
        LinkedIn
        </a>
        </div>

        <div className='items-center flex'>
        <img src={GitHubImage} className='h-6 w-6'/>
        <a href="#" className="text-sm font-semibold leading text-gray-900 mx-6 items-center">
        GitHub
        </a>
        </div>


      </div>

     

    
   </div>

  )
}

export default ProjectDataCard