import { compose, createStore, combineReducers } from 'redux'
import { input, tasks } from './reducer'

const reducer = combineReducers({
  input,
  tasks
})

export default function configureStore(predefinedState = {}) {
  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
      compose

  const enhancer = composeEnhancers()

  return createStore(
    reducer,
    predefinedState,
    enhancer
  )
}
