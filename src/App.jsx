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
      <NavigationBar/>
      <main>
        <Switch>

        <Route path="/" exact>
        <HeroSession/>
        </Route>

        <Route path="/work" exact>
        <MyWorksSession/>
        </Route>

        <Route path="/projects" exact>
        <ProjectsSession/>
        </Route>

        </Switch>
      </main>
    </Router>

  )
}

export default App