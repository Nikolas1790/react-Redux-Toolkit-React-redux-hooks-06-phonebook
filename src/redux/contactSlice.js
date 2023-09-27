import { createSlice, nanoid } from "@reduxjs/toolkit";


const contactList = createSlice({
    name: 'contacts',
    initialState: {
        items: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: ''
    },
    reducers: {
        addTask: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(text) {
                return {
                    payload: {
                        text,
                        id: nanoid(),
                    }
                }
            }
        },
        deleteTask(state, action) {
            const index = state.items.findIndex(task => task.id === action.payload);
            state.splice(index, 1);
        },
        filterContact(state, action) {
            //  state.contacts.filter(contact => contact.name.toLowerCase().includes(action.payload.toLowerCase()))
            state.filter = action.payload;
        }
    }
})

export const { addTask, deleteTask, filterContact} = contactList.actions;
export const contactReduce = contactList.reducer;
// console.log(contactReduce)