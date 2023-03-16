import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FormState } from './types'

const formSlice = createSlice({
  name: 'form',
  initialState: {
    value: 0,
  } as FormState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => {
      if (/^\d*$/.test(action.payload)) {
        const parsed = parseInt(action.payload)
        if (Number.isNaN(parsed)) {
          state.value = 0
        } else {
          state.value = parsed
        }
      }
    },
  },
})

export const { setValue } = formSlice.actions
export const formReducer = formSlice.reducer
