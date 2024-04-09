import React from 'react'
import EmploymentDataCard from './EmploymentDataCard'
import ProjectDataCard from './ProjectDataCard'


const ProjectsSession = () => {
  return (

    <div className='bg-gray-700 p-10'>

    <div>

    <h2 className=''>I'm always looking for awesome people to join me</h2>

    <p className=''>Diam nunc lacus lacus aliquam turpis enim. Eget hac 
    velit est euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus sit eu in id.
    </p>

    </div>

     
     <div className='flex'>

     <ProjectDataCard />

     <ProjectDataCard />

     </div>

     <div className='flex'>

     <ProjectDataCard />

     <ProjectDataCard />

     </div>


    </div>

  )
}

export default ProjectsSession