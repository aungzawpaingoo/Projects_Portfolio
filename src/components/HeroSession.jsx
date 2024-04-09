import React from 'react'
import LinkedInImage from '../assets/linkedin.png'
import GitHubImage from '../assets/github.png'
import ProfileImage from '../assets/profileImage.jpg'


const HeroSession = () => {
  return (

    <section className='bg-slate-500 p-10'>

      <h1 className='text-4xl font-medium leading'>Aung Zaw Paing Oo</h1>
      
      <p className='my-8 font-medium leading'>Hello, I'm Aung Zaw Paing Oo. <span className='font-bold'>I'm Senior Software Engineer at Yoma Bank </span>
      where my team helps our bank to become the main bank in Myanmar.
      </p>

      <div className='my-6 flex'>
        <img src={ProfileImage} className='h-40 w-40 rounded-2xl'/>

        <div className='w-full mx-8 items-center self-center'>

          <div className='flex align-middle items-center'>
          <img src={GitHubImage} className='h-6 w-6 mr-4'/>
          <h4 className='font-medium leading my-2'>BSc.Zoology</h4>
          </div>

          <div className='flex align-middle items-center'>
          <img src={GitHubImage} className='h-6 w-6 mr-4'/>
          <h4 className='font-medium leading my-2'>BSc.Zoology</h4>
          </div>

          <div className='flex align-middle items-center'>
          <img src={GitHubImage} className='h-6 w-6 mr-4'/>
          <h4 className='font-medium leading my-2'>BSc.Zoology</h4>
          </div>
          
        </div>

      </div>

      <div className='my-10'>
        <p className='font-medium leading'>It is a long established fact that a reader will be distracted by the readable content of a page
           when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
           distribution of letters, as opposed to using 'Content here, content here', making it look like 
           readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as 
           their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
           Various versions have evolved over the years, sometimes by accident, sometimes on purpose 
           (injected humour and the like).</p>
      </div>

      <div className='flex'>

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


    </section>

  )
}

export default HeroSession