import styled from 'styled-components'
import React from 'react'
import Task from '../Task/Task'

const TaskList = ({ tasks, onResolve }) =>
  <TaskListWrapper>
    {
      (tasks || [])
        .map((item, index) =>
          <Task key={ index } task={ item } onResolve={ () => onResolve(item.id) } />
        )
    }
  </TaskListWrapper>

export default TaskList

const TaskListWrapper = styled.div`
  width: 400px;
`
