import React, { PureComponent } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Theme } from '../../components'
import { ERR_FIELD_MESSAGE } from '../../constants'
import { TaskContext } from '../../contexts/TasksContext'
import { FormContext } from '../../contexts/FormContext'
import { TaskListConsumer, FormConsumer } from './Consumers'
import { validateField, taskResolver, newTaskFactory, sorter } from '../../helpers'
import { testData } from '../../testData'

export class Context extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',
      tasks: testData,
      error: ''
    }
  }

  onInputChange = ({ target: { value }}) => {
    this.setState({
      inputValue: value,
      error: '',
    })
  }
  
  onTaskAdd = e => {
    e.preventDefault()

    const { tasks, inputValue } = this.state
  
    if(!validateField(inputValue)) {
      this.setState({
        error: ERR_FIELD_MESSAGE
      })

      return
    }

    const newTask = newTaskFactory({ title: inputValue, tasks })

    this.setState({
      error: '',
      inputValue: '',
      tasks: [...tasks, newTask]
    })
  }

  onResolve = idToResolve => {
    const { tasks } = this.state
    const nonResolvedTask = tasks.filter(({ id }) => id !== idToResolve)
    const resolvedTask = taskResolver(tasks.filter(({ id }) => id === idToResolve))


    this.setState({
      tasks: [...nonResolvedTask, resolvedTask]
    })
  }

  render() {
    const { tasks, inputValue, error }  = this.state

    return (
      <ThemeProvider theme={ Theme }>
        <ComponentWrapper>
          Component with Local State Management + Context provider
          <FormContext.Provider value={ {inputValue, error, onTaskAdd: this.onTaskAdd, onInputChange: this.onInputChange } }>
            <FormConsumer />
          </FormContext.Provider>
          <TaskContext.Provider value={ {tasks: tasks.sort(sorter), onResolve: this.onResolve } }>
            <TaskListConsumer />
          </TaskContext.Provider>
        </ComponentWrapper>
      </ThemeProvider>
    )
  }
}

const ComponentWrapper = styled.div`
  width: 400px;
`
