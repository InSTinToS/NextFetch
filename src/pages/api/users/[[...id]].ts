import { TUser, TUserRes, TUsersRes } from 'types/routes/user'
import { TNextRoute } from 'types/next'

const users = [
  { name: 'Miguel', id: 1 },
  { name: 'Gabriel', id: 2 },
  { name: 'Jean', id: 3 }
]

const getUser = (id: string | string[]): TUser => {
  const foundUser = users.find(data => data.id === Number(id))
  return foundUser
}

const listAllUsers = () => users

const user: TNextRoute<TUserRes & TUsersRes> = (req, res) => {
  if (req.method === 'GET') {
    const { id } = req.query

    if (!id) {
      const userList = listAllUsers()

      return res.json({
        success: true,
        users: userList,
        message: 'Fetch all users'
      })
    }

    const foundUser = getUser(id)

    if (!foundUser)
      return res.json({
        success: false,
        user: undefined,
        message: `User not found!`
      })

    if (foundUser)
      return res.json({
        success: true,
        user: foundUser,
        message: `Fetch user with id === ${id} successfully!`
      })
  }
}

export default user
