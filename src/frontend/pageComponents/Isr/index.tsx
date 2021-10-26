import Style from './styles'

import { useRouter } from 'next/router'

import { UsersResType } from 'types/routes/users'

import ContentPage from 'frontend/components/ContentPage'
import Button from 'frontend/components/Html/Button'
import UsersCards from 'frontend/components/UsersCards'

export interface IsrProps {
  usersRes?: UsersResType
}

const Isr = ({ usersRes }) => {
  const { push, isFallback } = useRouter()

  if (isFallback) return <div>Carregando..</div>

  return (
    <ContentPage>
      <Style>
        <h1>Isr</h1>

        <Button onClick={() => push('/isr/1')}>Usuário 1</Button>

        <Button onClick={() => push('/isr/2')}>Usuário 2</Button>

        <Button onClick={() => push('/isr/3')}>Usuário 3</Button>

        <Button onClick={() => push('/isr/4')}>Usuário 4</Button>

        <Button onClick={() => push('/isr/5')}>Usuário 5</Button>

        <UsersCards usersRes={usersRes} />
      </Style>
    </ContentPage>
  )
}

export default Isr
