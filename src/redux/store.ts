import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import postsReducer from './post/slice'

const combinedReducer = combineReducers({
  posts: postsReducer,
})

const reducer: typeof combinedReducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
  }
  return combinedReducer(state, action)
}

const makeStore = () =>
  configureStore({
    reducer,
    devTools: true,
  })
type StoreType = ReturnType<typeof makeStore>
export type AppDispatchType = StoreType['dispatch']
export type RootStateType = ReturnType<StoreType['getState']>
// eslint-disable-next-line @typescript-eslint/naming-convention
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  Action<string>
>
export const wrapper = createWrapper(makeStore, { debug: false })
