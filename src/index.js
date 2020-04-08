import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { configureStore } from './redux'

import App from './components/App'

import './styles/index.scss'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)

if (process.env.NODE_ENV === 'development') {
  module.hot.accept()
}
