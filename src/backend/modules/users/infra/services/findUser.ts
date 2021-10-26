import IUsersRepository from '../../repositories/IUsers'

import { UsersType } from 'types/routes/users'

class FindUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public execute: TFindUser = async id => {
    let response: UsersType

    if (id) response = await this.usersRepository.findUser(id)
    else response = await this.usersRepository.listUsers()

    return response
  }
}

type TFindUser = (id?: string | string[]) => Promise<UsersType | null>

export default FindUserService
