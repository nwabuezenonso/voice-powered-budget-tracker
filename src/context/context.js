// file that will implement all the logic for context
import React, { useReducer, createContext } from 'react';
// import the reducer
import contextReducer from './contextReducer'

// create a inital state
const initialState = [];

// export the context with the state
export const ExpenseTrackerContext = createContext(initialState)

// export the provider with the context value
// everything wrap in the component will have access to its data
export const Provider = ({ children }) => {
   const [transactions, dispatch]  =  useReducer(contextReducer, initialState)

   // Action creators
   const deleteTransaction = (id) =>   dispatch({ type: 'DELETE_TRANSACTION', payload: id});
   const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction});
    
   console.log(transactions)
   return (
        <ExpenseTrackerContext.Provider value={{
            transactions, 
            deleteTransaction,
            addTransaction
        }}> 
            { children}
        </ExpenseTrackerContext.Provider>
    )
}