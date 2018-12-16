import { handleActions } from 'redux-actions'
import { testData } from '../../../testData'
import actions from './actions'
import { taskResolver } from '../../../helpers'

const {
  setInputValue,
  setInputError,
  clearInput,
  addTask,
  resolveTask,
  clearTasks
} = actions

const defaultInputState = {
  inputValue: '',
  error: ''
}

export const input = handleActions({
  [setInputValue]: (state, { payload }) => ({
    ...state,
    inputValue: payload
  }),
  [setInputError]: (state, { payload }) => ({
    ...state,
    error: payload
  }),
  [clearInput]: () => ({
    ...defaultInputState
  })
}, defaultInputState)

const defaultTaskState = {
  items: testData
}

export const tasks = handleActions({
  [addTask]: (state, { payload }) => ({
    ...state,
    items: [...state.items, payload]
  }),
  [resolveTask]: (state, { payload }) => {
    const { items } = state
    const nonResolvedTask = items.filter(({ id }) => id !== payload)
    const resolvedTask = taskResolver(items.filter(({ id }) => id === payload))
  
    return {
      ...state,
      items: [...nonResolvedTask, resolvedTask]
    }
  },
  [clearTasks]: () => ({
    ...defaultTaskState
  })
}, defaultTaskState)
