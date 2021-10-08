import { useRouter } from 'next/router'

import Card from 'components/Card'
import ContentPage from 'components/ContentPage'

import { UserResType, UsersResType } from 'types/user'

export interface SsgProps {
  response: UsersResType & UserResType
}

const Ssg = ({ response }: SsgProps) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Carregando..</div>
  }

  return (
    <ContentPage>
      <h1>SSG</h1>

      {response?.users &&
        response?.users.map(({ name, id }) => (
          <Card key={id} name={name} id={id} />
        ))}

      {response?.user && (
        <Card
          key={response.user.id}
          name={response.user.name}
          id={response.user.id}
        />
      )}
    </ContentPage>
  )
}

export default Ssg
