import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload

    case 'edit_blogpost':
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost
      })
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload)

    default:
      return state
  }
}

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogposts')
    //response data === [{},{},{}]
    dispatch({ type: 'get_blogposts', payload: response.data })
  }
}

const addBlogPost = dispatch => {
  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', { title: title, content: content })

    // dispatch({
    //   type: 'add_blogpost',
    //   payload: { title: title, content: content },
    // })

    if (callback) {
      callback()
    }
  }
}
const deleteBlogPost = dispatch => {
  return async id => {
    await jsonServer.delete(`/blogposts/${id}`)
    dispatch({ type: 'delete_blogpost', payload: id })
  }
}

const editBlogPost = dispatch => {
  return async (id, title, content, callback) => {
    //what we want to use for updated content, must provdide second parameter
    await jsonServer.put(`/blogposts/${id}`, { title, content })

    dispatch({
      type: 'edit_blogpost',
      payload: { id: id, title: title, content: content },
    })
    if (callback) {
      callback()
    }
  }
}

//makes our action available to all children
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
)
