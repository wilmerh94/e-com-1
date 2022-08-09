import { createContext, useContext, useReducer } from 'react'

// Prepares the data
export const ItemContext = createContext()

// Wrap our app and provide the data
export const ItemProvider = ({ reducer, initialState, children }) => {
  return (
    <ItemContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </ItemContext.Provider>
  )
}

// Pull information from the data
export const useItemValue = () => useContext(ItemContext)
