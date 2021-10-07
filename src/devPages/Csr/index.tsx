import { useState, useEffect } from 'react'
import api from 'services/api'
import { UserResType, UsersResType } from 'types/user'
import Style from './styles'
import Link from 'next/link'
import Card from 'components/Card'

const Csr = () => {
  const [responseUsers, setResponseUsers] = useState<UsersResType>()
  const [responseUser, setResponseUser] = useState<UserResType>()
  const [loading, setLoading] = useState<boolean>(false)

  const getUsers = async (id?: string) => {
    setLoading(true)

    const response: UserResType | UsersResType = (
      await api.get(id ? `users/${id}` : 'users')
    ).data

    id ? setResponseUser(response) : setResponseUsers(response)

    setLoading(false)
  }

  useEffect(() => {
    getUsers('1')
  }, [])

  return (
    <Style>
      <Link href='/'>Voltar</Link>

      <h1>CSR</h1>

      {responseUser?.success ? (
        <Card name={responseUser?.user?.name} id={responseUser?.user?.id} />
      ) : (
        <span>{responseUser?.message}</span>
      )}

      {loading ? <span>Carregando...</span> : <span>Digite um id</span>}

      <input
        name='id'
        type='number'
        placeholder='Id'
        onChange={event => getUsers(event.target.value)}
      />

      <button type='button' onClick={() => getUsers()}>
        Obter todos os usuarios
      </button>

      {responseUsers?.users.map(({ name, id }) => (
        <ul key={id}>
          <li>nome: {name}</li>
          <li>id: {id}</li>
        </ul>
      ))}
    </Style>
  )
}

export default Csr
