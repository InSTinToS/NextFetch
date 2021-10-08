import { GetStaticPaths, GetStaticProps } from 'next'

import api from 'services/api'

import { UserResType, UsersResType } from 'types/user'

import SsgPage from 'pageComponents/Ssg'

export const getStaticPaths: GetStaticPaths = async () => ({
  fallback: true,
  paths: [{ params: { id: ['1'] } }, { params: { id: ['2'] } }]
})

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const path = params.id ? `users/${params.id}` : 'users'
  const response: UsersResType & UserResType = (await api.get(path)).data

  return { revalidate: 1, props: { response } }
}

export default SsgPage
