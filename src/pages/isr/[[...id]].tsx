import { GetStaticPaths, GetStaticProps } from 'next'

import api from 'services/api'

import { TUserRes, TUsersRes } from 'types/routes/user'

import IsrPage from 'pageComponents/Isr'

export const getStaticPaths: GetStaticPaths = async () => ({
  fallback: true,
  paths: [{ params: { id: ['1'] } }, { params: { id: ['2'] } }]
})

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(`Building slug: ${params.id}`)

  const path = params.id ? `users/${params.id}` : 'users'
  const response: TUsersRes & TUserRes = (await api.get(path)).data

  return { revalidate: 60, props: { response } }
}

export default IsrPage
