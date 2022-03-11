import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Step } from 'app/constants'

/**
 * Interface & Utility
 */

export type Steps = {
  step: number
}

/**
 * Store constructor
 */

const NAME = 'steps'
const initialState: Steps = {
  step: Step.zero,
}

/**
 * Actions
 */

export const onSelectStep = createAsyncThunk(
  `${NAME}/onSelectStep`,
  async (step: number) => {
    return { step }
  },
)

/**
 * Usual procedure
 */

const slice = createSlice({
  name: NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    void builder.addCase(
      onSelectStep.fulfilled,
      (state, { payload }) => void Object.assign(state, payload),
    ),
})

export default slice.reducer