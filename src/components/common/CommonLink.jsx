import React from 'react'
import styled from 'styled-components'

const Input = ({ label, className, ...props }) =>
  <Label className={ className }>
    { label }
    <InputElement { ...props } />
  </Label>

export default Input

const Label = styled.label`
  display: inline-block;
`

const InputElement = styled.input`
  display: inline-block;
`

