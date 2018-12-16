import {observable, computed, action} from "mobx"
import { taskResolver, newTaskFactory, validateField, sorter } from '../../../helpers'
import { ERR_FIELD_MESSAGE } from '../../../constants'
import { testData } from '../../../testData'

export default class TaskStore {
    @observable tasks

    constructor(inputStore) {
      this.inputStore = inputStore
    }

    @computed get sortedTasks() {
        const tasks = this.tasks

        return tasks.slice().sort(sorter)
    }

    @action loadTasks() {
      this.tasks = testData
    }

    @action resolveTask(idToResolve) {
      const tasks = this.tasks

      const nonResolvedTask = tasks.filter(({ id }) => id !== idToResolve)
      const resolvedTask = taskResolver(tasks.filter(({ id }) => id === idToResolve))
  
      this.tasks = [...nonResolvedTask, resolvedTask]
    }

    @action addTask(e) {
      e.nativeEvent.preventDefault()
      const inputValue = this.inputStore.inputValue
    
      if(!validateField(inputValue)) {
        this.inputStore.setInputError(ERR_FIELD_MESSAGE)
        return 
      }

      this.inputStore.resetForm()
  
      const newTask = newTaskFactory({ title: inputValue, tasks: this.tasks })
  
      this.tasks = [...this.tasks, newTask]
    }
}