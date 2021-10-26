import Style from './styles'

interface UserCardProps {
  name: string
  id: string
}

const UserCard = ({ id, name }: UserCardProps) => (
  <Style className='UserCard'>
    <li>ID: {id}</li>

    <li>Nome: {name}</li>
  </Style>
)

export default UserCard
