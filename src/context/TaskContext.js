import React, { useState } from 'react'

const TaskContext = React.createContext()

//children getting passed down as a prop

//provider gets information and will make available for components
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])

  const addTasks = () => {
    setTasks([...tasks, { title: `Taks # ${tasks.length + 1}` }])
  }

  return (
    <TaskContext.Provider value={{ data: tasks, addTasks: addTasks }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskContext
