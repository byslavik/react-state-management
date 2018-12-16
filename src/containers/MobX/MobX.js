import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {observer} from 'mobx-react'
import { Theme, TaskList, TaskAddForm } from '../../components'
import TaskStore from './stores/tasks'
import InputStore from './stores/input'

const inputStore = new InputStore()
const tasksStore = new TaskStore(inputStore)

const BaseApp = observer(({
  tasksStore,
  tasksStore: {
    sortedTasks,
    resolveTask,
    addTask
  },
  inputStore,
  inputStore: {
    setInputValue
  }
}) =>
  <ThemeProvider theme={ Theme }>
    <ComponentWrapper>
      Component with MobX State Management
      <TaskAddForm
        error={ inputStore.error }
        inputValue={ inputStore.inputValue }
        onTaskAdd={ addTask.bind(tasksStore) }
        onInputChange={ setInputValue.bind(inputStore) } />
      <TaskList tasks={ sortedTasks } onResolve={ resolveTask.bind(tasksStore) } />
    </ComponentWrapper>
  </ThemeProvider>
)


const App = () =>
  <BaseApp
    tasksStore={ tasksStore }
    inputStore={ inputStore } />

tasksStore.loadTasks()

export default App

const ComponentWrapper = styled.div`
  width: 400px;
`
