import { useEffect, useState } from 'react'
import Style from './styles'

import { useRouter } from 'next/router'

import api from 'services/api'

import ContentPage from 'components/ContentPage'
import Card from 'components/UserCard'

import { UserResType, UsersResType } from 'types/user'

const Csr = () => {
  const [responseUsers, setResponseUsers] = useState<UsersResType>()
  const [responseUser, setResponseUser] = useState<UserResType>()
  const [loading, setLoading] = useState<boolean>(false)

  const { query } = useRouter()

  const getUsers = async (id?: string) => {
    setLoading(true)

    const path = id ? `users/${id}` : 'users'
    const response: UserResType | UsersResType = (await api.get(path)).data

    id ? setResponseUser(response) : setResponseUsers(response)

    setLoading(false)
  }

  useEffect(() => {
    getUsers()
    getUsers(query.id as string)
  }, [query.id])

  return (
    <ContentPage>
      <Style>
        <h1>CSR</h1>

        <span>Query ID: {query.id}</span>

        {responseUser?.success ? (
          <Card name={responseUser?.user?.name} id={responseUser?.user?.id} />
        ) : (
          responseUser?.message && (
            <div id='notFound'>{responseUser.message}</div>
          )
        )}

        <div>
          {loading ? <span>Carregando...</span> : <span>Digite um id: </span>}

          <input
            name='id'
            type='number'
            placeholder='Id'
            onChange={({ target }) => getUsers(target.value)}
          />
        </div>

        {responseUsers?.users.map(({ name, id }) => (
          <Card key={id} name={name} id={id} />
        ))}
      </Style>
    </ContentPage>
  )
}

export default Csr
