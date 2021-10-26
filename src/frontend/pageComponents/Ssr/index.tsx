import { useRouter } from 'next/router'

import { UsersResType } from 'types/routes/users'

import ContentPage from 'frontend/components/ContentPage'
import Button from 'frontend/components/Html/Button'
import UsersCards from 'frontend/components/UsersCards'

export interface SsrProps {
  usersRes?: UsersResType
}

const Ssr = ({ usersRes }) => {
  const { push } = useRouter()

  return (
    <ContentPage>
      <h1>Ssr</h1>

      <Button onClick={() => push('/ssr/1')}>Usuário 1</Button>

      <Button onClick={() => push('/ssr/2')}>Usuário 2</Button>

      <Button onClick={() => push('/ssr/3')}>Usuário 3</Button>

      <Button onClick={() => push('/ssr/4')}>Usuário 4</Button>

      <Button onClick={() => push('/ssr/5')}>Usuário 5</Button>

      <UsersCards usersRes={usersRes} />
    </ContentPage>
  )
}

export default Ssr
