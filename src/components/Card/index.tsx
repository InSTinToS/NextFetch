import Style from './styles'

interface CardProps {
  name: string
  id: number
}

const Card = ({ id, name }: CardProps) => (
  <Style>
    <li>ID: {id}</li>
    <li>Nome: {name}</li>
  </Style>
)

export default Card
