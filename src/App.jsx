import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import NavigationBar from './components/NavigationBar'
import HeroSession from './components/HeroSession'
import MyWorksSession from './components/MyWorksSession'
import ProjectsSession from './components/ProjectsSession'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

const App = () => {
  return (


    <Router>
      
      <div className="flex">

        <NavigationBar />
       
        <main className="flex-1">
       
          <Switch>

            <Route path="/" exact>
              <ProjectsSession />
            </Route>
            
            <Route path="/work" exact>
              <MyWorksSession />
            </Route>
            
            <Route path="/projects" exact>
              <HeroSession />
            </Route>
          
          </Switch>
        
        </main>
      
      </div>
    
    </Router>

  )
}

export default App