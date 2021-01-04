import React, { useContext, useEffect, useRef, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  Modal,
  TouchableOpacity,
  Image,
  Animated,
  TouchableHighlight,
} from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'
import { MIAMI } from '../images/ma'
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view'

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

  //expirementing with Animation 12/17

  const FadeInView = props => {
    const fadeAnim = useRef(new Animated.Value(0)).current // Initial value for opacity: 0

    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 900,
        useNativeDriver: 'true',
      }).start()
    }, [fadeAnim])

    return (
      <Animated.View // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim, // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    )
  }

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow()
    }
  }

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <Text>Left</Text>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => closeRow(rowMap, data.item.title)}
      >
        <Text style={styles.backTextWhite}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteBlogPost(data.item.id)}
      >
        <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <FadeInView>
      <View>
        <SwipeListView
          renderHiddenItem={renderHiddenItem}
          disableRightSwipe={true}
          rightOpenValue={-150}
          previewRowKey={'0'}
          previewOpenValue={-40}
          previewOpenDelay={3000}
          data={state}
          keyExtractor={blogPost => blogPost.title}
          renderItem={({ item }) => {
            return (
              <TouchableHighlight //id post object
                onPress={() => navigation.navigate('Show', { id: item.id })}
              >
                <View style={styles.row}>
                  <Text style={styles.title}>{item.title}</Text>
                  <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                    <Feather style={styles.icon} name='trash' />
                  </TouchableOpacity>
                </View>
              </TouchableHighlight>
            )
          }}
        />
      </View>
    </FadeInView>
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
    borderColor: 'white',
    backgroundColor: '#f3f3f3',
  },
  title: {
    fontSize: 18,
    color: '#16697a',
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
  fadeInView: { width: 250, height: 50, backgroundColor: 'powderblue' },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: '#ffa62b',
    right: 75,
  },
  backRightBtnRight: {
    backgroundColor: '#16697a',
    right: 0,
  },
  backTextWhite: {
    color: '#FFF',
  },
})

export default IndexScreen
