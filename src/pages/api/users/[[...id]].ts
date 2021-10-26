import { TUserRes, TUsersRes } from 'types/routes/user'
import { TNextRoute } from 'types/next'

import UserController from 'backend/modules/users/infra/controllers/User'

const user: TNextRoute<TUserRes | TUsersRes> = async (req, res) => {
  const userController = new UserController()

  switch (req.method) {
    case 'GET':
      await userController.index(req, res)
      break

    case 'POST':
      break

    case 'PUT':
      break

    case 'PATCH':
      break

    case 'DELETE':
      break

    default:
      console.log('unexpected default inside user switch')
  }
}

export default user
