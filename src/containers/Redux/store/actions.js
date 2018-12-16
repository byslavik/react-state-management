import { createActions } from 'redux-actions'

export default createActions(
  'SET_INPUT_VALUE',
  'SET_INPUT_ERROR',
  'CLEAR_INPUT',
  'ADD_TASK',
  'RESOLVE_TASK',
  'CLEAR_TASKS'
)
