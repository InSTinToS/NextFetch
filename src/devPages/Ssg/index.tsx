import { useState, useEffect } from 'react'
import api from 'services/api'
import { UsersResType } from 'types/user'
import Style from './styles'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import Card from 'components/Card'

interface SsgProps {
  response: UsersResType
}

const Ssg = ({ response }: SsgProps) => (
  <Style>
    <Link href='/'>Voltar</Link>

    <h1>SSG</h1>

    {response?.users.map(({ name, id }) => (
      <Card key={id} name={name} id={id} />
    ))}
  </Style>
)

export const getStaticProps: GetStaticProps = async () => {
  const response: UsersResType = (await api.get(`users`)).data

  return {
    props: {
      response
    }
  }
}

export default Ssg
