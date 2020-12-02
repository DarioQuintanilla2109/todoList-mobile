import React from 'react'

const TaskContext = React.createContext()

//children getting passed down as a prop

export const TaskProvider = ({ children }) => {
  return <TaskContext.Provider>{children}</TaskContext.Provider>
}
