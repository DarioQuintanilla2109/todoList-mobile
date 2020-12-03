import createDataContext from './createDataContext'

//children getting passed down as a prop
//provider gets information and will make available for components
//react automatically calls this function
const taskReducer = (state, action) => {
  switch (action.type) {
    case 'addTask':
      return [...state, { title: `Task number #${state.length + 1}` }]
    default:
      return state
  }
}

const addTask = dispatch => {
  return () => {
    dispatch({ type: 'addTask' })
  }
}

export const { Context, Provider } = createDataContext(
  taskReducer,
  { addTask },
  []
)
