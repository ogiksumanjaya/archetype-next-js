import { useEffect } from 'react'
import { APIErrorType, APIStatusEnum } from '../../redux/interface'

export const UnhandleError = {
  meta: {
    error: true,
    msg: 'Cannot handle error data.',
  },
}

export const useApiData = (
  status: string,
  data: unknown,
  error: APIErrorType | undefined,
  handlers: {
    onFulfilled?: (data: unknown) => void
    onRejected?: (error: APIErrorType) => void
    onPending?: () => void
  },
) => {
  const { onFulfilled, onRejected, onPending } = handlers

  useEffect(() => {
    if (status === APIStatusEnum.REJECTED && onRejected) {
      onRejected(error || UnhandleError)
    }
  }, [status, error, onRejected])

  useEffect(() => {
    if (status === APIStatusEnum.FULFILLED && onFulfilled) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      onFulfilled(data!)
    }
  }, [status, data, onFulfilled])

  useEffect(() => {
    if (status === APIStatusEnum.PENDING && onPending) {
      onPending()
    }
  }, [status, onPending])
}
