import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import postsReducer from './post/slice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
})

export type AppDispatchType = typeof store.dispatch
export type RootStateType = ReturnType<typeof store.getState>
// eslint-disable-next-line @typescript-eslint/naming-convention
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  Action<string>
>
