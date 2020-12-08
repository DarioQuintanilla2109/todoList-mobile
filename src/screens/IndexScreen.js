import React, { useContext, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'
import { MIAMI } from '../images/ma'

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context)

  useEffect(() => {
    //on load fetch blog posts
    getBlogPosts()
    //once we are back on this screen fetch again
    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts()
    })

    //only invoked when we terminate index screen-> for clean up purposes
    return () => {
      listener.remove()
    }
  }, [])

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity //id post object
              onPress={() => navigation.navigate('Show', { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather style={styles.icon} name='trash' />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather style={styles.iconAdd} name='plus' size={30} />
      </TouchableOpacity>
    ),
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Index')}>
        <Image style={styles.imgStyle} source={MIAMI} />
      </TouchableOpacity>
    ),
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 28,
    color: '#ffa62b',
    marginRight: 5,
  },
  iconAdd: {
    fontSize: 28,
    color: '#ffa62b',
    marginRight: 15,
  },
  imgStyle: {
    height: 60,
    width: 60,
    marginLeft: 15,
    borderRadius: 50,
    marginBottom: 20,
  },
})

export default IndexScreen
