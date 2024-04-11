import React from 'react'
import { NavLink } from 'react-router-dom';


const NavigationBar = () => {
  return (

    <header className='bg-white'>
        <nav className='bg-white-900 p-8'>
        <ul className='flex'>

        <li>
        <NavLink className="text-base font-semibold leading text-gray-900 mx-6" to="/" exact>Home</NavLink>
        </li>

        <li>
        <NavLink className="text-base font-semibold leading text-gray-900 mx-6" to="/work" exact>Work</NavLink>
        </li>

        <li>
        <NavLink className="text-base font-semibold leading text-gray-900 mx-6" to="/projects" exact>Projects</NavLink>
        </li>

        </ul>
        </nav>
    </header>

  )
}

export default NavigationBar