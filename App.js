import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import IndexScreen from './src/screens/IndexScreen'
import { TaskProvider } from './src/context/TaskContext'

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Task',
    },
  }
)

const App = createAppContainer(navigator)

export default () => {
  return (
    <TaskProvider>
      <App />
    </TaskProvider>
  )
}
