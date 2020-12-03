import React, { useReducer } from 'react'

//automated context and provider
export default (reducer, actions, initialState) => {
  const Context = React.createContext()

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    //actions === {addTask: (dispatch) => return () =>{}}
    const boundActions = {}
    for (let key in actions) {
      //key == addTask
      boundActions[key] = actions[key](dispatch)
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    )
  }

  return { Context, Provider }
}
