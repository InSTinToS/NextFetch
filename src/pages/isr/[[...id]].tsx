import { GetStaticPaths, GetStaticProps } from 'next'

import { TUser } from 'types/routes/user'

import UsersRepository from 'backend/modules/users/infra/repositories/Users'
import FindUserService from 'backend/modules/users/infra/services/findUser'
import IsrPage from 'frontend/pageComponents/Isr'

export const getStaticPaths: GetStaticPaths = async () => ({
  fallback: false,
  paths: [{ params: { id: ['1'] } }, { params: { id: ['2'] } }]
})

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const usersRepositories = new UsersRepository()
  const findUserService = new FindUserService(usersRepositories)

  const response: TUser | TUser[] = await findUserService.execute(params.id)

  return { revalidate: 60, props: { response } }
}

export default IsrPage
