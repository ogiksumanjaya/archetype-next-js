import tw from 'twin.macro'
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
      <p className="uppercase underline">Post Page</p>
      <Button onClick={handleGetAllPost}>Get ALl Post</Button>
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

const Button = tw.button`bg-gray-500 text-white p-1 rounded text-sm`

export default Post
