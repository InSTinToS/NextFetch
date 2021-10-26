import { UsersResType } from 'types/routes/users'
import { NextRouteType } from 'types/next'

import UserController from 'backend/modules/users/infra/controllers/User'

const user: NextRouteType<UsersResType> = async (req, res) => {
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
