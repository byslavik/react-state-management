import React from 'react'
import styled from 'styled-components'
import { Button } from '../common'

const Task = ({ className, onResolve, task }) =>
  <TaskWrapper className={ className }>
    <Title>
      { task.title }
    </Title>
    { task.status ? <Resolved>Resolved</Resolved> : null }
    <Button hidden={ Boolean(task.status) } onClick={ onResolve }>
      Resolve
    </Button>
  </TaskWrapper>

export default Task

const TaskWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  border: 1px solid;
  padding: 5px;

  & + & {
    margin-top: 5px;
  }
`

const Resolved = styled.i`
  padding: 5px;
`

const Title = styled.h2`
  margin: 5px;
`
