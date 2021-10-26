import FindUserService from '../services/findUser'
import UsersRepository from '../repositories/Users'

import { TUser } from 'types/routes/user'
import { TDefaultRes, TNextRoute } from 'types/next'

interface IndexResponse extends TDefaultRes {
  user: TUser | TUser[]
}

class UserController {
  public index: TNextRoute<IndexResponse> = async (req, res) => {
    const usersRepository = new UsersRepository()
    const findUserService = new FindUserService(usersRepository)

    const user = await findUserService.execute(req.query.id)

    return res.json({
      user,
      success: true,
      message: 'Fetch completed!'
    })
  }
}

export default UserController
