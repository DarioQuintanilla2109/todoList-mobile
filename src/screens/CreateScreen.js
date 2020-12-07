import React, { useContext, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'
import { Context } from '../context/BlogContext'

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { addBlogPost } = useContext(Context)

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.label}> Enter Title: </Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <Text style={styles.label}> Enter Content: </Text>
        <TextInput
          multiline={true}
          style={styles.enterContent}
          value={content}
          onChangeText={text => setContent(text)}
        />
        <Button
          title='Add Post'
          onPress={() => {
            addBlogPost(title, content, () => {
              navigation.navigate('Index')
            })
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#16697a',
    marginBottom: 15,
    padding: 5,
    margin: 5,
    borderRadius: 3,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
  enterContent: {
    height: 100,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#16697a',
    marginBottom: 15,
    padding: 5,
    margin: 5,
    borderRadius: 3,
  },
})

export default CreateScreen
