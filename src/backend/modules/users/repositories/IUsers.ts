import { UsersType } from 'types/routes/users'

interface IUsersRepository {
  findUser: FindUserType
  listUsers: ListUsersType
}

export type FindUserType = (id: string | string[]) => Promise<UsersType | null>

export type ListUsersType = () => Promise<UsersType | null>

export default IUsersRepository
