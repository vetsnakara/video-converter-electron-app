import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import VideoSelectScreen from '../VideoSelectScreen'
import ConverterScreen from '../ConverterScreen'

import './styles'

const App = () => {
  return (
    <Router>
      <main className='app'>
        <Switch>
          <Route path='/' exact component={VideoSelectScreen} />
          <Route path='/convert' component={ConverterScreen} />
        </Switch>
      </main>
    </Router>

  )
}

export default App
