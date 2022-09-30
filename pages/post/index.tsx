import { fetchAllPost } from '../../src/redux/post/actions'
import { RootStateType, wrapper } from '../../src/redux/store'
import { useAppDispatch, useAppSelector } from '../../src/utils/customHooks/reduxHook'

const Post = () => {
  const dispatch = useAppDispatch()
  const { isLoading, isError, data } = useAppSelector((state: RootStateType) => state.posts)

  const handleGetAllPost = () => {
    dispatch(fetchAllPost())
  }

  return (
    <>
      <p className="uppercase">Post Page</p>
      <button onClick={handleGetAllPost} className="bg-slate-500 text-white">
        Get ALl Post
      </button>
      <br />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data?.map((el) => (
            <p key={el.id}>
              {el.id} {el.title}
            </p>
          ))}
        </>
      )}
      {isError && 'Terjadi kesalahan'}
    </>
  )
}

Post.getInitialProps = wrapper.getInitialPageProps(({ dispatch }) => async () => {
  await dispatch(fetchAllPost())
})

export default Post
