import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '@/shared'
import { API } from '@/shared/api'
import { TodoState } from './types'

export const fetchTodoById = createAsyncThunk(
  'todo/fetchTodoById',
  async (todoId: number) => {
    todoWillFetch()
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
    todoReceived: (state, action: PayloadAction<Todo>) => {
      state.todo = action.payload
      state.status = 'success'
    },

    todoFailed: (state, action: PayloadAction<string>) => {
      state.todo = null
      state.status = 'error'
      state.error = action.payload
    },

    todoWillFetch: (state) => {
      state.status = 'loading'
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodoById.fulfilled, (_, action) => {
      if ('error' in action.payload) {
        todoFailed(action.payload.error)
      } else {
        todoReceived(action.payload)
      }
    })
  },
})

export const { todoWillFetch, todoReceived, todoFailed } = todoSlice.actions

export const todoReducer = todoSlice.reducer
