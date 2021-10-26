import { UserType } from 'types/routes/users'

import IUsersRepository, {
  FindUserType,
  ListUsersType
} from 'backend/modules/users/repositories/IUsers'

const fakeUserRepository: UserType[] = [
  { name: 'Miguel', id: '1' },
  { name: 'Gabriel', id: '2' },
  { name: 'Jean', id: '3' },
  { name: 'João', id: '4' },
  { name: 'André', id: '5' }
]

class UsersRepository implements IUsersRepository {
  private usersRepository: UserType[]

  constructor() {
    this.usersRepository = fakeUserRepository
  }

  public findUser: FindUserType = async id => {
    const foundUser = this.usersRepository.find(data => data.id === id[0])

    return foundUser ? [foundUser] : null
  }

  public listUsers: ListUsersType = async () => this.usersRepository
}

export default UsersRepository
