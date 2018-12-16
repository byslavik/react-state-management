import React from 'react'
import ReactDOM from 'react-dom'
import { LocalState, Context, ReduxApp, MobX } from './containers'
import './index.css'

ReactDOM.render(<LocalState />, document.getElementById('localStateApp'))
ReactDOM.render(<Context />, document.getElementById('contextApp'))
ReactDOM.render(<ReduxApp />, document.getElementById('reduxApp'))
ReactDOM.render(<MobX />, document.getElementById('mobxApp'))
