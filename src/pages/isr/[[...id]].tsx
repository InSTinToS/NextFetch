import { GetStaticPaths, GetStaticProps } from 'next'

import { TUserRes, TUsersRes } from 'types/routes/user'

import IsrPage from 'frontend/pageComponents/Isr'
import api from 'frontend/services/api'

export const getStaticPaths: GetStaticPaths = async () => ({
  fallback: 'blocking',
  paths: [{ params: { id: ['1'] } }, { params: { id: ['2'] } }]
})

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const path = params.id ? `users/${params.id}` : 'users'

  const response: TUsersRes & TUserRes = (await api.get(path)).data

  return { revalidate: 60, props: { response } }
}

export default IsrPage
