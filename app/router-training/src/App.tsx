import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { ScrollToTop } from './components/ScrollToTop'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Topics } from './pages/Topics'
import { Users } from './pages/Users'

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />

      <div>
        <Header />
      </div>

      <div>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>

          <Route path='/users'>
            <Users />
          </Route>

          <Route path='/topics'>
            <Topics />
          </Route>

          <Route path='/'>
            <Home />
          </Route>
        </Switch>        
      </div>
    </Router>
  )
}

export default App