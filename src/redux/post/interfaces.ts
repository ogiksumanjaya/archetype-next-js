export enum ApiEnum {
  POST = '/posts?_limit=5',
}

export interface PostInterface {
  userId: number
  id: number
  title: string
  body: string
}
