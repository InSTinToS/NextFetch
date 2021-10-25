export interface TUser {
  id: string
  name: string
}

export interface TUserRes {
  user?: TUser
  message: string
  success: boolean
}

export interface TUsersRes {
  users?: TUser[]
  message: string
  success: boolean
}
