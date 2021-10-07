import { UserResType, UsersResType } from 'types/user'
import { NextRoute } from 'types/next'

const users = [
  { name: 'Miguel', id: 1 },
  { name: 'Gabriel', id: 2 },
  { name: 'Jean', id: 3 }
]

const user: NextRoute<UserResType | UsersResType> = (req, res) => {
  if (req.method === 'GET') {
    const { id } = req.query

    if (!id)
      return setTimeout(
        () =>
          res.json({
            users,
            success: true,
            message: 'Fetch all users successfully!'
          }),
        3000
      )

    const foundUser = users.find(data => data.id === Number(id))

    if (!foundUser)
      return setTimeout(
        () =>
          res.json({
            success: false,
            user: undefined,
            message: `User not found!`
          }),
        3000
      )

    if (foundUser) {
      return setTimeout(
        () =>
          res.json({
            success: true,
            user: foundUser,
            message: `Fetch user with id === ${id} successfully!`
          }),
        3000
      )
    }
  }
}

export default user
