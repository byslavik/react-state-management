import { Provider } from 'react-redux'
import React from 'react'
import ReduxApp from './ReduxApp'
import configureStore from './store/configureStore'

const store = configureStore()

const App = () => 
  <Provider store={ store }>
    <ReduxApp />
  </Provider>

export default App
