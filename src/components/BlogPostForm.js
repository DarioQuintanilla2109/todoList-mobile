import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title)
  const [content, setContent] = useState(initialValues.content)
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.label}> </Text>
        <TextInput
          placeholder='Title'
          style={styles.input}
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <Text style={styles.label}> </Text>
        <TextInput
          placeholder='Enter Content'
          multiline={true}
          style={styles.enterContent}
          value={content}
          onChangeText={text => setContent(text)}
        />
        <Button title='Save Post' onPress={() => onSubmit(title, content)} />
      </View>
    </TouchableWithoutFeedback>
  )
}

//default props => default property values3
BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
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

export default BlogPostForm
