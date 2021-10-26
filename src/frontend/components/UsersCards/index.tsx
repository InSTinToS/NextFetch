import Style, { Card } from './styles'

import { UsersResType } from 'types/routes/users'

interface UsersCardsProps {
  usersRes: UsersResType
}

const UsersCards = ({ usersRes }: UsersCardsProps) => (
  <Style>
    {usersRes?.success ? (
      usersRes.users.map(({ name, id }) => (
        <Card key={id}>
          <div>Nome: {name}</div>

          <div>ID: {id}</div>
        </Card>
      ))
    ) : (
      <Card id='error'>{usersRes?.message}</Card>
    )}
  </Style>
)

export default UsersCards
