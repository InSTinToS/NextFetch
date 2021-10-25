import IUsersRepository from '../../repositories/IUsers'

import { TUser } from 'types/routes/user'

class FindUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public execute: TFindUser = async id => {
    let response: TUser | TUser[]

    if (id) response = await this.usersRepository.findUser(id)
    else response = await this.usersRepository.listUsers()

    return response
  }
}

type TFindUser = (id?: string | string[]) => Promise<TUser | TUser[]>

export default FindUserService
