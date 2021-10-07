export interface UserType {
  id: number
  name: string
}

export interface UserResType {
  user?: UserType
  message: string
  success: boolean
}

export interface UsersResType {
  users?: UserType[]
  message: string
  success: boolean
}
