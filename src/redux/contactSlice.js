import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";

const contactList = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addTask(state, action) {
            state.items.push(action.payload);
        },
        deleteTask(state, action) {
            const index = state.items.findIndex(task => task.id === action.payload);
            state.items.splice(index, 1);
        },
        filterContact(state, action) {
            state.filter = action.payload;
        }
    }
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['items'],
  }
  
export const persistedReducer = persistReducer(persistConfig, contactList.reducer)
  
export const { addTask, deleteTask, filterContact} = contactList.actions;
 