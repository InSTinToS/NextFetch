import Style from './styles'

import { useRouter } from 'next/router'

import { TUserRes, TUsersRes } from 'types/routes/user'

import ContentPage from 'frontend/components/ContentPage'
import Card from 'frontend/components/UserCard'

export interface IsrProps {
  response: TUsersRes & TUserRes
}

const Isr = ({ response }: IsrProps) => {
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

        {response?.users &&
          response?.users.map(({ name, id }) => (
            <Card key={id} name={name} id={id} />
          ))}

        {response?.user && (
          <Card
            id={response.user.id}
            key={response.user.id}
            name={response.user.name}
          />
        )}
      </Style>
    </ContentPage>
  )
}

export default Isr
