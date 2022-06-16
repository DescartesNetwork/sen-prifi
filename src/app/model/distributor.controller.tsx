import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { DistributorData } from '@sentre/utility'
import configs from 'app/configs'

const {
  sol: { utility },
} = configs

/**
 * Interface & Utility
 */
export type DistributorState = Record<string, DistributorData>

/**
 * Store constructor
 */

const NAME = 'distributor'
const initialState: DistributorState = {}

/**
 * Actions
 */

export const getDistributors = createAsyncThunk(
  `${NAME}/getDistributors`,
  async () => {
    const { account } = utility.program
    let bulk: DistributorState = {}

    const distributors = await account.distributor.all()
    for (const { publicKey, account: distributorData } of distributors) {
      const address = publicKey.toBase58()
      bulk[address] = distributorData as any
    }
    return bulk
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
      getDistributors.fulfilled,
      (state, { payload }) => void Object.assign(state, payload),
    ),
})

export default slice.reducer
