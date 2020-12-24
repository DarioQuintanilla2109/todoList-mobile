import React, { Image, StyleSheet, View } from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import IndexScreen from './src/screens/IndexScreen'
import { Provider } from './src/context/BlogContext'
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen'
import { SKY } from './src/images/sky'

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: ' ',
      headerTintColor: '#16697a',
    },
  }
)

const App = createAppContainer(navigator)

// const styles = StyleSheet.create({
//   imgStyle: {
//     height: 60,
//     width: 60,
//     marginLeft: 15,
//     borderRadius: 50,
//     marginBottom: 20,
//   },
// })

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}
