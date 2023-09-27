import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";


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
            //  state.contacts.filter(contact => contact.name.toLowerCase().includes(action.payload.toLowerCase()))
            state.filter = action.payload;
        }
    }
})

export const { addTask, deleteTask, filterContact} = contactList.actions;
export const contactReduce = contactList.reducer;
// console.log({contactReduce})