import { useEffect, useState } from 'react'
import Style from './styles'

import { useRouter } from 'next/router'

import { UsersResType } from 'types/routes/users'

import ContentPage from 'frontend/components/ContentPage'
import UsersCards from 'frontend/components/UsersCards'
import api from 'frontend/services/api'

const Csr = () => {
  const [usersRes, setUsersRes] = useState<UsersResType>()
  const [loading, setLoading] = useState<boolean>(false)

  const { query } = useRouter()

  const getUsers = async (id?: string) => {
    setLoading(true)

    const path = id ? `users/${id}` : 'users'

    const response = (await api.get(path)).data

    setUsersRes(response)

    setLoading(false)
  }

  useEffect(() => {
    getUsers(query.id as string)
  }, [query.id])

  return (
    <ContentPage>
      <Style>
        <h1>CSR</h1>

        <span>Query ID: {query.id}</span>

        <div>
          {loading ? <span>Carregando...</span> : <span>Digite um id: </span>}

          <input
            name='id'
            type='number'
            placeholder='Id'
            onChange={({ target }) => {
              getUsers(target.value)
            }}
          />
        </div>

        <UsersCards usersRes={usersRes} />
      </Style>
    </ContentPage>
  )
}

export default Csr
