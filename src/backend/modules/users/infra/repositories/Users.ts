import IUsersRepository, {
  TFindUser,
  TListUsers
} from '../../repositories/IUsers'

import { TUser } from 'types/routes/user'

const fakeUserRepository: TUser[] = [
  { name: 'Miguel', id: '1' },
  { name: 'Gabriel', id: '2' },
  { name: 'Jean', id: '3' },
  { name: 'João', id: '4' },
  { name: 'André', id: '5' }
]

class UsersRepository implements IUsersRepository {
  private usersRepository: TUser[]

  constructor() {
    this.usersRepository = fakeUserRepository
  }

  public findUser: TFindUser = async id => {
    const foundUser = this.usersRepository.find(data => data.id === id[0])

    return foundUser
  }

  public listUsers: TListUsers = async () => this.usersRepository
}

export default UsersRepository
