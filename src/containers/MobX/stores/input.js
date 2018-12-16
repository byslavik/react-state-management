import {observable, action} from "mobx"

export default class InputStore {
    @observable inputValue = ''
    @observable error = ''
    
    @action setInputValue(e) {
      const value = e.nativeEvent.target.value
      this.inputValue = value
    }

    @action setInputError(errMessage) {
      this.error = errMessage
    }

    @action resetForm() {
      this.inputValue = ''
      this.error = ''
    }
}