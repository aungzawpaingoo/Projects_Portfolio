import React from 'react'
import { NavLink } from 'react-router-dom';
import navIcon from '../assets/github.png'


const NavigationBar = () => {
  return (

    <header className='bg-gray-400 w-2/12 h-screen justify-center'>

        <nav className='bg-white-900 p-4'>
        <ul className='flex-col item-center'>
        
        <div className='flex self-center items-center'>
        <img src={navIcon} className='w-10 h-10 object-contain mr-4'/>
        <text className='font-semibold text-xl'>GitHub</text>
        </div>

        <li className='mb-8 bg-gray-200 rounded mt-8 w-1/2'>
        <NavLink className="text-base font-semibold leading text-gray-900 mx-6" to="/" exact>Home</NavLink>
        </li>

        <li className='mb-8 bg-gray-200 rounded w-1/2'>
        <NavLink className="text-base font-semibold leading text-gray-900 mx-6" to="/work" exact>Work</NavLink>
        </li>

        <li className='mb-8 bg-gray-200 rounded w-1/2'>
        <NavLink className="text-base font-semibold leading text-gray-900 mx-6" to="/projects" exact>Projects</NavLink>
        </li>

        </ul>
        </nav>
    </header>

  )
}

export default NavigationBar