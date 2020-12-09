import React, { useContext } from 'react'

import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Context } from '../context/BlogContext'
import { FontAwesome } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context)

  //we have to search our array state to find id
  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam('id')
  )

  //must get obj data from our navigation obj property getParam
  navigation.getParam('id')
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}> {blogPost.title} </Text>

      <Text style={styles.contentStyle}> {blogPost.content} </Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <FontAwesome name='pencil' style={styles.icon} />
      </TouchableOpacity>
    ),
  }
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 24,
    color: '#ffa62b',
    marginRight: 15,
  },
  viewStyle: {
    flex: 1,
  },
  titleStyle: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 22,
    color: '#16697a',
  },
  contentStyle: {
    textAlign: 'center',
    marginTop: 30,
    marginHorizontal: 10,

    borderColor: '#ffa628',
    borderRadius: 15,
    backgroundColor: 'rgb(255,255,255)',
    overflow: 'hidden',
  },
})

export default ShowScreen
