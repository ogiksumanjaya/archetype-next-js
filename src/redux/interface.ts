export enum APIStatusEnum {
  IDLE = 'IDLE',
  PENDING = 'PENDING',
  REJECTED = 'REJECTED',
  FULFILLED = 'FULFILLED',
}

export type APIErrorType = {
  meta: {
    error: boolean
    msg: string
  }
}

export interface PaginationInterface {
  numberOfElements: number
  totalElements: number
  totalPages: number
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type APIDataType<DataType = any> = {
  status: APIStatusEnum
  error?: APIErrorType
  data?: DataType
}
