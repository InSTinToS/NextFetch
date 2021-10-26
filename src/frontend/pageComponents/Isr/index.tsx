import Style from './styles'

import { useRouter } from 'next/router'

import { UsersResType } from 'types/routes/users'

import ContentPage from 'frontend/components/ContentPage'
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

        <button type='button' onClick={() => push('/isr/1')}>
          Usuário 1
        </button>

        <button type='button' onClick={() => push('/isr/2')}>
          Usuário 2
        </button>

        <button type='button' onClick={() => push('/isr/3')}>
          Usuário 3
        </button>

        <UsersCards usersRes={usersRes} />
      </Style>
    </ContentPage>
  )
}

export default Isr
