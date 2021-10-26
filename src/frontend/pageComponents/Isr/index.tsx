import Style from './styles'

import { useRouter } from 'next/router'

import { UsersResType } from 'types/routes/users'

import ContentPage from 'frontend/components/ContentPage'
import Card from 'frontend/components/UserCard'

export interface IsrProps {
  usersRes?: UsersResType
}

const Isr = ({ usersRes }) => {
  const { push, isFallback } = useRouter()

  const users = usersRes?.users

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

        {users?.lenght === 0 ? (
          <Card id={users.id} key={users.id} name={users.name} />
        ) : (
          users.map(({ name, id }) => <Card key={id} name={name} id={id} />)
        )}
      </Style>
    </ContentPage>
  )
}

export default Isr
