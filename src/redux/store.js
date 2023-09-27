// import { configureStore } from "@reduxjs/toolkit";
import { contactReduce } from "./contactSlice";
import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
// import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['items'],
}

const persistedReducer = persistReducer(persistConfig, contactReduce)


export const store = configureStore({
  reducer:{
    contacts: persistedReducer,  

  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export const persistor = persistStore(store)
 

 
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