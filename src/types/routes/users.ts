import { DefaultResType } from 'types/next'

export type UserType = {
  id: string
  name: string
}

export type UsersType = UserType[]

export interface UsersResType extends DefaultResType {
  users?: UsersType
}
