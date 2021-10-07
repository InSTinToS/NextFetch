import Card from 'components/Card'
import ContentPage from 'components/ContentPage'

import { UsersResType } from 'types/user'

export interface SsgProps {
  response: UsersResType
}

const Ssg = ({ response }: SsgProps) => (
  <ContentPage>
    <h1>SSG</h1>

    {response?.users.map(({ name, id }) => (
      <Card key={id} name={name} id={id} />
    ))}
  </ContentPage>
)

export default Ssg
