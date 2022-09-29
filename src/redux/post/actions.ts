import { createAsyncThunk } from '@reduxjs/toolkit'
import { callErrorMsg } from '../../utils/helpers/errorMsg'
import { request } from '../../utils/helpers/service'
import { ApiEnum } from './interfaces'

export const fetchAllPost = createAsyncThunk(
  'POST/FETCH_ALL_POST',
  async (_, { rejectWithValue }) => {
    try {
      const response = await request.get(ApiEnum.POST)
      return response.data
    } catch (err) {
      callErrorMsg(err)
      return rejectWithValue(err)
    }
  },
)
