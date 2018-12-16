export const taskResolver = ([task]) => ({ ...task, status: 1 })
export const validateField = value => value.trim() !== ''
export const newTaskFactory = ({ title, tasks }) => ({
  id: tasks.length,
  title,
  status: 0
})
export const sorter = (a, b) => a.status - b.status