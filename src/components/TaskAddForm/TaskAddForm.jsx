import React from 'react'
import styled from 'styled-components'
import { Button, Input } from '../common'

const TaskAddForm= ({ onTaskAdd, error, inputValue, onInputChange }) =>
  <Form onSubmit={ onTaskAdd }>
    <Input error={ error } name='task' value={ inputValue } onChange={ onInputChange }  />
    <Button>Add task</Button>
  </Form>

export default TaskAddForm

const Form = styled.form`
  padding: 5px;
  display: flex;
  justify-content: space-between;
`