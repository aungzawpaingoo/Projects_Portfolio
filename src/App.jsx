import React from 'react'
import NavigationBar from './components/NavigationBar'
import HeroSession from './components/HeroSession'
import MyWorksSession from './components/MyWorksSession'
import ProjectsSession from './components/ProjectsSession'

const App = () => {
  return (

    <div>
      
    <NavigationBar/>

    <HeroSession/>
    
    <MyWorksSession/>
    
    <ProjectsSession/>
    

    </div>
  )
}

export default App