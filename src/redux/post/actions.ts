import { createAsyncThunk } from '@reduxjs/toolkit'
import { publicRequest } from '../../utils/helpers/axiosRequest'
import { getExceptionPayload } from '../../utils/helpers/errorResult'
import { APIErrorType } from '../interface'
import { PostInterface, ApiEnum } from './interfaces'

export enum PostEnum {
  GET_POST = 'POST/GET_POST_LIST',
  ADD_POST = 'POST/CREATE_POST',
  DELETE_POST = 'POST/DELETE_POST',
}

export const getPostList = createAsyncThunk<PostInterface[], void, { rejectValue: APIErrorType }>(
  PostEnum.GET_POST,
  async (_, { rejectWithValue }) => {
    try {
      const response = await publicRequest.get(ApiEnum.POST)
      return response.data
    } catch (error) {
      return rejectWithValue(getExceptionPayload(error))
    }
  },
)
