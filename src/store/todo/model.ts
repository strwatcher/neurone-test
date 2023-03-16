import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API } from '@/shared/api'
import { TodoState } from './types'

export const fetchTodoById = createAsyncThunk(
  'todo/fetchTodoById',
  async (todoId: number, thunkApi) => {
    thunkApi.dispatch(todoWillFetch())
    const todo = await API.todo.byId(todoId)
    return todo
  }
)

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todo: null,
    status: 'idle',
    error: '',
  } as TodoState,

  reducers: {
    todoWillFetch: (state) => {
      state.status = 'loading'
    },
    toggleChecked: (state) => {
      if (state.todo) {
        state.todo.completed = !state.todo.completed
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodoById.fulfilled, (state, action) => {
      if ('error' in action.payload) {
        state.todo = null
        state.status = 'error'
        state.error = action.payload.error
      } else {
        state.todo = action.payload
        state.status = 'success'
      }
    })
  },
})

export const { todoWillFetch, toggleChecked } = todoSlice.actions

export const todoReducer = todoSlice.reducer
