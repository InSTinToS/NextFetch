import FindUserService from '../services/findUser'
import UsersRepository from '../repositories/Users'

import { UsersResType, UsersType } from 'types/routes/users'
import { NextRouteType } from 'types/next'

type UserIndexType = (id: string | string[]) => Promise<UsersType>

export const UserIndex: UserIndexType = async id => {
  const usersRepository = new UsersRepository()
  const findUserService = new FindUserService(usersRepository)

  const user = await findUserService.execute(id)
  return user
}

class UserController {
  public index: NextRouteType<UsersResType> = async (req, res) => {
    const { id } = req.query
    const users = await UserIndex(id)

    if (!users)
      res.json({
        success: false,
        message: `Not found user with id: ${id}`
      })

    res.json({
      users,
      success: true,
      message: 'Fetch completed!'
    })
  }
}

export default UserController
