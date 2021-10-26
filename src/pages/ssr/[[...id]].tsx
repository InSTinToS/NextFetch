import { GetServerSideProps } from 'next'

import SsrPage from 'frontend/pageComponents/Ssr'
import api from 'frontend/services/api'

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const users = (await api.get(`users/${params.id}`)).data

  return { props: { usersRes: users } }
}

export default SsrPage
