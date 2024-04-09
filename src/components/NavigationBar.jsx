import React from 'react'

const NavigationBar = () => {
  return (

    <header className='bg-white-900'>
        <nav className='bg-white-900 p-8'>
        <a href="#" className="text-lg font-semibold leading text-gray-900 mx-6">
            Home
          </a>
        
        <a href='#' className='text-lg font-semibold leading text-gray-900 mx-6'>
         Work   
        </a>

        <a href='#' className='text-lg font-semibold leading text-gray-900 mx-6'>
         Projects   
        </a>

        </nav>
    </header>

  )
}

export default NavigationBar