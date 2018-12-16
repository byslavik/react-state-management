import styled from 'styled-components'

const Container = styled.div`
  padding: 5px;

  & + & {
    padding-left: 0;
  }
`

export default Container
