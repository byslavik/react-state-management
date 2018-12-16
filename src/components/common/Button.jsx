import styled from 'styled-components'

const Button = styled.button`
  color: ${props => props.theme.colors.black};
  padding: 5px;
  font-size: 16px;
  border: 1px solid ${props => props.theme.colors.black};
  margin-left: 5px;
  cursor: pointer;
`

export default Button
