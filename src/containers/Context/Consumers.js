import React from 'react'
import { TaskList, TaskAddForm } from '../../components'
import { TaskContext } from '../../contexts/TasksContext'
import { FormContext } from '../../contexts/FormContext'

export const TaskListConsumer = () =>
  <TaskContext.Consumer >
    {
      props =>
        <TaskList { ...props } />
    }
  </TaskContext.Consumer>

export const FormConsumer = () =>
  <FormContext.Consumer>
    {
      props =>
        <TaskAddForm { ...props } />
    }
  </FormContext.Consumer>

