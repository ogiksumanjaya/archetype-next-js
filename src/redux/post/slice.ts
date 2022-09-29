import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchAllPost } from './actions'
import { PostInterface } from './interfaces'

export type PostInitialStateType = {
  isLoading?: boolean
  data?: PostInterface[]
  isError?: boolean
}

const initialState: PostInitialStateType = {
  isLoading: false,
  data: [],
  isError: false,
}

const reducerName = 'postsReducer'

const postSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<PostInitialStateType['isLoading']>) => {
      state.isLoading = action.payload
    },
    setData: (state, action: PayloadAction<PostInterface[]>) => {
      state.data = action.payload
    },
    setError: (state, action: PayloadAction<PostInitialStateType['isError']>) => {
      state.isLoading = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchAllPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchAllPost.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })
  },
})

export const { setLoading, setData, setError } = postSlice.actions
export default postSlice.reducer
