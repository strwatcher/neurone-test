import { configureStore } from '@reduxjs/toolkit'
import { formReducer } from './form/model'
import { todoReducer } from './todo/model'

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    form: formReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
