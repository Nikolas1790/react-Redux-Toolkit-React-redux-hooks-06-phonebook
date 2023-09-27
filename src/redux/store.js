
import { configureStore } from "@reduxjs/toolkit";
import { contactReduce } from "./contactSlice";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 


export const store = configureStore({
  reducer:{
    contacts: contactReduce,  
  }
})

 

 
// const persistConfig = {
//   key: 'root',
//   storage,
// }
 
// const persistedReducer = persistReducer(persistConfig, contactReduce)
 


// const persistConfig = {
//   key: 'root',
//   storage,
// }
 
// const persistedReducer = persistReducer(persistConfig, contactReduce)
 
// export const store = configureStore({contactReduce: persistedReducer})

// export const persistor = persistStore(store)