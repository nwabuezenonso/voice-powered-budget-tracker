// file that will implement all the logic for context
import React, { useReducer, createContext } from 'react';
// import the reducer
import contextReducer from './contextReducer'

// create a inital state to be some data stored in the local storage or an empty array
const initialState = JSON.parse(localStorage.getItem('transactions')) || [];

// export the context with the state
export const ExpenseTrackerContext = createContext(initialState)

// export the provider with the context value
// everything wrap in the component will have access to its data
export const Provider = ({ children }) => {
   const [transactions, dispatch]  =  useReducer(contextReducer, initialState)

   // Action creators
   const deleteTransaction = (id) =>   dispatch({ type: 'DELETE_TRANSACTION', payload: id});
   const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction});
    
    // To sum up all the values
    // To sum multiple values in an array
    // acc is everything other than expense
    // 0 is the starting value
    const balance = transactions.reduce((acc, currVal) => currVal.type === 'Expense' ? acc-currVal.amount: acc + currVal.amount, 0)

   return ( 
        <ExpenseTrackerContext.Provider value={{
            transactions, 
            deleteTransaction,
            addTransaction,
            balance
        }}> 
            { children}
        </ExpenseTrackerContext.Provider>
    )
}