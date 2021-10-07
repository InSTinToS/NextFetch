import { useState, useEffect } from 'react'
import api from 'services/api'
import { UserResType } from 'types/user'
import Style from './styles'
import Link from 'next/link'

const Csr = () => {
  const [response, setResponse] = useState<UserResType>()
  const [loading, setLoading] = useState<boolean>(false)

  const getUserByCSR = async (id: string) => {
    setLoading(true)
    const response: UserResType = (await api.get(`users/${id}`)).data
    setLoading(false)
    setResponse(response)
  }

  useEffect(() => {
    getUserByCSR('1')
  }, [])

  return (
    <Style>
      <Link href='/'>Voltar</Link>

      <h1>SSR</h1>

      {response?.success ? (
        <ul>
          <li>nome: {response.user.name}</li>
          <li>id: {response.user.id}</li>
        </ul>
      ) : (
        <span>{response?.message}</span>
      )}

      {loading ? <span>Carregando...</span> : <span>Digite um id</span>}

      <input
        name='id'
        type='number'
        placeholder='Id'
        onChange={event => getUserByCSR(event.target.value)}
      />
    </Style>
  )
}

export default Csr
