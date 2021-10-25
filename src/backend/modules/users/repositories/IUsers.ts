import { TUser } from 'types/routes/user'

interface IUsersRepository {
  findUser: TFindUser
  listUsers: TListUsers
}

export type TFindUser = (id: string | string[]) => Promise<TUser>

export type TListUsers = () => Promise<TUser[]>

export default IUsersRepository
