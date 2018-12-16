import React, { PureComponent } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Theme, TaskList, TaskAddForm } from '../../../components'
import { ERR_FIELD_MESSAGE } from '../../../constants'
import { validateField, newTaskFactory, sorter } from '../../../helpers'

export class Redux extends PureComponent {

  onInputChange = ({ target: { value }}) => {
    this.props.setInputError('')
    this.props.setInputValue(value)
  }
  
  onTaskAdd = e => {
    e.preventDefault()

    const { tasks, input: { inputValue }} = this.props
  
    if(!validateField(inputValue)) {
      this.props.setInputError(ERR_FIELD_MESSAGE)
      return
    }

    const newTask = newTaskFactory({ title: inputValue, tasks })

    this.props.addTask(newTask)
    this.props.clearInput()
  }

  onResolve = idToResolve => {
    this.props.resolveTask(idToResolve)
  }

  render() {
    const { tasks, input: { inputValue, error }}  = this.props

    return (
      <ThemeProvider theme={ Theme }>
        <ComponentWrapper>
          Component with Redux State Management
          <TaskAddForm
            error={ error }
            inputValue={ inputValue }
            onTaskAdd={ this.onTaskAdd }
            onInputChange={ this.onInputChange } />
          <TaskList tasks={ tasks.sort(sorter) } onResolve={ this.onResolve } />
        </ComponentWrapper>
      </ThemeProvider>
    )
  }
}

const ComponentWrapper = styled.div`
  width: 400px;
`
