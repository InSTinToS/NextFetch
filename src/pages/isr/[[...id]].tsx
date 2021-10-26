import { GetStaticPaths, GetStaticProps } from 'next'

import { UserIndex } from 'backend/modules/users/infra/controllers/User'
import IsrPage from 'frontend/pageComponents/Isr'

export const getStaticPaths: GetStaticPaths = async () => ({
  fallback: 'blocking',
  paths: [{ params: { id: ['1'] } }, { params: { id: ['2'] } }]
})

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const users = await UserIndex(params.id)

  return { revalidate: 60, props: { usersRes: users } }
}

export default IsrPage
