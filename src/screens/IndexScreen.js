import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import TaskContext from '../context/TaskContext'

const IndexScreen = () => {
  const { data, addTasks } = useContext(TaskContext)

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title='Add Task' onPress={addTasks} />
      <FlatList
        data={data}
        keyExtractor={taskPosts => taskPosts.title}
        //item contains our data obj
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({})

export default IndexScreen
