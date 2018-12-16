import React from 'react'

export const FormContext = React.createContext({
  inputValue: '',
  error: '',
  onInputChange: () => {},
  onTaskAdd: () => {}
});