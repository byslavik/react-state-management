import { connect } from 'react-redux'
import { Redux } from './Redux'
import actions from '../store/actions'

const {
  setInputValue,
  setInputError,
  clearInput,
  addTask,
  resolveTask,
  clearTasks
} = actions


const mapStateToProps = ({ tasks: { items }, input }) => ({ tasks: items, input })
const mapDispatchToProps = {
  setInputValue,
  setInputError,
  clearInput,
  addTask,
  resolveTask,
  clearTasks
}

export default connect(mapStateToProps, mapDispatchToProps)(Redux)