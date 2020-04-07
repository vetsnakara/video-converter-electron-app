import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Container from '../Container'
import VideoSelectScreen from '../VideoSelectScreen'

const App = () => {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path='/' exact component={VideoSelectScreen} />
        </Switch>
      </Container>
    </Router>

  )
}

export default App
