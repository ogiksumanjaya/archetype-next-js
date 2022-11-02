import { APIErrorType } from '../../redux/interface'
import { InternalError } from './axiosRequest'

export const getExceptionPayload = (ex: unknown): APIErrorType => {
  if (typeof ex !== 'object' || !ex) {
    return InternalError
  }

  const typedException = ex as APIErrorType

  if (
    Object.prototype.hasOwnProperty.call(ex, 'msg') &&
    typeof typedException.meta.msg == 'string' &&
    Object.prototype.hasOwnProperty.call(ex, 'error') &&
    typeof typedException.meta.error === 'boolean'
  ) {
    return {
      meta: {
        error: typedException.meta.error,
        msg: typedException.meta.msg,
      },
    }
  }

  return InternalError
}
