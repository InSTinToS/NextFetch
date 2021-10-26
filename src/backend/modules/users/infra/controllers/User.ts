import FindUserService from '../services/findUser'
import UsersRepository from '../repositories/Users'

import { UsersResType } from 'types/routes/users'
import { NextRouteType } from 'types/next'

type UserIndexType = (id: string | string[]) => Promise<UsersResType>

export const UserIndex: UserIndexType = async id => {
  const usersRepository = new UsersRepository()
  const findUserService = new FindUserService(usersRepository)

  const users = await findUserService.execute(id)

  if (!users)
    return {
      success: false,
      message: `Not found user with id: ${id}`
    }

  return {
    users,
    success: true,
    message: 'Fetch completed!'
  }
}

class UserController {
  public index: NextRouteType<UsersResType> = async (req, res) => {
    const { id } = req.query

    const users = await UserIndex(id)

    return res.json(users)
  }
}

export default UserController
