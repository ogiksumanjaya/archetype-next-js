/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMemo, useState } from 'react'
import tw from 'twin.macro'
import { getPostList } from '../../src/redux/post/actions'
import { RootStateType, wrapper } from '../../src/redux/store'
import { useAppDispatch, useAppSelector } from '../../src/utils/customHooks/reduxHook'
import { useApiData } from '../../src/utils/customHooks/useApiData'

const Post = () => {
  const dispatch = useAppDispatch()
  const { posts } = useAppSelector((state: RootStateType) => state)

  const [loading, setLoading] = useState(false)

  const handleGetAllPost = () => {
    dispatch(getPostList())
  }

  useApiData(
    posts.status,
    posts.data,
    posts.error,
    useMemo(
      () => ({
        onFulfilled(data) {
          setLoading(false)
          alert('fetching data sucessfully')
        },
        onRejected(error) {
          setLoading(false)
          alert('fetching data error')
        },
        onPending() {
          setLoading(true)
        },
      }),
      [],
    ),
  )

  return (
    <>
      <p className="uppercase underline">Post Page</p>
      <Button onClick={handleGetAllPost}>Get ALl Post</Button>
      <br />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {posts.data?.map((el) => (
            <p key={el.id}>
              {el.id} {el.title}
            </p>
          ))}
        </>
      )}
    </>
  )
}

Post.getInitialProps = wrapper.getInitialPageProps(({ dispatch }) => async () => {
  await dispatch(getPostList())
})

const Button = tw.button`bg-gray-500 text-white p-1 rounded text-sm`

export default Post
