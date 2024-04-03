import { useState } from 'react'
// import './App.css'
import Navbar from '../src/components/NavBar'
import HeroSession from '../src/components/HeroSession'
import Projects from '../src/components/Projects'
import ProjectCard from '../src/components/ProjectCard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <HeroSession/>
     <Projects/>
    </>
  )
}

export default App
