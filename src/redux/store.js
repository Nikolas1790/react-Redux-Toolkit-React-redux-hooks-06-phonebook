import { configureStore } from '@reduxjs/toolkit'
import { createAction, createReducer } from '@reduxjs/toolkit'

const increment = createAction('myValue/increment')
// console.log(increment(100))
const myReducer = createReducer(10, {
    [increment]: (state, action)=> state + action.payload,
})

export const store = configureStore({
  reducer: {
    myValue: myReducer,
  },
})