import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { APIErrorType, APIStatusEnum } from '../interface'
import { getPostList } from './actions'
import { PostInterface } from './interfaces'

export type PostInitialStateType = {
  status: string
  data?: PostInterface[]
  error?: APIErrorType
}

const initialState: PostInitialStateType = {
  status: APIStatusEnum.IDLE,
}

const reducerName = 'postsReducer'

const postSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<PostInitialStateType['status']>) => {
      state.status = action.payload
    },
    setData: (state, action: PayloadAction<PostInitialStateType['data']>) => {
      state.data = action.payload
    },
    setError: (state, action: PayloadAction<PostInitialStateType['error']>) => {
      state.error = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostList.pending, (state) => {
        state.status = APIStatusEnum.PENDING
      })
      .addCase(getPostList.fulfilled, (state, action) => {
        state.status = APIStatusEnum.FULFILLED
        state.data = action.payload
      })
      .addCase(getPostList.rejected, (state, action) => {
        state.status = APIStatusEnum.REJECTED
        state.error = action.payload
      })
  },
})

export const { setLoading, setData, setError } = postSlice.actions
export default postSlice.reducer
