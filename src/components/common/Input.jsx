import React from 'react'
import styled from 'styled-components'

const Input = ({ label, className, error, ...props }) =>
  <Label className={ className }>
    { label }
    <InputElement { ...props } />
    { error && <ErrorMessage>{ error }</ErrorMessage> }
  </Label>

export default Input

const Label = styled.label`
  display: inline-block;
`

const InputElement = styled.input`
  color: ${props => props.theme.colors.black};
  padding: 5px;
  font-size: 16px;
  border: 1px solid ${props => props.theme.colors.black};
`

const ErrorMessage = styled.span`
  display: block;
  font-size: 14px;
  color: ${props => props.theme.colors.red};
`