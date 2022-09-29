import { fetchAllPost } from '../../src/redux/post/actions'
import { RootStateType } from '../../src/redux/store'
import { useAppDispatch, useAppSelector } from '../../src/utils/customHooks/reduxHook'

const Post = () => {
  const dispatch = useAppDispatch()
  const { isLoading, isError, data } = useAppSelector((state: RootStateType) => state.posts)

  const handleGetAllPost = () => {
    dispatch(fetchAllPost())
  }

  return (
    <>
      <p>Post Page</p>
      <button onClick={handleGetAllPost} className="bg-slate-500 text-white">
        Get ALl Post
      </button>
      <br />
      {isLoading ? <p>Loading...</p> : JSON.stringify(data)}
      {isError && 'Terjadi kesalahan'}
    </>
  )
}

export default Post
