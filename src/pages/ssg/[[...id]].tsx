import { GetStaticPaths, GetStaticProps } from 'next'

import { UserIndex } from 'backend/modules/users/infra/controllers/User'
import SsgPage from 'frontend/pageComponents/Ssg'

export const getStaticPaths: GetStaticPaths = async () => ({
  fallback: false,
  paths: [{ params: { id: ['1'] } }, { params: { id: ['2'] } }]
})

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const users = await UserIndex(params.id)

  return { props: { usersRes: users } }
}

export default SsgPage
