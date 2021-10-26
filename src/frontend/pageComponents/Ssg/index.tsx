import { useRouter } from 'next/router'

import { UsersResType } from 'types/routes/users'

import ContentPage from 'frontend/components/ContentPage'
import Button from 'frontend/components/Html/Button'
import UsersCards from 'frontend/components/UsersCards'

export interface SsgProps {
  usersRes?: UsersResType
}

const Ssg = ({ usersRes }) => {
  const { push } = useRouter()

  return (
    <ContentPage>
      <h1>Ssg</h1>

      <Button onClick={() => push('/ssg/1')}>Usuário 1</Button>

      <Button onClick={() => push('/ssg/2')}>Usuário 2</Button>

      <Button onClick={() => push('/ssg/3')}>Usuário 3</Button>

      <Button onClick={() => push('/ssg/4')}>Usuário 4</Button>

      <Button onClick={() => push('/ssg/5')}>Usuário 5</Button>

      <UsersCards usersRes={usersRes} />
    </ContentPage>
  )
}

export default Ssg
