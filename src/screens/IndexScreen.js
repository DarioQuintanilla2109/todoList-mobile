import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import { Context } from '../context/TaskContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = () => {
  const { state, addTasks } = useContext(Context)

  return (
    <View>
      <Button title='Add Task' onPress={addTasks} />
      <FlatList
        data={state}
        keyExtractor={taskPosts => taskPosts.title}
        //item contains our data obj
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text>{item.title} </Text>
              <Feather style={styles.trashStyle} name='trash' />
            </View>
          )
        }}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
  },
  trashStyle: {
    fontSize: 26,
    color: '#ffa62b',
  },
})

export default IndexScreen
